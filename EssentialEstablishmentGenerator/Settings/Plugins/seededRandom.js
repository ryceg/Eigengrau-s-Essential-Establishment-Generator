// eslint-disable-next-line no-extend-native
Object.defineProperty(Array.prototype, 'seededrandom', {
  configurable: true,
  writable: true,

  value () {
    if (this == null) { // lazy equality for null
      throw new TypeError('Array.prototype.seededrandom called on null or undefined')
    }

    const length = this.length >>> 0

    if (length === 0) {
      return
    }

    const index = random(0, length - 1)

    return this[index]
  }
})
