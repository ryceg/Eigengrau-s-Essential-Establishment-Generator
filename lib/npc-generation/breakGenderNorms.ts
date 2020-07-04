import { random } from '../src/random'
import { clamp } from '../src/utils'
import { Town } from '../town/_common'
import { NPC } from './_common'
import { findProfession } from '../src/findProfession'
import { dice } from '../src/dice'

export function breakGenderNorms (town: Town) {
  // tests to see whether the npc is able to break gender norms (determined by the )
  clamp(town.roll.equality, 0, 100)
  // MIGRATION: Not available outside src.
  if (town.ignoreGender) {
    return true
  }
  return dice(2, 50) < town.roll.equality
}

export function isDominantGender (town: Town, npc: NPC) {
  // tests to see whether the supplied npc is of the dominant gender.
  return npc.gender === town.dominantGender
}

export function initSexistProfession (town: Town, npc: NPC) {
  // if the profession is defined, but the gender isn't (which is quite common)
  if (npc.profession && !npc.gender) {
    // ...but the NPC is not brave enough to go against the grain
    if (breakGenderNorms(town) === false) {
      // then, take the gender from the profession
      const newGender = checkProfessionGender(town, npc)
      // if there's an associated gender, then that's assigned to the NPC
      if (newGender === 'man' || newGender === 'woman') {
        npc.gender = newGender
      }
      // if the NPC *was* brave enough to break gender norms, then flag that
    } else {
      npc.gender = random(['man', 'woman'])
      if (npc.gender !== checkProfessionGender(town, npc)) npc.isBreakingGenderNorms = true
    }
  }
  return npc
}

function checkProfessionGender (town: Town, npc: NPC) {
  const profession = findProfession(town, npc)
  // test for whether the profession is gendered
  let subGender
  if (town.dominantGender === 'woman') {
    subGender = 'man'
  } else {
    subGender = 'woman'
  }

  if (!profession.domSub) {
    return null
  }
  if (profession.domSub === 'dom' && isDominantGender(town, npc)) {
    return town.dominantGender
  }
  if (profession.domSub === 'sub' && isDominantGender(town, npc) === false) {
    return subGender
  }
}
