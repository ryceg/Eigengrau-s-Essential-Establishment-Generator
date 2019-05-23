setup.findInContainer = function (container, key, value) {
  // searches with a depth of one; i.e. this will search the object setup.professions for a specific
  Object.keys(container).forEach(function (object) {
    if (container[object][key].includes(value)) {
      return container[object]
    }
  })
}
