setup.findInObj = function (container, searchVal) {
  // finds the key for a given value.
  // this is often used to search NPC relationships for a mother or something.
  // note that it returns the *first* that it finds.
  // yes I'm aware that that has implications for mothers. Am working on it.
  const array = Object.keys(container)
  array.find(function (key) {
    if (container[key] === searchVal) {
      return key
    }
  })
}
