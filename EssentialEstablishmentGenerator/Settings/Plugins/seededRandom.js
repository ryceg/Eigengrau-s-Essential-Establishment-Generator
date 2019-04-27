Object.defineProperty(Array.prototype, 'seededrandom', {
  configurable: true,
  writable: true,

  value: function () {
    if (this == null) { // lazy equality for null
      throw new TypeError('Array.prototype.seededrandom called on null or undefined')
    }

    var length = this.length >>> 0

    if (length === 0) {
      return
    }

    var index = random(0, length - 1)

    return this[index]
  }
})
