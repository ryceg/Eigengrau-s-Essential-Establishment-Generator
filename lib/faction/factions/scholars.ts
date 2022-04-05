import { FactionTypeData } from '../factionData'

export const scholars: FactionTypeData = {
  type: 'scholars',
  leader: {
    format: {
      group: 4,
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
      title: 'Chief Scholar',
      hasClass: false,
      profession: 'professor',
      background: [
        'sage',
        'acolyte'
      ]
    }
  },
  wordNoun: 'guild',
  probability: 3,
  alliesList: {
    priests: 3,
    nobles: 2,
    artisans: 2,
    seers: 1
  },
  rivalsList: {
    seers: 1,
    priests: 3,
    commoners: 1,
    bandits: 3,
    assassins: 3
  },
  joiningRequirement: {
    'some social status': 1,
    'a display of skill': 3,
    'referral by an existing member': 1
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
      'political dissident',
      'scholar',
      'cartographer',
      'mathematician',
      'horologist',
      'entomologism',
      'engineer',
      'drakologist',
      'dean',
      'chemist',
      'botanist',
      'astronomer',
      'assayer',
      'archaeologist',
      'anthropologist',
      'abecedarian',
      'teacher',
      'student',
      'professor',
      'philosopher',
      'linguist',
      'librarian',
      'historian'
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
      'Scroll Keepers',
      'Book Keepers',
      'Collectors',
      'Librarians',
      'Knowledge Holders',
      'Proof Readers',
      'Academics'
    ],
    adjective: [
      'Scholarly',
      'Indentured',
      'Absent Minded',
      'Knowledgeable',
      'Intelligent',
      'Unknown',
      'Eldritch',
      'Memorized',
      'Cited'
    ],
    group: [
      'Society',
      'Candidates',
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
      'Citation Needed',
      'Indentured Candidates',
      'The Cultists of Weekee',
      'Encyclopaedia Uninformatica'
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
    'gold': 3,
    'contacts': 5,
    'old favours': 4,
    'important manuscripts': 4
  }
}
