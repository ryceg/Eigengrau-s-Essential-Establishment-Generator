import { logger } from '../logger'
import { getRolledFromTable, ThresholdTable } from '../src/rollFromTable'
import { fm } from '../src/dice'
import { factionRollData } from './factionRollData'
import { Faction } from './_common'

export function setFactionReputation (faction: Faction): void {
  logger.info('Assigning faction reputation...')

  const ageModifier = getAgeModifier(faction)

  faction.roll.reputation += fm(faction.roll.reputation, ageModifier)

  faction.reputation = getFactionReputation(faction.roll.reputation)
}

function getAgeModifier (faction: Faction): number {
  /**
   * @description [age, result]
   */
  const ages: ThresholdTable<number> = [
    [95, 30],
    [90, 28],
    [80, 25],
    [70, 20],
    [60, 10],
    [55, 5],
    [50, 1],
    [45, -5],
    [40, -10],
    [30, -15],
    [20, -20],
    [10, -25],
    [5, -30],
    [0, -30]
  ]

  return getRolledFromTable(ages, faction.roll.age) || 0
}

function getFactionReputation (roll: number): string {
  return getRolledFromTable(factionRollData.reputation.rolls, roll) || 'average'
}
