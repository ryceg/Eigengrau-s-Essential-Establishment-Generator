import { random } from './random'

/**
 * This is the function used to handle random encounters.
 * It needs a lot of work, and will change.
 */
export function contentsFetcher<T> (keyTarget: (keyof T)[], contentsTarget: T) {
  const key = random(keyTarget)
  const value = contentsTarget[key]

  if (typeof value === 'function') {
    return value
  }

  console.error('key:', key)
  console.error('value:', value)
  throw new TypeError('Not a function!')
}
