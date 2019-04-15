setup.defineRollDataGetter = function (baseObj, rollDataObj, propName, keyName, indexNumber) {
  // this handles setting up getters and setters for attributes like wealth, cleanliness and such.
  // it expects the baseObj (the one that is getting the attributes), and the rollData obj (the one that is providing the descriptions)
  // it needs the propName to be exact, unless the optional keyName is specified. This is for when you might want to tie several properties to the same attribute, i.e. cleanliness controlling bedleanliness.
  keyName = keyName || propName
  // the indexNumber is an optional argument, which tells the function to look at a different location in the array for the string
  // this is most useful for when you have multiple descriptions tied to the same thing (long and short descriptions, or cleanliness controlling bedCleanliness as well.)
  indexNumber = indexNumber || 1

  Object.defineProperty(baseObj, propName, {
    get: function () {
      console.log('Fetching ' + this.name + ' ' + propName + '.')
      var rollArray = rollDataObj[keyName]
      var result = rollArray.find(function (desc) {
        return desc[0] <= this.roll[keyName]
      }, this)
      if (result === undefined) {
        console.log('Failed to get a descriptor that matched the roll of ' + this.roll[propName] + ' for ' + propName + '.')
        result = rollArray[rollArray.length - 1]
      }
      this['_' + propName] = result[indexNumber]
      return this['_' + propName]
    },
    set: function (val) {
      console.log('Setting ' + this.name + ' ' + propName + '.')
      var rollArray = rollDataObj[keyName]
      var result = rollArray.find(function (desc) {
        return desc[0] <= this.roll[keyName]
      }, this)
      if (result === undefined) {
        console.log('Failed to set a descriptor that matched the roll of ' + this.roll[propName] + ' for ' + propName + '.')
        result = rollArray[rollArray.length - 1]
      }
      this['_' + propName] = val || result[indexNumber]
      return this['_' + propName]
    }
  })
}
