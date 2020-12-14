/* eslint-disable no-undef */
/**
 * Gets the price modifier.
 * @param {number | import("../../lib/buildings/_common").Building} priceModSource
 * @returns {number}
 */
setup.getPriceMod = function (priceModSource) {
  /** @param {number} priceModSource */
  console.log(priceModSource)
  if (typeof priceModSource === 'object') {
    if (typeof priceModSource.priceModifier === 'number') {
      return Number(1 - (priceModSource.priceModifier / 100))
    }
  } else if (typeof priceModSource === 'number') {
    return Number(1 - (priceModSource / 100))
  } else {
    return 1
  }
}
