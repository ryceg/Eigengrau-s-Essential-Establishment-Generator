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
    totalWeight += validateWeight(specs[prop])
  }

  const value = randomFloat(1)

  let sum = 0
  for (const prop of specsKeys) {
    sum += validateWeight(specs[prop]) / totalWeight
    if (value <= sum) return prop
  }

  console.error('Invalid random roll!')
  return specsKeys[specsKeys.length - 1]
}

export function validateWeight (weight?: number) {
  if (typeof weight === 'number') {
    return weight
  }
  throw new TypeError(`Weight "${weight}" is not a number.`)
}

export function sumWeights<T extends string> (
  defaultWeights: WeightRecord<T>,
  customWeights: WeightRecord<T>
) {
  const finalWeights: WeightRecord<T> = {}

  for (const name of keys(customWeights)) {
    const weight = validateWeight(customWeights[name])
    const defaultWeight = defaultWeights[name] ?? 0
    finalWeights[name] = defaultWeight + weight
  }

  return finalWeights
}
