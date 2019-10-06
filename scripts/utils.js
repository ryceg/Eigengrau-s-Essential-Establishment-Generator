const path = require('path')
const chalk = require('chalk')

// Folder to store the twine-related dependencies in.
const twineFolder = path.resolve(__dirname, '..', '.twine')

module.exports = {
  // Useful paths.
  twineFolder,
  tweegoZip: path.resolve(twineFolder, 'tweego.zip'),
  formatsZip: path.resolve(twineFolder, 'formats.zip'),

  // Various download links.
  links: {
    tweego: {
      win32: {
        x86:
          'https://www.motoslave.net/tweego/download.php/tweego-2.0.0-windows-x86.zip',
        x64:
          'https://www.motoslave.net/tweego/download.php/tweego-2.0.0-windows-x64.zip'
      },
      darwin: {
        x86:
          'https://www.motoslave.net/tweego/download.php/tweego-2.0.0-macos-x86.zip',
        x64:
          'https://www.motoslave.net/tweego/download.php/tweego-2.0.0-macos-x64.zip'
      },
      linux: {
        x86:
          'https://www.motoslave.net/tweego/download.php/tweego-2.0.0-linux-x86.zip',
        x64:
          'https://www.motoslave.net/tweego/download.php/tweego-2.0.0-linux-x64.zip'
      }
    },
    storyFormats:
      'https://www.motoslave.net/tweego/download.php/story-formats-20190129.zip'
  },

  // Logging
  logClear () {
    console.clear()
  },
  logError (...args) {
    console.log(chalk.red(...args))
  },
  logWarning (...args) {
    console.log(chalk.yellow(...args))
  },
  logAction (...args) {
    console.log(chalk.blue(...args))
  },
  logInfo (...args) {
    console.log(chalk.grey(...args))
  },
  logSuccess (...args) {
    console.log(chalk.green(...args))
  }
}
