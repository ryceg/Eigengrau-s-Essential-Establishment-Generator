import { keys } from '../src/utils'
import { randomFloat } from '../src/randomFloat'
import { Town } from '../town/_common'

import { isDominantGender, breakGenderNorms } from './breakGenderNorms'
import { professions } from './professions'
import { NPC } from './_common'

/**
 * This gets the starting profession when a profession has not been defined.
 */
export function fetchProfessionChance (town: Town, npc: NPC) {
  console.log('Fetching profession...')

  let professionNames = keys(town.professions)
  const professionThings = {
    socialClass: 'socialClass',
    professionType: 'type',
    professionSector: 'sector'
  } as const
  keys(professionThings).forEach(key => {
    if (npc[key]) {
      const temp = professionThings[key]
      console.log(`${key} was defined as ${npc[key]}, so filtering to the available professions! Filtering down from:`)
      console.log(professionNames)
      professionNames = professionNames.filter(professionName => {
        return town.professions[professionName][temp] === npc[key]
      })
      console.log(professionNames)
    }
  })

  if (breakGenderNorms(town) === false) {
    if (isDominantGender(town, npc) === false) {
      professionNames.filter(profession => {
        return town.professions[profession].domSub !== 'dom'
      })
    } else {
      professionNames.filter(profession => {
        return town.professions[profession].domSub !== 'sub'
      })
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

  // the on-load function is handled in setup.createClass because it should apply to *every* NPC with the profession, not just those that are rolled with it
  if (professions[resultantProfession].exclusions) {
    if (typeof professions[resultantProfession].exclusions === 'function') {
      console.log('There is an exclusion function. Testing...')
      if (!professions[resultantProfession].exclusions?.(npc)) {
        console.error(`${npc.name} is unable to be a ${resultantProfession}. Rerolling...`)
        resultantProfession = fetchProfessionChance(town, npc)
      }
    }
  }

  console.log(`Testing to see whether ${resultantProfession} is a dndClass.`)

  if (professions[resultantProfession].type === 'dndClass') {
    console.log(`${npc.name} is a ${resultantProfession} and therefore has a dndClass.`)
    npc.hasClass = true
  } else {
    console.log(`${npc.name} is a ${resultantProfession} and therefore does not have a dndClass.`)
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
