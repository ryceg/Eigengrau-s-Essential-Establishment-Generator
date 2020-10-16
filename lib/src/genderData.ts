import { GenderName } from '../npc-generation/raceTraits'

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
