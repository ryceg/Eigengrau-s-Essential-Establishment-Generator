import { WeightRecord } from '../types'

interface FactionData {
  type: Record<string, FactionType>
}

interface FactionType {
  leaderTraits: LeaderTraits
  wordNoun: string
  leaderQualification: WeightRecord<string>
  alliesList: WeightRecord<string>
  rivalsList: WeightRecord<string>
  joiningRequirement: WeightRecord<string>
  joiningInitiation: WeightRecord<string>
  members: Members
  membersTrait: string[]
  main: string[]
  adjective: string[]
  group: string[]
  unique: string[]
  motivation: string[]
  resources: string[]
}

interface Members {
  membershipIsMutuallyExclusive: boolean
  membershipIsTotallyExclusive: boolean
  professions: string[]
}

interface LeaderTraits {
  title?: string
  hasClass: boolean
  dndClass?: string[]
  profession?: string
  background?: string | string[]
}

export const factionData: FactionData = {
  type: {
    artisans: {
      leaderTraits: {
        title: 'Aesthetician',
        hasClass: false,
        profession: 'artisan',
        background: 'guild artisan'
      },
      wordNoun: 'guild',
      leaderQualification: {
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
      membersTrait: [
        'the ring that members are given',
        'their excessively bureaucratic tendencies',
        'their absentmindedness',
        'their egos',
        'their attention to detail',
        'their creativity',
        'their lust for fame',
        'their pride'
      ],
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
      ],
      motivation: [
        'money',
        'money',
        'money',
        'money',
        'money',
        'fame',
        'fame',
        'fame',
        'glory',
        'glory',
        'glory',
        'vengeance',
        'politics'
      ],
      resources: [
        'artifacts',
        'artifacts',
        'artifacts',
        'magical trinkets',
        'magical trinkets',
        'magical trinkets',
        'masterpieces',
        'masterpieces',
        'masterpieces'
      ]
    },
    assassins: {
      leaderTraits: {
        hasClass: true,
        title: 'High Assassin',
        profession: 'rogue',
        background: [
          'charlatan',
          'soldier',
          'criminal',
          'kidnapper',
          'forger',
          'thief'
        ]
      },
      wordNoun: 'company',
      leaderQualification: {
        'the wealthiest of the group': 1,
        'the strongest of the group': 2,
        'able to rise to power by completing an ordeal': 1,
        'the most charismatic of the group': 1,
        'democratically elected': 1,
        'able to oust the previous leadership': 3,
        'able to rise to power through nepotism': 3,
        'promoted by being the most powerful in the group': 3
      },
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
      membersTrait: [
        'the ring that members are given',
        "absolutely nothing; they're completely anonymous",
        'their black sashes',
        'their tendency to blink quickly',
        'their quick tempers'
      ],
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
      ],
      motivation: [
        'money',
        'money',
        'money',
        'fame',
        'power',
        'power',
        'power',
        'glory',
        'vengeance',
        'vengeance',
        'vengeance',
        'politics',
        'politics',
        'politics'
      ],
      resources: [
        'bits of blackmail material',
        'bits of blackmail material',
        'bits of blackmail material',
        'bits of blackmail material',
        'stolen goods',
        'stolen goods',
        'stolen goods',
        'stolen goods',
        'contacts',
        'contacts',
        'contacts'
      ]
    },
    bandits: {
      leaderTraits: {
        title: 'Chief',
        hasClass: true,
        profession: 'fighter',
        background: [
          'soldier',
          'charlatan',
          'criminal'
        ]
      },
      wordNoun: 'gang',
      leaderQualification: {
        'the wealthiest of the group': 1,
        'the strongest of the group': 2,
        'able to rise to power by completing an ordeal': 3,
        'the most charismatic of the group': 1,
        'democratically elected': 1,
        'able to oust the previous leadership': 1,
        'able to rise to power through nepotism': 3,
        'promoted by being the most powerful in the group': 1
      },
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
      membersTrait: [
        'the ring that members are given',
        'their excessively bureaucratic tendencies',
        'their distinctive headgear',
        'their white horses',
        'their love of a good fight',
        'their love of a good fight',
        'their love of a good fight',
        'being ruthless in combat',
        'following any order given to them',
        'fighting to the death'
      ],
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
      ],
      motivation: [
        'money',
        'money',
        'money',
        'fame',
        'power',
        'power',
        'power',
        'glory',
        'vengeance',
        'vengeance',
        'vengeance',
        'politics',
        'politics',
        'politics'
      ],
      resources: [
        'magical weapons',
        'magical weapons',
        'magical weapons',
        'chests of gold',
        'chests of gold',
        'chests of gold',
        'bits of blackmail material',
        'bits of blackmail material',
        'bits of blackmail material',
        'bits of blackmail material',
        'stolen goods',
        'stolen goods',
        'stolen goods',
        'stolen goods',
        'stolen goods'
      ]
    },
    bards: {
      leaderTraits: {
        title: 'Maestro',
        hasClass: true,
        profession: 'bard',
        background: 'entertainer'
      },
      wordNoun: 'college',
      leaderQualification: {
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
      membersTrait: [
        'the ring that members are given',
        'their excessively bureaucratic tendencies',
        'their absentmindedness',
        'their egos',
        'their attention to detail',
        'their creativity',
        'their lust for fame',
        'their pride',
        'their terrible ballads',
        'their limerick rhyming',
        'their funky harmonies',
        'their use of tritone substitution and negative harmony',
        'their stochastically generated microtonal four-voice fugues'
      ],
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
      ],
      motivation: [
        'money',
        'money',
        'money',
        'fame',
        'fame',
        'fame',
        'fame',
        'fame',
        'glory',
        'glory',
        'glory',
        'politics'
      ],
      resources: [
        'chests of gold',
        'chests of gold',
        'chests of gold',
        'contacts',
        'contacts',
        'contacts',
        'contacts',
        'contacts',
        'old favours',
        'old favours',
        'old favours',
        'old favours',
        'important manuscripts',
        'important manuscripts',
        'important manuscripts',
        'important manuscripts',
        'masterpieces',
        'masterpieces',
        'masterpieces',
        'magical instruments',
        'magical instruments',
        'magical instruments'
      ]
    },
    clergy: {
      leaderTraits: {
        title: 'Clergyman',
        hasClass: true,
        profession: 'cleric'
      },
      wordNoun: 'church',
      leaderQualification: {
        'wearing flowing white robes': 1,
        'a holy symbol tattooed on their face': 1
      },
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
      membersTrait: [
        'amulets with a holy sigil',
        'the ring that members are given'
      ],
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
      ],
      motivation: [
        'devotion',
        'devotion',
        'devotion',
        'power',
        'politics'
      ],
      resources: [
        'money',
        'contacts',
        'connections'
      ]
    },
    craftsmen: {
      leaderTraits: {
        title: 'Master',
        hasClass: false,
        profession: 'craftsman',
        background: 'guild artisan'
      },
      wordNoun: 'guild',
      leaderQualification: {
        'the wealthiest of the group': 3,
        'able to rise to power by completing an ordeal': 1,
        'the most charismatic of the group': 1,
        'democratically elected': 1,
        'able to oust the previous leadership': 1,
        'able to rise to power through nepotism': 3,
        'promoted by being the most powerful in the group': 1
      },
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
          'jeweler',
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
      membersTrait: [
        'the ring that members are given',
        'their excessively bureaucratic tendencies',
        'their absentmindedness',
        'their egos',
        'their attention to detail',
        'their creativity',
        'their lust for fame',
        'their pride'
      ],
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
      ],
      motivation: [
        'money',
        'money',
        'money',
        'money',
        'money',
        'fame',
        'power',
        'power',
        'power',
        'glory',
        'vengeance',
        'vengeance',
        'vengeance',
        'politics'
      ],
      resources: [
        'chests of gold',
        'chests of gold',
        'chests of gold',
        'contacts',
        'contacts',
        'contacts',
        'important manuscripts',
        'important manuscripts',
        'important manuscripts',
        'important manuscripts',
        'masterpieces',
        'masterpieces',
        'masterpieces',
        'artifacts',
        'artifacts',
        'artifacts',
        'magical contraptions',
        'magical contraptions',
        'magical contraptions'
      ]
    },
    druids: {
      leaderTraits: {
        hasClass: true,
        profession: 'druid',
        background: 'noble'
      },
      wordNoun: 'grove',
      leaderQualification: {
        'leathery tanned skin': 1
      },
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
      membersTrait: [
        'brown and dirty robes'
      ],
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
      ],
      motivation: [
        'peace',
        'growth of nature',
        'love of nature'
      ],
      resources: [
        'magic',
        'knowledge',
        'history'
      ]
    },
    foreigners: {
      leaderTraits: {
        hasClass: false,
        profession: 'diplomat',
        background: 'noble'
      },
      wordNoun: 'embassy',
      leaderQualification: {
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
      membersTrait: [
        'their tattoos and facial piercings',
        'their outlandish clothes',
        'their strangely colored hair',
        'their orange clothes',
        'their large earrings',
        'their gaudy jewelry'
      ],
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
      ],
      motivation: [
        'power',
        'peace',
        'connections',
        'political power'
      ],
      resources: [
        'contacts',
        'contacts',
        'contacts',
        'political influence',
        'foreign goods',
        'foreign goods'
      ]
    },
    mercenaries: {
      leaderTraits: {
        title: 'Commander',
        hasClass: true,
        profession: 'fighter',
        background: 'soldier'
      },
      wordNoun: 'company',
      leaderQualification: {
        'the wealthiest of the group': 1,
        'the strongest of the group': 2,
        'able to rise to power by completing an ordeal': 3,
        'the most charismatic of the group': 1,
        'democratically elected': 1,
        'able to oust the previous leadership': 1,
        'able to rise to power through nepotism': 3,
        'promoted by being the most powerful in the group': 1
      },
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
      membersTrait: [
        'the ring that members are given',
        'their excessively bureaucratic tendencies',
        'their distinctive headgear',
        'their white horses',
        'their love of a good fight',
        'their love of a good fight',
        'their love of a good fight',
        'being ruthless in combat',
        'following any order given to them',
        'fighting to the death'
      ],
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
      ],
      motivation: [
        'money',
        'money',
        'money',
        'money',
        'money',
        'money',
        'fame',
        'power',
        'glory',
        'politics'
      ],
      resources: [
        'magical weapons',
        'magical weapons',
        'magical weapons',
        'chests of gold',
        'chests of gold',
        'chests of gold',
        'old favours',
        'old favours',
        'old favours'
      ]
    },
    merchants: {
      leaderTraits: {
        title: 'Executive Officer',
        hasClass: false,
        profession: 'merchant',
        background: [
          'merchant',
          'charlatan',
          'noble'
        ]
      },
      wordNoun: 'guild',
      leaderQualification: {
        'the wealthiest of the group': 3,
        'able to rise to power by completing an ordeal': 1,
        'the most charismatic of the group': 1,
        'democratically elected': 1,
        'able to oust the previous leadership': 1,
        'able to rise to power through nepotism': 3,
        'promoted by being the most powerful in the group': 1
      },
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
      membersTrait: [
        'the ring that members are given',
        'their excessively bureaucratic tendencies',
        'their purple robes',
        'their gaudy jewelry',
        'the fact that a member is always closely followed by a boy carrying a chest'
      ],
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
      ],
      motivation: [
        'money',
        'money',
        'money',
        'money',
        'money',
        'power',
        'glory',
        'vengeance',
        'politics',
        'politics',
        'politics'
      ],
      resources: [
        'trade goods',
        'trade goods',
        'trade goods',
        'trade goods',
        'trade goods',
        'chests of gold',
        'chests of gold',
        'chests of gold',
        'chests of gold',
        'debtors',
        'debtors',
        'debtors',
        'debtors',
        'debtors',
        'debtors'
      ]
    },
    military: {
      leaderTraits: {
        title: 'Commander',
        hasClass: true,
        profession: 'fighter',
        background: [
          'soldier',
          'soldier',
          'noble'
        ]
      },
      wordNoun: 'army',
      leaderQualification: {
        'the wealthiest of the group': 1,
        'the strongest of the group': 2,
        'able to rise to power by completing an ordeal': 3,
        'the most charismatic of the group': 1,
        'democratically elected': 1,
        'able to oust the previous leadership': 1,
        'able to rise to power through nepotism': 3,
        'promoted by being the most powerful in the group': 1
      },
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
      membersTrait: [
        'the ring that members are given',
        'their excessively bureaucratic tendencies',
        'their distinctive headgear',
        'their white horses',
        'their love of a good fight',
        'their love of a good fight',
        'their love of a good fight',
        'being ruthless in combat',
        'following any order given to them',
        'fighting to the death'
      ],
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
      ],
      motivation: [
        'money',
        'money',
        'money',
        'money',
        'money',
        'money',
        'fame',
        'power',
        'power',
        'power',
        'power',
        'glory',
        'glory',
        'glory',
        'politics'
      ],
      resources: [
        'magical weapons',
        'magical weapons',
        'magical weapons',
        'chests of gold',
        'chests of gold',
        'chests of gold',
        'old favours',
        'old favours',
        'old favours'
      ]
    },
    monks: {
      leaderTraits: {
        title: 'High Monk',
        hasClass: true,
        profession: 'monk',
        background: [
          'acolyte',
          'sage'
        ]
      },
      wordNoun: 'group',
      leaderQualification: {
        'the wealthiest of the group': 1,
        'the strongest of the group': 2,
        'able to rise to power by completing an ordeal': 1,
        'the most charismatic of the group': 1,
        'democratically elected': 1,
        'able to oust the previous leadership': 1,
        'able to rise to power through nepotism': 3,
        'promoted by being the most powerful in the group': 1
      },
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
      membersTrait: [
        'the ring that members are given',
        'their excessively bureaucratic tendencies',
        'their shaved heads',
        'their malnutrition',
        'their calm presence',
        'their know-it-all answers',
        'their terrible jokes',
        'their amazing beer',
        'the tankard that all members carry'
      ],
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
      ],
      motivation: [
        'money',
        'money',
        'money',
        'knowledge',
        'knowledge',
        'fame',
        'power',
        'power',
        'power',
        'glory',
        'vengeance',
        'vengeance',
        'vengeance',
        'politics',
        'politics'
      ],
      resources: [
        'artifacts',
        'artifacts',
        'artifacts',
        'holy relics',
        'holy relics',
        'holy relics',
        'chests of gold',
        'chests of gold',
        'chests of gold',
        'sacred texts',
        'sacred texts',
        'sacred texts',
        'sacred texts'
      ]
    },
    nobles: {
      leaderTraits: {
        title: 'Lord',
        hasClass: false,
        background: 'noble'
      },
      wordNoun: 'society',
      leaderQualification: {
        'the wealthiest of the group': 3,
        'able to rise to power by completing an ordeal': 1,
        'the most charismatic of the group': 1,
        'democratically elected': 1,
        'able to oust the previous leadership': 1,
        'able to rise to power through nepotism': 3,
        'promoted by being the most powerful in the group': 1
      },
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
      membersTrait: [
        'the ring that members are given',
        'their excessively bureaucratic tendencies',
        'their absentmindedness',
        'their egos',
        'their attention to detail',
        'their creativity',
        'their lust for fame',
        'their pride'
      ],
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
      ],
      motivation: [
        'money',
        'money',
        'money',
        'fame',
        'power',
        'power',
        'power',
        'power',
        'glory',
        'vengeance',
        'vengeance',
        'vengeance',
        'politics',
        'politics',
        'politics',
        'politics',
        'politics'
      ],
      resources: [
        'chests of gold',
        'chests of gold',
        'chests of gold',
        'contacts',
        'contacts',
        'contacts',
        'contacts',
        'contacts',
        'old favours',
        'old favours',
        'old favours',
        'old favours',
        'important manuscripts',
        'important manuscripts',
        'important manuscripts',
        'important manuscripts',
        'masterpieces',
        'masterpieces',
        'masterpieces'
      ]
    },
    priests: {
      leaderTraits: {
        title: 'The Holy',
        hasClass: true,
        profession: 'cleric',
        background: [
          'acolyte',
          'sage'
        ]
      },
      wordNoun: 'college',
      leaderQualification: {
        'the wealthiest of the group': 1,
        'the holiest of the group': 2,
        'able to rise to power by completing an ordeal': 1,
        'the most charismatic of the group': 1,
        'democratically elected': 1,
        'able to oust the previous leadership': 1,
        'able to rise to power through nepotism': 3,
        'promoted by being the most powerful in the group': 1
      },
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
      membersTrait: [
        'the ring that members are given',
        'their excessively bureaucratic tendencies',
        'the walking sticks that all members carry',
        'the beards that they grow',
        'the grey robes they wear',
        'the amulet they wear'
      ],
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
      ],
      motivation: [
        'money',
        'money',
        'money',
        'knowledge',
        'knowledge',
        'fame',
        'power',
        'power',
        'power',
        'glory',
        'vengeance',
        'vengeance',
        'vengeance',
        'politics',
        'politics',
        'politics',
        'politics'
      ],
      resources: [
        'artifacts',
        'artifacts',
        'artifacts',
        'holy relics',
        'holy relics',
        'holy relics',
        'chests of gold',
        'chests of gold',
        'chests of gold',
        'sacred texts',
        'sacred texts',
        'sacred texts',
        'sacred texts'
      ]
    },
    rangers: {
      leaderTraits: {
        title: 'Lord Ranger',
        hasClass: true,
        profession: 'ranger',
        background: [
          'outlander',
          'hermit'
        ]
      },
      wordNoun: 'guild',
      leaderQualification: {
        'the wealthiest of the group': 1,
        'the strongest of the group': 2,
        'able to rise to power by completing an ordeal': 3,
        'the most charismatic of the group': 1,
        'democratically elected': 1,
        'able to oust the previous leadership': 1,
        'able to rise to power through nepotism': 3,
        'promoted by being the most powerful in the group': 1
      },
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
      membersTrait: [
        'the ring that members are given',
        'their pet ferrets',
        'their pet sparrows',
        'the twigs that are strewn throughout their hair',
        'their terrible smell',
        'the lack of footwear'
      ],
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
      ],
      motivation: [
        'money',
        'knowledge',
        'knowledge',
        'knowledge',
        'fame',
        'power',
        'power',
        'power',
        'glory',
        'glory',
        'glory',
        'vengeance',
        'politics',
        'politics',
        'politics'
      ],
      resources: [
        'old favours',
        'old favours',
        'old favours',
        'old favours',
        'tame animals',
        'tame animals',
        'tame animals',
        'tame animals',
        'contacts',
        'contacts',
        'contacts'
      ]
    },
    scholars: {
      leaderTraits: {
        title: 'Chief Scholar',
        hasClass: false,
        profession: 'professor',
        background: [
          'sage',
          'acolyte'
        ]
      },
      wordNoun: 'guild',
      leaderQualification: {
        'the wealthiest of the group': 1,
        'the strongest of the group': 2,
        'able to rise to power by completing an ordeal': 1,
        'the most charismatic of the group': 1,
        'democratically elected': 1,
        'able to oust the previous leadership': 1,
        'able to rise to power through nepotism': 3,
        'promoted by being the most powerful in the group': 1
      },
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
      membersTrait: [
        'the ring that members are given',
        'their excessively bureaucratic tendencies',
        'their absentmindedness',
        'their egos',
        'their attention to detail',
        'their creativity',
        'their lust for fame',
        'their pride'
      ],
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
      ],
      motivation: [
        'money',
        'money',
        'fame',
        'fame',
        'fame',
        'knowledge',
        'knowledge',
        'knowledge',
        'knowledge',
        'power',
        'power',
        'power',
        'glory',
        'vengeance',
        'vengeance',
        'politics',
        'politics'
      ],
      resources: [
        'chests of gold',
        'chests of gold',
        'chests of gold',
        'contacts',
        'contacts',
        'contacts',
        'contacts',
        'contacts',
        'old favours',
        'old favours',
        'old favours',
        'old favours',
        'important manuscripts',
        'important manuscripts',
        'important manuscripts',
        'important manuscripts'
      ]
    },
    seers: {
      leaderTraits: {
        title: 'High Seer',
        hasClass: false,
        profession: 'seer',
        background: [
          'acolyte',
          'sage'
        ]
      },
      wordNoun: 'guild',
      leaderQualification: {
        'the wealthiest of the group': 1,
        'the strongest of the group': 2,
        'able to rise to power by completing an ordeal': 1,
        'the most charismatic of the group': 1,
        'democratically elected': 1,
        'able to oust the previous leadership': 1,
        'able to rise to power through nepotism': 3,
        'promoted by being the most powerful in the group': 1
      },
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
      membersTrait: [
        'the ring that members are given',
        'their excessively bureaucratic tendencies',
        'the vacant look that members have',
        'the vacant stare that members pull (in order to fit in with the others)',
        'the plain robes they wear',
        'the bright blue coloured sashes they wear'
      ],
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
      ],
      motivation: [
        'money',
        'money',
        'knowledge',
        'knowledge',
        'knowledge',
        'knowledge',
        'fame',
        'power',
        'power',
        'glory',
        'vengeance',
        'politics',
        'politics',
        'politics'
      ],
      resources: [
        'artifacts',
        'artifacts',
        'artifacts',
        'artifacts',
        'bits of blackmail material',
        'bits of blackmail material',
        'bits of blackmail material',
        'bits of blackmail material'
      ]
    },
    thieves: {
      leaderTraits: {
        title: 'High Rogue',
        hasClass: true,
        profession: 'rogue',
        background: [
          'charlatan',
          'criminal'
        ]
      },
      wordNoun: 'guild',
      leaderQualification: {
        'the most skilled of the group': 1,
        'able to rise to power by completing an ordeal': 2,
        'the most charismatic of the group': 1,
        'democratically elected': 1,
        'able to oust the previous leadership': 3,
        'able to rise to power through nepotism': 3,
        'promoted by being the most powerful in the group': 1
      },
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
      membersTrait: [
        'a missing earlobe',
        "absolutely nothing; they're completely anonymous",
        'a dagger given to ever member',
        'a ring given to every member',
        'a grey hood',
        'their lack of manners',
        'their bad stench',
        'their rabble-rousing tendencies'
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
      main: [
        'Cutpurses',
        'Pilferers',
        'Thieves',
        'Rogues',
        'Property Reappropriaters'
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
      ],
      motivation: [
        'money',
        'money',
        'money',
        'money',
        'money',
        'fame',
        'power',
        'power',
        'power',
        'glory',
        'vengeance',
        'vengeance',
        'vengeance',
        'politics'
      ],
      resources: [
        'bits of blackmail material',
        'bits of blackmail material',
        'bits of blackmail material',
        'bits of blackmail material',
        'stolen goods',
        'stolen goods',
        'stolen goods',
        'stolen goods',
        'contacts',
        'contacts',
        'contacts'
      ]
    },
    wizards: {
      leaderTraits: {
        title: 'Archmage',
        hasClass: true,
        profession: 'wizard',
        background: [
          'acolyte',
          'sage'
        ]
      },
      wordNoun: 'college',
      leaderQualification: {
        'the wealthiest of the group': 1,
        'the strongest of the group': 2,
        'able to rise to power by completing an ordeal': 1,
        'the most charismatic of the group': 1,
        'democratically elected': 1,
        'able to oust the previous leadership': 1,
        'able to rise to power through nepotism': 3,
        'promoted by being the most powerful in the group': 1
      },
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
      membersTrait: [
        'their lack of table manners',
        'their extreme interest in the oddities of the arcane',
        'the blue robes they wear',
        'the sash that members are given',
        'the ring that members are given',
        'their excessively bureaucratic tendencies'
      ],
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
      ],
      motivation: [
        'money',
        'money',
        'fame',
        'fame',
        'fame',
        'knowledge',
        'knowledge',
        'knowledge',
        'knowledge',
        'power',
        'power',
        'power',
        'glory',
        'vengeance',
        'vengeance',
        'politics',
        'politics'
      ],
      resources: [
        'magic scrolls',
        'magic scrolls',
        'magic scrolls',
        'magic scrolls',
        'magic trinkets',
        'magic trinkets',
        'magic trinkets',
        'magic trinkets'
      ]
    }
  }
}
