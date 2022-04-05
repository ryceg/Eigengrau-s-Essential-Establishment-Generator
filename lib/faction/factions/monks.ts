import { FactionTypeData } from '../factionData'

export const monks: FactionTypeData = {
  type: 'monks',
  leader: {
    format: {
      group: 1,
      individual: 5
    },
    qualification: {
      'the poorest of the group': 1,
      'the strongest of the group': 2,
      'able to rise to power by completing an ordeal involving fasting for over a month': 1,
      'the most charismatic of the group': 1,
      'democratically elected': 1,
      'able to oust the previous leadership': 1,
      'able to rise to power through nepotism': 3,
      'promoted by being the most powerful in the group': 1
    },
    base: {
      title: 'High Monk',
      hasClass: true,
      profession: 'monk',
      background: [
        'acolyte',
        'sage'
      ]
    }
  },
  wordNoun: 'group',
  probability: 4,
  alliesList: {
    priests: 4,
    artisans: 2
  },
  rivalsList: {
    artisans: 1,
    priests: 2,
    bandits: 3
  },
  joiningRequirement: {
    'some social status': 1,
    'referral by an existing member': 1,
    'a display of skill': 2
  },
  joiningInitiation: {
    'a simple form to be filled': 2,
    'an oath to be taken': 1,
    'a secret ritual': 1
  },
  members: {
    membershipIsMutuallyExclusive: true,
    membershipIsTotallyExclusive: true,
    professions: [
      'monk',
      'hermit'
    ]
  },
  membersTrait: {
    'the ring that members are given': 1,
    'their excessively bureaucratic tendencies': 1,
    'their shaved heads': 1,
    'their malnutrition': 1,
    'their calm presence': 1,
    'their know-it-all answers': 1,
    'their terrible jokes': 1,
    'their amazing beer': 1,
    'the tankard that all members carry': 1
  },
  names: {
    main: [
      'Monks',
      'Robes',
      'Stone',
      'Rock'
    ],
    adjective: [
      'Understanding',
      'Meditating',
      'Calm',
      'Unmoving'
    ],
    group: [
      'Society',
      'Group',
      'League',
      'Collective',
      'Brothers',
      'Brotherhood',
      'Order'
    ],
    unique: [
      'Ommmm',
      'The Holy Loincloth',
      'The Purposely Unwashed'
    ]
  },
  motivation: {
    money: 3,
    knowledge: 2,
    fame: 1,
    power: 3,
    glory: 1,
    vengeance: 3,
    politics: 2
  },
  resources: {
    'artifacts': 3,
    'holy relics': 3,
    'gold': 3,
    'sacred texts': 4
  }
}
