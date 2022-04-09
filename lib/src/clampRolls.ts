import { logger } from '../logger'
import { keys } from './utils'

const MIN = 1
const MAX = 100

/**
 * Clamps every value presented to the 1-100 range.
 * Most useful for rolls.
 */
export function clampRolls<T extends string> (rolls: Record<T, number | undefined>) {
  for (const roll of keys(rolls)) {
    if (rolls[roll] === undefined) continue
    if (rolls[roll] < MIN) {
      logger.info(`${rolls[roll]} was under ${MIN}.`)
      rolls[roll] = MIN
      continue
    }

    if (rolls[roll] > MAX) {
      logger.info(`${rolls[roll]} was over ${MAX}.`)
      rolls[roll] = MAX
    }
  }
}
