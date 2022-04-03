import { getRolledFromTable, ThresholdTable } from '../src/rollFromTable'
import { Faction } from './_common'

export function setFactionAge (faction: Faction): void {
  const ranks: ThresholdTable = [
    [95, 'ancient'],
    [90, 'extremely old'],
    [80, 'very old'],
    [70, 'quite old'],
    [60, 'well established'],
    [55, 'somewhat old'],
    [50, 'relatively new'],
    [45, 'recently established'],
    [40, 'new'],
    [30, 'quite new'],
    [20, 'very new'],
    [10, 'brand new'],
    [5, 'unknown'],
    [0, 'well established']
  ]

  faction.age = getRolledFromTable(ranks, faction.roll.age) || 'well established'
}
