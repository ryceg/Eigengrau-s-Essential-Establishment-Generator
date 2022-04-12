import { getRolledFromTable, ThresholdTable } from '../src/rollFromTable'
import { assert } from '../src/utils'
import { logger } from '../logger'
import { Faction } from './_common'
import { Town } from '../town/_common'
import { defaultRollModifier } from '../src/defaultRollModifier'

export function setFactionSize (town: Town, faction: Faction): void {
  logger.info('Calculating faction size...')

  faction.roll.size += getAgeModifier(faction.roll.age)
  faction.roll.size += getPopulationModifier(town.population)
  faction.size = getFactionSize(faction.roll.size)
}

function getAgeModifier (roll: number): number {
  return defaultRollModifier(roll)
}

function getPopulationModifier (population: number): number {
  if (population > 6000) return 25
  if (population > 5800) return 22
  if (population > 5400) return 20
  if (population > 5000) return 15
  if (population > 4500) return 10
  if (population > 4000) return 5
  if (population > 3500) return 5
  if (population > 3000) return 5
  if (population > 2500) return 5
  if (population > 2000) return -5
  if (population > 1500) return -15
  if (population > 1000) return -25
  return -30
}

function getFactionSize (roll: number): string {
  const factionSize: ThresholdTable = [
    [95, 'huge'],
    [90, 'very large'],
    [80, 'quite large'],
    [70, 'large'],
    [60, 'above average sized'],
    [55, 'slightly above average sized'],
    [50, 'average sized'],
    [45, 'slightly below average sized'],
    [40, 'somewhat small'],
    [30, 'quite small'],
    [20, 'very small'],
    [10, 'tiny'],
    [0, 'miniscule']
  ]
  const result = getRolledFromTable(factionSize, roll)
  assert(typeof result === 'string')
  return result
}
