import { BackgroundName } from '../npc-generation/backgroundTraits'
import { ClassName } from '../npc-generation/classTraits'
import { ProfessionNames } from '../npc-generation/professions'
import { ThresholdTable } from '../src/rollFromTable'
import { WeightRecord } from '../types'

interface FactionData {
  rollData: {
    reputation: {
      rolls: ThresholdTable
    }
    resources: {
      rolls: ThresholdTable
    }
  }
  resources: {
    forms: Record<FactionResourceForms, ResourceForm>
    types: Record<InternalFactionResource, ResourceType>
  }
  types: Record<InternalFactionType, FactionTypeData>
}

export interface ResourceType {
    probability?: number
    isDefault?: boolean
    isMagic?: boolean
    isArt?: boolean
    isReligious?: boolean
    form: FactionResourceForms
}

interface ResourceForm {
  rolls: ThresholdTable
}
export interface FactionTypeData {
  leader: Leader
  type: string
  wordNoun: string
  probability: number
  livery?: {
    colours: {
      primary: string[]
      secondary: string[]
    }
    insignia: string[]
  }
  alliesList: WeightRecord<string>
  rivalsList: WeightRecord<string>
  joiningRequirement: WeightRecord<string>
  joiningInitiation: WeightRecord<string>
  members: Members
  membersTrait: WeightRecord<string>
  names: {
    main: string[]
    adjective: string[]
    alternateAdjective?: string[]
    group: string[]
    unique: string[]
  }
  motivation: WeightRecord<string>
  resources: WeightRecord<InternalFactionResource>
}

interface Leader {
  format: WeightRecord<string>
  qualification: WeightRecord<string>
  base: LeaderTraits
}

interface Members {
  membershipIsMutuallyExclusive: boolean
  membershipIsTotallyExclusive: boolean
  professions: ProfessionNames[]
}

interface LeaderTraits {
  title?: string
  hasClass: boolean
  dndClass?: ClassName[]
  profession?: ProfessionNames
  background?: BackgroundName | BackgroundName[]
}

export type FactionType = keyof typeof factionData.types

type InternalFactionType =
  | 'artisans'
  | 'assassins'
  | 'bandits'
  | 'bards'
  | 'clergy'
  | 'commoners'
  | 'craftsmen'
  | 'druids'
  | 'foreigners'
  | 'guards'
  | 'mercenaries'
  | 'merchants'
  | 'military'
  | 'monks'
  | 'nobles'
  | 'priests'
  | 'rangers'
  | 'scholars'
  | 'seers'
  | 'thieves'
  | 'wizards'

type InternalFactionResource =
  | 'artifacts'
  | 'blackmail material'
  | 'gold'
  | 'contacts'
  | 'favours'
  | 'debtors'
  | 'gems'
  | 'magic scrolls'
  | 'magical trinkets'
  | 'magical weapons'
  | 'magical instruments'
  | 'magical contraptions'
  | 'old favours'
  | 'trade goods'
  | 'masterpieces'
  | 'stolen goods'
  | 'important manuscripts'
  | 'political influence'
  | 'foreign goods'
  | 'holy relics'
  | 'sacred texts'
  | 'tame animals'

type FactionResourceForms =
  | 'physical'
  | 'paper'
  | 'knowledge'
  | 'people'
  | 'animal'
  | 'money'

export type FactionResource = keyof typeof factionData.resources.types

export const factionData: FactionData = {
  rollData: {
    reputation: {
      rolls: [
        [95, 'excellent'],
        [90, 'very good'],
        [80, 'quite good'],
        [70, 'good'],
        [60, 'above average'],
        [55, 'slightly above average'],
        [50, 'average'],
        [45, 'slightly below average'],
        [40, 'poor'],
        [30, 'quite poor'],
        [20, 'very poor'],
        [10, 'extremely poor']
      ]
    },
    resources: {
      rolls: [
        [95, 'limitless'],
        [90, 'near limitless'],
        [80, 'extensive'],
        [70, 'significant'],
        [60, 'many'],
        [55, 'decent'],
        [50, 'average'],
        [45, 'slightly below average'],
        [40, 'somewhat limited'],
        [30, 'limited'],
        [20, 'quite poor'],
        [10, 'extremely poor'],
        [5, 'destitute']
      ]
    }
  },
  resources: {

    forms: {
      physical: {
        // They have _____ ${resource}
        rolls: [
          [90, 'veritable warehouses full of'],
          [70, 'a room full of'],
          [50, 'a significant number of'],
          [30, 'a handful of'],
          [10, 'one or two valuable']
        ]
      },
      money: {
        // They have _____ ${resource}
        rolls: [
          [90, 'a bank full of'],
          [70, 'chests full of'],
          [50, 'a chest of'],
          [30, 'a couple pouches of'],
          [10, 'barely enough']
        ]
      },
      paper: {
        rolls: [
          [90, 'shelves upon shelves of'],
          [70, 'binders full of'],
          [50, 'sheafs of'],
          [30, 'a drawer of'],
          [10, 'a handful of']
        ]
      },
      knowledge: {
        rolls: [
          [90, 'an almost omniscient knowledge of'],
          [70, 'some extremely rare'],
          [50, 'some rare'],
          [30, 'some secret'],
          [10, 'some relatively easy to discover']
        ]
      },
      people: {
        rolls: [
          [90, 'scores upon scores of'],
          [70, 'a crowd of'],
          [50, 'a fair few'],
          [30, 'a handful of'],
          [10, 'one or two']
        ]
      },
      animal: {
        rolls: [
          [90, "a damn zoo's worth of"],
          [70, 'a menagerie'],
          [50, 'a couple'],
          [30, 'three'],
          [10, 'one or two']
        ]
      }
    },
    types: {
      'artifacts': {
        isDefault: true,
        form: 'physical'
      },
      'blackmail material': {
        isDefault: true,
        form: 'paper'
      },
      'gold': {
        isDefault: true,
        form: 'money'
      },
      'contacts': {
        isDefault: true,
        form: 'people'
      },
      'favours': {
        isDefault: true,
        form: 'people'
      },
      'debtors': {
        isDefault: true,
        form: 'people'
      },
      'gems': {
        isDefault: true,
        form: 'physical'
      },
      'magic scrolls': {
        isMagic: true,
        isDefault: true,
        form: 'paper'
      },
      'magical trinkets': {
        isMagic: true,
        isDefault: true,
        form: 'physical'
      },
      'magical weapons': {
        isMagic: true,
        isDefault: true,
        form: 'physical'
      },
      'magical instruments': {
        isMagic: true,
        isArt: true,
        form: 'physical'
      },
      'magical contraptions': {
        isMagic: true,
        form: 'physical'
      },
      'old favours': {
        isDefault: true,
        form: 'people'
      },
      'trade goods': {
        isDefault: true,
        form: 'physical'
      },
      'masterpieces': {
        isArt: true,
        form: 'physical'
      },
      'stolen goods': {
        form: 'physical'
      },
      'important manuscripts': {
        form: 'paper'
      },
      'political influence': {
        form: 'people'
      },
      'foreign goods': {
        form: 'physical'
      },
      'holy relics': {
        isReligious: true,
        form: 'physical'
      },
      'sacred texts': {
        isReligious: true,
        form: 'paper'
      },
      'tame animals': {
        form: 'animal'
      }
    }
  },
  types: {
    artisans: {
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
    },
    assassins: {
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
    },
    bandits: {
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
    },
    bards: {
      type: 'bards',
      leader: {
        format: {
          group: 5,
          individual: 3
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
          title: 'Maestro',
          hasClass: true,
          profession: 'bard',
          background: 'entertainer'
        }
      },
      wordNoun: 'college',
      probability: 5,
      alliesList: {
        priests: 1,
        urchins: 2,
        nobles: 3
      },
      rivalsList: {
        bandits: 4
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
        membershipIsMutuallyExclusive: true,
        membershipIsTotallyExclusive: false,
        professions: [
          'bard',
          'singer',
          'musician',
          'arranger',
          'composer',
          'copyist',
          'instrument Maker',
          'playwright',
          'luthier'
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
        'their pride': 1,
        'their terrible ballads': 1,
        'their limerick rhyming': 1,
        'their funky harmonies': 1,
        'their use of tritone substitution and negative harmony': 1,
        'their stochastically generated microtonal four-voice fugues': 1
      },
      names: {
        main: [
          'Rehearsals',
          'Musicians',
          'Bards',
          'Harmonies',
          'Poems',
          'Ballads',
          'Arias',
          'Lutes',
          'Minstrels'
        ],
        adjective: [
          'Tuneful',
          'Melodious',
          'Inspired',
          'Twelve Tone',
          'Busking'
        ],
        group: [
          'Symphony',
          'Quartet',
          'Ensemble',
          'Society',
          'Group',
          'League',
          'Collective',
          'Brothers',
          'Brotherhood',
          'Order'
        ],
        unique: [
          'Copperback',
          'The Tumbling Pebbles',
          'King',
          'Megabeggars',
          'The Wu Tang Clang',
          'Earth, Wind and Shire',
          'Iron Wench',
          'Sex Crossbows',
          'Def leprechaun'
        ]
      },
      motivation: {
        money: 3,
        fame: 5,
        glory: 3,
        politics: 1
      },
      resources: {
        'gold': 3,
        'contacts': 5,
        'old favours': 4,
        'important manuscripts': 4,
        'masterpieces': 3,
        'magical instruments': 3
      }
    },
    clergy: {
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
    },
    commoners: {
      type: 'commoners',
      leader: {
        format: {
          group: 5,
          individual: 3
        },
        qualification: {
          'the wealthiest of the group': 1,
          'the most charismatic of the group': 4,
          'democratically elected': 6,
          'able to oust the previous leadership': 4,
          'able to rise to power through nepotism': 3,
          'promoted by being the most powerful in the group': 1
        },
        base: {
          title: 'Secretary',
          hasClass: false,
          profession: 'politician'
        }
      },
      wordNoun: 'union',
      probability: 5,
      alliesList: {
        mercenaries: 1,
        commoners: 5,
        artisans: 1,
        seers: 1,
        craftsman: 2
      },
      rivalsList: {
        assassins: 1,
        bards: 1,
        thieves: 1,
        nobles: 5
      },
      joiningRequirement: {
        'a show of solidarity': 1,
        'a show of charity': 1,
        'a good deed': 1,
        'a generous donation': 1
      },
      joiningInitiation: {
        'a tattooing': 1,
        'a pledge': 1
      },
      members: {
        membershipIsMutuallyExclusive: true,
        membershipIsTotallyExclusive: false,
        professions: [
          'animal handler',
          "blacksmith's assistant",
          'brickmason',
          'caravanner',
          'chef',
          'cook',
          'cooper',
          'cowherd',
          'glovemaker',
          'herbalist',
          'inventor',
          'jeweller',
          'librarian',
          'locksmith',
          'masseur',
          'merchant',
          'minister',
          'mortician',
          'nurse',
          'patissier',
          'scholar',
          "ship's captain",
          'silversmith',
          'spice merchant',
          'stone mason',
          'shopkeep',
          'teacher',
          'veterinarian',
          'vintner',
          'woodcarver',
          'writer',
          'falconer',
          'florist',
          'forester',
          'gamekeeper',
          'horse trainer',
          'prospector',
          'general contractor',
          'glass painter',
          'artisan',
          'accountant',
          'interpreter',
          'coinsmith',
          'furniture artisan',
          'lapidary',
          'assay master',
          'conservationist',
          'notary',
          'orator',
          'trainer'
        ]
      },
      membersTrait: {
        'amulets with a sigil': 1,
        'the ring that members are given': 1,
        'the zealous attitude': 1
      },
      names: {
        main: [
          'People',
          'Workers',
          'Salarymen',
          'Labourers',
          'Commoners',
          'Folk'
        ],
        adjective: [
          'United',
          'Indivisable',
          'Undisputed',
          'Unified',
          'Fair',
          'Righteous',
          'Common Sense',
          'Triumphant'
        ],
        group: [
          'Collective',
          'Union',
          'Coalition',
          'Society',
          'Association',
          'Front'
        ],
        unique: [
          'The United People\'s Front'
        ]
      },
      motivation: {
        power: 2,
        politics: 4
      },
      resources: {
        contacts: 3
      }
    },
    craftsmen: {
      type: 'craftsmen',
      leader: {
        format: {
          group: 5,
          individual: 3
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
          title: 'Master',
          hasClass: false,
          profession: 'craftsman',
          background: 'guild artisan'
        }
      },
      wordNoun: 'guild',
      probability: 5,
      alliesList: {
        priests: 1,
        nobles: 3,
        artisans: 2,
        seers: 1,
        commoners: 3
      },
      rivalsList: {
        commoners: 2,
        bandits: 3
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
          'potter',
          'perfumer',
          'locksmith',
          'leatherworker',
          'jeweller',
          'hatter',
          'goldsmith',
          'silversmith',
          'glovemaker',
          'furrier',
          'cobbler',
          'craftsman',
          'clock maker',
          'carpenter',
          'blacksmith',
          'armorer',
          'apprentice',
          'wheelwright',
          'weaponsmith',
          'tinker',
          'printer',
          'optician',
          'luthier',
          'lapidary',
          'instrument Maker',
          'glassblower',
          'furniture artisan',
          'engraver'
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
          'Crafters',
          'Craftsmen'
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
          'Order',
          'Workshop',
          'Factory'
        ],
        unique: [
          'The Clicks of the Spring',
          'The Offerman Order',
          'The Blessed Workshop',
          'The Factory'
        ]
      },
      motivation: {
        money: 5,
        fame: 1,
        power: 3,
        glory: 1,
        vengeance: 3,
        politics: 1
      },
      resources: {
        'gold': 3,
        'contacts': 3,
        'important manuscripts': 4,
        'masterpieces': 3,
        'artifacts': 3,
        'magical contraptions': 3
      }
    },
    druids: {
      type: 'druids',
      leader: {
        format: {
          group: 5,
          individual: 3
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
          hasClass: true,
          profession: 'druid'
        }
      },
      wordNoun: 'grove',
      probability: 5,
      alliesList: {
        bards: 1,
        rangers: 1
      },
      rivalsList: {
        assassins: 1,
        wizards: 1
      },
      joiningRequirement: {
        'become a druid': 1,
        'give up all worldly possessions': 1
      },
      joiningInitiation: {
        'fight a bear with your bare hands': 1
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
        'brown and dirty robes': 1,
        'leathery tanned skin': 1
      },
      names: {
        main: [
          'Green',
          'Wild',
          'Forest',
          'Stream',
          'Sky'
        ],
        adjective: [
          'Holy',
          'Great',
          'Wide',
          'Open'
        ],
        group: [
          'Coven',
          'Circle',
          'Tribe',
          'Grove'
        ],
        unique: [
          'Circle of the Green'
        ]
      },
      motivation: {
        'peace': 1,
        'growth of nature': 1,
        'love of nature': 1
      },
      resources: {
        'tame animals': 5
      }
    },
    foreigners: {
      type: 'foreigners',
      leader: {
        format: {
          group: 5,
          individual: 3
        },
        qualification: {
          'incredibly well spoken': 2,
          'fluent in common, though with a strong accent': 2,
          'the best dressed of the group': 1,
          'the most charismatic of the group': 1,
          'chosen by his government as a representative': 1,
          'incredibly beautiful and charming': 1,
          'driven and ambitious': 1,
          'the fattest man you have ever seen': 1,
          'able to rise to power through nepotism': 1,
          'the most intelligent man in the room': 1
        },
        base: {
          hasClass: false,
          profession: 'diplomat',
          background: 'noble'
        }
      },
      wordNoun: 'embassy',
      probability: 2,
      alliesList: {
        merchants: 2,
        mercenaries: 1,
        commoners: 1,
        nobles: 3,
        artisans: 2,
        craftsmen: 2
      },
      rivalsList: {
        wizards: 1,
        assassins: 2,
        commoners: 3,
        priests: 1
      },
      joiningRequirement: {
        'familial ties to their home country': 1,
        'an expressed desire for citizenship': 1,
        'a bond of kinship': 1
      },
      joiningInitiation: {
        'complex citizenship paperwork': 2,
        'an oath of fealty to their king': 1,
        'a sufficiently large bribe': 1
      },
      members: {
        membershipIsMutuallyExclusive: false,
        membershipIsTotallyExclusive: false,
        professions: [
          'noble',
          'diplomat',
          'missionary',
          'exile',
          'merchant'
        ]
      },
      membersTrait: {
        'their tattoos and facial piercings': 1,
        'their outlandish clothes': 1,
        'their strangely colored hair': 1,
        'their orange clothes': 1,
        'their large earrings': 1,
        'their gaudy jewellery': 1
      },
      names: {
        main: [
          'Peoples',
          'Citizens',
          'Lords',
          'Peoples'
        ],
        adjective: [
          'Foreign',
          'Distant',
          'External',
          'Alien',
          'Foreign'
        ],
        group: [
          'Embassy',
          'Embassy',
          'Embassy',
          'Consulate',
          'Legation',
          'Ministry',
          'Diplomatic Mission'
        ],
        unique: [
          "Citizen's Permanent Mission",
          'Alien Consulate General'
        ]
      },
      motivation: {
        'power': 1,
        'peace': 1,
        'connections': 1,
        'political power': 1
      },
      resources: {
        'contacts': 3,
        'political influence': 1,
        'foreign goods': 2
      }
    },
    guards: {
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
    },
    mercenaries: {
      type: 'mercenaries',
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
          title: 'Commander',
          hasClass: true,
          profession: 'fighter',
          background: 'soldier'
        }
      },
      wordNoun: 'company',
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
          'mercenary',
          'medic',
          'marshall',
          'marksman',
          'lieutenant',
          'fifer',
          'commissar',
          'cavalier',
          'privateer',
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
          'Mighty'
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
        power: 1,
        glory: 1,
        politics: 1
      },
      resources: {
        'magical weapons': 3,
        'gold': 3,
        'old favours': 3
      }
    },
    merchants: {
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
    },
    military: {
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
    },
    monks: {
      type: 'monks',
      leader: {
        format: {
          group: 1,
          individual: 5
        },
        qualification: {
          'the poorest of the group': 1,
          'the strongest of the group': 2,
          'able to rise to power by completing an ordeal involving fasting for over a month': 1,
          'the most charismatic of the group': 1,
          'democratically elected': 1,
          'able to oust the previous leadership': 1,
          'able to rise to power through nepotism': 3,
          'promoted by being the most powerful in the group': 1
        },
        base: {
          title: 'High Monk',
          hasClass: true,
          profession: 'monk',
          background: [
            'acolyte',
            'sage'
          ]
        }
      },
      wordNoun: 'group',
      probability: 4,
      alliesList: {
        priests: 4,
        artisans: 2
      },
      rivalsList: {
        artisans: 1,
        priests: 2,
        bandits: 3
      },
      joiningRequirement: {
        'some social status': 1,
        'referral by an existing member': 1,
        'a display of skill': 2
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
          'monk',
          'hermit'
        ]
      },
      membersTrait: {
        'the ring that members are given': 1,
        'their excessively bureaucratic tendencies': 1,
        'their shaved heads': 1,
        'their malnutrition': 1,
        'their calm presence': 1,
        'their know-it-all answers': 1,
        'their terrible jokes': 1,
        'their amazing beer': 1,
        'the tankard that all members carry': 1
      },
      names: {
        main: [
          'Monks',
          'Robes',
          'Stone',
          'Rock'
        ],
        adjective: [
          'Understanding',
          'Meditating',
          'Calm',
          'Unmoving'
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
          'Ommmm',
          'The Holy Loincloth',
          'The Purposely Unwashed'
        ]
      },
      motivation: {
        money: 3,
        knowledge: 2,
        fame: 1,
        power: 3,
        glory: 1,
        vengeance: 3,
        politics: 2
      },
      resources: {
        'artifacts': 3,
        'holy relics': 3,
        'gold': 3,
        'sacred texts': 4
      }
    },
    nobles: {
      type: 'nobles',
      leader: {
        format: {
          group: 1,
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
          title: 'Lord',
          hasClass: false,
          background: 'noble'
        }
      },
      wordNoun: 'society',
      probability: 8,
      alliesList: {
        hitmen: 4,
        seers: 3
      },
      rivalsList: {
        commoners: 5,
        bandits: 4,
        assassins: 4
      },
      joiningRequirement: {
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
          'noble'
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
          'Ladies',
          'People',
          'Men',
          'Lords',
          'Heirs',
          'Land Owners',
          'Barons',
          'Tycoons',
          'Nobles',
          'Gentlemen'
        ],
        adjective: [
          'Sophisticated',
          'Intelligent',
          'Refined',
          'Cultured',
          'Wealthy',
          'Distinguished'
        ],
        group: [
          'Society',
          'Group',
          'Dinner Club',
          'League',
          'Club'
        ],
        unique: [
          'The People Hunters',
          'The Fur Coat Enthusiasts',
          'The Heir Apparents',
          'The Dead Parents Club',
          'The High Horse'
        ]
      },
      motivation: {
        money: 3,
        fame: 1,
        power: 4,
        glory: 1,
        vengeance: 3,
        politics: 5
      },
      resources: {
        'gold': 3,
        'contacts': 5,
        'old favours': 4,
        'important manuscripts': 4,
        'masterpieces': 3
      }
    },
    priests: {
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
    },
    rangers: {
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
    },
    scholars: {
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
    },
    seers: {
      type: 'seers',
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
          title: 'High Seer',
          hasClass: false,
          profession: 'seer',
          background: [
            'acolyte',
            'sage'
          ]
        }
      },
      wordNoun: 'guild',
      probability: 3,
      alliesList: {
        priests: 4,
        nobles: 4
      },
      rivalsList: {
        scholars: 4
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
        membershipIsMutuallyExclusive: true,
        membershipIsTotallyExclusive: false,
        professions: [
          'pilgrim',
          'medium',
          'friar',
          'clergyman',
          'theologian',
          'templar',
          'sexton',
          'prophet',
          'missionary',
          'inquisitor',
          'high priest',
          'diviner',
          'deacon',
          'cardinal',
          'cantor',
          'bishop',
          'archbishop',
          'acolyte',
          'abbot'
        ]
      },
      membersTrait: {
        'the ring that members are given': 1,
        'their excessively bureaucratic tendencies': 1,
        'the vacant look that members have': 1,
        'the vacant stare that members pull (in order to fit in with the others)': 1,
        'the plain robes they wear': 1,
        'the bright blue coloured sashes they wear': 1
      },
      names: {
        main: [
          'Seers',
          'Predictionists',
          'Future Seers',
          'Observers',
          'Eyes',
          'Historians'
        ],
        adjective: [
          'All Seeing',
          'All Knowing',
          'Watchful',
          'Future'
        ],
        group: [
          'Society',
          'Group',
          'Collective',
          'Brothers',
          'Brotherhood',
          'Order'
        ],
        unique: [
          'We Looked Into The Future To Find Our Name And This Was The Name So I Guess This Is The Name',
          'Seers of the Obscene',
          'Seers of the Scenic'
        ]
      },
      motivation: {
        money: 2,
        knowledge: 4,
        fame: 1,
        power: 2,
        glory: 1,
        vengeance: 1,
        politics: 3
      },
      resources: {
        'artifacts': 4,
        'blackmail material': 4
      }
    },
    thieves: {
      type: 'thieves',
      leader: {
        format: {
          group: 1,
          individual: 5
        },
        qualification: {
          'the most skilled of the group': 1,
          'able to rise to power by completing an ordeal': 2,
          'the most charismatic of the group': 1,
          'democratically elected': 1,
          'able to oust the previous leadership': 3,
          'able to rise to power through nepotism': 3,
          'promoted by being the most powerful in the group': 1
        },
        base: {
          title: 'High Rogue',
          hasClass: true,
          profession: 'rogue',
          background: [
            'charlatan',
            'criminal'
          ]
        }
      },
      wordNoun: 'guild',
      probability: 10,
      alliesList: {
        thieves: 3,
        urchins: 3,
        hitmen: 2,
        assassins: 2,
        bandits: 3
      },
      rivalsList: {
        priests: 3,
        commoners: 4
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
        'a heist': 1,
        'a secret task': 1,
        'a secret ritual': 2
      },
      members: {
        membershipIsMutuallyExclusive: true,
        membershipIsTotallyExclusive: false,
        professions: [
          'thief',
          'burglar',
          'highwayman',
          'rogue',
          'assassin',
          'bandit',
          'conman',
          'fence',
          'gamefighter',
          'cutpurse',
          'crime boss',
          'drug dealer',
          'drug lord',
          'extortioner',
          'forger',
          'fugitive',
          'kidnapper',
          'loan shark',
          'grave robber',
          'poacher',
          'smuggler',
          'gambler'
        ]
      },
      membersTrait: {
        'a missing earlobe': 1,
        "absolutely nothing; they're completely anonymous": 1,
        'a dagger given to ever member': 1,
        'a ring given to every member': 1,
        'a grey hood': 1,
        'their lack of manners': 1,
        'their bad stench': 1,
        'their rabble-rousing tendencies': 1
      },
      names: {
        main: [
          'Cutpurses',
          'Pilferers',
          'Thieves',
          'Rogues',
          'Property Reappropriaters'
        ],
        adjective: [
          'Clever',
          'Sneaky',
          'Cunning',
          'Conniving',
          'Honest',
          'Black',
          'Invisible',
          'Silent'
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
          'Silent Movers',
          'Silent Partners',
          'The Tip-Toe Club',
          'Good Fences',
          'League of Lifters and Grifters',
          'The Neighborhood Watch',
          'The Unseen Hand',
          'The Kleptocrats',
          'The Riverside Raiders',
          'Black Market Mayhem',
          'The Boondock Burglars',
          'The Dock Workers',
          'Pickpockets Anonymous'
        ]
      },
      motivation: {
        money: 5,
        fame: 1,
        power: 3,
        glory: 1,
        vengeance: 3,
        politics: 1
      },
      resources: {
        'blackmail material': 4,
        'stolen goods': 4,
        'contacts': 3
      }
    },
    wizards: {
      type: 'wizards',
      leader: {
        format: {
          group: 5,
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
          title: 'Archmage',
          hasClass: true,
          profession: 'wizard',
          background: [
            'acolyte',
            'sage'
          ]
        }
      },
      wordNoun: 'college',
      probability: 10,
      alliesList: {
        nobles: 2,
        artisans: 2,
        seers: 1
      },
      rivalsList: {
        seers: 1,
        priests: 4,
        assassins: 2
      },
      joiningRequirement: {
        'some social status': 1,
        'a display of skill': 3
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
          'wizard',
          'sorcerer',
          'archmage',
          'abjurer',
          'mage',
          'medium',
          'artificer',
          'conjuror',
          'elementalist',
          'enchanter',
          'evoker',
          'hearth witch',
          'illusionist',
          'meteorologist',
          'ritualist',
          'runecaster',
          'sage',
          'shapeshifter',
          'summoner',
          'transmuter',
          'witchdoctor',
          'witch',
          'wordsmith',
          'warmage',
          'necromancer'
        ]
      },
      membersTrait: {
        'their lack of table manners': 1,
        'their extreme interest in the oddities of the arcane': 1,
        'the blue robes they wear': 1,
        'the sash that members are given': 1,
        'the ring that members are given': 1,
        'their excessively bureaucratic tendencies': 1
      },
      names: {
        main: [
          'Prestidigitators',
          'Illusionists',
          'Casters',
          'Magic Users',
          'Diviners',
          'Evokers',
          'Necromancers',
          'Abjurers',
          'Scroll Keepers',
          'Book Keepers',
          'Collectors',
          'Librarians'
        ],
        adjective: [
          'Arcane',
          'Magical',
          'Scholarly',
          'Absent Minded',
          'Knowledgeable',
          'Intelligent',
          'Unknown',
          'Eldritch',
          'Memorized'
        ],
        group: [
          'Society',
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
          'We Make Magic!',
          'The Academy',
          'The Arcane Order',
          'Adepts Anonymous',
          'The Callers Club',
          'The Union of Universal Magic',
          'The University of the Unusual and Unexplained',
          'The College of Conjurers',
          "Necromancers' Network",
          "The Evokers' League",
          'The Nation of Abjuration',
          "Seers' and Company",
          'The Illusory Faction',
          'Spellcasters Anonymous'
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
        'magic scrolls': 4,
        'magical trinkets': 4
      }
    }
  }
}
