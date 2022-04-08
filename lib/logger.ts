/* eslint-disable no-console */

const isLoggingEnabled = true

export const logger = {
  info (...values: unknown[]) {
    if (isLoggingEnabled) {
      console.log(...values)
    }
  },
  warn (...values: unknown[]) {
    if (isLoggingEnabled) {
      console.warn(...values)
    }
  },
  error (...values: unknown[]) {
    if (isLoggingEnabled) {
      console.error(...values)
    }
  },
  openGroup (label?: string) {
    if (isLoggingEnabled) {
      console.group(label)
    }
  },
  closeGroup () {
    if (isLoggingEnabled) {
      console.groupEnd()
    }
  }
}
