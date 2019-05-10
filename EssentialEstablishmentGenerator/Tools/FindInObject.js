setup.findInObj = function (container, searchVal) {
  // finds the key for a given value.
  var array = Object.keys(container)
  array.find(function (key) {
    if (container[key] === searchVal) {
      return key
    }
  })
}
