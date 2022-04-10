import { FactionTypeData } from '../factionData'

export const guards: FactionTypeData = {
  type: 'guards',
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
      title: 'Captain',
      hasClass: true,
      profession: 'fighter',
      background: 'soldier'
    }
  },
  wordNoun: 'watch',
  probability: 5,
  livery: {
    colours: {
      primary: [
        'black',
        'red',
        'scarlet',
        'forest green',
        'royal blue',
        'light blue',
        'magenta',
        'pale yellow',
        'brown',
        'dark grey',
        'gunmetal',
        'maroon',
        'navy blue',
        'steel',
        'olive green',
        'orange',
        'sun yellow',
        'purple',
        'aquamarine',
        'turquoise',
        'lime green',
        'teal',
        'deep indigo',
        'violet',
        'white'
      ],
      secondary: [
        'black',
        'gold',
        'silver',
        'white',
        'pearl white',
        'purple',
        'tan',
        'olive green',
        'dark turquoise',
        'light brown'
      ]
    },
    insignia: [
      'a skull',
      'a bow & arrow',
      'an eagle',
      'a star',
      'an axe',
      'a set of crossed spears',
      'a shield',
      'a ghost',
      'a clenched fist',
      'a flame',
      'an arrow',
      'a dagger',
      'a sword',
      'a hammer',
      'the sun',
      'the moon',
      'a bat',
      'a bull',
      'a dragon',
      'a falcon',
      'a lion',
      'a raven',
      'a scorpion',
      'a snake',
      'a vulture',
      'a wolf',
      'a stag',
      'a sunburst',
      'three waves',
      'two fighting lions',
      'a leaping fish',
      'two crossed scimitars',
      'a crown',
      'a rose',
      'a squid',
      'an octopus',
      'a spider',
      'a stallion'
    ]
  },
  alliesList: {
    hitmen: 4,
    nobles: 4,
    commoners: 2,
    mercenaries: 1,
    merchants: 1,
    military: 3
  },
  rivalsList: {
    bandits: 3,
    assassins: 4,
    thieves: 3
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
      'guard',
      'city watch',
      'captain',
      'warmage',
      'mercenary',
      'medic',
      'lieutenant'
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
      'Sword',
      'Truncheon',
      'Club',
      'Maul',
      'Wand'
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
      'Lawful'
    ],
    alternateAdjective: [
      'Justice',
      'Righteousness',
      'Law',
      'Order',
      'Safety',
      'Strength'
    ],
    group: [
      'Regiment',
      'Guard',
      'Officers',
      'Guardsmen',
      'Protectors',
      'Protectorate',
      'Defenders',
      'Watch',
      'Watchers',
      'Watchmen',
      'Police',
      'Peacemen',
      'Axemen',
      'Swordsmen',
      'Pikesmen',
      'Squad',
      'Battalion',
      'Battlesquad',
      'Fighters',
      'Keepers'
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
    power: 1,
    glory: 1,
    politics: 1
  },
  resources: {
    'magical weapons': 3,
    'gold': 3,
    'old favours': 3
  }
}
