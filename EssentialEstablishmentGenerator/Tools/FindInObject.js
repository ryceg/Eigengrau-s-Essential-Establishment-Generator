/**
 * Finds the key for a given value.
 * This is often used to search NPC relationships for a mother or something.
 * Note that it returns the *first* that it finds.
 * Yes I'm aware that that has implications for mothers. Am working on it.
 */
setup.findInObj = function (container, searchVal) {
  const array = Object.keys(container)
  array.find(function (key) {
    if (container[key] === searchVal) {
      return key
    }
  })
}
