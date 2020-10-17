import { WeightRecord } from '../types'
import { randomFloat } from './randomFloat'
import { keys } from './utils'

/**
 * @param specs Object containing elements as properties and their weight as value
 */
export function weightRandom <T extends string> (specs: WeightRecord<T>): T {
  const specsKeys = keys(specs)

  let totalWeight = 0
  for (const prop of specsKeys) {
    totalWeight += specs[prop]
  }

  const value = randomFloat(1)

  let sum = 0
  for (const prop of specsKeys) {
    sum += specs[prop] / totalWeight
    if (value <= sum) return prop
  }

  throw new Error('Invalid random roll.')
}
