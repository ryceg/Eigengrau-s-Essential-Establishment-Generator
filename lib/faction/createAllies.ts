import { dice } from '../src/dice'
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
    for (let i = 1; i <= 6; ++i) { getAllyGroup(random(-10, 15)) }
  } else if (sizeRoll >= 80) {
    faction.alliesDescription = 'many allies'
    for (let i = 1; i <= 5; ++i) { getAllyGroup(random(-15, 15)) }
  } else if (sizeRoll >= 70) {
    faction.alliesDescription = 'a considerable number of allies'
    for (let i = 1; i <= 4; ++i) { getAllyGroup(random(-20, 15)) }
  } else if (sizeRoll >= 60) {
    faction.alliesDescription = 'a decent number of allies'
    for (let i = 1; i <= 3; ++i) { getAllyGroup(15) }
  } else if (sizeRoll >= 50) {
    faction.alliesDescription = 'some strong allies'
    for (let i = 1; i <= 2; ++i) { getAllyGroup(10) }
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
    const tempGroupSize = getTempGroupSize(groupSizeRoll)

    let tempGroup = random(groupList)
    removeFromArray(groupList, tempGroup)
    if (tempGroup === faction.type) {
      tempGroup = `fellow ${tempGroup}`
    }

    allies.push(tempGroupSize + tempGroup)
    return allies
  }

  faction.allies = allies
}

function getTempGroupSize (groupSizeRoll: number) {
  if (groupSizeRoll >= 90) return 'a veritable army of '
  if (groupSizeRoll >= 80) return 'a guild of '
  if (groupSizeRoll >= 70) return 'a large number of '
  if (groupSizeRoll >= 60) return 'quite a few '
  if (groupSizeRoll >= 50) return 'more than a couple '
  if (groupSizeRoll >= 40) return 'a couple '
  if (groupSizeRoll >= 30) return 'some '
  if (groupSizeRoll >= 20) return 'a few '
  if (groupSizeRoll >= 10) return 'a handful of '
  return 'three or four '
}

function removeFromArray<T> (array: T[], value: T) {
  array.splice(array.indexOf(value), 1)
}
