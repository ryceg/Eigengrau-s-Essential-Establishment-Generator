import { FactionTypeData } from '../factionData'

export const military: FactionTypeData = {
  type: 'military',
  leader: {
    format: {
      group: 1,
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
      title: 'Commander',
      hasClass: true,
      profession: 'fighter',
      background: [
        'soldier',
        'soldier',
        'noble'
      ]
    }
  },
  wordNoun: 'army',
  probability: 3,
  alliesList: {
    hitmen: 4,
    nobles: 4,
    bandits: 3
  },
  rivalsList: {
    bandits: 3,
    assassins: 4
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
    membershipIsTotallyExclusive: true,
    professions: [
      'fighter',
      'captain',
      'warmage',
      'special force soldier',
      'sapper',
      'runner',
      'sergeant',
      'quartermaster',
      'medic',
      'marshall',
      'marksman',
      'lieutenant',
      'fifer',
      'commissar',
      'cavalier',
      'general'
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
      'Hand',
      'Fist',
      'Gauntlet',
      'Glove',
      'Hammer',
      'Shield',
      'Cloak',
      'Dagger',
      'Mace',
      'Sword'
    ],
    adjective: [
      'Black',
      'White',
      'Shining',
      'Just',
      'Tall',
      'Impenetrable',
      'Unbreakable',
      'Brass',
      'Bronze',
      'Blue',
      'Strong',
      'Mighty',
      'Death'
    ],
    group: [
      'Axemen',
      'Swordsmen',
      'Pikesmen',
      'Squad',
      'Battalion',
      'Battlesquad',
      'Fighters'
    ],
    unique: [
      'The Steel Hydras',
      'The Silver Hippogryphs',
      'The Black Glove of Anubis',
      "Hera's Tears",
      'The Rabid Possums',
      'Macguffins, Ltd.',
      'The Wayfaring Strangers',
      'Valiant, Inc.',
      'Blood of the Gordon',
      'The Green Hand',
      'The Tomb Raiders',
      'The Order of the Obsidian Flame',
      "The King's Ransom",
      'The Golden Guardians',
      'Dragonfire, Inc.',
      'Path of the Righteous Man',
      'Hellraisers for Hire',
      'Band of the Crimson Lion',
      'Company of Champions',
      'The Covenant of the Shield',
      'Crusaders of the Everlasting Chalice',
      'The Iron Fang',
      'The Sapphire Guard',
      'The Azure Guild',
      'Goblincleavers',
      'The Redcrest Five',
      'Necessary Chaotic Neutral',
      'Magic Item and Artifact Retrieval Specialists',
      'The Dungeon Delvers',
      'Brave Crusaders',
      'Daring Champions'
    ]
  },
  motivation: {
    money: 6,
    fame: 1,
    power: 4,
    glory: 3,
    politics: 1
  },
  resources: {
    'magical weapons': 3,
    'gold': 3,
    'old favours': 3
  }
}
