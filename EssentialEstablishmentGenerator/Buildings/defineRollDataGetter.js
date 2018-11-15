setup.defineRollDataGetter = function (baseObj, rollDataObj, propName) {
  Object.defineProperty(baseObj, propName, {
    get: function () {
      console.log('Fetching ' + this.name + ' ' + propName + '.')
      var rollArray = rollDataObj[propName]
      var result = rollArray.find(function (desc) {
        return desc[0] <= this[propName + 'Roll']
      }, this)
      if (result === undefined) {
        console.log('Failed to get a descriptor that matched the roll of ' + this[propName + 'Roll'] + ' for ' + propName + '.')
        result = rollArray[rollArray.length - 1]
      }
      this['_' + propName] = result[1]
      return this['_' + propName]
    },
    set: function (val) {
      console.log('Setting ' + this.name + ' ' + propName + '.')
      var rollArray = rollDataObj[propName]
      var result = rollArray.find(function (desc) {
        return desc[0] <= this[propName + 'Roll']
      }, this)
      if (result === undefined) {
        console.log('Failed to set a descriptor that matched the roll of ' + this[propName + 'Roll'] + ' for ' + propName + '.')
        result = rollArray[rollArray.length - 1]
      }
      this['_' + propName] = val || result[1]
      return this['_' + propName]
    }
  })
}
