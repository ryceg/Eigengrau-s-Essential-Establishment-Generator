setup.createModifier = function (callback) {
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
