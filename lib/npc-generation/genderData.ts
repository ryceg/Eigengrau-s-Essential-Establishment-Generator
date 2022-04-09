import { NPC } from '../npc-generation/_common'
import { random } from '../src/random'
import { has, isObject } from '../src/utils'
import { Town, TownBasics } from '../town/_common'
import jsonData from './gender.data.json'

// @TODO: There are `GenderName.length` genders, but town data does not
// reflect the randomness to generate N genders. In practice everything
// is either man or woman.

export type BinaryGender = 'man' | 'woman'
export type GenderName = 'man' | 'woman' | 'nonbinary' | 'entity'
export interface GenderPronouns {
    godgoddess: string
    title: string
    domTitle: string
    heshe: string
    himher: string
    himherself: string
    hisher: string
    hisherself: string
    boygirl: string
    manwoman: string
    menwomen: string
    malefemale: string
    guygirl: string
    marriageNoun: string
    /** @example 'aunt' */
    niblingReciprocalNoun: string
    parentNoun: string
    childNoun: string
    siblingNoun: string
    /** @example 'neice' */
    niblingNoun: string
    oppositeGender: GenderName
}

export const genderData = jsonData as Record<GenderName, GenderPronouns>

export function getOppositeGender (gender: GenderName): GenderName {
  return genderData[gender].oppositeGender
}

/**
 * Validates that the NPC's gender is what according to town data,
 * it should be.
 */
export function isValidNPCGender (town: Town, npc: Partial<NPC>): boolean {
  if (!npc.gender || !hasGenderRollObject(npc)) return false

  return npc.roll.gender <= town.roll.genderMakeup
    ? npc.gender === town.dominantGender
    : npc.gender === getOppositeGender(town.dominantGender)
}

export function getNpcGender (town: Town, npc: Partial<NPC>): GenderName {
  if (!hasGenderRollObject(npc)) return getRandomGender(town)

  return npc.roll.gender <= town.roll.genderMakeup
    ? town.dominantGender
    : getOppositeGender(town.dominantGender)
}

export function getRandomGender (town: TownBasics): GenderName {
  const genderRoll = random(1, 100)
  if (genderRoll <= town.roll.genderMakeup) {
    return town.dominantGender
  }
  return getOppositeGender(town.dominantGender)
}

function hasGenderRollObject (npc: Partial<NPC>): npc is NPC {
  return isObject(npc.roll) && has('gender', npc.roll)
}
