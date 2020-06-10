/**
 * Returns the keys from `T` whose property types match the type `V`.
 */
type KeysMatching<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never
}[keyof T]

/**
 * FIXME: Somebody explain what this function does.
 */
export function closestMatch<
  T extends Record<R, string> & Record<K1 | K2, number>,
  R extends KeysMatching<T, string>,
  K1 extends KeysMatching<T, number>,
  K2 extends KeysMatching<T, number>
> (array: T[], readout: R, key1: K1, key2: K2, val1: T[K1], val2: T[K2]) {
  // An approximation of two dimensional arrays, that needs a rework.
  let scale1 = 1
  let scale2 = 1

  // Find highest and lowest values for each property in the array.
  let min1 = array[0][key1]
  let min2 = array[0][key2]
  let max1 = array[0][key1]
  let max2 = array[0][key2]

  for (let i = 1; i < array.length; i++) {
    if (min1 > array[0][key1]) min1 = array[0][key1]
    if (min2 > array[0][key2]) min2 = array[0][key2]
    if (max1 < array[0][key1]) max1 = array[0][key1]
    if (max2 < array[0][key2]) max2 = array[0][key2]
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
