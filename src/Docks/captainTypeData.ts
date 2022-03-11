import { NPC } from '@lib'

export const captainTypeData: Record<string, Partial<NPC>> = {
  'a seasoned veteran': {
    profession: "ship's captain",
    hasClass: false,
    background: 'sailor'
  },
  'a reformed pirate': {
    profession: "ship's captain",
    hasClass: false,
    background: 'sailor',
    note: 'A reformed pirate.'
  },
  'a nobleman with more money than sense': {
    profession: "ship's captain",
    hasClass: false,
    background: 'noble',
    note: 'Inexperienced on the sea.',
    gender: 'man'
  },
  'a relatively inexperienced, but gifted young lad': {
    profession: "ship's captain",
    background: 'sailor',
    hasClass: false,
    gender: 'man',
    calmTrait: 'quick on his feet'
  },
  'a woman with a temper': {
    profession: "ship's captain",
    background: 'sailor',
    hasClass: false,
    gender: 'woman',
    calmTrait: 'quick to anger',
    stressTrait: 'extremely snappy'
  },
  'a stern man, with a long beard': {
    profession: "ship's captain",
    background: 'sailor',
    hasClass: false,
    gender: 'man',
    beard: 'long and majestic',
    calmTrait: 'stern',
    stressTrait: 'shouty'
  },
  'a dwarf that wanted to see the seas': {
    profession: "ship's captain",
    background: 'sailor',
    race: 'dwarf',
    hasClass: false
  },
  'a man searching for his long lost lover': {
    profession: "ship's captain",
    background: 'sailor',
    gender: 'man',
    hasClass: false,
    note: 'He is searching for his long lost lover.'
  },
  'an elf who has forsaken the earth': {
    race: 'elf',
    hasClass: false
  },
  'a half-orc with a passion for marine life': {
    profession: "ship's captain",
    background: 'sailor',
    race: 'half-orc',
    hasClass: false
  },
  'a stoic woman with a quiet voice': {
    profession: "ship's captain",
    background: 'sailor',
    gender: 'woman',
    vocalPattern: 'has a quiet voice',
    hasClass: false
  },
  'an ex mercenary': {
    profession: "ship's captain",
    background: 'soldier'
  },
  'a retired merchant': {
    profession: "ship's captain",
    background: 'merchant',
    ageStage: 'elderly',
    hasClass: false
  },
  'a young boy who inherited the ship': {
    profession: "ship's captain",
    background: 'sailor',
    ageStage: 'young adult',
    note: 'Inherited the ship.',
    hasClass: false
  }
}
