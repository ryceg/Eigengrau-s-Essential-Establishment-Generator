setup.createModifier = function (callback) {
  return function modifier (value, map, defaultValue) {
    for (const key of Object.keys(map)) {
      if (callback(value, key)) return map[key]
    }
    return defaultValue || value
  }
}
