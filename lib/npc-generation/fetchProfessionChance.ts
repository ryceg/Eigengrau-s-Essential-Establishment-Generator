import { keys } from '../src/utils'
import { randomFloat } from '../src/randomFloat'
import { Town } from '../town/_common'

import { isDominantGender, breakGenderNorms } from './breakGenderNorms'
import { NPC } from './_common'

/**
 * This gets the starting profession when a profession has not been defined.
 */
export function fetchProfessionChance (town: Town, npc: NPC) {
  console.log('Fetching profession...')

  let professionNames = keys(town.professions)
  let tempProfessionNames
  const professionThings = {
    socialClass: 'socialClass',
    professionType: 'type',
    professionSector: 'sector'
  } as const
  for (const key of keys(professionThings)) {
    if (npc[key]) {
      const temp = professionThings[key]
      console.log(`${key} was defined as ${npc[key]}, so filtering to the available professions! Filtering down from:`)
      console.log(professionNames)
      tempProfessionNames = professionNames.filter(professionName => {
        return town.professions[professionName][temp] === npc[key]
      })
      if (tempProfessionNames.length > 0) {
        professionNames = tempProfessionNames
      }
      console.log(professionNames)
    }
  }

  if (breakGenderNorms(town) === false) {
    if (isDominantGender(town, npc) === false) {
      tempProfessionNames = professionNames.filter(profession => {
        return town.professions[profession].domSub !== 'dom'
      })
      if (tempProfessionNames.length > 0) {
        professionNames = tempProfessionNames
      }
    } else {
      tempProfessionNames = professionNames.filter(profession => {
        return town.professions[profession].domSub !== 'sub'
      })
      if (tempProfessionNames.length > 0) {
        professionNames = tempProfessionNames
      }
    }
  }

  const sum = professionNames.map(profession => {
    return town.professions[profession].population
  })

  let resultantProfession = professionNames[getIndex(sum)]
  if (resultantProfession === undefined) {
    console.error('Failed to fetch a profession.')
    console.log({ npc })
    resultantProfession = 'noble'
  }
  console.log(`Profession is: ${resultantProfession}`)

  // the on-load function is handled in lib.createClass because it should apply to *every* NPC with the profession, not just those that are rolled with it
  if (town.professions[resultantProfession].exclusions) {
    if (typeof town.professions[resultantProfession].exclusions === 'function') {
      console.log('There is an exclusion function. Testing...')
      if (!town.professions[resultantProfession].exclusions?.(town, npc)) {
        console.warn(`${npc.name} is unable to be a ${resultantProfession}. Rerolling...`)
        resultantProfession = fetchProfessionChance(town, npc)
      }
    }
  }

  if (town.professions[resultantProfession].type === 'dndClass') {
    console.log(`${npc.name} is a ${resultantProfession} and therefore has a dndClass.`)
    npc.hasClass = true
  } else {
    npc.hasClass = false
  }

  return resultantProfession
}

function getTotalWeight (sum: number[]) {
  return sum.reduce((totalWeight, single) => totalWeight + single)
}

function getIndex (sum: number[]) {
  const totalWeight = getTotalWeight(sum)
  let random = Math.floor(randomFloat(1) * totalWeight)

  for (let i = 0; i < sum.length; i++) {
    random -= sum[i]
    if (random < 0) return i
  }
  return 0
}
