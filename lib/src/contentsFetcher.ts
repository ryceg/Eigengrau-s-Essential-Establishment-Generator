import { logger } from '../logger'
import { Town } from '../town/_common'
import { random } from './random'

interface Encounter<T extends string> {
  summary: T
  function?(town: Town, biome?: string): string
}

/**
 * This is the function used to handle random encounters.
 * It needs a lot of work, and will change.
 */
export function contentsFetcher<T extends string> (keyTarget: T | T[], contentsTarget: Encounter<T>[]) {
  const key = Array.isArray(keyTarget) ? random(keyTarget) : keyTarget
  const value = contentsTarget.find(({ summary }) => summary === key)

  if (value == null) {
    // Return a debuggable message instead of throwing.
    return (_: Town, biome?: string) => {
      const result = `!!INVALID[ ${biome} ${key} ${value} ]!!`
      logger.error(result)
      return result
    }
  }

  if (typeof value.function === 'function') {
    return value.function
  }

  return () => value.summary
}
