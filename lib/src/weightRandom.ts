import { logger } from '../logger'
import { WeightRecord } from '../types'
import { randomFloat } from './randomFloat'

/**
 * @param specs Object containing elements as properties and their weight as value
 */
export function weightRandom <T extends string> (specs: WeightRecord<T>): T {
  const specsKeys = lib.keys(specs)

  let totalWeight = 0
  for (const prop of specsKeys) {
    totalWeight += validateWeight(specs[prop])
  }

  const value = randomFloat(1)

  let sum = 0
  for (const prop of specsKeys) {
    sum += validateWeight(specs[prop]) / totalWeight
    if (value <= sum) return prop
  }

  logger.error('Invalid random roll!')
  return specsKeys[specsKeys.length - 1]
}

export function validateWeight (weight?: number) {
  if (typeof weight === 'number') {
    return weight
  }
  throw new TypeError(`Weight "${weight}" is not a number.`)
}
