import type { Building } from '@lib'

/**
 * Gets the price modifier.
 */
export const getPriceMod = (priceModSource: number | Building): number => {
  if (typeof priceModSource === 'object') {
    if (typeof priceModSource.priceModifier === 'number') {
      return Number(1 - (priceModSource.priceModifier / 100))
    }
  } else if (typeof priceModSource === 'number') {
    return Number(1 - (priceModSource / 100))
  } else {
    return 1
  }
  return 1
}
