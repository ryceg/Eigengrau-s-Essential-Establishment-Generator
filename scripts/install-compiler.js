/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const http = require('https')
const fs = require('fs')
const yauzl = require('yauzl')
const shell = require('shelljs')
const utils = require('./utils')

shell.mkdir('-p', utils.twineFolder)

const tweegoLink = getTweegoLink()

utils.logClear()
utils.logAction('Downloading the tweego binary file from', tweegoLink)
utils.logInfo('Copyright(c) 2014 - 2018 Thomas Michael Edwards <thomasmedwards@gmail.com>.\nAll rights reserved.')

downloadAndExtract(tweegoLink, utils.tweegoZip).then(() => {
  utils.logAction('Downloading the story formats from', utils.links.storyFormats)

  downloadAndExtract(utils.links.storyFormats, utils.formatsZip, utils.formatsFolder).then(() => {
    utils.logSuccess('All done!')
    if (process.platform === 'win32') {
      logWarning('If you receive an error about SugarCube not being available, rename the folder ' + '"sugarcube-2" to "SugarCube" and try again.')
    }
  })
})

function downloadAndExtract (link, filePath, outFolder) {
  return new Promise((resolve, reject) => {
    http.get(link, request).on('error', utils.logError)

    function request (response) {
      // Recursively follow potential redirects.
      if (response.statusCode === 302) {
        http.get(response.headers.location, request)
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

        utils.logAction('Unzipping...\n')

        zip.on('entry', entry => isFolder(entry) ? zip.readEntry() : unzipEntry(zip, entry))
        zip.on('end', resolve)
        zip.readEntry()
      })
    }
  })

  function unzipEntry (zip, entry) {
    zip.openReadStream(entry, (error, stream) => {
      if (error) throw error

      const folder = outFolder || utils.twineFolder

      const fileFolder = path.resolve(folder, getFileDirectory(entry.fileName))
      shell.mkdir('-p', fileFolder)
      const filePath = path.resolve(folder, entry.fileName)
      const writeStream = fs.createWriteStream(filePath)

      stream.on('end', () => zip.readEntry())
      stream.pipe(writeStream)
    })
  }
}

function getTweegoLink () {
  const platform = utils.links.tweego[process.platform]
  return platform[process.arch] || platform.x86
}

function isFolder (entry) {
  return /\/$/.test(entry.fileName)
}

function getFileDirectory (file) {
  return file.substring(0, file.lastIndexOf('/'))
}
