import { FactionTypeData } from '../factionData'

export const artisans: FactionTypeData = {
  type: 'artisans',
  leader: {
    format: {
      group: 3,
      individual: 5
    },
    qualification: {
      'the wealthiest of the group': 1,
      'the strongest of the group': 1,
      'able to rise to power by completing a masterpiece': 2,
      'able to rise to power by completing an ordeal': 1,
      'the most charismatic of the group': 1,
      'democratically elected': 1,
      'able to oust the previous leadership': 1,
      'able to rise to power through nepotism': 3,
      'promoted by being the most powerful in the group': 1
    },
    base: {
      title: 'Aesthetician',
      hasClass: false,
      profession: 'artisan',
      background: 'guild artisan'
    }
  },
  wordNoun: 'guild',
  probability: 5,
  alliesList: {
    hitmen: 2,
    nobles: 4
  },
  rivalsList: {
    nobles: 1,
    commoners: 1,
    bandits: 4,
    assassins: 3
  },
  joiningRequirement: {
    'a display of skill': 3,
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
      'painter',
      'dancer',
      'bard',
      'artisan',
      'model',
      'rope walker',
      'furniture artisan',
      'musician',
      'playwright',
      'poet',
      'singer',
      'skald',
      'stage magician',
      'theater director',
      'stagehand',
      'talent scout',
      'actor',
      'jester',
      'minstrel',
      'sculptor',
      'writer',
      'acrobat',
      'trapezist',
      'arranger',
      'celebrity',
      'choirmaster',
      'clown',
      'comedian',
      'conductor',
      'contortionist',
      'curator',
      'costumer',
      'equilibrist',
      'fashion designer',
      'glass painter',
      'juggler',
      'limner',
      'makeup artist'
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
      'Artisans',
      'Artists'
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
      'Order'
    ],
    unique: [
      'The Cubists',
      'The Impressionables',
      'The Impressionists',
      'The Romanticists',
      'The Dirty Paintings',
      'The Dirty Painters',
      'The Dirty Paint Club'
    ]
  },
  motivation: {
    money: 5,
    fame: 3,
    glory: 3,
    vengeance: 1,
    politics: 1
  },
  resources: {
    'artifacts': 3,
    'magical trinkets': 3,
    'masterpieces': 3
  }
}
