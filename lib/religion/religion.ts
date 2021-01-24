import { ProfessionNames } from '../npc-generation/professions'
import { EconomicIdeology, PoliticalIdeology } from '../town/townData'
import { PoliticalSource, Town } from '../town/_common'
import { AlignmentsAbbreviated, ClericDomains } from '../src/worldType'
import { RaceName, GenderName, AgeName, NPC, ThresholdTable, PartialRecord } from '../'

interface Followers {
  description: string
  favouredWeapon: string
  holyDays: Record<string, string[]>
  race?: RaceName
  gender?: GenderName
  age?: AgeName
  base?: Partial<NPC>
  /** Certain groups might be excluded from following a deity. */
  excluded?: Followers
}

const traits = {
  virtueKey: {
    chaste: 'lustful',
    energetic: 'lazy',
    forgiving: 'vengeful',
    generous: 'selfish',
    honest: 'deceitful',
    just: 'arbitrary',
    merciful: 'cruel',
    modest: 'proud',
    pious: 'worldly',
    prudent: 'reckless',
    temperate: 'indulgent',
    trusting: 'suspicious',
    valorous: 'cowardly'
  },
  viceKey: {
    lustful: 'chaste',
    lazy: 'energetic',
    vengeful: 'forgiving',
    selfish: 'generous',
    deceitful: 'honest',
    arbitrary: 'just',
    cruel: 'merciful',
    proud: 'modest',
    worldly: 'pious',
    reckless: 'prudent',
    indulgent: 'temperate',
    suspicious: 'trusting',
    cowardly: 'valorous'
  }
}

export type Virtues = keyof typeof traits['virtueKey']
export type Vices = keyof typeof traits['viceKey']
export type VirtuesVices = Virtues | Vices

export interface Pantheon {
  /**
   * The name of the patheon, without riders or indefinite articles.
   * @example 'Greek'
   * @usage "The `Greek` gods"
   */
  name: string
  /**
   * The description of the whole pantheon.
   * @example 'The gods of Olympus make themselves known with the gentle lap of waves against the shores and the crash of the thunder among the cloud–enshrouded peaks. The thick boar–infested woods and the sere, olive–covered hillsides hold evidence of their passing. Every aspect of nature echoes with their presence, and they’ve made a place for themselves inside the human heart, too.'
   */
  description: string
  /**
   * Origin stories!
   */
  origin?: string
  /**
   * Who follows the pantheon?
   */
  followers?: Followers
  gods: Deity[]
}

export interface Deity {
  /**
   * For sanity's sake, only one name is allowed so we can easily find the deity. If your deity has multiple names, you can add them to `aliases`, which it will be pulled from at random.
   */
  name: string
  /**
   * Some gods have died, or else have been imprisoned, or they have just retreated to dormancy. Some people may worship these gods, so their status is important 
   * @example ```Baldr: 'dead'```
   * @example ```Kronos: 'imprisoned'```
   * @example ```Pan: 'uncertain'```
   */
  status: 'alive' | 'imprisoned' | 'dormant' | 'dead' | 'uncertain'
  /**
   * Used to determine how likely a god is to be worshipped, either at the town level, or the NPC level.
   */
  probabilityWeightings?: {
    economicIdeology: PartialRecord<EconomicIdeology, number>
    politicalIdeology: PartialRecord<PoliticalIdeology, number>
    politicalSource: PartialRecord<PoliticalSource, number>
    rolls: Record<string, (town: Town, npc: NPC) => number>
    npc: {
      /**
       * Generic catch-all function for NPCs trying to pick a god to follow.
       */
      function: (town: Town, npc: NPC) => void
      /**
       * If there's a Patron Deity of Cheesemakers in the Pantheon, it's pretty likely that the cheesemaker will worship that deity.
       */
      profession: Record<ProfessionNames, number>
    }
  }
  /**
   * For the deity with many names, use `aliases`. When an alias is used instead of the 'main' name, it will be specified that the deity is also known as `name`.
   * NOTE: This is when there are multiple names for the same god - if two cultures have similar gods it should be 'equivalent'
   * @example ['El', 'Anu', 'An', 'Thoru-el']
   */
  aliases?: string[]
  /**
   * While Zeus and Jupiter are arguably the same god, Aphrodite and Ishtar are not, but there is a connection between them.
   * @example Aphrodite: ['Ishtar', 'Astarte']
   */
  equivalent?: string[]
  /**
   * All of the titles that a god might have. Will typically be used as a rider after the name.
   * @example ['Lord of the Skies', 'Ruler of All That He Sees']
   * @usage 'Zeus, Lord of the Skies'
   */
  titles: string[]
  /**
   * Trying to make rank more granular is just asking for trouble.
   * @default 'lesser deity'
   */
  rank:
    | 'leader'
    | 'greater deity'
    | 'intermediate deity'
    | 'lesser deity'
    | 'immortal'
    | 'demigod'
    | 'saint'
  /**
   * Description of the deity overall. If omitted, description will be generated from the rest of the included data.
   */
  description?: string
  /**
   * Description of how the deity is depicted typically. Distinct from their `avatars`.
   */
  appearance: string

  /** 
   * The aspects that the deity manages. This does not mean that no other god has power over this area, just that the god shares in responsibility for the portfolio
   * @example Zeus: ['the skies', 'thunder and lightning', 'law and order', 'fate']
   * @usage 'Zeus is God of `the skies`, `thunder and lightning`, `law and order`, and `fate`.
   */
  portfolios: string[]
  /** 
   *To assign whether to call them gods, goddesses, or deities, and use the correct pronouns. 
   */
  gender: GenderName | 'none' | 'shapeshifter'
  /** 
   * What race the god actually is, E.g. Vanir, Aesir, Jotunn 
   * @default 'god'
   */
  race : RaceName | string
  /** The race the deity is or appears as. Demigods and mortals who ascended to be gods are 'Demigod' or 'RaceName' but are marked as a god or immortal in Rank
   * @default 'human'
   */
  shape: RaceName | string
  /** 
   *For the Norse Aesir/Vanir split 
   */
  faction?: string
  /** 
   * For spirits and other things that shouldn't be called gods, goddesses, or deities.  
   */
  wordNoun?: string
  /**
   * Distinct from `portfolios`, Domains are used in 5th Edition Dungeons and Dragons to assign spells.
   */
  domains: ClericDomains[]
  /**
   * For channel divinity spells and features.
   */
  channelDivinity: string[]
  /**
   * Alignments, for those that are still stuck on 2nd Edition.
   */
  alignment: AlignmentsAbbreviated
  /**
   * The equivalent of a deity's heraldry, an icon or symbol that represents them. Without any indefinite articles.
   * @example Zeus: 'fist full of lightning bolts'
   */
  symbol: string | string[]
  combat: {
    /**
     * For when you want to describe how your deity fights in battle.
     */
    description: string
    /**
     * Their weapon of choice
     * @example Zeus: 'lightning'
     * @usage 'In combat, Zeus uses `lightning`.
     */
    weapon: string
    /**
     * For descriptions about combat.
     * @usage 'Zeus is hotheaded, and does not shy away from a righteous fight.'
     */
    tactics: string
  }
  /**
   * For things that the deity owns.
   * @example `${'Thor'} owns the ${'hammer'} ${'Mjölnir'}, which ${"could return to its owner's hand when thrown, and call lightning down on enemies."}`
   */
  possessions: Possession[]
  /** Some gods had planes/domain which they ruled
   * @example ```Odin: 'Valhalla'```
   */
  realm?: string
  followers: Followers
  /**
   * If a deity particularly embodies a virtue or vice, it can be specified.
   * Be sure to not specify the same pair (i.e. chaste/lust)
   * Expressed as a 0-100.
   * @example
   * Zeus: {
   *   just: 70,
   *   vengeful: 85,
   *   lust: 80
   * }
   */
  personality: PartialRecord<VirtuesVices, number>
  /**
   * Things that the god are associated with, e.g. Sacred plants and animals.
   */
  associations?: {
    /** 
     *A deity can have multiple different avatars, some more rare than others. 
     */
    avatars: Avatar[]
    animals?: string[]
    plants?: string[]
    places?: string[]
    monsters?: string[]
    gems?: string[]
    colours?: string[]
    miscellaneous?: string[]
  }
  beliefs: string
  heresies: string
  /**
   * Some suggested blessings from the god
   * @example Aphrodite: ['beauty']
   */
  blessings?: string[]
  /**
   * Some suggested curses from the god
   * @example Aphrodite: ['ugliness']
   */
  curses?: string[]
}

interface Possession {
  name: string
  wordNoun: string
  powers: string
}

interface Avatar {
  name: string
  appearance: string
  description: string
  frequency: string
  powers: string
}

export type PantheonTypes = 'greek' | 'norse'

export type ReligionStrength =
  | 'fanatical true believer'
  | 'unshakingly devoted believer'
  | 'conspicuously faithful believer'
  | 'outspoken believer'
  | 'quiet true believer'
  | 'casual observer'
  | 'open-minded seeker'
  | 'cautious listener'
  | 'critical student'
  | 'outspoken cynic'
  | 'broken heretic'

interface ReligionData {
  strength: ThresholdTable<ReligionStrength>
  pantheon: Record<PantheonTypes, Pantheon>
  abstractGod: string[]
  saint: string[]
}

export const religion: ReligionData = {
  strength: [
    // npc.name is a _______
    [100, 'fanatical true believer'],
    [90, 'unshakingly devoted believer'],
    [80, 'conspicuously faithful believer'],
    [70, 'outspoken believer'],
    [60, 'quiet true believer'],
    [50, 'casual observer'],
    [40, 'open-minded seeker'],
    [30, 'cautious listener'],
    [20, 'critical student'],
    [10, 'outspoken cynic'],
    [0, 'broken heretic']
  ],
  abstractGod: [
    'Our Lady',
    'Our Mother',
    'the Ancient Flame',
    'the Ancient Oak',
    'the Autumn Singer',
    'the Bat', 'the Battle-Lord',
    'the Bear',
    'the Beast',
    'the Beast-Tamer',
    'the Beast-Wife',
    'the Beauty Queen',
    'the Blood-Bringer',
    'the Burning Man',
    'the Crone',
    'the Cruel King',
    'the Dark Lady',
    'the Dark Lord',
    'the Dark Prophet',
    'the Death Harbinger',
    'the Doom Harbinger',
    'the Doom-Maker',
    'the Eagle',
    'the Earth-Mother',
    'the Earth-Queen',
    'the Enemy',
    'the Eternal Light',
    'the Eternal Sage',
    'the Fair Maiden',
    'the Fatespinner',
    'the Felled Tree',
    'the Fire Dragon',
    'the Forest Keeper',
    'the Frog',
    'the Gloom-Spider',
    'the Goddess',
    'the Grain-Grower',
    'the Great Huntress',
    'the Great Protector',
    'the Great Smith',
    'the Horned One',
    'the Judge',
    'the King Beneath the Waves',
    'the Lawgiver',
    'the Life-Keeper',
    'the Life-Tree',
    "the Light's Son",
    'the Magic-Maid',
    'the Messenger',
    'the Mighty Hunter',
    'the Mighty One',
    'the Mighty Warrior',
    'the Mischief-Maker',
    'the Moon-Witch',
    'the Mountain Forger',
    'the Night Queen',
    'the Oathkeeper',
    'the Oracle',
    'the Prophet',
    'the Sacred Grove',
    'the Savior',
    'the Scorpion',
    'the Sea Dragon',
    'the Sea God',
    'the Sea Queen',
    'the Seductress',
    'the Shadow',
    'the Shadowkeeper',
    'the Shadow-Serpent',
    'the Shield-Maiden',
    'the Ship-Taker',
    'the Sky Father',
    'the Soothsayer',
    'the Soul-Collector',
    'the Soul-Eater',
    'the Spider',
    'the Spring Maiden',
    'the Starfinder',
    'the Stone Dragon',
    'the Storm Dragon',
    'the Storm King',
    'the Storm-Bringer',
    'the Summer Mistress',
    'the Sunkeeper',
    'the Sword-Prince',
    'the Thief',
    'the Tormenter',
    'the Tree Spirit',
    'the Undying Light',
    'the Unnamed One',
    'the Unyielding Tyrant',
    'the Voice',
    'the Wandering Rogue',
    'the War-Maker',
    'the Watcher',
    'the Watchful Eye',
    'the Wind King',
    'the Winemaker',
    'the Winter Lady',
    'the Wolf'
  ],
  saint: [
    'Almar the Holy',
    'Amaya the Seeress',
    'Bahak the Preacher',
    'Bahruz the Prophet',
    'Lira the Flamekeeper',
    'Mozar the Conqueror',
    'Prince Tarunal',
    'Queen Kalissa',
    'Rahal the Sunsoul',
    'Raham the Lightbringer',
    'St. Aemilia',
    'St. Albus',
    'St. Anglos',
    'St. Antonia',
    'St. Antonus',
    'St. Austyn',
    'St. Bardo',
    'St. Beatrix',
    'St. Berta',
    'St. Bettius',
    'St. Bryenn',
    'St. Buttercup',
    'St. Carolo',
    'St. Cedrick',
    'St. Cordelia',
    'St. Cowhan',
    'St. Cumberbund',
    'St. Dorys',
    'St. Dreddos',
    'St. Dwayn',
    'St. Edwynna',
    'St. Elayne',
    'St. Falstyus',
    'St. Farcas',
    'St. Florenzo',
    'St. Gabrella',
    'St. Gaiorgus',
    'St. Goodkynd',
    'St. Hal',
    'St. Halcincas',
    'St. Haroldus',
    'St. Hemingwar',
    'St. Heraclora',
    'St. Hermioninny',
    'St. Hieronymus',
    'St. Inigo',
    'St. Jordyn',
    'St. Katrynn',
    'St. Lannus',
    'St. Leo',
    'St. Leryo',
    'St. Londyn',
    'St. Magio',
    'St. Marius',
    'St. Markuz',
    'St. Martyn',
    'St. Matromus',
    'St. Morrsona',
    'St. Morwayne',
    'St. Murkel',
    'St. Mychel',
    'St. Nyneva',
    'St. Paolo',
    'St. Parrinus',
    'St. Perseon',
    'St. Petyr',
    'St. Podryck',
    'St. Polly',
    'St. Pratchytt',
    'St. Rawynn',
    'St. Regus',
    'St. Ricarddos',
    'St. Roberts',
    'St. Robinus',
    'St. Rowhan',
    'St. Rowlynna',
    'St. Sansima',
    'St. Sessimus',
    'St. Severus',
    'St. Stynebick',
    'St. Symeon',
    'St. Theseon',
    'St. Thoryn',
    'St. Tolkkyn',
    'St. Twayn',
    'St. Xavos',
    'the Deliverer',
    'the Doomcaller',
    'the Doomsayer',
    'the Lawgiver',
    'the Oracle',
    'the Prophet',
    'the Savior',
    'the Seeker',
    'the Shadowseer',
    'the Soothsayer',
    'the Starwatcher',
    'the Truthsayer',
    'the Voice',
    'Zefar the Sorcer'
  ],
  pantheon: {
    greek: {
      name: 'greek',
      description: 'The gods of Olympus make themselves known with the gentle lap of waves against the shores and the crash of the thunder among the cloud–enshrouded peaks. The thick boar–infested woods and the sere, olive–covered hillsides hold evidence of their passing. Every aspect of nature echoes with their presence, and they’ve made a place for themselves inside the human heart, too.',
      followers: {
        description: '',
        favouredWeapon: '',
        holyDays: {
          default: []
        }
      },
      gods: [
        { // Zeus
          name: 'Zeus',
          status: 'alive',
          titles: [
            'God of the Sky',
            'Ruler of the Gods',
            'The Thunderer',
            'God of Refuge',
            'Oathkeeper'
          ],
          rank: 'leader',
          description: 'string',
          appearance: 'Zeus is depicted as a regal, mature man with a sturdy figure and dark beard grasping a lightning bolt and wreathed in a crown of olive leaves.',
          portfolios: [
            'the skies',
            'thunder and lightning',
            'kings',
            'law and order',
            'fate',
            'justice',
            'moral conduct',
            'guest-right'
          ],
          gender: 'man',
          shape: 'human',
          race: 'god',
          domains: [
            'tempest',
            'order'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'fist full of lightning bolts',
          combat: {
            description: 'string',
            weapon: 'lightning',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'Aegis',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'Zeus is followed by many, of all different race and creed.',
            favouredWeapon: 'spear',
            holyDays: {
              earth: ['January', 'Thursday']
            }
          },
          personality: {
            just: 70,
            vengeful: 85,
            lustful: 80
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'eagle',
              'bull'],
            plants: [
              'oak tree',
              'olive tree'
            ],
            monsters: [],
            gems: [],
            colours: ['yellow'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { // Poseidon
          name: 'Poseidon',
          status: 'alive',
          aliases: ['Neptune'],
          titles: [
            'God of the Sea and Earthquakes',
            'Watcher',
            'Shaker of the Earth',
            'Horse Tender'
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: 'A mature man with a sturdy build and a dark beard holding a Trident and a sea-creature encrusted boulder, simply crowned with a headband with a cloak draped around his arms ',
          portfolios: [
            'the sea',
            'earthquakes',
            'floods',
            'drought',
            'horses',
            'fresh water'
          ],
          gender: 'man',
          shape: 'human',
          race: 'god', 
          domains: [
            'tempest'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'A trident and billowing cloak',
          combat: {
            description: 'A trident',
            weapon: 'Trident',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 50,
            vengeful: 85,
            lustful: 80
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'horse',
              'dolphin',
              'fish',
              'bull'
            ],
            plants: [
              'pine tree',
              'seaweed',
              'wild celery'
            ],
            monsters: ['hippocamp'],
            gems: [],
            colours: ['blue'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { // Hades
          name: 'Hades',
          status: 'alive',
          aliases: ['Pluto', 'Pluton', 'The Cthonic Zeus'],
          equivalent: ['Pluto'], // Pluto was originally a different god to Hades
          titles: [
            'God of the Dead',
            'King of the Underworld',
            'God of Wealth',
            'Host of Many',
            'The Impartial Binder',
            'The invisible one'
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: 'Dark-bearded, regal god, with a bird tipped sceptre seated with Cerebus by his throne.',
          portfolios: [
            'the underworld',
            'the dead',
            'funeral rites',
            'right to be buried',
            'fertile soil',
            'precious metals',
            'dreams from the dead',
            'necromancy',
            'curses'
          ],
          gender: 'man',
          shape: 'human',
          race: 'god', 
          domains: [
            'death',
            'grave'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'Helm of Hades',
          combat: {
            description: 'The Sceptre of Hacdes, able to create a passage between the worlds of the living and the dead',
            weapon: 'Sceptre',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 90,
            vengeful: 85,
            lustful: 20
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'Screech-Owl',
              'Serpents', // Not Sure
              'Black-Rams' // Not Sure
              // Hades' Cattle? Not sure because it is specifically the cattle of Hades (Likewise Apollo has cattle that are his)
            ],
            plants: [
              'White Poplar',
              'Mint',
              'Cypress',
              'Asphodel',
              'Narcissus'
            ],
            monsters: [
              'Cerebus',
              'The Erinyes'
            ],
            gems: [],
            colours: ['string'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { // Aphrodite
          name: 'Aphrodite',
          status: 'alive',
          aliases: ['Venus'],
          equivalent: ['Ishtar', 'Astarte'],
          titles: [
            'The Deviser',
            'The Goddess for all folk',
            'Smile-loving',
            'The Goddess of Beauty',
            'The Goddess of Sexuality',
            'The Shapely',
            'Killer of Men',
            'Gravedigger',
            'the Mother'
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: 'string',
          portfolios: [
            'love',
            'lovers',
            'lust',
            'sexuality',
            'beauty',
            'pleasure',
            'procreation',
            'prostitutes',
            'love poetry'
          ],
          gender: 'woman',
          shape: 'human',
          race: 'god', 
          domains: [
            'life',
            'light',
            'trickery',
            'war'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'string',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['the fourth day of every month']
            }
          },
          personality: {
            just: 30,
            vengeful: 85,
            lustful: 100
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'dove',
              'swan',
              'goose',
              'sparrow',
              'swallow',
              'wryneck' // English name for Iynx
            ],
            plants: [
              'rose',
              'myrtle',
              'apple',
              'poppy'
            ],
            monsters: ['nereids'],
            gems: [],
            colours: ['string'],
            miscellaneous: ['conch shells']
          },
          beliefs: 'string',
          heresies: 'string',
          blessings: [
            'beauty'
          ],
          curses: [
            'ugliness'
          ]
        },
        { // Artemis
          name: 'Artemis',
          status: 'alive',
          aliases: ['Diana','Brauronia', 'Orthia'],
          equivalent: ['Selene', 'Britomartis', 'Dictynna', 'Eileithyial'],
          titles: [
            'Goddess of the Hunt',
            'Goddess of the Beasts',
            'Nurse of Children',
            'Friend of Girls',
            'Goddess of the Glocks and the Chase',
            'The best advisor'
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: 'string',
          portfolios: [
            'hunting',
            'the wilderness',
            'wild animals',
            'childbirth',
            'sudden death and disease of girls',
            'the moon',
            'dawn',
            'children',
            'maidenhood',
            'healing',
            'ritual purification'
          ],
          gender: 'woman',
          shape: 'human',
          race: 'god', 
          domains: [
            'nature',
            'life',
            'twilight'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'bow and quiver of arrows',
          combat: {
            description: 'As a child Artremis asked her father for a Bow and Arrow made by the Cyclopses',
            weapon: 'bow and arrows',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'bow',
            holyDays: {
              earth: ['the sixth day']
            }
          },
          personality: {
            just: 50,
            vengeful: 85,
            lustful: 0
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'deer',
              'bear',
              'boar',
              'heron',
              'fresh-water fish',
              'buzzard-hawk',
              'guinea-fowl',
              'partridge'
            ],
            plants: [
              'amaranth',
              'asphodel',
              'cypress',
              'laurel',
              'palm tree'
            ],
            monsters: ['nymphs', 'calydonian boar'],
            gems: [],
            colours: ['string'],
            miscellaneous: ['lyre', 'torches', 'spears and nets']
          },
          beliefs: 'chastity',
          heresies: 'string'
        },
        { // Apollo
          name: 'Apollo',
          status: 'alive',
          aliases: ['Apollon'],
          titles: [
            'Of the Oracle',
            'Shooter from Afar',
            'the Healer',
            'Averter of Harm',
            'Of the Locusts'
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: 'string',
          portfolios: [
            'music',
            'prophecy',
            'healing',
            'archery',
            'plague',
            'disease',
            'sudden death and diseases of boys'
          ],
          gender: 'man',
          shape: 'human',
          race: 'god', 
          domains: [
            'light',
            'knowledge',
            'life'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'lyre',
          combat: {
            description: 'The Bow of Apollo, a godly weapon',
            weapon: 'bow',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'The Lyre of Apollo',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 50,
            vengeful: 85,
            lustful: 80
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'swan',
              'raven',
              'python',
              'wolves',
              'dolphin',
              'roe deer',
              'cicada',
              'hawk',
              'crows',
              'mousee'
            ],
            plants: [
              'laurel',
              'larkspur',
              'cypress'
            ],
            monsters: ['griffon'],
            gems: [],
            colours: ['string'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { // Athena
          name: 'Athena',
          status: 'alive',
          aliases: ['Minerva', 'Athene'],
          equivalent: ['Minerva'],
          titles: [
            'The Warlike',
            'Defender',
            'Keeper of the City',
            'The Contriver of Plans and Devices',
            'The Maiden',
            'Of Hospitality',
            'Of the Head'
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: 'A stately woman wearing a helmet armed with a spear and Aegis',
          portfolios: [
            'wisdom',
            'good counsel',
            'olives',
            'weaving',
            'battle strategy',
            'pottery',
            'sculpture',
            'defense of towns',
            'heroic endeavour',
            'crafts',
            'invention',
            'art',
            'knowledge'
          ],
          gender: 'woman',
          shape: 'human',
          race: 'god', 
          domains: [
            'knowledge',
            'order',
            'war',
            'trickery'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: ['Gorgoneion', 'Aegis'],
          combat: {
            description: 'string',
            weapon: 'spear',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'Aegis of Athena',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 80,
            vengeful: 80,
            lustful: 0
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'owl',
              'snake',
              'rooster'
            ],
            plants: [
              'olive tree'
            ],
            monsters: [],
            gems: [],
            colours: ['string'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { // Dionysus
          name: 'Dionysus',
          status: 'alive',
          aliases: ['Bacchus'],
          equivalent: ['Zagreus', 'Iacchus', 'Liber'],
          titles: [
            'Of the Bacchic Frenzy',
            'The Raging One',
            'Of the Night',
            'Of the Phallus',
            'God of Wine',
            'Of the Ivy',
            'Twice-born',
            'the Flesh-eater',
            'the Giver of Wings',
            'the Orphic One',
            'of the Mysteries',
            'the Blooming',
            'the Warlike',
            'the Singer',
            'the Dying and Rising',
            'the arriving one'
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: 'string',
          portfolios:
          [
            'wine',
            'vegetation',
            'pleasure',
            'festivity',
            'madness',
            'wild frenzy',
            'orchards',
            'ritual madness',
            'grape-harvest',
            'the vine',
            'theatre',
            'tragedy and comedy plays',
            'religious ectasy',
            'homosexuality',
            'effeminacy',
            'reincarnation',
            'foreign gods'
          ],
          gender: 'man',
          shape: 'human',
          race: 'god', 
          domains: [
            'nature',
            'life',
            'trickery'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'Thyrsus',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['the eighth month']
            }
          },
          personality: {
            just: 20,
            forgiving: 25,
            lustful: 90

            // energetic: 'lazy',
            // generous: 'selfish',
            // honest: 'deceitful',
            // merciful: 'cruel',
            // modest: 'proud',
            // pious: 'worldly',
            // prudent: 'reckless',
            // temperate: 'indulgent',
            // trusting: 'suspicious',
            // valorous: 'cowardly'
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'bull',
              'panther',
              'lion',
              'leopard',
              'goat',
              'serpent',
              'donkey'
            ],
            plants: [
              'ivy',
              'grapevine',
              'bindweed',
              'cinnamon',
              'silver fir',
              'pine tree'
            ],
            monsters: ['satyrs'],
            gems: [],
            colours: ['string'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { // Demeter
          name: 'Demeter',
          status: 'alive',
          aliases: [
            'Ceres',
            'Deo'
          ],
          titles: [
            'Of the Grain',
            'Law-Bringer',
            'Of the Earth',
            'Bearer of Fruit',
            'Great Goddess',
            'Of the Mysteries',
            'Lovely Haired'
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: 'A Mature woman wearing a crown holding weat in a cornocopia and a torch',
          portfolios: [
            'agriculture',
            'grain and bread',
            'the Eleusinian mysteries',
            'the harvest',
            'fertility',
            'sacred law',
            'natural law',
            'the afterlife'
          ],
          gender: 'woman',
          shape: 'human',
          race: 'god', 
          domains: [
            'life'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'cornucopia',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 50,
            vengeful: 85,
            lustful: 80
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'snake',
              'pig',
              'gecko',
              'turtle-dove',
              'crane'
            ],
            plants: [
              'wheat',
              'barley',
              'mint',
              'poppy'
            ],
            monsters: [],
            gems: [],
            colours: ['string'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { // Hermes
          name: 'Hermes',
          status: 'alive',
          aliases: ['Mercury'],
          titles: [
            'Keeper of the Flocks',
            'Of the Market-Place',
            'Of the Games',
            'Translator',
            'Slayer of Argos',
            'Immortal Guide',
            'Messenger of the Blessed',
            'Messenger of the Gods',
            'Of the Golden Wand',
            'Full of Various Wiles',
            'Giver of Good Things',
            'Of Searchers',
            'Guide of the Dead',
            'Bringer of Peace',
            'God of Merchants'
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: 'string',
          portfolios: [
            'herds and flocks',
            'boundaries',
            'animal husbandry',
            'travellers',
            'hospitality',
            'roads',
            'trade',
            'thievery',
            'cunning',
            'deception',
            'persuasion',
            'heralds',
            'messangers',
            'diplomacy',
            'language',
            'writing',
            'the home',
            'luck',
            'athletic contests',
            'gymnasiums',
            'astronomy',
            'astrology',
            'birds of omen',
            'guiding the dead', // also known as Psychopomp
            'sleep',
            'rustic divination',
            'rustic music',
            'rustic fables'
          ],
          gender: 'man',
          shape: 'human',
          race: 'god', 
          domains: [
            'trickery',
            'peace',
            'grave'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'Caduceus ',
          combat: {
            description: 'string',
            weapon: 'sword',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'Adamantine Blade',
              wordNoun: 'string',
              powers: 'string'
            },
            {
              name: 'Talaria',
              wordNoun: 'Winged boots',
              powers: 'string'
            },
            {
              name: 'Winged helm',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['Wednesday']
            }
          },
          personality: {
            just: 50,
            vengeful: 85,
            lustful: 80
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'hare',
              'ram',
              'hawk',
              'goat',
              'tortoise',
              'rooster'
            ],
            plants: [
              'crocus',
              'strawberry-tree'
            ],
            monsters: [],
            gems: [],
            colours: ['string'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { // Hera
          name: 'Hera',
          status: 'alive',
          titles: [
            'Queen of the Gods',
            'Goddess of Kings and Empires',
            'Goddess of Marriage',
            'Whose Hand is Above',
            'Of the Flowers'
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: 'a beautiful woman wearing a crown and holding a royal, lotus-tipped sceptre',
          portfolios: [
            'marriage',
            'air',
            'women',
            'childbirth',
            'family',
            'sky',
            'stars of heaven'
          ],
          gender: 'woman',
          shape: 'human',
          race: 'god', 
          domains: [
            'order',
            'trickery',
            'life'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'string',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 50,
            vengeful: 85,
            lustful: 20
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'heifer',
              'lion',
              'cuckoo',
              'peacock',
              'panther'
            ],
            plants: [
              'pomegranate',
              'lily',
              'willow'
            ],
            monsters: [],
            gems: [],
            colours: ['string'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { // Ares
          name: 'Ares',
          status: 'alive',
          titles: [
            'Who rallies men',
            'Destroyer of Men',
            'Terrible',
            'Warlike',
            'Of the Golden Helm'
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: 'string',
          portfolios: [
            'war',
            'battlelust',
            'courage',
            'civil order',
            'brutality',
            'violence',
            'rage'
          ],
          gender: 'man',
          shape: 'human',
          race: 'god', 
          domains: [
            'war'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'string',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['Tuesday']
            }
          },
          personality: {
            just: 50,
            vengeful: 85,
            lustful: 80
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'serpent',
              'hound',
              'boar',
              'vulture',
              'eagle-owl',
              'woodpecker'
            ],
            plants: [
              ''
            ],
            monsters: [],
            gems: [],
            colours: ['string'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { // Hestia
          name: 'Hestia',
          status: 'alive',
          aliases: ['Vesta'],
          titles: [
            'Daughter of lovely-haired Rhea',
            'Daughter of Cronos',
            'Rich in Blessings',
            'Beloved'
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: 'string',
          portfolios: [
            'fire',
            'family hearth',
            'civic hearth',
            'home',
            'cooking',
            'the sacrificial flame',
            'sacrifices',
            'sacred flame',
            'domesticity',
            'family',
            'virginity',
            'the state'
          ],
          gender: 'woman',
          shape: 'human',
          race: 'god', 
          domains: [
            'life',
            'light',
            'peace'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'string',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 50,
            vengeful: 85,
            lustful: 0
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'pig'
            ],
            plants: [
              'chaste-tree'
            ],
            monsters: [],
            gems: [],
            colours: ['green'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { // Hephaestus
          name: 'Hephaestus',
          status: 'alive',
          titles: [
            'Glorius Craftsman',
            'Famed Craftsman',
            'Of many Crafts',
            'Crooked-Foot',
            'Of Bronze'
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: 'string',
          portfolios: [
            'fire',
            'blacksmiths',
            'craftsmen',
            'metalworking',
            'forges',
            'stone masonry',
            'scultpure',
            'technology',
            'artisans',
            'carpenters',
            'metallurgy',
            'volcanoes'
          ],
          gender: 'man',
          shape: 'human',
          race: 'god', 
          domains: [
            'knowledge',
            'forge'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'Hammer and Tongs',
          combat: {
            description: 'string',
            weapon: 'hammer',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 50,
            vengeful: 85,
            lustful: 80
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'donkey'
            ],
            plants: [
              ''
            ],
            monsters: [],
            gems: [],
            colours: ['string'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { // Persephone
          name: 'Persephone',
          status: 'alive',
          aliases: ['Kore'],
          equivalent: ['Libera', 'Proserpina'],
          titles: [
            'Queen of the Underworld',
            'Knowing One',
            'Exacter of Justice',
            'Of the Earth',
            'Bringer of Fruit'
          ],
          rank: 'intermediate deity',
          description: 'string',
          appearance: 'string',
          portfolios: [
            'spring',
            'flowers',
            'death',
            'life',
            'vegetation',
            'fertility of plants',
            'the Eleusinian Mysteries',
            'the blessed afterlife'
          ],
          gender: 'none',
          shape: 'human',
          race: 'god', 
          domains: [
            'life',
            'grave',
            'death'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'string',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 50,
            vengeful: 85,
            lustful: 80
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'deer'
            ],
            plants: [
              'pomegranate',
              'wheat',
              'asphodel',
              'flowers'
            ],
            monsters: [],
            gems: [],
            colours: ['string'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { // Hecate
          name: 'Hecate',
          status: 'alive',
          titles: [
            'Worker from Afar',
            'Of the Underworld',
            'Nurse of Children',
            'Who Attends',
            'Leader of the Dogs',
            'Three-bodied'
          ],
          rank: 'intermediate deity',
          description: 'string',
          appearance: 'string',
          portfolios: [
            'magic',
            'night',
            'ghosts',
            'necromancy',
            'boundaries',
            'crossroads',
            'herbs',
            'poisonous plants'
          ],
          gender: 'woman',
          shape: 'human',
          race: 'god', 
          domains: [
            'arcana',
            'knowledge',
            'trickery',
            'twilight',
            'death',
            'nature'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'string',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 50,
            vengeful: 85,
            lustful: 20
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'dogs',
              'red mullet',
              'serpent',
              'polecat',
              'frog',
              'cow',
              'horse',
              'lion'
            ],
            plants: [
              'yew',
              'oak',
              'garlic',
              'cypress',
              'aconite',
              'belladonna',
              'dittany',
              'mandrake'
            ],
            monsters: ['ghosts', 'Lampades'],
            gems: [],
            colours: ['string'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { //Nike
          name: 'Nike',
          status: 'alive',
          titles: ['Goddess of Victory', 'The Winged Goddess'],
          rank: 'lesser deity',
          description: 'string',
          appearance: 'string',
          portfolios: ['victory', 'speed', 'strength'],
          gender: 'woman',
          shape: 'human',
          race: 'god', 
          domains: [
            'war',
            'peace'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'Winged Woman',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 50,
            vengeful: 85,
            lustful: 20
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'string'
            ],
            plants: [
              'palm tree',
              'bay tree'
            ],
            monsters: [],
            gems: [],
            colours: ['string'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { // Tyche
          name: 'Tyche',
          status: 'alive',
          titles: ['Godess of Fortune and Chance'],
          rank: 'lesser deity',
          description: 'string',
          appearance: 'string',
          portfolios: ['luck', 'chance', 'fate', 'providence', 'natural disasters'],
          gender: 'woman',
          shape: 'human',
          race: 'god', 
          domains: [
            'trickery'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'string',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 50,
            vengeful: 85,
            lustful: 20
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'string'
            ],
            plants: [
              'string'
            ],
            monsters: [],
            gems: [],
            colours: ['string'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { // Hebe
          name: 'Hebe',
          status: 'alive',
          titles: ['Goddess of Eternal Youth', 
          'Daughter of Zeus', 
          'Wife of Hercules'
        ],
          rank: 'lesser deity',
          description: 'string',
          appearance: 'string',
          portfolios: [
            'youth',
            'forgiveness',
            'mercy',
            'brides'
          ],
          gender: 'woman',
          shape: 'human',
          race: 'god', 
          domains: [
            'life'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'string',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['June']
            }
          },
          personality: {
            just: 50,
            vengeful: 85,
            lustful: 80
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'hen',
              'eagle'
            ],
            plants: [
              'ivy',
              'lettuce'
            ],
            monsters: [],
            gems: [],
            colours: ['string'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string',
          blessings: ['Restored Youth']
        },
        { // Pan
          name: 'Pan',
          status: 'uncertain',
          titles: [
            'The God of the Wild',
            'Of the Pastures',
            'Terrifying One',
            'Of the Hunt'
          ],
          rank: 'intermediate deity',
          description: 'string',
          appearance: 'A Satyr holding a set of Pan-pipes',
          portfolios: [
            'the wild',
            'nature',
            'shephard',
            'flocks',
            'sexuality',
            'hunters',
            'panic'
          ],
          gender: 'man',
          shape: 'satyr',
          race: 'god', 
          domains: [
            'nature',
            'trickery'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'string',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 50,
            vengeful: 85,
            lustful: 100
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'goat',
              'tortoise'
            ],
            plants: [
              'corsican pine',
              'water-reed',
              'beech trees'
            ],
            monsters: [],
            gems: [],
            colours: ['string'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { // Aslepius
          name: 'Aslepius',
          status: 'alive',
          titles: [
            'God of Healing',
            'Lover of the People'

          ],
          rank: 'lesser deity',
          description: 'string',
          appearance: 'string',
          portfolios: [
            'medicine',
            'healing',
            'rejuvination',
            'doctors'
          ],
          gender: 'man',
          shape: 'human',
          race: 'demigod', 
          domains: [
            'life',
            'knowledge'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'Serpent-entwined staff',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 50,
            vengeful: 85,
            lustful: 80
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'snake'
            ],
            plants: [
              'milkweed'
            ],
            monsters: [],
            gems: [],
            colours: ['string'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { // Chiron
          name: 'Chrion',
          status: 'alive',
          titles: [
            'Wisest of the Centaurs',
            'The Teacher'
          ],
          rank: 'immortal',
          description: 'string',
          appearance: 'string',
          portfolios: [
            'teacher',
            'surgeons'
          ],
          gender: 'man',
          shape: 'centaur',
          race: 'centaur', 
          domains: [
            'knowledge',
            'peace'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'string',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 50,
            vengeful: 85,
            lustful: 20
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              ''
            ],
            plants: [
              ''
            ],
            monsters: [],
            gems: [],
            colours: ['string'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { // Hercules
          name: 'Heracles',
          status: 'alive',
          aliases: ['Hercules'],
          titles: ['Divine Protector of Mankind'],
          rank: 'lesser deity',
          description: 'string',
          appearance: 'string',
          portfolios: [
            'mankind',
            'gymnasium',
            'strength',
            'heroes'
          ],
          gender: 'man',
          shape: 'human',
          race: 'demigod', 
          domains: [
            'war'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'olive-wood club and lion skin cape',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 50,
            vengeful: 85,
            lustful: 80
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'lion'
            ],
            plants: [
              'olive tree'
            ],
            monsters: [],
            gems: [],
            colours: ['string'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { // Ariadne
          name: 'Ariadne',
          status: 'alive',
          equivalent: ['Libera', 'Proserpina'],
          titles: ['Wife of Dionysus'],
          rank: 'immortal',
          description: 'string',
          appearance: 'string',
          portfolios: [
            'mazes',
            'fertility',
            'wine',
            'seasonal agriculture'
          ],
          gender: 'woman',
          shape: 'human',
          race: 'human', 
          domains: [
            'trickery',
            'nature',
            'life'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: 'string',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'The Thread of Ariadne',
              wordNoun: 'thread',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'string',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 50,
            vengeful: 85,
            lustful: 80
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'string'
            ],
            plants: [
              'string'
            ],
            monsters: [],
            gems: [],
            colours: ['string'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        }
      ]
    },
    norse: {
      name: 'norse',
      description: 'The gods of Asgard are ....',
      followers: {
        description: '',
        favouredWeapon: '',
        holyDays: {
          default: []
        }
      },
      gods: [
        { //Odin
          name: 'Name',
          status: 'alive',
          titles: [
            'The Allfather',
            'Lord of the Aesir',
            'Flaming Eye',
            'Battle Enhancer',
            'Ancient One',
            'Enemy of the Wolf',
            'God of Burdens',
            'Wise One',
            'Spear god',
            'Swift in Deciet',
            'Wand Bearer',
            'Teacher of Gods',
            'Vistor of the Hanged',
            'Father of Hosts',
            'Raven God',
            'The Hanging One',
            'God of Victory'
          ],
          rank: 'leader',
          description: 'string',
          appearance: '',
          portfolios: [
            'wisdom',
            'death',
            'royalty',
            'the gallows',
            'war',
            'battle',
            'victory',
            'sorcery',
            'poetry',
            'frenzy',
            'runic alphabet'
          ],
          gender: 'man',
          shape: 'human',
          race: 'god',
          faction:'aesir',
          domains: [
            'knowledge',
            'trickery',
            'war',
            'arcana'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: '',
          combat: {
            description: 'string',
            weapon: 'spear',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'Gungir',
              wordNoun: 'spear',
              powers: 'is so well balanced it can hit any target, regardless of skill'
            },
            {
              name: 'Draupnir',
              wordNoun: 'gold ring',
              powers: 'drips forth eight identical rings after nine days'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: '',
            holyDays: {
              earth: ['Wednesday']
            }
          },
          personality: {
            just: 70,
            vengeful: 85,
            lustful: 20
          },
          realm: 'Valhalla',
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'raven',
              'wolf'
            ],
            plants: [
              'poppy'
            ],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { //Thor
          name: 'Thor',
          status: 'alive',
          titles: [
            'The one who Rides Alone',
            'The one who Rules Alone',
            'Protector of the Shrine',
            'The Loud Weather God',
            'The terrible',
            'The Thunderer',
            'Odinson',
            'Strong-Spirit'
          ],
          rank: 'greater deity',
          description: 'Thor is the God of Lightning, Thunder and Storms. He is a god of Strength, yet he is also a god who protects the sacred groves and mankind.',
          appearance: '',
          portfolios: [
            'strength',
            'battle prowess',
            'lightning',
            'thunder',
            'storms',
            'sacred groves',
            'the protection of mankind',
            'harrowing',
            'fertility'
          ],
          gender: 'man',
          shape: 'human',
          race: 'god',
          faction:'aesir',
          domains: [
            'tempest',
            'war',
            'nature'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: '',
          combat: {
            description: 'string',
            weapon: 'hammer',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'Jarngreipr ',
              wordNoun: 'gloves',
              powers: 'he needs to handle Mjolnir '
            },
            {
              name: 'Mjolnir',
              wordNoun: 'hammer',
              powers: 'summons thunderbolts and, in select cases, can ressurect the fallen. In its forging a mistake was made and the handle is short'//Don't think it returns - this is not Marvel
            },
            {
              name: 'Megingjord',
              wordNoun: 'belt',
              powers: 'doubles Thors mighty strength, allowing him to lift to Mjolnir'
            },
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'hammer',
            holyDays: {
              earth: ['Thursday']
            }
          },
          personality: {
            just: 70,
            vengeful: 85,
            lustful: 80
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'goat'],
            plants: [
              'oak'
            ],
            places: [
              'groves',
              'oak forests'
            ],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { //Loki
          name: 'Loki',
          status: 'alive', //unless he is bound to the stone with the snake above him - dunno about this
          titles: [
            'Tangler',
            'Father of Lies',
            'Roarer',
            'The Sly One',
            'Laufeys son',
            'Thief of the Idunns apples',
            'Hawks child',
            'Betrayer of the Gods',
            'The Bound God',
            'He who has borne children'
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: '',
          portfolios: [
            'magic',
            'mischief',
            'deceit',
            'thievery',
            'chaos',
            'change',
            'temptation',
            'shapeshifting'
          ], //Not fire, that is Logi, the Jotunn of Fire
          gender: 'shapeshifter',
          shape: 'human',
          race: 'Jotunn',
          faction: 'aesir',
          domains: [
            'trickery'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: '',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'spear',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 70,
            vengeful: 85,
            lustful: 80
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'string'],
            plants: [
              'birch',
              'mistletoe'
            ],
            monsters: ['Fenrir', 'Jormungandr'],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { //Frigga
          name: 'Frigg',
          status: 'alive',
          aliases: [
            'Frigga'
          ],
          titles: [
            'Protectress',
            'Queen of the Gods'
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: '',
          portfolios: [
            'prophecy',
            'wisdom',
            'the household',
            'marriage',
            'social bonds',
            'rain',
            'mists',
            'fertility',
            'birth',
            'wetlands',
            'protection',
            'weaving'
          ],
          gender: 'woman',
          shape: 'human',
          race: 'god',
          faction: 'aesir',
          domains: [
            'knowledge',
            'life'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: '',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'spear',
            holyDays: {
              earth: ['Friday']
            }
          },
          personality: {
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'waterfowl',
              'ducks',
              'geese'
            ],
            plants: [
              'linden'
            ],
            places: [
              'wetlands',
              'swamps'
            ],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { //Freyr
          name: 'Freyr',
          status: 'alive',
          aliases: ['Frey', 'Yngvi'],
          titles: [
            'the Lord',
            'The Generous One',
            'God of Sunlight',
            'Sunbeam',
            'Lord of Plenty',
            'the Fruitful'
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: '',
          portfolios: [
            'religious kingship',
            'virility',
            'sunshine',
            'peace',
            'prosperity',
            'fair weather',
            'good harvest',
            'rain',
            'war'
          ],
          gender: 'man',
          shape: 'human',
          race: 'god',
          faction: 'vanir',
          domains: [
            'light',
            'life',
            'peace',
            'nature',
            'war'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: '',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'Gullinbursti',
              wordNoun: 'golden boar',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'spear',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
          },
          
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'boar',
              'stags'
            ],
            plants: [
              'crops'
            ],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { //Freyja
          name: 'Freyja',
          status: 'alive',
          aliases: ['Freya', 'Freja'],
          titles: [
            'The Giver',
            'Flaxen',
            'One who makes the Sea Swll',
            'Lady of the Slain',
            'Noble Lady',
            'Bright One',
            'Goddess of the Vanir',
            'Fair Tear Deity'
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: '',
          portfolios: [
            'love',
            'marriage',
            'prosperity',
            'beauty',
            'fertility',
            'sex',
            'war',
            'gold',
            'magic'
          ],
          gender: 'woman',
          shape: 'human',
          race: 'god',
          domains: [
            'life',
            'arcana',
            'war'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: '',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'spear',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            lustful: 70
          },
          realm: 'Folkvangr',
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'cat',
              'lynx',
              'falcon',
              'boar'
            ],
            plants: [
              ''
            ],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { //Bragi
          name: 'Name',
          status: 'alive',
          titles: [
            ''
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: '',
          portfolios: [
            ''
          ],
          gender: 'man',
          shape: 'human',
          race: 'god',
          domains: [
            'knowledge'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: '',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'spear',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 70,
            vengeful: 85,
            lustful: 80
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'string'],
            plants: [
              'string'
            ],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { //Sif
          name: 'Name',
          status: 'alive',
          titles: [
            ''
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: '',
          portfolios: [
            ''
          ],
          gender: 'man',
          shape: 'human',
          race: 'god',
          domains: [
            'war'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: '',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'spear',
            holyDays: {
              earth: ['']
            }
          },
          personality: {
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'string'],
            plants: [
              'rowan'
            ],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { //Baldr
          name: 'Baldr',
          status: 'dead',
          titles: [
            ''
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: '',
          portfolios: [
            ''
          ],
          gender: 'man',
          shape: 'human',
          race: 'god',
          domains: [
            'life',
            'light'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: '',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'spear',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 70,
            vengeful: 85,
            lustful: 80
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'string'],
            plants: [
              'string'
            ],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { //Aegir
          name: 'Name',
          status: 'alive',
          titles: [
            ''
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: '',
          portfolios: [
            ''
          ],
          gender: 'man',
          shape: 'human',
          race: 'god',
          domains: [
            'tempest'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: '',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'spear',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 70,
            vengeful: 85,
            lustful: 80
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'string'],
            plants: [
              'string'
            ],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
        { //Hel
          name: 'Hel',
          status: 'alive',
          titles: [
            ''
          ],
          rank: 'greater deity',
          description: 'string',
          appearance: '',
          portfolios: [
            ''
          ],
          gender: 'woman',
          shape: 'human',
          race: 'god',
          domains: [
            'death',
            'grave'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: '',
          combat: {
            description: 'string',
            weapon: 'string',
            tactics: 'string'
          },
          possessions: [
            {
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'string',
            favouredWeapon: 'spear',
            holyDays: {
              earth: ['string']
            }
          },
          personality: {
            just: 70,
            vengeful: 85,
            lustful: 80
          },
          associations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: [
              'string'],
            plants: [
              'string'
            ],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        },
      ]
    }
  }
}
