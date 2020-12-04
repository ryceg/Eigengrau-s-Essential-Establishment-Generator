import { GenderName } from '../npc-generation/raceTraits'
import { Town } from '../town/_common'
import { random } from '../src/random'
import { NPC } from '../npc-generation/_common'

export const genderData = {
  man: {
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
  }
} as const

export function getOppositeGender (gender: GenderName): GenderName {
  return genderData[gender].oppositeGender
}

export function initGenderNpc (town: Town, npc: Partial<NPC>) {
  console.log('Initialising gender.')
  if (!npc.roll) npc.roll = {}
  if (!npc.roll.gender) {
    npc.roll.gender = random(1, 100)
  }
  if (!npc.gender) npc.gender = fetchNpcGender(town, npc)
  assignFunctionalGenderRoll(town, npc)
  return npc.gender
}

export function fetchNpcGender (town: Town, npc: NPC): GenderName {
  if (!npc.roll.gender) initGenderNpc(town, npc)
  if (npc.roll.gender <= town.roll.genderMakeup) {
    return town.dominantGender
  } else {
    return getOppositeGender(town.dominantGender)
  }
}

export function fetchGender (town: Town): GenderName {
  const genderRoll = random(1, 100)
  if (genderRoll <= town.roll.genderMakeup) {
    return town.dominantGender
  } else {
    return getOppositeGender(town.dominantGender)
  }
}

/**
 * @description We assign a roll for the gender, but need to ensure that manually assigned genders that are passed as an argument don't have a conflicting roll.
 */
export function assignFunctionalGenderRoll (town: Town, npc: Partial<NPC>): number {
  if (!npc.roll) npc.roll = {}
  if (!npc.roll.gender) {
    npc.roll.gender = random(1, 100)
  }
  if (!town.roll.genderMakeup) town.roll.genderMakeup = random(49, 51)

  if (town.roll.genderMakeup < npc.roll.gender && npc.gender === town.dominantGender) {
    return npc.roll.gender
  } else if (town.roll.genderMakeup > npc.roll.gender && npc.gender === getOppositeGender(town.dominantGender)) {
    return npc.roll.gender
  } else if (npc.gender === town.dominantGender) {
    npc.roll.gender = random(0, town.roll.genderMakeup)
  } else if (npc.gender === getOppositeGender(town.dominantGender)) {
    npc.roll.gender = random(town.roll.genderMakeup, 100)
  } else {
    console.warn('Something screwy with gender is going on. Defaulting to dominant gender.')
    npc.roll.gender = town.roll.genderMakeup
  }
  return npc.roll.gender
}
