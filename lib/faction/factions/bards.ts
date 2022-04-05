import { FactionTypeData } from '../factionData'

export const bards: FactionTypeData = {
  type: 'bards',
  leader: {
    format: {
      group: 5,
      individual: 3
    },
    qualification: {
      'the wealthiest of the group': 1,
      'the strongest of the group': 1,
      'able to rise to power by completing a masterpiece': 2,
      'able to rise to power by completing an ordeal': 1,
      'the most charismatic of the group': 1,
      'democratically elected': 1,
      'able to oust the previous leadership': 1,
      'able to rise to power through nepotism': 3,
      'promoted by being the most powerful in the group': 1
    },
    base: {
      title: 'Maestro',
      hasClass: true,
      profession: 'bard',
      background: 'entertainer'
    }
  },
  wordNoun: 'college',
  probability: 5,
  alliesList: {
    priests: 1,
    urchins: 2,
    nobles: 3
  },
  rivalsList: {
    bandits: 4
  },
  joiningRequirement: {
    'a display of skill': 3,
    'some social status': 3,
    'an excellent reputation': 3
  },
  joiningInitiation: {
    'a simple form to be filled': 2,
    'an oath to be taken': 1,
    'a secret ritual': 1
  },
  members: {
    membershipIsMutuallyExclusive: true,
    membershipIsTotallyExclusive: false,
    professions: [
      'bard',
      'singer',
      'musician',
      'arranger',
      'composer',
      'copyist',
      'instrument Maker',
      'playwright',
      'luthier'
    ]
  },
  membersTrait: {
    'the ring that members are given': 1,
    'their excessively bureaucratic tendencies': 1,
    'their absentmindedness': 1,
    'their egos': 1,
    'their attention to detail': 1,
    'their creativity': 1,
    'their lust for fame': 1,
    'their pride': 1,
    'their terrible ballads': 1,
    'their limerick rhyming': 1,
    'their funky harmonies': 1,
    'their use of tritone substitution and negative harmony': 1,
    'their stochastically generated microtonal four-voice fugues': 1
  },
  names: {
    main: [
      'Rehearsals',
      'Musicians',
      'Bards',
      'Harmonies',
      'Poems',
      'Ballads',
      'Arias',
      'Lutes',
      'Minstrels'
    ],
    adjective: [
      'Tuneful',
      'Melodious',
      'Inspired',
      'Twelve Tone',
      'Busking'
    ],
    group: [
      'Symphony',
      'Quartet',
      'Ensemble',
      'Society',
      'Group',
      'League',
      'Collective',
      'Brothers',
      'Brotherhood',
      'Order'
    ],
    unique: [
      'Copperback',
      'The Tumbling Pebbles',
      'King',
      'Megabeggars',
      'The Wu Tang Clang',
      'Earth, Wind and Shire',
      'Iron Wench',
      'Sex Crossbows',
      'Def leprechaun'
    ]
  },
  motivation: {
    money: 3,
    fame: 5,
    glory: 3,
    politics: 1
  },
  resources: {
    'gold': 3,
    'contacts': 5,
    'old favours': 4,
    'important manuscripts': 4,
    'masterpieces': 3,
    'magical instruments': 3
  }
}
