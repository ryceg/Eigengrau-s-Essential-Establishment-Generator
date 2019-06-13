setup.findInContainer = function (container, key, value) {
  // searches with a depth of one; i.e. this will search the object setup.professions for a specific
  console.log('running setup.findInContainer...')
  console.log({
    container,
    key,
    value
  })

  for (const object of Object.keys(container)) {
    if (container[object][key].includes(value)) {
      console.log('Found ' + value + ' in ' + object)
      return container[object]
    }
  }
}
