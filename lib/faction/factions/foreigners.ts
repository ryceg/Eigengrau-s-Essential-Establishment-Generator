import { FactionTypeData } from '../factionData'

export const foreigners: FactionTypeData = {
  type: 'foreigners',
  leader: {
    format: {
      group: 5,
      individual: 3
    },
    qualification: {
      'incredibly well spoken': 2,
      'fluent in common, though with a strong accent': 2,
      'the best dressed of the group': 1,
      'the most charismatic of the group': 1,
      'chosen by his government as a representative': 1,
      'incredibly beautiful and charming': 1,
      'driven and ambitious': 1,
      'the fattest man you have ever seen': 1,
      'able to rise to power through nepotism': 1,
      'the most intelligent man in the room': 1
    },
    base: {
      hasClass: false,
      profession: 'diplomat',
      background: 'noble'
    }
  },
  wordNoun: 'embassy',
  probability: 2,
  alliesList: {
    merchants: 2,
    mercenaries: 1,
    commoners: 1,
    nobles: 3,
    artisans: 2,
    craftsmen: 2
  },
  rivalsList: {
    wizards: 1,
    assassins: 2,
    commoners: 3,
    priests: 1
  },
  joiningRequirement: {
    'familial ties to their home country': 1,
    'an expressed desire for citizenship': 1,
    'a bond of kinship': 1
  },
  joiningInitiation: {
    'complex citizenship paperwork': 2,
    'an oath of fealty to their king': 1,
    'a sufficiently large bribe': 1
  },
  members: {
    membershipIsMutuallyExclusive: false,
    membershipIsTotallyExclusive: false,
    professions: [
      'noble',
      'diplomat',
      'missionary',
      'exile',
      'merchant'
    ]
  },
  membersTrait: {
    'their tattoos and facial piercings': 1,
    'their outlandish clothes': 1,
    'their strangely colored hair': 1,
    'their orange clothes': 1,
    'their large earrings': 1,
    'their gaudy jewellery': 1
  },
  names: {
    main: [
      'Peoples',
      'Citizens',
      'Lords',
      'Peoples'
    ],
    adjective: [
      'Foreign',
      'Distant',
      'External',
      'Alien',
      'Foreign'
    ],
    group: [
      'Embassy',
      'Embassy',
      'Embassy',
      'Consulate',
      'Legation',
      'Ministry',
      'Diplomatic Mission'
    ],
    unique: [
      "Citizen's Permanent Mission",
      'Alien Consulate General'
    ]
  },
  motivation: {
    'power': 1,
    'peace': 1,
    'connections': 1,
    'political power': 1
  },
  resources: {
    'contacts': 3,
    'political influence': 1,
    'foreign goods': 2
  }
}
