import { logger } from '../logger'
import { fm } from '../src/dice'
import { Faction } from './_common'

export function setFactionInfluence (faction: Faction): void {
  logger.info('Assigning faction influence...')

  const ageModifier = getAgeModifier(faction.roll.age)

  faction.roll.influence += fm(faction.roll.influence, ageModifier)

  faction.influence = getFactionInfluence(faction.roll.influence)
}

function getAgeModifier (roll: number): number {
  if (roll > 95) return 15
  if (roll > 90) return 10
  if (roll > 80) return 8
  if (roll > 70) return 6
  if (roll > 60) return 4
  if (roll > 55) return 2
  if (roll > 50) return 1
  if (roll > 45) return -1
  if (roll > 40) return -2
  if (roll > 30) return -4
  if (roll > 20) return -6
  if (roll > 10) return -8
  return -10
}

function getFactionInfluence (roll: number): string {
  if (roll > 95) return 'excellent'
  if (roll > 90) return 'very good'
  if (roll > 80) return 'quite good'
  if (roll > 70) return 'good'
  if (roll > 60) return 'above average'
  if (roll > 55) return 'slightly above average'
  if (roll > 50) return 'average'
  if (roll > 45) return 'slightly below average'
  if (roll > 40) return 'poor'
  if (roll > 30) return 'quite poor'
  if (roll > 20) return 'very poor'
  if (roll > 10) return 'extremely poor'
  return 'abysmal'
}
