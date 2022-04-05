import { FactionTypeData } from '../factionData'

export const commoners: FactionTypeData = {
  type: 'commoners',
  leader: {
    format: {
      group: 5,
      individual: 3
    },
    qualification: {
      'the wealthiest of the group': 1,
      'the most charismatic of the group': 4,
      'democratically elected': 6,
      'able to oust the previous leadership': 4,
      'able to rise to power through nepotism': 3,
      'promoted by being the most powerful in the group': 1
    },
    base: {
      title: 'Secretary',
      hasClass: false,
      profession: 'politician'
    }
  },
  wordNoun: 'union',
  probability: 5,
  alliesList: {
    mercenaries: 1,
    commoners: 5,
    artisans: 1,
    seers: 1,
    craftsman: 2
  },
  rivalsList: {
    assassins: 1,
    bards: 1,
    thieves: 1,
    nobles: 5
  },
  joiningRequirement: {
    'a show of solidarity': 1,
    'a show of charity': 1,
    'a good deed': 1,
    'a generous donation': 1
  },
  joiningInitiation: {
    'a tattooing': 1,
    'a pledge': 1
  },
  members: {
    membershipIsMutuallyExclusive: true,
    membershipIsTotallyExclusive: false,
    professions: [
      'animal handler',
      "blacksmith's assistant",
      'brickmason',
      'caravanner',
      'chef',
      'cook',
      'cooper',
      'cowherd',
      'glovemaker',
      'herbalist',
      'inventor',
      'jeweller',
      'librarian',
      'locksmith',
      'masseur',
      'merchant',
      'minister',
      'mortician',
      'nurse',
      'patissier',
      'scholar',
      "ship's captain",
      'silversmith',
      'spice merchant',
      'stone mason',
      'shopkeep',
      'teacher',
      'veterinarian',
      'vintner',
      'woodcarver',
      'writer',
      'falconer',
      'florist',
      'forester',
      'gamekeeper',
      'horse trainer',
      'prospector',
      'general contractor',
      'glass painter',
      'artisan',
      'accountant',
      'interpreter',
      'coinsmith',
      'furniture artisan',
      'lapidary',
      'assay master',
      'conservationist',
      'notary',
      'orator',
      'trainer'
    ]
  },
  membersTrait: {
    'amulets with a sigil': 1,
    'the ring that members are given': 1,
    'the zealous attitude': 1
  },
  names: {
    main: [
      'People',
      'Workers',
      'Salarymen',
      'Labourers',
      'Commoners',
      'Folk'
    ],
    adjective: [
      'United',
      'Indivisable',
      'Undisputed',
      'Unified',
      'Fair',
      'Righteous',
      'Common Sense',
      'Triumphant'
    ],
    group: [
      'Collective',
      'Union',
      'Coalition',
      'Society',
      'Association',
      'Front'
    ],
    unique: [
      'The United People\'s Front'
    ]
  },
  motivation: {
    power: 2,
    politics: 4
  },
  resources: {
    contacts: 3
  }
}
