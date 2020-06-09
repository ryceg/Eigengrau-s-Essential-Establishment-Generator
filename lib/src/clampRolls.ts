import { keys } from './utils'

/**
 * Clamps every value presented to the 1-100 range.
 * Most useful for rolls.
 */
export const clampRolls = (rolls: Record<number, number>) => {
  for (const roll of keys(rolls)) {
    if (rolls[roll] > 100) {
      console.log(`${rolls[roll]} was over 100.`)
      rolls[roll] = 100
      continue
    }
    if (rolls[roll] < 1) {
      console.log(`${rolls[roll]} was under 1.`)
      rolls[roll] = 1
    }
  }
}
