import { NPC } from 'lib/npc-generation/_common'

export const crewTypeData: Record<string, Partial<NPC>> = {
  'a veteran of the sea who may have been beautiful at one point': {
    gender: 'woman',
    note: 'A woman whose skin has been brined by the salt water.'
  },
  'a young sailor excited to take to the sea': {
    ageStage: 'young adult',
    calmTrait: 'passionate'
  },
  'a wide eyed adventurer of the sea just getting a first true taste of sailing': {
    ageStage: 'young adult',
    calmTrait: 'curious',
    profession: 'wannabe pirate',
    note: 'This person has great ambitions'
  },
  'an older, well-brined master of sailing': {
    ageStage: 'elderly'
  },
  'an ordinary looking sailor': {},
  'a stoic looking veteran': {
    ageStage: 'settled adult',
    calmTrait: 'quiet',
    stressTrait: 'reliable'
  },
  'a rugged and battered looking bilge rat': {
    note: 'This person has extremely dirty clothing on.'
  },
  'a suspiciously regal and seasick looking sailor': {
    profession: 'sailor',
    socialClass: 'nobility',
    note: 'This character is a noble in hiding.'
  }
}
