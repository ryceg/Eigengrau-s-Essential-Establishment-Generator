/* eslint-disable no-undef */
setup.getPriceMod = function (priceModSource) {
  /** @param {number} priceModSource */
  console.log(priceModSource)
  if (typeof priceModSource === 'object') {
    if (typeof priceModSource.priceModifier === 'number') {
      return Number(priceModSource.priceModifier)
    }
  } else if (typeof priceModSource === 'number') {
    return Number(priceModSource)
  } else {
    return 1
  }
}
