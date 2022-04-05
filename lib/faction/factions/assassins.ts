import { FactionTypeData } from '../factionData'

export const assassins: FactionTypeData = {
  type: 'assassins',
  leader: {
    format: {
      group: 2,
      individual: 5
    },
    qualification: {
      'the wealthiest of the group': 1,
      'the strongest of the group': 2,
      'able to rise to power by completing an ordeal': 1,
      'the most charismatic of the group': 1,
      'democratically elected': 1,
      'able to oust the previous leadership': 3,
      'able to rise to power through nepotism': 3,
      'promoted by being the most powerful in the group': 3
    },
    base: {
      hasClass: true,
      title: 'High Assassin',
      profession: 'rogue',
      background: [
        'charlatan',
        'soldier',
        'criminal'
      ]
    }
  },
  wordNoun: 'company',
  probability: 4,
  alliesList: {
    thieves: 3,
    urchins: 3,
    bandits: 3
  },
  rivalsList: {
    scholars: 2,
    mercenaries: 3
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
      'assassin',
      'rogue',
      'poisoner'
    ]
  },
  membersTrait: {
    'the ring that members are given': 1,
    "absolutely nothing; they're completely anonymous": 1,
    'their black sashes': 1,
    'their tendency to blink quickly': 1,
    'their quick tempers': 1
  },
  names: {
    main: [
      'Dagger',
      'Knife',
      'Executioners',
      'Hangmen',
      'Hitmen',
      'Killers',
      'Doctors'
    ],
    adjective: [
      'Cunning',
      'Discreet',
      'Quiet',
      'Bloody',
      'Rusted',
      'Poisoned',
      'Defiled'
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
      'Dead Is Dead',
      'The Killers',
      'The Slayers',
      'The Big Game Players',
      'The Blood Club',
      'The League of Silence',
      'The Silencers',
      'The Whispers',
      'The Shadow Faction',
      'Shadowfront'
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
    'blackmail material': 4,
    'stolen goods': 4,
    'contacts': 3
  }
}
