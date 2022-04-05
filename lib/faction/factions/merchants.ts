import { FactionTypeData } from '../factionData'

export const merchants: FactionTypeData = {
  type: 'merchants',
  leader: {
    format: {
      group: 2,
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
      title: 'Executive Officer',
      hasClass: false,
      profession: 'merchant',
      background: [
        'merchant',
        'charlatan',
        'noble'
      ]
    }
  },
  wordNoun: 'guild',
  probability: 10,
  alliesList: {
    priests: 2,
    hitmen: 3,
    nobles: 3,
    artisans: 3,
    mercenaries: 4,
    craftsmen: 4,
    commoners: 2
  },
  rivalsList: {
    commoners: 2,
    priests: 2,
    assassins: 3
  },
  joiningRequirement: {
    'some social status': 2,
    'an excellent reputation': 2
  },
  joiningInitiation: {
    'a simple form to be filled': 2,
    'an oath to be taken': 1
  },
  members: {
    membershipIsMutuallyExclusive: true,
    membershipIsTotallyExclusive: false,
    professions: [
      'noble',
      'merchant',
      'apothecarist',
      'bookseller',
      'butcher',
      'fishmonger',
      'ice seller',
      'patissier',
      'spice merchant',
      'street seller',
      'shopkeep',
      'wood seller',
      'banker',
      'chandler',
      'grocer',
      'minister'
    ]
  },
  membersTrait: {
    'the ring that members are given': 1,
    'their excessively bureaucratic tendencies': 1,
    'their purple robes': 1,
    'their gaudy jewellery': 1,
    'the fact that a member is always closely followed by a boy carrying a chest': 1
  },
  names: {
    main: [
      'Merchants',
      'Company',
      'Sellers and Buyers',
      'Traders',
      'Dealers',
      'Brokers',
      'Pedlars',
      'Hawkers',
      'Distributors'
    ],
    adjective: [
      'Shrewd',
      'Thrifty',
      'Golden Spoon',
      'Rich',
      'Miserly'
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
      'Amazang',
      'Goodest Purchase',
      'Nasduq Traders',
      'Fence Street Bets',
      'Personal Financers'
    ]
  },
  motivation: {
    money: 5,
    power: 1,
    glory: 1,
    vengeance: 1,
    politics: 3
  },
  resources: {
    'trade goods': 5,
    'gold': 4,
    'debtors': 6
  }
}
