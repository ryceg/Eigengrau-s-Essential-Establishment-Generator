const path = require('path')
const http = require('https')
const fs = require('fs')
const yauzl = require('yauzl')
const utils = require('./utils')

fs.mkdirSync(utils.twineFolder, { recursive: true })

console.clear()

const tweegoLink = getTweegoLink()
utils.logAction('Downloading the tweego binary file from', tweegoLink)
utils.logInfo('Copyright(c) 2014 - 2018 Thomas Michael Edwards <thomasmedwards@gmail.com>.\nAll rights reserved.')
downloadAndExtract(tweegoLink, utils.tweegoZip)

utils.logAction('Downloading the story formats from', utils.links.storyFormats)
downloadAndExtract(utils.links.storyFormats, utils.formatsZip)

function downloadAndExtract (link, filePath) {
  const writeStream = fs.createWriteStream(filePath)

  http
    .get(link, response => response.pipe(writeStream))
    .on('error', utils.logError)
    .on('close', onDownloaded)

  function onDownloaded () {
    utils.logSuccess('Downloaded', filePath)

    // Unzip
    yauzl.open(filePath, { lazyEntries: true }, (error, zip) => {
      if (error) {
        throw error
      }
      utils.logAction('Unzipping...')
      zip.readEntry()
      zip.on('entry', entry => {
        if (isFolder(entry)) {
          zip.readEntry()
          return
        }
        zip.openReadStream(entry, (error, stream) => {
          if (error) {
            throw error
          }
          const folder = path.resolve(utils.twineFolder, getFileDirectory(entry.fileName))
          fs.mkdirSync(folder, { recursive: true })
          const filePath = path.resolve(utils.twineFolder, entry.fileName)
          const writeStream = fs.createWriteStream(filePath)
          stream.on('end', () => zip.readEntry()).pipe(writeStream)
        })
      })
    })
  }
}

function getTweegoLink () {
  const platform = utils.links.tweego[process.platform]
  const link = platform[process.arch] || platform['x86']
  return link
}

function isFolder (entry) {
  return /\/$/.test(entry.fileName)
}

function getFileDirectory (file) {
  return file.substring(0, file.lastIndexOf('/'))
}
