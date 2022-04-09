/* eslint-disable no-console */

const isFlat = false
const isEnabled = false

export const logger = {
  info (...values: unknown[]) {
    if (isEnabled) {
      console.log(...values)
    }
  },
  warn (...values: unknown[]) {
    if (isEnabled) {
      console.warn(...values)
    }
  },
  error (...values: unknown[]) {
    if (isEnabled) {
      console.error(...values)
    }
  },
  openGroup (label?: string) {
    if (isEnabled && !isFlat) {
      console.group(label)
    }
  },
  closeGroup () {
    if (isEnabled && !isFlat) {
      console.groupEnd()
    }
  }
}
