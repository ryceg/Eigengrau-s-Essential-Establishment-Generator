import { randomFloat } from './randomFloat'
import { keys } from './utils'

/**
 * @param specs Object containing elements as properties and their weight as value
 */
export function weightRandom <T extends Record<string, number>> (specs: T) {
  let totalWeight = 0
  for (const prop of keys(specs)) {
    totalWeight += specs[prop]
  }

  const value = randomFloat(1)

  let sum = 0
  for (const prop of keys(specs)) {
    sum += specs[prop] / totalWeight
    if (value <= sum) return prop
  }
}
