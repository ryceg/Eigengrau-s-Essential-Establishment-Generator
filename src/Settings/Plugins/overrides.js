/* eslint-disable no-extend-native */

/**
 * Overrides SuarCube extensions to enable seeded randomness.
 * @see https://github.com/tmedwards/sugarcube-2/blob/master/src/lib/extensions.js
 */
Object.defineProperties(Array.prototype, {
  random: {
    configurable: true,
    writable: true,

    value () {
      if (this == null) { // lazy equality for null
        throw new TypeError('Array.prototype.random called on null or undefined')
      }

      const length = this.length >>> 0

      if (length === 0) {
        return
      }

      const index = random(0, length - 1)

      return this[index]
    }
  },
  randomMany: {
    configurable: true,
    writable: true,

    value (wantSize) {
      if (this == null) { // lazy equality for null
        throw new TypeError('Array.prototype.randomMany called on null or undefined')
      }

      const length = this.length >>> 0

      if (length === 0) {
        return []
      }

      let want = Math.trunc(wantSize)

      if (!Number.isInteger(want)) {
        throw new Error('Array.prototype.randomMany want parameter must be an integer')
      }

      if (want < 1) {
        return []
      }

      if (want > length) {
        want = length
      }

      const picked = new Map()
      const result = []
      const max = length - 1

      do {
        let i
        do {
          i = random(0, max)
        } while (picked.has(i))
        picked.set(i, true)
        result.push(this[i])
      } while (result.length < want)

      return result
    }
  }
})
