import { KeysMatching } from '../types'
import { keys } from './utils'

/**
 * Searches with a depth of one.
 */
export function findInContainer<T> (container: Record<string, T>) {
  /**
   * Type of value we can search.
   */
  type Values<V> = V[] | undefined

  /**
   * Matches only keys that maps to the correct type of value.
   */
  type KeysWithValues<V> = KeysMatching<T, Values<V>>

  /**
   * Function that searches for an object where the
   * value is found inside of the array the key maps to.
   */
  return function findInside <K extends KeysWithValues<V>, V> (key: K, value: V) {
    console.log('running findInContainer...')
    console.log({ container, key, value })

    for (const object of keys(container)) {
      const nested = container[object]
      const values = nested[key] as unknown as Values<V>

      if (values?.includes(value)) {
        console.log(`Found ${value} in ${object}`)
        return container[object]
      }
    }
  }
}
