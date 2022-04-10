import path from 'path'
import http from 'http'
import https from 'https'
import fs from 'fs'
import yauzl from 'yauzl'
import utils from './utils'

fs.mkdirSync(utils.twineFolder, { recursive: true })

const tweegoLink = getTweegoLink()

utils.logClear()
utils.logAction('Downloading the tweego binary file from', tweegoLink)
utils.logInfo('Copyright(c) 2014 - 2018 Thomas Michael Edwards <thomasmedwards@gmail.com>.\nAll rights reserved.')

downloadAndExtract(tweegoLink, utils.tweegoZip).then(() => {
  utils.logAction('Downloading the story formats from', utils.links.storyFormats)

  downloadAndExtract(utils.links.storyFormats, utils.formatsZip, utils.formatsFolder).then(() => {
    utils.logSuccess('All done!')
    if (process.platform === 'win32') {
      utils.logWarning('If you receive an error about SugarCube not being available, rename the folder ' + '"sugarcube-2" to "SugarCube" and try again.')
    }
  })
})

function downloadAndExtract (link: string, filePath: string, outFolder?: string) {
  return new Promise((resolve, reject) => {
    https.get(link, request).on('error', utils.logError)

    function request (response: http.IncomingMessage) {
      // Recursively follow potential redirects.
      if (response.statusCode === 302 && response.headers.location) {
        https.get(response.headers.location, request)
        return
      }

      // Handle successful response.
      if (response.statusCode === 200) {
        const writeStream = fs.createWriteStream(filePath)
          .on('error', () => {
            reject(new Error('Could not write file to disk.'))
          })
          .on('finish', () => {
            writeStream.close()
            unzip()
          })

        response.pipe(writeStream)
        return
      }

      return reject(new Error(`Download error: ${response.statusCode}`))
    }

    function unzip () {
      yauzl.open(filePath, { lazyEntries: true }, (error, zip) => {
        if (error) throw error

        if (zip) {
          utils.logAction('Unzipping...\n')
          zip.on('entry', entry => isFolder(entry) ? zip.readEntry() : unzipEntry(zip, entry))
          zip.on('end', resolve)
          zip.readEntry()
        }
      })
    }
  })

  function unzipEntry (zip: yauzl.ZipFile, entry: yauzl.Entry) {
    zip.openReadStream(entry, (error, stream) => {
      if (error) throw error

      const folder = outFolder || utils.twineFolder

      const fileFolder = path.resolve(folder, getFileDirectory(entry.fileName))
      fs.mkdirSync(fileFolder, { recursive: true })
      const filePath = path.resolve(folder, entry.fileName)
      const writeStream = fs.createWriteStream(filePath)

      if (stream) {
        stream.on('end', () => zip.readEntry())
        stream.pipe(writeStream)
      }
    })
  }
}

function getTweegoLink () {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const platform = utils.links.tweego[process.platform]
  return platform[process.arch] || platform.x86
}

function isFolder (entry: yauzl.Entry) {
  return /\/$/.test(entry.fileName)
}

function getFileDirectory (file: string) {
  return file.substring(0, file.lastIndexOf('/'))
}
