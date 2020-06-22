import { dice } from '../src/dice'
import { removeFromArray, repeat } from '../src/utils'
import { matchFirst } from '../src/matchFirst'
import { random } from '../src/random'
import { factionData } from './factionData'
import { Faction } from './_common'

export function createRivals (faction: Faction) {
  console.log('accruing enemies...')

  const sizeRoll = dice(2, 50)
  const groupList = ['commoners', 'knights', 'politicians', 'thieves', 'merchants', 'wizards', 'rangers', 'seers', 'priests', 'monks', 'assassins', 'artisans', 'nobles', 'bards', 'mercenaries', 'bandits', 'craftsmen', 'scholars']
  const groupSizeModifier = (sizeRoll - 50) + ((faction.roll.reputation - 50) + (faction.roll.influence - 50))
  const rivals: string[] = []

  // This is where weighting different groups happens.
  // Needs updating with each new faction.
  groupList.push(...factionData.type[faction.type].rivalsList)

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
    let tempGroup
    const groupSizeRoll = dice(2, 50) + (groupSizeModifier + bonus)

    const tempGroupSize = matchFirst.largerThanOrEqualTo(groupSizeRoll, {
      90: 'a guild of ',
      80: 'a veritable army of ',
      70: 'a large number of ',
      60: 'quite a few ',
      50: 'more than a couple ',
      40: 'a couple ',
      30: 'some ',
      20: 'a few',
      10: 'a handful of '
    }, 'three or four ')

    tempGroup = random(groupList)
    removeFromArray(groupList, tempGroup)
    if (tempGroup === faction.type) {
      tempGroup = `rival ${tempGroup}`
    }
    rivals.push(tempGroupSize + tempGroup)
  }

  faction.rivals = rivals
}
