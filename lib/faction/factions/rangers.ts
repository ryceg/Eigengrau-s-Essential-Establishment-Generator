import { FactionTypeData } from '../factionData'

export const rangers: FactionTypeData = {
  type: 'rangers',
  leader: {
    format: {
      group: 4,
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
      title: 'Lord Ranger',
      hasClass: true,
      profession: 'ranger',
      background: [
        'outlander',
        'hermit'
      ]
    }
  },
  wordNoun: 'guild',
  probability: 4,
  alliesList: {
    priests: 2,
    nobles: 2,
    seers: 2
  },
  rivalsList: {
    bandits: 4,
    mercenaries: 3
  },
  joiningRequirement: {
    'some social status': 1,
    'referral by an existing member': 1,
    'a display of bravery': 2
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
      'druid',
      'ranger',
      'forester',
      'fowler',
      'forager',
      'arborist'
    ]
  },
  membersTrait: {
    'the ring that members are given': 1,
    'their pet ferrets': 1,
    'their pet sparrows': 1,
    'the twigs that are strewn throughout their hair': 1,
    'their terrible smell': 1,
    'the lack of footwear': 1
  },
  names: {
    main: [
      'Wilderness',
      'Woods',
      'Lands',
      'Forests',
      'Trees',
      'Animals'
    ],
    adjective: [
      'Tree Loving',
      'Padfoot',
      'Barefoot',
      'Protective',
      'Watchful',
      'Careful',
      'Honest'
    ],
    group: [
      'Society',
      'Group',
      'Collective',
      'Brothers',
      'Brotherhood',
      'Order',
      'Protectors',
      'Defenders',
      'Conservationists',
      'Guardians'
    ],
    unique: [
      'Feathers, Fur and Friends',
      'Boy Scouts',
      'Primitive Technologists'
    ]
  },
  motivation: {
    money: 1,
    knowledge: 3,
    fame: 1,
    power: 3,
    glory: 3,
    vengeance: 1,
    politics: 3
  },
  resources: {
    'old favours': 4,
    'tame animals': 4,
    'contacts': 3
  }
}
