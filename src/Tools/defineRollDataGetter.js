/**
 * This handles setting up getters and setters for attributes like wealth,
 * cleanliness and such.
 *
 * It expects the `baseObj` (the one that is getting the attributes), and the
 * `rollDataObj` (the one that is providing the descriptions).
 *
 * It needs the propName to be exact, unless the optional `keyName` is specified.
 * This is for when you might want to tie several properties to the same attribute,
 * i.e. cleanliness controlling bedleanliness.
 *
 * The `indexNumber` is an optional argument, which tells the function to look at
 * a different location in the array for the string. This is most useful for
 * when you have multiple descriptions tied to the same thing
 * (long and short descriptions, or cleanliness controlling bedCleanliness as well.)
 *
 * @param {object} baseObj
 * @param {object} rollDataObj
 * @param {string} propName
 * @param {string} [keyName]
 * @param {number} [indexNumber]
 * @param {object} [rollLocation]
 */
setup.defineRollDataGetter = function (baseObj, rollDataObj, propName, keyName, indexNumber, rollLocation) {
  keyName = keyName || propName
  indexNumber = indexNumber || 1
  rollLocation = rollLocation || baseObj.roll
  console.groupCollapsed('DefineRollDataGetters')
  console.log({
    baseObj,
    rollDataObj,
    propName,
    keyName,
    indexNumber,
    rollLocation
  })
  if (!baseObj[propName]) {
    baseObj[propName] = ''
  }

  Object.defineProperty(baseObj, propName, {
    get () {
      console.log('Fetching ' + this.name + ' ' + propName + '.')
      const rollArray = rollDataObj[keyName]
      let result = rollArray.find(function (desc) {
        if (rollLocation) {
          return desc[0] <= rollLocation[keyName]
        } else {
          return desc[0] <= this.roll[keyName]
        }
      }, this)
      if (result === undefined) {
        console.log(`Failed to get a descriptor that matched the roll of ${this.roll[propName]} for ${propName}.`)
        result = rollArray[rollArray.length - 1]
      }
      if (Array.isArray(result[indexNumber])) {
        result[indexNumber] = result[indexNumber].seededrandom()
      }
      this['_' + propName] = result[indexNumber] || result
      return this['_' + propName]
    },
    set (val) {
      console.log('Setting ' + this.name + ' ' + propName + '.')
      const rollArray = rollDataObj[keyName]
      let result = rollArray.find(function (desc) {
        if (rollLocation) {
          return desc[0] <= rollLocation[keyName]
        } else {
          return desc[0] <= this.roll[keyName]
        }
      }, this)
      if (result === undefined) {
        console.log(`Failed to get a descriptor that matched the roll of ${this.roll[propName]} for ${propName}.`)
        result = rollArray[rollArray.length - 1]
      }
      this['_' + propName] = val || result[indexNumber]
      return this['_' + propName]
    }
  })
  console.groupEnd()
}
