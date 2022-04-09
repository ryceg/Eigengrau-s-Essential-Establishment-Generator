interface Modifiable {
  priceModifier: number
}

/**
 * Gets the price modifier.
 */
export const getPriceMod = (priceModSource: number | Modifiable): number => {
  lib.logger.info(priceModSource)
  if (typeof priceModSource === 'object' && typeof priceModSource.priceModifier === 'number') {
    return 1 - (priceModSource.priceModifier / 100)
  }
  if (typeof priceModSource === 'number') {
    return 1 - (priceModSource / 100)
  }
  return 1
}
