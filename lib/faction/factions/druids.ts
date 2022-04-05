import { FactionTypeData } from '../factionData'

export const druids: FactionTypeData = {
  type: 'druids',
  leader: {
    format: {
      group: 5,
      individual: 3
    },
    qualification: {
      'the wealthiest of the group': 3,
      'able to rise to power by completing an ordeal': 1,
      'the most charismatic of the group': 1,
      'democratically elected': 1,
      'able to oust the previous leadership': 1,
      'able to rise to power through nepotism': 3,
      'promoted by being the most powerful in the group': 1
    },
    base: {
      hasClass: true,
      profession: 'druid'
    }
  },
  wordNoun: 'grove',
  probability: 5,
  alliesList: {
    bards: 1,
    rangers: 1
  },
  rivalsList: {
    assassins: 1,
    wizards: 1
  },
  joiningRequirement: {
    'become a druid': 1,
    'give up all worldly possessions': 1
  },
  joiningInitiation: {
    'fight a bear with your bare hands': 1
  },
  members: {
    membershipIsMutuallyExclusive: true,
    membershipIsTotallyExclusive: false,
    professions: [
      'druid',
      'ranger',
      'forester',
      'fowler',
      'forager',
      'arborist'
    ]
  },
  membersTrait: {
    'brown and dirty robes': 1,
    'leathery tanned skin': 1
  },
  names: {
    main: [
      'Green',
      'Wild',
      'Forest',
      'Stream',
      'Sky'
    ],
    adjective: [
      'Holy',
      'Great',
      'Wide',
      'Open'
    ],
    group: [
      'Coven',
      'Circle',
      'Tribe',
      'Grove'
    ],
    unique: [
      'Circle of the Green'
    ]
  },
  motivation: {
    'peace': 1,
    'growth of nature': 1,
    'love of nature': 1
  },
  resources: {
    'tame animals': 5
  }
}
