import { getRolledFromTable, ThresholdTable } from '../src/rollFromTable'
import { logger } from '../logger'
import { dice } from '../src/dice'
import { assert, repeat, sumWeights } from '../src/utils'
import { validateWeight, weightRandom } from '../src/weightRandom'
import { WeightRecord } from '../types'
import { factionData } from './factionData'
import { Faction } from './_common'

export function createRivals (faction: Faction): void {
  logger.info('Accruing faction enemies...')

  const sizeRoll = dice(2, 50)

  const defaultWeightedGroups: WeightRecord<string> = {
    artisans: 1,
    assassins: 1,
    bandits: 1,
    bards: 1,
    commoners: 1,
    craftsmen: 1,
    knights: 1,
    mercenaries: 1,
    merchants: 1,
    monks: 1,
    nobles: 1,
    politicians: 1,
    priests: 1,
    rangers: 1,
    scholars: 1,
    seers: 1,
    thieves: 1,
    wizards: 1
  }

  const groupSizeModifier = (sizeRoll - 50) + ((faction.roll.reputation - 50) + (faction.roll.influence - 50))
  const rivals: string[] = []

  // This is where weighting different groups happens.
  // Needs updating with each new faction.
  const weightedGroups = sumWeights(defaultWeightedGroups, factionData.types[faction.type].rivalsList)

  if (sizeRoll >= 90) {
    repeat(() => getRivalGroup(20), 6)
  } else if (sizeRoll >= 80) {
    repeat(() => getRivalGroup(25), 5)
  } else if (sizeRoll >= 70) {
    repeat(() => getRivalGroup(20), 4)
  } else if (sizeRoll >= 60) {
    repeat(() => getRivalGroup(15), 3)
  } else if (sizeRoll >= 50) {
    repeat(() => getRivalGroup(10), 2)
  } else if (sizeRoll >= 40) {
    getRivalGroup(10)
    getRivalGroup(-10)
  } else if (sizeRoll >= 30) {
    getRivalGroup(-15)
  } else if (sizeRoll >= 20) {
    getRivalGroup(10)
  } else if (sizeRoll < 20) {
    getRivalGroup(10)
  }

  function getRivalGroup (bonus: number) {
    const groupSizeRoll = dice(2, 50) + (groupSizeModifier + bonus)
    const tempGroupSize = getGroupSize(groupSizeRoll)

    let tempGroup = weightRandom(weightedGroups)

    weightedGroups[tempGroup] = validateWeight(weightedGroups[tempGroup]) - 1

    if (tempGroup === faction.type) {
      tempGroup = `rival ${tempGroup}`
    }
    rivals.push(tempGroupSize + tempGroup)
  }

  faction.rivalsDescription = getRivalsDescription(sizeRoll)
  faction.rivals = rivals
}

function getRivalsDescription (roll: number): string {
  const rivalDescriptions: ThresholdTable = [
    [90, 'managed to become almost universally disliked'],
    [80, 'enemies around every corner'],
    [70, 'some fearsome enemies'],
    [60, 'more enemies than one would expect'],
    [50, 'some enemies'],
    [40, 'a handful of rivals'],
    [30, 'a couple enemies'],
    [20, 'few rivals'],
    [10, 'a few rivals'],
    [0, 'barely any rivals']
  ]
  const result = getRolledFromTable(rivalDescriptions, roll)
  assert(typeof result === 'string')
  return result
}

function getGroupSize (roll: number): string {
  const groupSize: ThresholdTable = [
    [90, 'a guild of '],
    [80, 'a veritable army of '],
    [70, 'a large number of '],
    [60, 'quite a few '],
    [50, 'more than a couple '],
    [40, 'a couple '],
    [30, 'some '],
    [20, 'a few '],
    [10, 'a handful of '],
    [0, 'three or four ']
  ]
  const result = getRolledFromTable(groupSize, roll)
  assert(typeof result === 'string')
  return result
}
