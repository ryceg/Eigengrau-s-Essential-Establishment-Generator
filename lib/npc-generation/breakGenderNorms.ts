import { dice } from '../src/dice'
import { clamp } from '../src/utils'
import { random } from '../src/random'
import { findProfession } from '../src/findProfession'
import { Town } from '../town/_common'

import { NPC } from './_common'

/**
 * Tests to see whether the npc is able to break gender norms.
 */
export function breakGenderNorms (town: Town): boolean {
  if (town.ignoreGender) return true
  // @TODO: Add a setter to NPC so that whenever an NPC breaks one
  // gender norm, they're likely to break other gender norms
  return dice(2, 50) < clamp(town.roll.equality, 0, 100)
}

/**
 * Tests to see whether the supplied npc is of the dominant gender.
 */
export function isDominantGender (town: Town, npc: NPC): boolean {
  return npc.gender === town.dominantGender
}

export function initSexistProfession (town: Town, npc: NPC): void {
  // if the profession is defined, but the gender isn't (which is quite common)
  if (npc.profession && !npc.gender) {
    // if the NPC *was* brave enough to break gender norms, then flag that
    if (breakGenderNorms(town)) {
      npc.gender = random(['man', 'woman'])
      // ...but the NPC is not brave enough to go against the grain
    } else {
      // then, take the gender from the profession
      const newGender = checkProfessionGender(town, npc)
      // if there's an associated gender, then that's assigned to the NPC
      if (newGender) {
        npc.gender = newGender
      }
    }
  }
}

// @TODO: Make this a little more robust. You can break gender norms
// in different ways than just one's job
export function isBreakingGenderNorms (town: Town, npc: NPC): boolean {
  return npc.gender !== checkProfessionGender(town, npc)
}

/**
 * Test for whether the profession is gendered.
 */
function checkProfessionGender (town: Town, npc: NPC) {
  const profession = findProfession(town, npc)

  const subGender = town.dominantGender === 'woman' ? 'man' : 'woman'

  if (profession.domSub === 'dom' && isDominantGender(town, npc)) {
    return town.dominantGender
  }

  if (profession.domSub === 'sub' && !isDominantGender(town, npc)) {
    return subGender
  }
}
