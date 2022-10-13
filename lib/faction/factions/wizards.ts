import { FactionTypeData } from '../factionData'

export const wizards: FactionTypeData = {
  type: 'wizards',
  leader: {
    format: {
      group: 5,
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
      title: 'Archmage',
      hasClass: true,
      profession: 'wizard',
      background: [
        'acolyte',
        'sage'
      ]
    }
  },
  wordNoun: 'college',
  probability: 10,
  alliesList: {
    nobles: 2,
    artisans: 2,
    seers: 1
  },
  rivalsList: {
    seers: 1,
    priests: 4,
    assassins: 2
  },
  joiningRequirement: {
    'some social status': 1,
    'a display of skill': 3
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
      'wizard',
      'sorcerer',
      'archmage',
      'abjurer',
      'mage',
      'medium',
      'artificer',
      'conjuror',
      'elementalist',
      'enchanter',
      'evoker',
      'hearth witch',
      'illusionist',
      'meteorologist',
      'ritualist',
      'runecaster',
      'sage',
      'shapeshifter',
      'summoner',
      'transmuter',
      'witchdoctor',
      'witch',
      'wordsmith',
      'warmage',
      'necromancer'
    ]
  },
  membersTrait: {
    'their lack of table manners': 1,
    'their extreme interest in the oddities of the arcane': 1,
    'the blue robes they wear': 1,
    'the sash that members are given': 1,
    'the ring that members are given': 1,
    'their excessively bureaucratic tendencies': 1
  },
  names: {
    main: [
      'Prestidigitators',
      'Illusionists',
      'Casters',
      'Magic Users',
      'Diviners',
      'Evokers',
      'Necromancers',
      'Abjurers',
      'Scroll Keepers',
      'Book Keepers',
      'Collectors',
      'Librarians'
    ],
    adjective: [
      'Arcane',
      'Magical',
      'Scholarly',
      'Absent Minded',
      'Knowledgeable',
      'Intelligent',
      'Unknown',
      'Eldritch',
      'Memorized'
    ],
    group: [
      'Society',
      'Academy',
      'University',
      'Club',
      'Scholarly Group',
      'League',
      'Collective',
      'Brothers',
      'Brotherhood',
      'Order'
    ],
    unique: [
      'We Make Magic!',
      'The Academy',
      'The Arcane Order',
      'Adepts Anonymous',
      'The Callers Club',
      'The Union of Universal Magic',
      'The University of the Unusual and Unexplained',
      'The College of Conjurers',
      "Necromancers' Network",
      "The Evokers' League",
      'The Nation of Abjuration',
      "Seers' and Company",
      'The Illusory Faction',
      'Spellcasters Anonymous'
    ]
  },
  motivation: {
    money: 2,
    fame: 3,
    knowledge: 4,
    power: 3,
    glory: 1,
    vengeance: 2,
    politics: 2
  },
  resources: {
    'magic scrolls': 4,
    'magical trinkets': 4
  }
}
