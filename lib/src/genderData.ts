import { Town } from '../town/_common'
import { random } from '../src/random'
import { NPC } from '../npc-generation/_common'

export type BinaryGender = 'man' | 'woman'
export type GenderName = 'man' | 'woman' | 'nonbinary' | 'entity'

interface GenderPronouns {
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

export const genderData: Record<GenderName, GenderPronouns> = {
  man: {
    godgoddess: 'god',
    title: 'Mr',
    domTitle: 'Master',
    heshe: 'he',
    himher: 'him',
    himherself: 'himself',
    hisher: 'his',
    hisherself: 'hisself',
    boygirl: 'boy',
    manwoman: 'man',
    menwomen: 'men',
    malefemale: 'male',
    guygirl: 'guy',
    marriageNoun: 'husband',
    niblingReciprocalNoun: 'uncle',
    parentNoun: 'father',
    childNoun: 'son',
    siblingNoun: 'brother',
    niblingNoun: 'nephew',
    oppositeGender: 'woman'
  },
  woman: {
    godgoddess: 'goddess',
    title: 'Ms',
    domTitle: 'Mistress',
    heshe: 'she',
    himher: 'her',
    himherself: 'herself',
    hisher: 'her',
    hisherself: 'herself',
    boygirl: 'girl',
    manwoman: 'woman',
    menwomen: 'women',
    malefemale: 'female',
    guygirl: 'girl',
    marriageNoun: 'wife',
    niblingReciprocalNoun: 'aunt',
    parentNoun: 'mother',
    childNoun: 'daughter',
    siblingNoun: 'sister',
    niblingNoun: 'niece',
    oppositeGender: 'man'
  },
  nonbinary: {
    title: 'Mx',
    domTitle: 'Overseer',
    heshe: 'they',
    himher: 'them',
    himherself: 'themself',
    hisher: 'their',
    hisherself: 'theirself',
    boygirl: 'child',
    manwoman: 'person',
    menwomen: 'people',
    malefemale: 'person',
    guygirl: 'person',
    marriageNoun: 'partner',
    niblingReciprocalNoun: 'pibling',
    parentNoun: 'parent',
    childNoun: 'child',
    siblingNoun: 'sibling',
    niblingNoun: 'nibling',
    // this is temporary
    oppositeGender: 'man'
  },
  entity: {
    title: 'Mx',
    domTitle: 'Overseer',
    heshe: 'it',
    himher: 'it',
    himherself: 'itself',
    hisher: 'its',
    hisherself: 'itself',
    boygirl: 'child',
    manwoman: 'entity',
    menwomen: 'entities',
    malefemale: 'entity',
    guygirl: 'entity',
    marriageNoun: 'partner',
    niblingReciprocalNoun: 'pibling',
    parentNoun: 'parent',
    childNoun: 'child',
    siblingNoun: 'sibling',
    niblingNoun: 'nibling',
    // this is temporary
    oppositeGender: 'man'
  }
} as const

export function getOppositeGender (gender: GenderName): GenderName {
  return genderData[gender].oppositeGender
}

export function validateNpcGender (town: Town, npc: NPC): GenderName {
  if (npc.roll.gender <= town.roll.genderMakeup) {
    return town.dominantGender
  }
  return getOppositeGender(town.dominantGender)
}

export function getNpcGender (town: Town, npc: NPC): GenderName {
  if (npc.gender) {
    return npc.gender
  }
  if (npc.roll.gender <= town.roll.genderMakeup) {
    return town.dominantGender
  }
  return getOppositeGender(town.dominantGender)
}

export function fetchGender (town: Town): GenderName {
  const genderRoll = random(1, 100)
  if (genderRoll <= town.roll.genderMakeup) {
    return town.dominantGender
  }
  return getOppositeGender(town.dominantGender)
}

/**
 * @description We assign a roll for the gender, but need to ensure that manually assigned genders that are passed as an argument don't have a conflicting roll.
 */
export function assignFunctionalGenderRoll (town: Town, npc: NPC): number {
  if (town.roll.genderMakeup < npc.roll.gender && npc.gender === town.dominantGender) {
    return npc.roll.gender
  }
  if (town.roll.genderMakeup > npc.roll.gender && npc.gender === getOppositeGender(town.dominantGender)) {
    return npc.roll.gender
  }
  if (npc.gender === town.dominantGender) {
    return random(0, town.roll.genderMakeup)
  }
  if (npc.gender === getOppositeGender(town.dominantGender)) {
    return random(town.roll.genderMakeup, 100)
  }
  console.warn('Something screwy with gender is going on. Defaulting to dominant gender.')
  return town.roll.genderMakeup
}
