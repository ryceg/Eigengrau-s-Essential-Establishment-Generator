setup.contentsFetcher = function (town, biome, keyTarget, contentsTarget, base) {
  var key = keyTarget.random()
  var contents = contentsTarget[key](town, biome, base)
  return contents
}
