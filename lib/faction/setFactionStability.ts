import { logger } from '../logger'
import { Faction } from './_common'

export function setFactionStability (faction: Faction) {
  logger.info('Determining faction stability...')
  faction.stability = getFactionStability(faction.roll.stability)
}

function getFactionStability (roll: number): string {
  if (roll > 95) return 'rock solid'
  if (roll > 90) return 'very stable'
  if (roll > 80) return 'quite stable'
  if (roll > 70) return 'stable'
  if (roll > 60) return 'mostly stable'
  if (roll > 55) return 'relatively stable'
  if (roll > 50) return 'stable'
  if (roll > 45) return 'relatively unstable'
  if (roll > 40) return 'somewhat unstable'
  if (roll > 30) return 'quite unstable'
  if (roll > 20) return 'very unstable'
  if (roll > 10) return 'rapidly disintegrating'
  return 'falling to pieces'
}
