setup.contentsFetcher = function (town, biome, keyTarget, contentsTarget, base) {
  // this is the function used to handle random encounters. It needs a lot of work, and will change.
  var key = keyTarget.random()
  var contents = contentsTarget[key](town, biome, base)
  return contents
}
