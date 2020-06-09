import { keys } from './utils'

/**
 * Searches with a depth of one.
 */
export const findInContainer = <T, K extends keyof T[keyof T]> (container: T, key: K, value: T[keyof T][K]) => {
  console.log('running findInContainer...')
  console.log({ container, key, value })

  for (const object of keys(container)) {
    const values = container[object][key]

    if (Array.isArray(values) && values.includes(value)) {
      console.log(`Found ${value} in ${object}`)
      return container[object]
    }
  }
}
