
const isEnabled = true

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
  openGroup () {
    if (isEnabled) {
      console.group()
    }
  },
  closeGroup () {
    if (isEnabled) {
      console.groupEnd()
    }
  }
}
