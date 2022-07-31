import { getRolledFromTable, ThresholdTable } from '../src/rollFromTable'
import { assert } from '../src/utils'
import { logger } from '../logger'
import { fm } from '../src/dice'
import { Faction } from './_common'
import { defaultRollModifier } from '../src/defaultRollModifier'

export function setFactionInfluence (faction: Faction): void {
  logger.info('Assigning faction influence...')

  const ageModifier = getAgeModifier(faction.roll.age)

  faction.roll.influence += fm(faction.roll.influence, ageModifier)

  faction.influence = getFactionInfluence(faction.roll.influence)
}

function getAgeModifier (roll: number): number {
  return defaultRollModifier(roll)
}

function getFactionInfluence (roll: number): string {
  const influence: ThresholdTable = [
    [95, 'excellent'],
    [90, 'very good'],
    [80, 'quite good'],
    [70, 'good'],
    [60, 'above average'],
    [55, 'slightly above average'],
    [50, 'average'],
    [45, 'slightly below average'],
    [40, 'poor'],
    [30, 'quite poor'],
    [20, 'very poor'],
    [10, 'extremely poor'],
    [0, 'abysmal']
  ]
  const result = getRolledFromTable(influence, roll)
  assert(typeof result === 'string')
  return result
}
