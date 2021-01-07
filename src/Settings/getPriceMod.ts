interface Modifiable {
  priceModifier: number
}

/**
 * Gets the price modifier.
 */
export const getPriceMod = (priceModSource: number | Modifiable): number => {
  console.log(priceModSource)
  if (typeof priceModSource === 'object' && typeof priceModSource.priceModifier === 'number') {
    return Number(1 - (priceModSource.priceModifier / 100))
  }
  if (typeof priceModSource === 'number') {
    return Number(1 - (priceModSource / 100))
  }
  return 1
}
