
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
  error (...values: unknown[]) {
    if (isEnabled) {
      console.error(...values)
    }
  },
  openGroup (label?: string) {
    if (isEnabled) {
      console.group(label)
    }
  },
  closeGroup () {
    if (isEnabled) {
      console.groupEnd()
    }
  }
}
