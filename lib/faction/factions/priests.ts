import { FactionTypeData } from '../factionData'

export const priests: FactionTypeData = {
  type: 'priests',
  leader: {
    format: {
      group: 1,
      individual: 5
    },
    qualification: {
      'the wealthiest of the group': 1,
      'the holiest of the group': 2,
      'able to rise to power by completing an ordeal': 1,
      'the most charismatic of the group': 1,
      'democratically elected': 1,
      'able to oust the previous leadership': 1,
      'able to rise to power through nepotism': 3,
      'promoted by being the most powerful in the group': 1
    },
    base: {
      title: 'The Holy',
      hasClass: true,
      profession: 'cleric',
      background: [
        'acolyte',
        'sage'
      ]
    }
  },
  wordNoun: 'college',
  probability: 5,
  alliesList: {
    nobles: 3,
    artisans: 2
  },
  rivalsList: {
    artisans: 1,
    bandits: 4
  },
  joiningRequirement: {
    'some social status': 1,
    'referral by an existing member': 1,
    'a display of skill': 2
  },
  joiningInitiation: {
    'a simple form to be filled': 2,
    'an oath to be taken': 2,
    'a secret ritual': 2
  },
  members: {
    membershipIsMutuallyExclusive: true,
    membershipIsTotallyExclusive: false,
    professions: [
      'priest',
      'pilgrim',
      'friar',
      'clergyman',
      'theologian',
      'templar',
      'sexton',
      'prophet',
      'pardoner',
      'missionary',
      'inquisitor',
      'high priest',
      'exorcist',
      'diviner',
      'deacon',
      'confessor',
      'cardinal',
      'cantor',
      'bishop',
      'archbishop',
      'almoner',
      'acolyte',
      'abbot'
    ]
  },
  membersTrait: {
    'the ring that members are given': 1,
    'their excessively bureaucratic tendencies': 1,
    'the walking sticks that all members carry': 1,
    'the beards that they grow': 1,
    'the grey robes they wear': 1,
    'the amulet they wear': 1
  },
  names: {
    main: [
      'Priests',
      'Clergy',
      'Churchpeople',
      'People of the Cloth',
      'Robes',
      'Incense',
      'Elders',
      'Preachers'
    ],
    adjective: [
      'Holy',
      'Faithful',
      'Caring',
      'Civil',
      'Devout',
      'Devoted',
      'Compassionate'
    ],
    group: [
      'Society',
      'Group',
      'League',
      'Servants',
      'Collective',
      'Brothers',
      'Brotherhood',
      'Brotherhood',
      'Priesthood',
      'Order'
    ],
    unique: [
      'Definitely Not A Tax Haven',
      'Repent Now',
      'The Church of the Real God Unlike Those Fake Gods',
      'The Church of the Real God',
      'The Gods'
    ]
  },
  motivation: {
    money: 3,
    knowledge: 2,
    fame: 1,
    power: 3,
    glory: 1,
    vengeance: 3,
    politics: 4
  },
  resources: {
    'artifacts': 3,
    'holy relics': 3,
    'gold': 3,
    'sacred texts': 4
  }
}
