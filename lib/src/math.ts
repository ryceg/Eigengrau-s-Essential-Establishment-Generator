import { randomFloat } from './randomFloat'

function getTotalWeight (sum: number[]) {
  return sum.reduce((totalWeight, single) => totalWeight + single, 0)
}

/**
 * Returns a random index weighted on the population of the numbers
 * passed in.
 * @example
 * `getWeightedIndex([1, 1, 10])` will likely return 2, since
 * 10 has the highest weight
 */
export function getWeightedIndex (sum: number[]) {
  const totalWeight = getTotalWeight(sum)
  let random = Math.floor(randomFloat(1) * totalWeight)

  for (let i = 0; i < sum.length; i++) {
    random -= sum[i]
    if (random < 0) return i
  }
  return 0
}
