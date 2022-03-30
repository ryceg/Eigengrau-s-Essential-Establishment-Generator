import { dice } from '../src/dice'
import { repeat } from '../src/utils'
import { sumWeights, validateWeight, weightRandom } from '../src/weightRandom'
import { WeightRecord } from '../types'
import { factionData } from './factionData'
import { Faction } from './_common'

export function createRivals (faction: Faction): void {
  console.log('accruing enemies...')

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
    faction.rivalsDescription = 'managed to become almost universally disliked'
    repeat(() => getRivalGroup(20), 6)
  } else if (sizeRoll >= 80) {
    faction.rivalsDescription = 'enemies around every corner'
    repeat(() => getRivalGroup(25), 5)
  } else if (sizeRoll >= 70) {
    faction.rivalsDescription = 'some fearsome enemies'
    repeat(() => getRivalGroup(20), 4)
  } else if (sizeRoll >= 60) {
    faction.rivalsDescription = 'more enemies than one would expect'
    repeat(() => getRivalGroup(15), 3)
  } else if (sizeRoll >= 50) {
    faction.rivalsDescription = 'some enemies'
    repeat(() => getRivalGroup(10), 2)
  } else if (sizeRoll >= 40) {
    faction.rivalsDescription = 'a handful of rivals'
    getRivalGroup(10)
    getRivalGroup(-10)
  } else if (sizeRoll >= 30) {
    faction.rivalsDescription = 'a couple enemies'
    getRivalGroup(-15)
  } else if (sizeRoll >= 20) {
    faction.rivalsDescription = 'few rivals'
    getRivalGroup(10)
  } else if (sizeRoll < 20) {
    faction.rivalsDescription = 'barely any rivals'
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

  faction.rivals = rivals
}

function getGroupSize (roll: number): string {
  if (roll >= 90) return 'a guild of '
  if (roll >= 80) return 'a veritable army of '
  if (roll >= 70) return 'a large number of '
  if (roll >= 60) return 'quite a few '
  if (roll >= 50) return 'more than a couple '
  if (roll >= 40) return 'a couple '
  if (roll >= 30) return 'some '
  if (roll >= 20) return 'a few '
  if (roll >= 10) return 'a handful of '
  return 'three or four '
}
