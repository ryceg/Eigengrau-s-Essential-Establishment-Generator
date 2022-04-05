import { FactionTypeData } from '../factionData'

export const thieves: FactionTypeData = {
  type: 'thieves',
  leader: {
    format: {
      group: 1,
      individual: 5
    },
    qualification: {
      'the most skilled of the group': 1,
      'able to rise to power by completing an ordeal': 2,
      'the most charismatic of the group': 1,
      'democratically elected': 1,
      'able to oust the previous leadership': 3,
      'able to rise to power through nepotism': 3,
      'promoted by being the most powerful in the group': 1
    },
    base: {
      title: 'High Rogue',
      hasClass: true,
      profession: 'rogue',
      background: [
        'charlatan',
        'criminal'
      ]
    }
  },
  wordNoun: 'guild',
  probability: 10,
  alliesList: {
    thieves: 3,
    urchins: 3,
    hitmen: 2,
    assassins: 2,
    bandits: 3
  },
  rivalsList: {
    priests: 3,
    commoners: 4
  },
  joiningRequirement: {
    'referral by an existing member': 1,
    'referral by several members': 1,
    'endorsement by the current leader': 1,
    'a display of skill': 2,
    'a display of loyalty': 1,
    'a display of bravery': 1
  },
  joiningInitiation: {
    'a heist': 1,
    'a secret task': 1,
    'a secret ritual': 2
  },
  members: {
    membershipIsMutuallyExclusive: true,
    membershipIsTotallyExclusive: false,
    professions: [
      'thief',
      'burglar',
      'highwayman',
      'rogue',
      'assassin',
      'bandit',
      'conman',
      'fence',
      'gamefighter',
      'cutpurse',
      'crime boss',
      'drug dealer',
      'drug lord',
      'extortioner',
      'forger',
      'fugitive',
      'kidnapper',
      'loan shark',
      'grave robber',
      'poacher',
      'smuggler',
      'gambler'
    ]
  },
  membersTrait: {
    'a missing earlobe': 1,
    "absolutely nothing; they're completely anonymous": 1,
    'a dagger given to ever member': 1,
    'a ring given to every member': 1,
    'a grey hood': 1,
    'their lack of manners': 1,
    'their bad stench': 1,
    'their rabble-rousing tendencies': 1
  },
  names: {
    main: [
      'Cutpurses',
      'Pilferers',
      'Thieves',
      'Rogues',
      'Property Reappropriaters'
    ],
    adjective: [
      'Clever',
      'Sneaky',
      'Cunning',
      'Conniving',
      'Honest',
      'Black',
      'Invisible',
      'Silent'
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
      'Silent Movers',
      'Silent Partners',
      'The Tip-Toe Club',
      'Good Fences',
      'League of Lifters and Grifters',
      'The Neighborhood Watch',
      'The Unseen Hand',
      'The Kleptocrats',
      'The Riverside Raiders',
      'Black Market Mayhem',
      'The Boondock Burglars',
      'The Dock Workers',
      'Pickpockets Anonymous'
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
    'blackmail material': 4,
    'stolen goods': 4,
    'contacts': 3
  }
}
