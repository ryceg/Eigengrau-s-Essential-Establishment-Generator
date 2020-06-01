setup.matchFirst = {
  equalTo: createMatchFirst((value, key) => {
    return value === key
  }),
  notEqualTo: createMatchFirst((value, key) => {
    return value !== key
  }),
  largerThan: createMatchFirst((value, key) => {
    return value > key
  }),
  largerThanOrEqualTo: createMatchFirst((value, key) => {
    return value >= key
  }),
  smallerThan: createMatchFirst((value, key) => {
    return value < key
  }),
  smallerThanOrEqualTo: createMatchFirst((value, key) => {
    return value <= key
  })
}

/**
 * @param {MatchCallback} callback
 */
function createMatchFirst (callback) {
  /**
   * @type {MatchModifier}
   */
  const modifier = (value, map, defaultValue) => {
    for (const key of Object.keys(map).reverse()) {
      if (callback(value, Number(key))) return map[key]
    }
    return defaultValue
  }

  return modifier
}
