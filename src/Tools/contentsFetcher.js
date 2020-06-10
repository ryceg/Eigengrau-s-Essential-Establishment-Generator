/**
 * This is the function used to handle random encounters. It needs a lot of work, and will change.
 */
setup.contentsFetcher = function (town, biome, keyTarget, contentsTarget, base) {
  const key = keyTarget.random()
  if (typeof contentsTarget[key] !== 'function') {
    console.error('Not a function!')
    console.log('key:', key)
    console.log(contentsTarget[key])
  }
  const contents = contentsTarget[key](town, biome, base)
  return contents
}
