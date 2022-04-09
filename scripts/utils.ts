/* eslint-disable no-console */
import path from 'path'
import chalk from 'chalk'

// Folder to store the twine-related dependencies in.
const twineFolder = path.resolve(__dirname, '..', '.twine')

export default {
  // Useful paths.
  twineFolder,
  tweegoZip: path.resolve(twineFolder, 'tweego.zip'),
  formatsZip: path.resolve(twineFolder, 'formats.zip'),
  formatsFolder: path.resolve(twineFolder, 'storyformats'),

  // Various download links.
  links: {
    tweego: {
      win32: {
        x86: 'https://github.com/tmedwards/tweego/releases/download/v2.1.1/tweego-2.1.1-windows-x86.zip',
        x64: 'https://github.com/tmedwards/tweego/releases/download/v2.1.1/tweego-2.1.1-windows-x64.zip'
      },
      darwin: {
        x86: 'https://github.com/tmedwards/tweego/releases/download/v2.1.1/tweego-2.1.1-macos-x86.zip',
        x64: 'https://github.com/tmedwards/tweego/releases/download/v2.1.1/tweego-2.1.1-macos-x64.zip'
      },
      linux: {
        x86: 'https://github.com/tmedwards/tweego/releases/download/v2.1.1/tweego-2.1.1-linux-x86.zip',
        x64: 'https://github.com/tmedwards/tweego/releases/download/v2.1.1/tweego-2.1.1-linux-x64.zip'
      }
    },
    storyFormats: 'https://github.com/tmedwards/sugarcube-2/releases/download/v2.35.0/sugarcube-2.35.0-for-twine-2.1-local.zip  '
  },

  // Logging
  logClear () {
    console.clear()
  },
  logError (...args: unknown[]) {
    console.log(chalk.red(...args))
  },
  logWarning (...args: unknown[]) {
    console.log(chalk.yellow(...args))
  },
  logAction (...args: unknown[]) {
    console.log(chalk.blue(...args))
  },
  logInfo (...args: unknown[]) {
    console.log(chalk.grey(...args))
  },
  logSuccess (...args: unknown[]) {
    console.log(chalk.green(...args))
  }
}
