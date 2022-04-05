import { FactionTypeData } from '../factionData'

export const seers: FactionTypeData = {
  type: 'seers',
  leader: {
    format: {
      group: 4,
      individual: 5
    },
    qualification: {
      'the wealthiest of the group': 1,
      'the strongest of the group': 2,
      'able to rise to power by completing an ordeal': 1,
      'the most charismatic of the group': 1,
      'democratically elected': 1,
      'able to oust the previous leadership': 1,
      'able to rise to power through nepotism': 3,
      'promoted by being the most powerful in the group': 1
    },
    base: {
      title: 'High Seer',
      hasClass: false,
      profession: 'seer',
      background: [
        'acolyte',
        'sage'
      ]
    }
  },
  wordNoun: 'guild',
  probability: 3,
  alliesList: {
    priests: 4,
    nobles: 4
  },
  rivalsList: {
    scholars: 4
  },
  joiningRequirement: {
    'some social status': 1,
    'a display of skill': 3,
    'referral by an existing member': 1
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
      'pilgrim',
      'medium',
      'friar',
      'clergyman',
      'theologian',
      'templar',
      'sexton',
      'prophet',
      'missionary',
      'inquisitor',
      'high priest',
      'diviner',
      'deacon',
      'cardinal',
      'cantor',
      'bishop',
      'archbishop',
      'acolyte',
      'abbot'
    ]
  },
  membersTrait: {
    'the ring that members are given': 1,
    'their excessively bureaucratic tendencies': 1,
    'the vacant look that members have': 1,
    'the vacant stare that members pull (in order to fit in with the others)': 1,
    'the plain robes they wear': 1,
    'the bright blue coloured sashes they wear': 1
  },
  names: {
    main: [
      'Seers',
      'Predictionists',
      'Future Seers',
      'Observers',
      'Eyes',
      'Historians'
    ],
    adjective: [
      'All Seeing',
      'All Knowing',
      'Watchful',
      'Future'
    ],
    group: [
      'Society',
      'Group',
      'Collective',
      'Brothers',
      'Brotherhood',
      'Order'
    ],
    unique: [
      'We Looked Into The Future To Find Our Name And This Was The Name So I Guess This Is The Name',
      'Seers of the Obscene',
      'Seers of the Scenic'
    ]
  },
  motivation: {
    money: 2,
    knowledge: 4,
    fame: 1,
    power: 2,
    glory: 1,
    vengeance: 1,
    politics: 3
  },
  resources: {
    'artifacts': 4,
    'blackmail material': 4
  }
}
