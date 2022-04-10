import { FactionTypeData } from '../factionData'

export const nobles: FactionTypeData = {
  type: 'nobles',
  leader: {
    format: {
      group: 1,
      individual: 5
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
      title: 'Lord',
      hasClass: false,
      background: 'noble'
    }
  },
  wordNoun: 'society',
  probability: 8,
  alliesList: {
    hitmen: 4,
    seers: 3
  },
  rivalsList: {
    commoners: 5,
    bandits: 4,
    assassins: 4
  },
  joiningRequirement: {
    'some social status': 3,
    'an excellent reputation': 3
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
      'noble'
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
      'Ladies',
      'People',
      'Men',
      'Lords',
      'Heirs',
      'Land Owners',
      'Barons',
      'Tycoons',
      'Nobles',
      'Gentlemen'
    ],
    adjective: [
      'Sophisticated',
      'Intelligent',
      'Refined',
      'Cultured',
      'Wealthy',
      'Distinguished'
    ],
    group: [
      'Society',
      'Group',
      'Dinner Club',
      'League',
      'Club'
    ],
    unique: [
      'The People Hunters',
      'The Fur Coat Enthusiasts',
      'The Heir Apparents',
      'The Dead Parents Club',
      'The High Horse'
    ]
  },
  motivation: {
    money: 3,
    fame: 1,
    power: 4,
    glory: 1,
    vengeance: 3,
    politics: 5
  },
  resources: {
    'gold': 3,
    'contacts': 5,
    'old favours': 4,
    'important manuscripts': 4,
    'masterpieces': 3
  }
}
