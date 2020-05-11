/**
 * This is the function used to handle random encounters. It needs a lot of work, and will change.
 */
setup.contentsFetcher = function (town, biome, keyTarget, contentsTarget, base) {
  const key = keyTarget.random()
  const contents = contentsTarget[key](town, biome, base)
  return contents
}
