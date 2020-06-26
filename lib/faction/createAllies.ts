import { dice } from '../src/dice'
import { repeat, removeFromArray } from '../src/utils'
import { random } from '../src/random'
import { Faction } from './_common'

export function createAllies (faction: Faction) {
  console.log('finding allies...')

  const sizeRoll = dice(2, 50)
  const groupList = ['commoners', 'knights', 'politicians', 'thieves', 'merchants', 'wizards', 'rangers', 'seers', 'priests', 'monks', 'assassins', 'artisans', 'nobles', 'bards', 'mercenaries', 'bandits', 'craftsmen', 'scholars']
  const groupSizeModifier = (sizeRoll - 50) + ((faction.roll.reputation - 50) + (faction.roll.size - 50))
  const allies: string[] = []

  if (sizeRoll >= 90) {
    faction.alliesDescription = 'an immense number of people to rely on for aid'
    repeat(() => getAllyGroup(random(-10, 15)), 5)
  } else if (sizeRoll >= 80) {
    faction.alliesDescription = 'many allies'
    repeat(() => getAllyGroup(random(-15, 15)), 5)
  } else if (sizeRoll >= 70) {
    faction.alliesDescription = 'a considerable number of allies'
    repeat(() => getAllyGroup(random(-20, 15)), 4)
  } else if (sizeRoll >= 60) {
    faction.alliesDescription = 'a decent number of allies'
    repeat(() => getAllyGroup(15), 3)
  } else if (sizeRoll >= 50) {
    faction.alliesDescription = 'some strong allies'
    repeat(() => getAllyGroup(10), 2)
  } else if (sizeRoll >= 40) {
    faction.alliesDescription = 'a handful of trusted allies'
    getAllyGroup(10)
    getAllyGroup(-10)
  } else if (sizeRoll >= 30) {
    faction.alliesDescription = 'a couple trusted allies'
    getAllyGroup(-15)
  } else if (sizeRoll >= 20) {
    faction.alliesDescription = 'few allies'
    getAllyGroup(10)
  } else if (sizeRoll < 20) {
    faction.alliesDescription = 'barely any allies'
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

  faction.allies = allies
}

function getGroupSize (roll: number) {
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
