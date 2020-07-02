import { random } from '../src/random'
import { clamp } from '../src/utils'
import { Town } from '../town/_common'
import { GenderName } from './raceTraits'
import { NPC } from './_common'

/**
 * town.roll.equality,
 * chance of breaking gender norm
 */
const genderEqualityLikelihood: [number, number, GenderName, GenderName][] = [
  [139, 10, 'woman', 'man'],
  [99, 10, 'woman', 'man'],
  [90, 15, 'woman', 'man'],
  [80, 20, 'woman', 'man'],
  [70, 30, 'woman', 'man'],
  [60, 40, 'woman', 'man'],
  [55, 60, 'woman', 'man'],
  [50, 100, 'man', 'woman'],
  [45, 60, 'man', 'woman'],
  [40, 50, 'man', 'woman'],
  [30, 40, 'man', 'woman'],
  [20, 30, 'man', 'woman'],
  [10, 20, 'man', 'woman'],
  [5, 15, 'man', 'woman'],
  [-101, 10, 'man', 'woman']
]

export function breakGenderNorms (town: Town) {
  clamp(town.roll.equality, 0, 100)

  // MIGRATION: Not available outside src.
  /* if (settings.ignoreGender) {
    return true
  } */

  const temp = genderEqualityLikelihood.find(([threshold]) => {
    return threshold <= town.roll.equality
  })

  const percentage = temp ? temp[1] : 50
  return random(1, 100) < percentage
}

export function isDominantGender (town: Town, npc: NPC) {
  const temp = genderEqualityLikelihood.find(([threshold]) => {
    return threshold <= town.roll.equality
  })
  if (temp) {
    return npc.gender === temp[2]
  }
  throw new Error('Could not find match.')
}

export function initSexistProfession (town: Town, npc: NPC) {
  if (npc.profession && !npc.gender) {
    if (breakGenderNorms(town) === false) {
      const newGender = checkProfessionGender(town, npc)
      if (newGender) {
        npc.gender = newGender
      }
    } else {
      npc.isBreakingGenderNorms = true
    }
  }
  return npc
}

// FIXME: Not sure what's going on here?
function checkProfessionGender (town: Town, npc: NPC) {
  /* const profession = findProfession(town, npc)
  const genders = genderEqualityLikelihood.find(([threshold]) => {
    return threshold <= town.roll.equality
  })
  if (genders) {
    switch (genders.indexOf(profession.domSub)) {
      case 2:
        return genders[2]
      case 3:
        return genders[3]
    }
  } */
  return npc.gender
}
