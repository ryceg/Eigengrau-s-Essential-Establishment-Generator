import { KeysMatching } from '../types'

/**
 *
 * @param array The array of objects
 * @param readout The key for the readout text
 * @param key1 Key for first value
 * @param key2 Key for second value
 * @param val1 Location of first roll
 * @param val2 Location of second roll
 * @example closestMatch(lib.alchemistData.get.priceTalk($building), "priceTalk", "priceModifier", "wealth", $building.priceModifier, $building.roll.wealth)
 */
export function closestMatch<
  T extends Record<R, unknown> & Record<K1 | K2, number>,
  R extends KeysMatching<T, unknown>,
  K1 extends KeysMatching<T, number>,
  K2 extends KeysMatching<T, number>
> (array: T[], readout: R, key1: K1, key2: K2, val1: T[K1], val2: T[K2]) {
  // An approximation of two dimensional arrays, that needs a rework.
  let scale1 = 1
  let scale2 = 1

  // Find highest and lowest values for each property in the array.
  let min1 = Infinity
  let min2 = Infinity

  let max1 = -Infinity
  let max2 = -Infinity

  for (const value of array) {
    min1 = Math.min(min1, value[key1])
    min2 = Math.min(min2, value[key2])

    max1 = Math.max(max1, value[key1])
    max2 = Math.max(max2, value[key2])
  }

  const range1 = max1 - min1
  const range2 = max2 - min2

  // Scale the values so that both ranges have equal weight when determining the "distance" to val1 and val2.
  if (range1 > range2) {
    scale2 = range1 / range2
  } else if (range1 < range2) {
    scale1 = range2 / range1
  }

  // Find the shortest "distance" from any item in the array to val1 and val2.
  // If multiple items in the array are of the same minimum distance, choose the last one.
  let closest = 0
  let smallestDistance = calculateDistance(0)
  for (let i = 1; i < array.length; i++) {
    const currentDistance = calculateDistance(i)
    if (currentDistance <= smallestDistance) {
      smallestDistance = currentDistance
      closest = i
    }
  }

  return array[closest][readout]

  function calculateDistance (index: number) {
    const current1 = array[index][key1]
    const current2 = array[index][key2]

    const pos1 = Math.abs(current1 - val1) * scale1
    const pos2 = Math.abs(current2 - val2) * scale2

    return pos1 + pos2
  }
}
