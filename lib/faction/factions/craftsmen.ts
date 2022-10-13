import { FactionTypeData } from '../factionData'

export const craftsmen: FactionTypeData = {
  type: 'craftsmen',
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
      title: 'Master',
      hasClass: false,
      profession: 'craftsman',
      background: 'guild artisan'
    }
  },
  wordNoun: 'guild',
  probability: 5,
  alliesList: {
    priests: 1,
    nobles: 3,
    artisans: 2,
    seers: 1,
    commoners: 3
  },
  rivalsList: {
    commoners: 2,
    bandits: 3
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
    membershipIsMutuallyExclusive: false,
    membershipIsTotallyExclusive: false,
    professions: [
      'potter',
      'perfumer',
      'locksmith',
      'leatherworker',
      'jeweller',
      'hatter',
      'goldsmith',
      'silversmith',
      'glovemaker',
      'furrier',
      'cobbler',
      'craftsman',
      'clock maker',
      'carpenter',
      'blacksmith',
      'armorer',
      'apprentice',
      'wheelwright',
      'weaponsmith',
      'tinker',
      'printer',
      'optician',
      'luthier',
      'lapidary',
      'instrument Maker',
      'glassblower',
      'furniture artisan',
      'engraver'
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
    'their pride': 1
  },
  names: {
    main: [
      'Creators',
      'Visionaries',
      'Crafters',
      'Craftsmen'
    ],
    adjective: [
      'Creative',
      'Inspired',
      'Bohemian',
      'Unpaid',
      'God-Touched'
    ],
    group: [
      'Society',
      'Group',
      'League',
      'Collective',
      'Brothers',
      'Brotherhood',
      'Order',
      'Workshop',
      'Factory'
    ],
    unique: [
      'The Clicks of the Spring',
      'The Offerman Order',
      'The Blessed Workshop',
      'The Factory'
    ]
  },
  motivation: {
    money: 5,
    fame: 1,
    power: 3,
    glory: 1,
    vengeance: 3,
    politics: 1
  },
  resources: {
    'gold': 3,
    'contacts': 3,
    'important manuscripts': 4,
    'masterpieces': 3,
    'artifacts': 3,
    'magical contraptions': 3
  }
}
