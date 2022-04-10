import { logger } from '../logger'
import { dice, fm } from '../src/dice'
import { repeat, removeFromArray } from '../src/utils'
import { random } from '../src/random'
import { Faction } from './_common'

export function createAllies (faction: Faction): void {
  logger.info('Finding faction allies...')

  const sizeRoll = fm(faction.roll.size, random([20, -20]))
  const groupList = ['commoners', 'knights', 'politicians', 'thieves', 'merchants', 'wizards', 'rangers', 'seers', 'priests', 'monks', 'assassins', 'artisans', 'nobles', 'bards', 'mercenaries', 'bandits', 'craftsmen', 'scholars']
  const groupSizeModifier = (sizeRoll - 50) + ((faction.roll.reputation - 50) + (faction.roll.size - 50))
  const allies: string[] = []

  if (sizeRoll >= 90) {
    repeat(() => getAllyGroup(random(-10, 15)), 5)
  } else if (sizeRoll >= 80) {
    repeat(() => getAllyGroup(random(-15, 15)), 5)
  } else if (sizeRoll >= 70) {
    repeat(() => getAllyGroup(random(-20, 15)), 4)
  } else if (sizeRoll >= 60) {
    repeat(() => getAllyGroup(15), 3)
  } else if (sizeRoll >= 50) {
    repeat(() => getAllyGroup(10), 2)
  } else if (sizeRoll >= 40) {
    getAllyGroup(10)
    getAllyGroup(-10)
  } else if (sizeRoll >= 30) {
    getAllyGroup(-15)
  } else if (sizeRoll >= 20) {
    getAllyGroup(10)
  } else if (sizeRoll < 20) {
    getAllyGroup(10)
  }

  function getAllyGroup (bonus: number) {
    const groupSizeRoll = dice(2, 50) + groupSizeModifier + bonus
    const tempGroupSize = getGroupSize(groupSizeRoll)

    let tempGroup = random(groupList)
    removeFromArray(groupList, tempGroup)
    if (tempGroup === faction.type) {
      tempGroup = `fellow ${tempGroup}`
    }
    allies.push(tempGroupSize + tempGroup)
  }

  faction.alliesDescription = getAlliesDescription(sizeRoll)
  faction.allies = allies
}

function getAlliesDescription (sizeRoll: number): string {
  if (sizeRoll >= 90) return 'an immense number of people to rely on for aid'
  if (sizeRoll >= 80) return 'many allies'
  if (sizeRoll >= 70) return 'a considerable number of allies'
  if (sizeRoll >= 60) return 'a decent number of allies'
  if (sizeRoll >= 50) return 'some strong allies'
  if (sizeRoll >= 40) return 'a handful of trusted allies'
  if (sizeRoll >= 30) return 'a couple trusted allies'
  if (sizeRoll >= 20) return 'few allies'
  return 'barely any allies'
}

function getGroupSize (roll: number): string {
  if (roll >= 90) return 'a veritable army of '
  if (roll >= 80) return 'a guild of '
  if (roll >= 70) return 'a large number of '
  if (roll >= 60) return 'quite a few '
  if (roll >= 50) return 'more than a couple '
  if (roll >= 40) return 'a couple '
  if (roll >= 30) return 'some '
  if (roll >= 20) return 'a few '
  if (roll >= 10) return 'a handful of '
  return 'three or four '
}
