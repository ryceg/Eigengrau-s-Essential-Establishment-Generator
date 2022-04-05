import { FactionTypeData } from '../factionData'

export const clergy: FactionTypeData = {
  type: 'clergy',
  leader: {
    format: {
      group: 5,
      individual: 3
    },
    qualification: {
      'the wealthiest of the group': 1,
      'able to rise to power by communing with a deity': 4,
      'able to rise to power by completing an ordeal': 1,
      'the most charismatic of the group': 1,
      'democratically elected': 1,
      'able to oust the previous leadership': 1,
      'able to rise to power through nepotism': 3,
      'promoted by being the most powerful in the group': 1
    },
    base: {
      title: 'Clergyman',
      hasClass: true,
      profession: 'cleric'
    }
  },
  wordNoun: 'church',
  probability: 5,
  alliesList: {
    mercenaries: 1,
    commoners: 1,
    nobles: 1,
    artisans: 1,
    seers: 1
  },
  rivalsList: {
    assassins: 1,
    bards: 1,
    thieves: 1,
    commoners: 1
  },
  joiningRequirement: {
    'holy deeds': 1,
    'a show of faith': 1,
    'a good deed': 1,
    'a generous tithe': 1
  },
  joiningInitiation: {
    'sacraments and rituals': 1,
    'a blessing from the head priest': 1
  },
  members: {
    membershipIsMutuallyExclusive: true,
    membershipIsTotallyExclusive: true,
    professions: [
      'priest',
      'pilgrim',
      'nun',
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
    'amulets with a holy sigil': 1,
    'the ring that members are given': 1,
    'wearing flowing white robes': 1,
    'a holy symbol tattooed on their face': 1
  },
  names: {
    main: [
      'Mother',
      'Father',
      'Lord'
    ],
    adjective: [
      'Heavenly',
      'Merciful',
      'Holy',
      'Righteous',
      'Saintly'
    ],
    group: [
      'Church',
      'Convent',
      'Congregation',
      'Clergy'
    ],
    unique: [
      "The Lord's Chosen",
      'The Greater Good',
      'The Greatest Good',
      'The Convent',
      'The Clergy'
    ]
  },
  motivation: {
    devotion: 3,
    power: 1,
    politics: 1
  },
  resources: {
    contacts: 1
  }
}
