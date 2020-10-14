import { Town } from '../town/_common'
import { random } from './random'

interface Encounter<T> {
  summary: T
  function?(town: Town, biome: string): string
}

/**
 * This is the function used to handle random encounters.
 * It needs a lot of work, and will change.
 */
export function contentsFetcher<T> (keyTarget: T[], contentsTarget: Encounter<T>[]) {
  const key = random(keyTarget)
  const value = contentsTarget.find(({ summary }) => summary === key)

  if (value == null) {
    throw new TypeError('Not a valid result!')
  }

  if (typeof value.function === 'function') {
    return value.function
  }

  return () => value.summary
}
