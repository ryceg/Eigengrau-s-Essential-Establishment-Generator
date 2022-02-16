
import { resolve as _resolve } from 'path'
import { get } from 'https'
import { createWriteStream } from 'fs'
import { open } from 'yauzl'
import { mkdir } from 'shelljs'
import { twineFolder, logClear, logAction, logInfo, tweegoZip, links, formatsZip, formatsFolder, logSuccess, logError } from './utils'

mkdir('-p', twineFolder)

const tweegoLink = getTweegoLink()

logClear()
logAction('Downloading the tweego binary file from', tweegoLink)
logInfo('Copyright(c) 2014 - 2022 Thomas Michael Edwards <thomasmedwards@gmail.com>.\nAll rights reserved.')

downloadAndExtract(tweegoLink, tweegoZip).then(() => {
  logAction('Downloading the story formats from', links.storyFormats)

  downloadAndExtract(links.storyFormats, formatsZip, formatsFolder).then(() => {
    logSuccess('All done!')
  })
})

function downloadAndExtract (link, filePath, outFolder) {
  return new Promise((resolve, reject) => {
    get(link, request).on('error', logError)

    function request (response) {
      // Recursively follow potential redirects.
      if (response.statusCode === 302) {
        get(response.headers.location, request)
        return
      }

      // Handle successful response.
      if (response.statusCode === 200) {
        const writeStream = createWriteStream(filePath)
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
      open(filePath, { lazyEntries: true }, (error, zip) => {
        if (error) throw error

        logAction('Unzipping...\n')

        zip.on('entry', entry => isFolder(entry) ? zip.readEntry() : unzipEntry(zip, entry))
        zip.on('end', resolve)
        zip.readEntry()
      })
    }
  })

  function unzipEntry (zip, entry) {
    zip.openReadStream(entry, (error, stream) => {
      if (error) throw error

      const folder = outFolder || twineFolder

      const fileFolder = _resolve(folder, getFileDirectory(entry.fileName))
      mkdir('-p', fileFolder)
      const filePath = _resolve(folder, entry.fileName)
      const writeStream = createWriteStream(filePath)

      stream.on('end', () => zip.readEntry())
      stream.pipe(writeStream)
    })
  }
}

function getTweegoLink () {
  const platform = links.tweego[process.platform]
  return platform[process.arch] || platform.x86
}

function isFolder (entry) {
  return /\/$/.test(entry.fileName)
}

function getFileDirectory (file) {
  return file.substring(0, file.lastIndexOf('/'))
}
