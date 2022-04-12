import { logger } from '../logger'
import { dice, fm } from '../src/dice'
import { repeat, removeFromArray, assert } from '../src/utils'
import { random } from '../src/random'
import { Faction } from './_common'
import { getRolledFromTable, ThresholdTable } from '../src/rollFromTable'

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
  const alliesDescription: ThresholdTable = [
    [90, 'an immense number of people to rely on for aid'],
    [80, 'many allies'],
    [70, 'a considerable number of allies'],
    [60, 'a decent number of allies'],
    [50, 'some strong allies'],
    [40, 'a handful of trusted allies'],
    [30, 'a couple trusted allies'],
    [20, 'few allies'],
    [0, 'barely any allies']
  ]
  const result = getRolledFromTable(alliesDescription, sizeRoll)
  assert(typeof result === 'string')
  return result
}

function getGroupSize (roll: number): string {
  const groupSize: ThresholdTable = [
    [90, 'a veritable army of '],
    [80, 'a guild of '],
    [70, 'a large number of '],
    [60, 'quite a few '],
    [50, 'more than a couple '],
    [40, 'a couple '],
    [30, 'some '],
    [20, 'a few '],
    [15, 'a handful of '],
    [10, 'three or four '],
    [0, 'just one ']
  ]
  const result = getRolledFromTable(groupSize, roll)
  assert(typeof result === 'string')
  return result
}
