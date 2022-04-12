import { getRolledFromTable, ThresholdTable } from '../src/rollFromTable'
import { assert } from '../src/utils'
import { logger } from '../logger'
import { Faction } from './_common'

export function setFactionStability (faction: Faction) {
  logger.info('Determining faction stability...')
  faction.stability = getFactionStability(faction.roll.stability)
}

function getFactionStability (roll: number): string {
  const factionStabilities: ThresholdTable = [
    [95, 'rock solid'],
    [90, 'very stable'],
    [80, 'quite stable'],
    [70, 'stable'],
    [60, 'mostly stable'],
    [55, 'relatively stable'],
    [50, 'stable'],
    [45, 'relatively unstable'],
    [40, 'somewhat unstable'],
    [30, 'quite unstable'],
    [20, 'very unstable'],
    [10, 'rapidly disintegrating'],
    [0, 'falling to pieces']
  ]
  const result = getRolledFromTable(factionStabilities, roll)
  assert(typeof result === 'string')
  return result
}
