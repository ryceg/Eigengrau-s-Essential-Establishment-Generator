import { logger } from '../logger'

export function findIndexInArray<T, K extends keyof T> (array: T[], key: K, value: T[K]) {
  for (const [index, element] of array.entries()) {
    if (element[key] === value) {
      logger.info(`Found matching key value of ${key}: ${value}!`)
      logger.info(element, index)
      return index
    }
  }

  throw new Error(`Could not find object matching the key/value of: "${key}"/"${value}"!`)
}
