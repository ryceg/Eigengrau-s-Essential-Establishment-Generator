import { FactionTypeData } from '../factionData'

export const bandits: FactionTypeData = {
  type: 'bandits',
  leader: {
    format: {
      group: 2,
      individual: 5
    },
    qualification: {
      'the wealthiest of the group': 1,
      'the strongest of the group': 2,
      'able to rise to power by completing an ordeal': 3,
      'the most charismatic of the group': 1,
      'democratically elected': 1,
      'able to oust the previous leadership': 1,
      'able to rise to power through nepotism': 3,
      'promoted by being the most powerful in the group': 1
    },
    base: {
      title: 'Chief',
      hasClass: true,
      profession: 'fighter',
      background: [
        'soldier',
        'charlatan',
        'criminal'
      ]
    }
  },
  wordNoun: 'gang',
  probability: 2,
  alliesList: {
    hitmen: 4,
    urchins: 2
  },
  rivalsList: {
    commoners: 5,
    bandits: 3,
    mercenaries: 5
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
    'a secret task': 2,
    'an oath to be taken': 2,
    'a secret ritual': 2
  },
  members: {
    membershipIsMutuallyExclusive: true,
    membershipIsTotallyExclusive: false,
    professions: [
      'thief',
      'smuggler',
      'marauder',
      'kidnapper',
      'highwayman',
      'fugitive',
      'burglar',
      'bandit'
    ]
  },
  membersTrait: {
    'the ring that members are given': 1,
    'their excessively bureaucratic tendencies': 1,
    'their distinctive headgear': 1,
    'their white horses': 1,
    'their love of a good fight': 3,
    'being ruthless in combat': 1,
    'following any order given to them': 1,
    'fighting to the death': 1
  },
  names: {
    main: [
      'Ravens',
      'Crows',
      'Jackals',
      'Flesh',
      'Knife',
      'Club',
      'Axe',
      'Sword',
      'Vultures',
      'Dingoes',
      'Tigers'
    ],
    adjective: [
      'Cutthroat',
      'Backstabbing',
      'Two Timing',
      'Orphaned',
      'Dead',
      'Brutal',
      'Bleeding',
      'Bloodied',
      'Razor',
      'Serrated'
    ],
    group: [
      'Gang',
      'Sons',
      'Clan',
      'Vassals'
    ],
    unique: [
      'Tunnel Snakes',
      'Moonrunners',
      'The Orphans',
      'Turnbull ACs',
      'VanCortlandt Rangers',
      'The Destroyers',
      'The Jones Street Boys',
      'Saracens',
      "Satan's Mothers",
      'The Warriors',
      'Baseball Furies',
      'Boppers',
      'Electric Eliminators',
      'Gramercy Riffs',
      'Hi-Hats',
      'Hurricanes',
      'Lizzies',
      'Panzers',
      'Punks',
      'Rogues',
      'Savage Huns',
      'The VanBuren Boys'
    ]
  },
  motivation: {
    money: 3,
    fame: 1,
    power: 3,
    glory: 1,
    vengeance: 3,
    politics: 3
  },
  resources: {
    'magical weapons': 3,
    'gold': 3,
    'blackmail material': 4,
    'stolen goods': 5
  }
}
