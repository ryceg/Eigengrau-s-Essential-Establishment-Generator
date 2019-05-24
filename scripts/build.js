const path = require('path')
const spawn = require('child_process').spawn
const utils = require('./utils')

const tweego = path.resolve(utils.twineFolder, 'tweego')
const watch = process.argv.includes('--watch')

// Run tweego with arguments.
const tweegoProcess = spawn(
  tweego,
  [
    '--output=gh-pages/index.html',
    './EssentialEstablishmentGenerator',
    '--head=./main.ejs',
    watch && '--watch'
  ]
)

// Log messages from the tweego process.
utils.logClear()
tweegoProcess.stderr.on('data', data => {
  data.toString().split('\n').forEach(message => {
    if (message.match(/^warning:\s+.*/)) {
      utils.logWarning(message)
      return
    }

    if (message.match(/^error:\s+.*/)) {
      utils.logError(message)
      return
    }

    utils.logAction(message)
  })
})
