setup.createMatchFirst = function (callback) {
  /**
   * @template T
   * @param {T} value
   * @param {{}} map
   * @param {T} [defaultValue]
   */
  function modifier (value, map, defaultValue) {
    for (const key of Object.keys(map).reverse()) {
      if (callback(value, Number(key))) return map[key]
    }
    return defaultValue
  }

  return modifier
}

setup.matchFirst = {
  equalTo: setup.createMatchFirst(function (value, key) {
    return value === key
  }),
  notEqualTo: setup.createMatchFirst(function (value, key) {
    return value !== key
  }),
  largerThan: setup.createMatchFirst(function (value, key) {
    return value > key
  }),
  largerThanOrEqualTo: setup.createMatchFirst(function (value, key) {
    return value >= key
  }),
  smallerThan: setup.createMatchFirst(function (value, key) {
    return value < key
  }),
  smallerThanOrEqualTo: setup.createMatchFirst(function (value, key) {
    return value <= key
  })
}
