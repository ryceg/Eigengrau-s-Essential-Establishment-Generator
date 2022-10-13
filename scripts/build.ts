import { spawn } from 'child_process'
import fs from 'fs'
import path from 'path'
import { OutputOptions } from 'rollup'
import * as rollup from 'rollup'
import utils from './utils'

const tweego = path.resolve(utils.twineFolder, 'tweego')

const parseArgs = () => {
  // Extract extra arguments.
  const [, , ...flags] = process.argv
  return [
    '--output=./gh-pages/index.html',
    './src',
    '--head=./main.ejs',
    ...flags
  ]
}

const verifyInstall = () => {
  // Verify correct tweego installation
  if (!fs.existsSync(tweego) && !fs.existsSync(`${tweego}.exe`)) {
    utils.logError('Cannot find path to tweego.')
    utils.logError('Perhaps tweego has not been downloaded.')
    utils.logError('Try running `yarn install-compiler` first.')
    process.exit(1)
  }

  // Verify executable permissions on unix systems.
  if (['linux', 'darwin'].includes(process.platform)) {
    try {
      fs.accessSync(tweego, fs.constants.X_OK)
    } catch (err) {
      utils.logError(`${tweego} does not have permissions to execute.
    If you are on a Unix-based system you can grant permissions with 'chmod +x ${tweego}'`)
      process.exit(1)
    }
  }
}

const runTweego = (args: string[]) => {
  // Run tweego with arguments.
  utils.logAction('Running tweego!')
  const tweegoProcess = spawn(tweego, args)

  // Log messages from the tweego process.
  tweegoProcess.stderr.on('data', (data) => {
    const messages = data.toString().split('\n')

    for (const message of messages) {
      if (message.match(/^warning:\s+.*/)) {
        utils.logWarning(message)
        return
      }

      if (message.match(/^error:\s+.*/)) {
        utils.logError(message)
        return
      }

      utils.logAction(message)
    }
  })
}

const bundleJS = async (args: string[]) => {
  const watch = args.includes('--watch')
  const { configs } = await import('./rollup.config')
  if (watch) {
    for (const config of configs) {
      const watcher = rollup.watch(config)
      watcher.on('event', async (event) => {
        switch (event.code) {
          case 'BUNDLE_END': {
            await event.result.write(config.output as OutputOptions)
            event.result.close()
            break
          }
          case 'ERROR': {
            utils.logError(event.error)
            break
          }
        }
      })
      process.on('beforeExit', () => watcher.close())
    }
  } else {
    for (const { output, ...input } of configs) {
      const bundled = await rollup.rollup(input)
      await bundled.write(output as OutputOptions)
    }
  }
}

(async () => {
  const args = parseArgs()
  utils.logClear()
  verifyInstall()
  utils.logAction('Compiling scripts...')
  await bundleJS(args)
  utils.logAction('Copying files...')
  runTweego(args)
})()
