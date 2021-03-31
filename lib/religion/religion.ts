import { ProfessionName, ProfessionSector } from '../npc-generation/professions'
import { EconomicIdeology, PoliticalIdeology } from '../town/townData'
import { PoliticalSource, Town, TownRolls } from '../town/_common'
import { Alignments, ClericDomains, WorldTypeAbbreviated } from '../src/worldType'
import { RaceName, GenderName, NPC, ThresholdTable, PartialRecord, Virtues } from '@lib'

export type DeityRank =
| 'leader'
| 'greater deity'
| 'intermediate deity'
| 'lesser deity'
| 'immortal'
| 'demigod'
| 'saint'

interface Followers {
  /**
   * @example 'Zeus is followed by many, of all different race and creed.'
   */
  description: string
  /**
   * Who actually worshipped the god?
   * @example Poseidon : 'Sailors'
   */
  adherents?: string[] | Information[]
  /**
   * @example 'spear'
   * @usage 'In battle, his followers favour the ${favouredWeapon}'
   */
  favouredWeapon: string
  /**
   * Holy days.
   * Descriptions of the holy days are in arrays; i.e. `holyDays: [['name of holy day', 'description of holy day'], 'holy day that doesn't have a description']`
   * @example ['the month of January', 'Saturdays', 'days ending with the letter y']
   * @example [['the first Friday of February', 'This day is said to be when time stood still for a moment.'], 'days with full moons']
   * @usage 'Their holy days are ______' (parsed as a list with an oxford comma.)
   * @default 'earth'
   */
  holyDays: PartialRecord<WorldTypeAbbreviated, Information[]>
  race?: RaceName
  base?: Partial<NPC>
  /**
   * Certain groups might be excluded from following a deity.
   */
  excluded?: Followers
}

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

export type DeityStatus = 'alive' | 'imprisoned' | 'dormant' | 'dead' | 'uncertain'

export interface Deity {
  /** This makes tippy work */
  objectType: 'deity'
  /** Required for profiles */
  passageName: 'DeityProfile'
  /**
   * For sanity's sake, only one name is allowed so we can easily find the deity. If your deity has multiple names, you can add them to `aliases`, which it will be pulled from at random.
   */
  name: string
  /** Needed to make the profiles work */
  key: string
  /**
   * Some gods have died, or else have been imprisoned, or they have just retreated to dormancy. Some people may worship these gods, so their status is important
   * @example ```Baldr: 'dead'```
   * @example ```Kronos: 'imprisoned'```
   * @example ```Pan: 'uncertain'```
   */
  status: DeityStatus
  /**
   * Used to determine how likely a god is to be worshipped, either at the town level, or the NPC level.
   */
  probabilityWeightings?: {
    economicIdeology?: PartialRecord<EconomicIdeology, number>
    politicalIdeology?: PartialRecord<PoliticalIdeology, number>
    politicalSource?: PartialRecord<PoliticalSource, number>
    rolls?: Record<TownRolls, number>
    /**
     * Some races are going to be more interested in certain gods than others.
     * Uses weighted probabilities (default for races ommitted is 10)
     * Can be turned off.
     */
    race?: PartialRecord<RaceName, number>
    npc?: {
      /**
       * Some races are going to be more interested in certain gods than others.
       * @warn This _multiplies_ the probability.
       * Can be turned off.
       */
      race: PartialRecord<RaceName, number>
      /**
       * Generic catch-all function for NPCs trying to pick a god to follow.
       */
      function: (town: Town, npc: NPC) => void
      /**
       * If there's a Patron Deity of Cheesemakers in the Pantheon, it's pretty likely that the cheesemaker will worship that deity.
       */
      profession: Record<ProfessionName, number>
      /**
       * Profession sector is applied as well as Professions.
       */
      professionSector: Record<ProfessionSector, number>
    }
  }
  /**
   * For the deity with many names, use `aliases`. When an alias is used instead of the 'main' name, it will be specified that the deity is also known as `name`.
   * NOTE: This is when there are multiple names for the same god - if two cultures have similar gods it should be 'equivalent'
   * @example aliases: ['El', 'Anu', 'An', 'Thoru-el']
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
  rank: DeityRank
  /**
   * Description of the deity overall. If omitted, description will be generated from the rest of the included data.
   */
  description?: string
  /**
   * Description of how the deity is depicted typically. Distinct from their `avatars`.
   * @usage '${deity.name} is depicted as ______'
   */
  appearance: string
  /**
   * Just in case you have history that you want to cover.
   */
  history?: Information[]
  /**
   * For smart one-liners, or quotes about the deity.
   * Will be printed in a <blockquote> element.
   * If given an array, will be picked at random.
   * @example {
   *    description: 'Bear up, my child, bear up; Zeus who oversees and directs all things is still mighty in heaven.',
   *    author: 'Sophocles'
   * }
   */
  quotes?: Quotation[]
  /** Any powers that you want to add. */
  powers?: Information[]
  /**
   * Generic extra text.
   * @example [
   *  '<h4>Birth</h4>', 'The birth of Zeus was not your average birth.',
   *  '<h4>Death</h4>', 'Zeus dies at the end of the film.'
   * ]
   */
  paragraphs?: Information[]
  /**
   * The aspects that the deity manages. This does not mean that no other god has power over this area, just that the god shares in responsibility for the portfolio
   * @example Zeus: ['the skies', 'thunder and lightning', 'law and order', 'fate']
   * @usage 'Zeus is God of `the skies`, `thunder and lightning`, `law and order`, and `fate`.
   */
  portfolios: string[]
  /**
   * To assign whether to call them gods, goddesses, or deities, and use the correct pronouns.
   * @warn This is _not_ suggesting that they are always that gender.
   * Rather, it is the gender that people commonly would use when referring to the deity.
   * Loki, for example, famously gave birth to Sleipnir.
   * However, he still presents as male in most mythology.
   * Avatars can have different genders to their corresponding god.
   */
  gender: GenderName | 'nonbinary'
  /**
   * What race the god actually is, E.g. Vanir, Aesir, Jotunn
   * @default 'god'
   */
  race: RaceName | string
  /**
   * The race the deity is or appears as. Demigods and mortals who ascended to be gods are 'Demigod' or 'RaceName' but are marked as a god or immortal in Rank
   * @default 'human'
   */
  shape: RaceName | string
  /**
   * For the Norse Aesir/Vanir split
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
  channelDivinity: Information[]
  /**
   * Alignments, for those that are still stuck on 2nd Edition.
   */
  alignment: Alignments
  /**
   * The equivalent of a deity's heraldry, an icon or symbol that represents them. Without any indefinite articles.
   * @example Zeus: 'fist full of lightning bolts'
   */
  symbol?: string | string[]
  combat: Partial<{
    /**
     * How the deity feels about fighting, blah blah blah. Opening sentence.
     * @example 'Bloodthirsty and always relishing a fight, Ares commands batallions of soldiers in battle.',
     * 'Hestia finds combat distasteful, and will try and defuse the situation before it gets out of hand.'
     */
    description: string
    /**
     * Their weapon of choice
     * @example Zeus: 'lightning'
     * @usage 'In combat, Zeus uses `lightning`.
     */
    weapon?: string
    /**
     * Tooltip for the weapon.
     * @example Zeus: '..lightning..' > 'Zeus calls down electric energy and fashions them into mighty spears of lightning to hurl at his enemies.'
     */
    weaponDescription?: string
    /**
     * For descriptions about combat.
     * @example 'Zeus is hotheaded, and does not always think things through.',
     * 'The typical tactics employed by Loki are those of deceit and treachery, opting to use subterfuge where possible.'
     */
    tactics?: string
  }>
  /**
   * For things that the deity owns.
   */
  possessions: Information[]
  /** Some gods had planes/domain which they ruled
   * @example ```Odin: 'Valhalla'```
   * @usage 'Hades resides in ______'
   */
  realm?: string
  followers: Partial<Followers>
  /**
   * If a deity particularly embodies a virtue or vice, it can be specified.
   * Expressed as a 0-100; values of lower than fifty being the opposite trait (i.e. `merciful: 2` means that they are very vindictive).
   * @example
   * Zeus: {
   *   just: 70,
   *   merciful: 20,
   *   chaste: 80
   * }
   */
  personality: PartialRecord<Virtues, number>
  /**
   * Things that the god are associated with, e.g. Sacred plants and animals.
   */
  associations?: {
    /**
     * A deity can have multiple different avatars, some more rare than others.
     */
    avatars?: Avatar[]
    animals?: string[]
    plants?: string[]
    places?: string[]
    monsters?: string[]
    gems?: string[]
    colours?: string[]
    miscellaneous?: string[]
  }
  /** What is good to the worshipers of this deity? What do they believe? */
  beliefs?: Information[]
  /** What is verboten to the worshipers of this deity? What can they never do? */
  heresies?: Information[]
  /**
   * Some suggested blessings that might be bestowed by the deity.
   */
  blessings?: Information[]
  /**
   * Some suggested curses that might be cast by the deity.
   */
  curses?: Information[]
  /**
   * Who do the temple call their friends?
   */
  allies?: Information[]
  /**
   * Who are the enemies of the temple?
   */
  enemies?: Information[]
  /**
   * Who's their father?
   * @warn This is not bi-directional, as sometimes there are one-way relationships.
   */
  relationships: Relationship[]
  /**
   * What words does the temple live by? Daily words that they use to remind themselves.
   */
  maxims?: Quotation[]
}

export interface Information {
  title?: string
  description?: string
  opts?: {
    /**
     * When the object has the `title` property it defaults to `true`.
     * Otherwise, @default false
     * This is used when you want a header.
     *  */
    displayAsList: boolean
    /**
     * For the `title` tag. Only used when it's not in a list.
     * @default 'h3'
     */
    element?: HTMLElement
  }
}

interface Relationship {
  /** Will check to see if a deity matches the name provided. */
  name: string
  relationship: string
  description?: string
}

interface Avatar {
  /** @example 'The Silver Mother' */
  name?: string
  /**
   * @example 'She is a frail old woman with grey hair', 'She appears as a fat and kindly looking woman, who often carries a cast iron pot of soup.'
  */
  appearance?: string
  /**
   * The extra text.
   * @example 'She is a friendlier avatar, and enjoys the company of woodland creatures.'
   */
  description?: string
  /**
   * @usage `${deity.name} appears as ${avatar.name} ${avatar.frequency}`
   * @example 'when the multiplane is in danger', 'when the world needs her most', 'on Sundays'
   */
  frequency?: string
  /**
   * @example 'She can shoot ice beams out of her eyes, and other fun things.'
   */
  powers?: string
  /** For Loki and other deities that may present as other genders.
   * @default deity.gender
   */
  gender?: GenderName
}

interface Quotation extends Information {
  author?: string
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
  pantheon: Record<string, Pantheon>
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
          earth: []
        }
      },
      gods: [
        { // Zeus
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Zeus',
          key: 'Zeus',
          status: 'alive',
          titles: [
            'God of the Sky',
            'Ruler of the Gods',
            'The Thunderer',
            'God of Refuge',
            'Oathkeeper'
          ],
          rank: 'leader',
          description: 'Zeus is the leader of the Greek gods, and lives atop Mount Olympus, where he rules over the mortal world below.',
          appearance: 'Zeus is depicted as a regal, mature man with a sturdy figure and dark beard grasping a lightning bolt and wreathed in a crown of olive leaves.',
          history: undefined,
          powers: undefined,
          quotes: [
            {
              description: 'Bear up, my child, bear up; Zeus who oversees and directs all things is still mighty in heaven.',
              author: 'Sophocles'
            }
          ],
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
          alignment: 'Neutral',
          symbol: 'fist full of lightning bolts',
          combat: {
            description: 'Zeus famously led the Greek gods in the battle against the Titans, and is a fearsome foe. He calls down electric energy and fashions them into mighty spears of lightning to hurl at his enemies.'
          },
          probabilityWeightings: {
            politicalIdeology: {
              autocracy: 5,
              oligarchy: 3
            },
            politicalSource: {
              'absolute monarchy': 6,
              'constitutional monarchy': 3
            },
            race: {
              'human': 20,
              'half-elf': 5
            }
          },
          possessions: [
            {
              title: 'Aegis',
              description: 'The Aegis bears the head of a Gorgon, and makes a terrible roaring sound in battle.'
            }
          ],
          realm: 'Olympus, where he rules over all.',
          followers: {
            description: 'Zeus is followed by many, of all different race and creed.',
            favouredWeapon: 'spear',
            holyDays: {
              earth: [
                { title: 'January' }, { title: 'Thursday' }
              ]
            }
          },
          personality: {
            just: 70,
            merciful: -85,
            chaste: -80
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
              }
            ],
            animals: [
              'eagle',
              'bull'
            ],
            plants: [
              'oak tree',
              'olive tree'
            ],
            monsters: [],
            gems: [],
            colours: ['yellow'],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: [
            {
              name: 'Poseidon',
              relationship: 'brother'
            },
            {
              name: 'Hades',
              relationship: 'brother'
            },
            {
              name: 'Demeter',
              relationship: 'sister'
            },
            {
              name: 'Athena',
              relationship: 'daughter'
            },
            {
              name: 'Persephone',
              relationship: 'daughter'
            },
            {
              name: 'Artemis',
              relationship: 'daughter'
            },
            {
              name: 'Ares',
              relationship: 'son'
            },
            {
              name: 'Apollo',
              relationship: 'son'
            }
          ]
        },
        { // Poseidon
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Poseidon',
          key: 'Poseidon',
          status: 'alive',
          aliases: ['Neptune'],
          titles: [
            'God of the Sea and Earthquakes',
            'Watcher',
            'Shaker of the Earth',
            'Horse Tender'
          ],
          rank: 'greater deity',
          description: 'Poseidon is the god of the Sea - all things underwater are under his purview',
          appearance: 'a mature man with a sturdy build and a dark beard holding a trident and a sea-creature encrusted boulder, simply crowned with a headband with a cloak draped around his arms.',
          history: undefined,
          powers: undefined,
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
          alignment: 'Chaotic Neutral',
          symbol: 'A trident and billowing cloak',
          combat: {
            description: undefined
          },
          probabilityWeightings: {
            economicIdeology: {
              primitivism: 3
            },
            politicalIdeology: {
              autocracy: 8,
              oligarchy: 5
            },
            politicalSource: {
              'absolute monarchy': 5,
              'constitutional monarchy': 5
            },
            race: {
              'human': 20,
              'half-elf': 5
            }
          },
          possessions: [
            {
              title: 'Poseidon\'s Trident',
              description: 'Poseidon\'s trident was so powerful that it could shake the lands.'
            }
          ],
          realm: 'a palace underneath the sea, watching over the fishermen from below.',
          followers: {
            description: 'Poseidon is followed by many mariners, fishermen, and horse riders.',
            adherents: ['sailors', 'teamsters', 'fishermen', 'cavalry', 'farmers'],
            favouredWeapon: 'trident',
            holyDays: {
              earth: []
            }
          },
          personality: {
            just: 50,
            merciful: -85,
            chaste: -80
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
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
            monsters: ['hippocampus'],
            gems: [],
            colours: ['blue'],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: [
            {
              title: 'smooth sailing',
              description: 'Poseidon will bless sailors and those that have earnt his favour with smooth passage.'
            },
            {
              title: 'management of horses',
              description: 'As the Lord of Horses, Poseidon can calm equines as easily as he can enrage them.'
            }
          ],
          curses: [
            {
              title: 'mad horses',
              description: 'As the Lord of Horses, Poseidon can enrage equines as easily as he can calm them.'
            },
            {
              title: 'stormy seas',
              description: "Those that tempt Poseidon's wrath risk stormy seas on their next voyage."
            }
          ],
          allies: [],
          enemies: [],
          relationships: [
            {
              name: 'Zeus',
              relationship: 'brother'
            },
            {
              name: 'Hades',
              relationship: 'brother'
            },
            {
              name: 'Demeter',
              relationship: 'sister'
            },
            {
              name: 'Hera',
              relationship: 'sister'
            },
            {
              name: 'Hestia',
              relationship: 'sister'
            },
            {
              name: 'Amphitrite',
              relationship: 'wife'
            }
          ]
        },
        { // Hades
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Hades',
          key: 'Hades',
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
          description: 'Hades is the god of the Dead and the first son of Kronos. However when He, Zeus and Poseidon were drawing lots for the division of the cosmos, Hades gained dominion of the Underworld, where he rules over the dead.',
          appearance: 'a dark-bearded, regal god, with a bird tipped sceptre with Cerebus seated by his throne.',
          history: undefined,
          powers: undefined,
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
          alignment: 'Lawful Evil',
          symbol: 'Helm of Hades',
          combat: {
            description: undefined
          },
          probabilityWeightings: {
            economicIdeology: {
              capitalism: 4
            },
            politicalIdeology: {
              kleptocracy: 5
            },
            politicalSource: {
            },
            race: {
              dwarf: 20,
              tiefling: 30
            }
          },
          possessions: [
            {
              title: 'Sceptre',
              description: 'A powerful relic that is able to create a passage between the worlds of the living and the dead'
            },
            {
              title: 'Cap of Invisibility',
              description: 'A cap which can turn the wearer invisible'
            }
          ],
          realm: "the Underworld. As far below the earth as the heavens are above, Hades' realm is a dark and depressing place.",
          followers: {
            description: 'Hades, as the god of the dead, was a fearsome figure to those still living; in no hurry to meet him, they were reluctant to swear oaths in his name, and averted their faces when sacrificing to him. Since to many, simply to say the word "Hades" was frightening, euphemisms were pressed into use.',
            adherents: ['mourners', 'undertakers', 'necromancers', 'miners'],
            favouredWeapon: undefined,
            holyDays: {
              earth: [
                {
                  title: 'second to last day of every month',
                  description: 'Rituals are typically held on this day.'
                }
              ]
            }
          },
          personality: {
            just: 90,
            merciful: -85,
            chaste: -20
          },
          associations: {
            avatars: [
              // {
              //   name: 'Ploutos',
              //   appearance: undefined,
              //   description: 'As Ploutos, Hades is the God of wealth and precious metals',
              //   frequency: undefined,
              //   powers: undefined
              // }
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
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: [
            {
              title: 'plenty from the earth',
              description: 'As the lord of the underworld, Hades has considerable wealth, and can bestow riches to those he deems worthy.'
            },
            {
              title: 'the ability to go un-noticed',
              description: 'Hades can give those that wish to be unseen the power to avoid detection in the dark.'
            }
          ],
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: [
            {
              name: 'Poseidon',
              relationship: 'brother'
            },
            {
              name: 'Zeus',
              relationship: 'brother'
            },
            {
              name: 'Demeter',
              relationship: 'sister'
            },
            {
              name: 'Hera',
              relationship: 'sister'
            },
            {
              name: 'Hestia',
              relationship: 'sister'
            },
            {
              name: 'Persephone',
              relationship: 'husband'
            }
          ]
        },
        { // Aphrodite
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Aphrodite',
          key: 'Aphrodite',
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
          description: 'Aphrodite is the goddess of love and scorns those who stay away from relationships. Her love can be a thing of beauty or a thing of terror and destruction.',
          appearance: 'Aphrodite is consistently portrayed as a nubile, infinitely desirable adult, having had no childhood.',
          history: undefined,
          powers: undefined,
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
          alignment: 'Chaotic Good',
          symbol: 'dove',
          combat: {
            description: 'While Aphrodite is most well known as the goddess of Love, she is also known as a goddess of War - especially by people like the Spartans.'
          },
          probabilityWeightings: {
            economicIdeology: {
              syndicalism: 4,
              primitivism: 8
            },
            politicalIdeology: {
              kleptocracy: 4,
              magocracy: 3
            },
            politicalSource: {
            },
            race: {
              halfling: 20,
              tiefling: 15
            }
          },
          possessions: [
            {
              title: 'Girdle',
              description: 'The Girdle inspires desire in all those who look upon the wearer'
            }
          ],
          realm: undefined,
          followers: {
            description: 'As the goddess of beauty and love the favour of Aphrodite was worshipped by all people, though especially by prostitutes.',
            adherents: ['everyone', 'prostitutes', 'warriors'],
            favouredWeapon: undefined,
            holyDays: {
              earth: [
                { title: 'the fourth day of every month' }
              ]
            }
          },
          personality: {
            just: 30,
            merciful: -85,
            chaste: -100
          },
          associations: {
            avatars: [
              {
                name: 'Aphrodite Areia',
                appearance: 'She appears clad in armour and bearing weapons',
                description: 'Aphrodite Areia is a war-like aspect of Aphrodite',
                frequency: 'and is worshipped by the Spartans and other war-loving people',
                powers: 'Aphrodite is ready to use deciptive strategies, such as how she lured the Gigantes one by one into a cave for them to be murdered'
              }
            ],
            animals: [
              'dove',
              'swan',
              'goose',
              'sparrow',
              'swallow',
              'dolphins',
              'wryneck' // English name for Iynx
            ],
            plants: [
              'pomegranates',
              'rose',
              'myrtle',
              'apple',
              'poppy'
            ],
            monsters: ['nereids'],
            gems: [],
            colours: [],
            miscellaneous: ['conch shells']
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: [
            {
              title: 'beauty'
            }
          ],
          curses: [
            {
              title: 'ugliness'
            },
            {
              title: 'unwashable stink'
            }
          ],
          allies: [],
          enemies: [],
          relationships: [
            {
              name: 'Zeus',
              relationship: 'father'
            },
            {
              name: 'Ares',
              relationship: 'lover'
            },
            {
              name: 'Hephaestus',
              relationship: 'husband'
            },
            {
              name: 'Hebe',
              relationship: 'sister'
            },
            {
              name: 'Heracles',
              relationship: 'brother'
            },
            {
              name: 'Persephone',
              relationship: 'sister'
            },
            {
              name: 'Hermes',
              relationship: 'lover'
            },
            {
              name: 'Dionysus',
              relationship: 'lover'
            },
            {
              name: 'Poseidon',
              relationship: 'lover'
            }
          ]
        },
        { // Artemis
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Artemis',
          key: 'Artemis',
          status: 'alive',
          aliases: ['Diana', 'Brauronia', 'Orthia'],
          equivalent: ['Selene', 'Britomartis', 'Dictynna', 'Eileithyial'],
          titles: [
            'Goddess of the Hunt',
            'Goddess of the Beasts',
            'Nurse of Children',
            'Friend of Girls',
            'Goddess of the Flocks and the Chase',
            'The best advisor'
          ],
          rank: 'greater deity',
          description: 'Artemis is the goddess of the Hunt and young girls. She can change others into animals as punishment for transgressions against her and she demands appropriate respect from mortals.',
          appearance: 'a young woman wearing a short costume that leaves her legs free and wielding a bow with a quiver of arrows.',
          history: undefined,
          powers: undefined,
          portfolios: [
            'hunting',
            'the wilderness',
            'wild animals',
            'childbirth',
            'chastity',
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
          alignment: 'Neutral Good',
          symbol: 'bow and quiver of arrows',
          combat: {
            description: 'Artemis is quick to strike down those who offend her with animals and wild beasts. She is a dedicated huntress and will pursue her quarry until it is caught.'
          },
          probabilityWeightings: {
            economicIdeology: {
              feudalism: 2,
              primitivism: 6
            },
            politicalIdeology: {
              meritocracy: 4
            },
            politicalSource: {
              anarchy: 2
            },
            race: {
              'elf': 40,
              'half-elf': 20,
              'halfling': 15
            }
          },
          possessions: [
            {
              title: 'Bow of Artemis',
              description: 'The Bow of Artemis was forged by the Cyclopses'
            }
          ],
          realm: undefined,
          followers: {
            description: 'Artemis is worshipped by Hunters and Women, young girls could be expected to serve Artemis until they come of age.',
            adherents: ['hunters', 'young girls', 'expecting mothers', 'wild beings'],
            favouredWeapon: 'bow',
            holyDays: {
              earth: [
                { title: 'the sixth day' }
              ]
            }
          },
          personality: {
            just: 50,
            merciful: -85,
            chaste: 100
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
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
            places: ['forests'],
            gems: [],
            colours: [],
            miscellaneous: ['lyre', 'torches', 'spears and nets']
          },
          beliefs: [
            {
              title: 'chastity',
              description: 'Artemis and her followers value chastity above all else.'
            }
          ],
          heresies: undefined,
          blessings: undefined,
          curses: [
            {
              title: 'transformation into a wild animal',
              description: 'As goddess of the hunt, Artemis can transform those that wrong her into wild animas to be hunted.'
            }
          ],
          allies: [],
          enemies: [],
          relationships: [
            {
              name: 'Zeus',
              relationship: 'father'
            },
            {
              name: 'Apollo',
              relationship: 'twin brother'
            }
          ]
        },
        { // Apollo
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Apollo',
          key: 'Apollo',
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
          description: 'The twin brother of Artemis, Apollo is the inventor of music. Those that he loves and loses or those that he hates can find themselves transformed and immortalised as a part of nature. ',
          appearance: 'a handsome youth, beardless with long hair and holds either a lyre or a bow.',
          history: undefined,
          powers: undefined,
          portfolios: [
            'music',
            'prophecy',
            'healing',
            'archery',
            'plague',
            'sun',
            'poetry',
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
          alignment: 'Neutral',
          symbol: 'lyre',
          combat: {
          },
          probabilityWeightings: {
            economicIdeology: {
              feudalism: 3
            },
            politicalIdeology: {
              meritocracy: 5,
              sophocracy: 5,
              theocracy: 3
            },
            politicalSource: {
            },
            race: {
              halfling: 20,
              human: 15
            }
          },
          possessions: [
            {
              title: 'The Lyre of Apollo'
            },
            {
              title: 'Bow of Apollo',
              description: 'The bow of Apollo fires arrows and plagues upon those who anger him'
            }
          ],
          realm: undefined,
          followers: {
            description: 'Oracles are often followers of Apollo, the Greatest of which is the Pythia of Delph, the high priestess of Apollo',
            adherents: ['musicians', 'oracles', 'doctors'],
            favouredWeapon: undefined,
            holyDays: {
              earth: []
            }
          },
          personality: {
            just: 50,
            merciful: -85,
            chaste: -80
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
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
              'mouse'
            ],
            plants: [
              'laurel',
              'larkspur',
              'cypress'
            ],
            monsters: ['griffon'],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: [
            {
              name: 'Zeus',
              relationship: 'father'
            },
            {
              name: 'Artemis',
              relationship: 'twin sister'
            }
          ]
        },
        { // Athena
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Athena',
          key: 'Athena',
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
          description: 'Athena is a wise goddess and protects those that follow her. She does have the rage of a goddess, and affronts to her are paid back with divine retribution.',
          appearance: 'a stately woman wearing a helmet armed with a spear and Aegis',
          history: undefined,
          powers: undefined,
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
          alignment: 'Lawful Good',
          symbol: ['Gorgoneion', 'Aegis'],
          combat: {
            description: undefined
          },
          probabilityWeightings: {
            politicalIdeology: {
              militocracy: 5,
              meritocracy: 5,
              autocracy: 1
            },
            politicalSource: {
              'absolute monarchy': 5,
              'constitutional monarchy': 3
            },
            race: {
              human: 25,
              dwarf: 15,
              dragonborn: 15
            }
          },
          possessions: [
            {
              title: 'Aegis of Athena'
            }
          ],
          realm: undefined,
          followers: {
            description: 'Athena is the goddess of Craftsment, Wisdom and Heroes.',
            adherents: ['craftsmen', 'heroes', 'academics', 'strategists'],
            favouredWeapon: undefined,
            holyDays: {
              earth: []
            }
          },
          personality: {
            just: 80,
            merciful: -80,
            chaste: 100
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
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
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: [
            {
              name: 'Zeus',
              relationship: 'father'
            }
          ]
        },
        { // Dionysus
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Dionysus',
          key: 'Dionysus',
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
          description: 'Dionysus is the god of Wine and Theatre, his revelry is open to all. However, he has his dark side - he is the god of madness the anger of Dionysus is a terrifying thing',
          appearance: 'long haired youth, almost effeminate in appearance. He holds a staff topped with a pinecone and brings revelry with him',
          history: undefined,
          powers: undefined,
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
          alignment: 'Chaotic Neutral',
          symbol: 'Thyrsus',
          combat: {
            description: undefined
          },
          probabilityWeightings: {
            economicIdeology: {
              feudalism: 2,
              syndicalism: 3
            },
            politicalIdeology: {
              kleptocracy: 5,
              oligarchy: 5,
              autocracy: 1
            },
            politicalSource: {
            },
            race: {
              halfling: 50,
              tiefling: 30,
              goblin: 15
            }
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: 'Dionysus is a god of the people and youths. Those who value proper decorum and modesty are apallled at the revelry of the Bacchic crowds. Devotees of Dionysus may engage in the rending of animals with their bare hands',
            adherents: ['wine-makers', 'actors', 'farmers', 'revelers'],
            favouredWeapon: undefined,
            holyDays: {
              earth: [
                { title: 'the eighth month' }
              ]
            }
          },
          personality: {
            just: 20,
            forgiving: 25,
            chaste: 10

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
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
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
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: [
            {
              name: 'Zeus',
              relationship: 'father'
            },
            {
              name: 'Ariadne',
              relationship: 'wife'
            },
            {
              name: 'Aphrodite',
              relationship: 'lover',
              description: 'Aphrodite bore Priapus by Dionysus.'
            }
          ]
        },
        { // Demeter
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Demeter',
          key: 'Demeter',
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
          description: 'Demeter is the goddess of Agriculture - her favour promised a bountiful harvest and more grain then could be eaten. However her anger promised frosts and famine.',
          appearance: 'a mature woman wearing a crown holding wheat in a cornocopia and a torch',
          history: undefined,
          powers: undefined,
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
          alignment: 'Neutral Good',
          symbol: 'cornucopia',
          combat: {
            description: undefined
          },
          probabilityWeightings: {
            economicIdeology: {
              communism: 5,
              syndicalism: 3
            },
            politicalIdeology: {
              magocracy: 5,
              theocracy: 4,
              oligarchy: 4
            },
            politicalSource: {
            },
            race: {
              'dwarf': 20,
              'dragonborn': 15,
              'half-elf': 15,
              'elf': 15,
              'tiefling': 15
            }
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: 'As the goddess of Agriculture, Demeter has a dedictated following among anyone who farmed. She was also a major figure of worship in the Eleusinian mysteries, which promised a better afterlife to its followers.',
            adherents: ['farmers'],
            favouredWeapon: 'Sickle',
            holyDays: {
              earth: []
            }
          },
          personality: {
            just: 50,
            merciful: -85,
            chaste: -80
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
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
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: [
            {
              title: 'bountiful harvest'
            },
            {
              title: 'satiated appetite'
            },
            {
              title: 'a better afterlife'
            }
          ],
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: [
            {
              name: 'Hades',
              relationship: 'brother'
            },
            {
              name: 'Hera',
              relationship: 'sister'
            },
            {
              name: 'Poseidon',
              relationship: 'brother'
            },
            {
              name: 'Zeus',
              relationship: 'brother'
            },
            {
              name: 'Persephone',
              relationship: 'daughter',
              description: 'Sired by Zeus.'
            }
          ]

        },
        { // Hermes
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Hermes',
          key: 'Hermes',
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
          description: 'Hermes is the hessenger of the gods and the personal messenger of Zeus. He brings the souls of the deceased to the edge of the underworld, where they are ferried deeper by the Cthonic gods',
          appearance: 'an athletic man wearing winged boots, full of energy. Ontop of his head is a helmet with two wings attached.',
          history: undefined,
          powers: undefined,
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
          alignment: 'Chaotic Good',
          symbol: 'Caduceus ',
          combat: {
            description: undefined
          },
          probabilityWeightings: {
            economicIdeology: {
              capitalism: 5
            },
            politicalIdeology: {
              kleptocracy: 5,
              meritocracy: 5,
              technocracy: 8
            },
            politicalSource: {
            },
            race: {
              halfling: 20,
              tiefling: 15
            }
          },
          possessions: [
            {
              title: 'Talaria',
              description: 'Tarlaria is the name of a pair of winged boots forged by Hephaestus.'
            },
            {
              title: 'Adamantine Blade'
            },
            {
              title: 'Winged helm'
            }
          ],
          realm: undefined,
          followers: {
            description: 'Hermes was the messenger of Zeus, and his followers were all those that valued speed. Additionally, travelers, traders, and thieves worshiped him.',
            adherents: ['thieves', 'traders', 'messengers', 'athletes', 'diplomats', 'travellers'],
            favouredWeapon: undefined,
            holyDays: {
              earth: [
                { title: 'Wednesday' }
              ]
            }
          },
          personality: {
            just: 50,
            merciful: -85,
            chaste: -80
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
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
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: [
            {
              name: 'Zeus',
              relationship: 'father'
            },
            {
              name: 'Aphroditus',
              relationship: 'father',
              description: 'Aphrodite gave birth to Hermaphroditus, or Aphroditus, the god of androgyny.'
            }
          ]
        },
        { // Hera
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Hera',
          key: 'Hera',
          status: 'alive',
          titles: [
            'Queen of the Gods',
            'Goddess of Kings and Empires',
            'Goddess of Marriage',
            'Whose Hand is Above',
            'Of the Flowers'
          ],
          rank: 'greater deity',
          description: 'Hera is the Queen of the gods, forever tested by her husband Zeus. Unable to attack Zeus, her anger is often directed to his consorts or his children.',
          appearance: 'a beautiful woman wearing a crown and holding a royal, lotus-tipped sceptre',
          history: undefined,
          powers: undefined,
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
          alignment: 'Chaotic Neutral',
          symbol: ['diadem', 'scepter', 'pomegranate'],
          combat: {
            description: undefined
          },
          probabilityWeightings: {
            economicIdeology: {
              feudalism: 3
            },
            politicalIdeology: {
              theocracy: 4,
              oligarchy: 4,
              autocracy: 5
            },
            race: {
              'human': 20,
              'half-elf': 15,
              'tiefling': 15
            }
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: undefined,
            adherents: ['women'],
            favouredWeapon: undefined,
            holyDays: {
              earth: []
            }
          },
          personality: {
            just: 50,
            merciful: -85,
            chaste: -20
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
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
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: [
            {
              name: 'Zeus',
              relationship: 'consort'
            },
            {
              name: 'Hades',
              relationship: 'brother'
            },
            {
              name: 'Poseidon',
              relationship: 'brother'
            },
            {
              name: 'Demeter',
              relationship: 'brother'
            },
            {
              name: 'Ares',
              relationship: 'son'
            },
            {
              name: 'Eris',
              relationship: 'daughter'
            },
            {
              name: 'Athena',
              relationship: 'daughter'
            },
            {
              name: 'Hebe',
              relationship: 'daughter'
            },
            {
              name: 'Eileithyia',
              relationship: 'daughter'
            },
            {
              name: 'Hephaestus',
              relationship: 'son',
              description: 'Hera gave birth to Hephaestus without male intervention.'
            }
          ]
        },
        { // Ares
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Ares',
          key: 'Ares',
          status: 'alive',
          titles: [
            'Who rallies men',
            'Destroyer of Men',
            'Terrible',
            'Warlike',
            'Of the Golden Helm'
          ],
          rank: 'greater deity',
          description: undefined,
          appearance: 'always clad in armour, holding weapons and ready for battle. He can appear as the fresh-faced youth or the grizzeled veteran depending on his mood.',
          history: undefined,
          powers: [
            {
              title: 'Odikinesis',
              description: 'Possessing the ability to manipulate feelings and emotions of war such as hate and rage, Ares would induce strife before battles.'
            },
            {
              title: 'Strength',
              description: 'As a fighter, Ares excelled at all to do with physicality. '
            }
          ],
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
          alignment: 'Chaotic Evil',
          symbol: 'spear',
          combat: {
            description: 'As the God of War, Ares has plenty of experience in battle. In contrast to Athena, who is the goddess of tacticians, Ares represents a more brutal, carnal type of conquest.'
          },
          probabilityWeightings: {
            economicIdeology: {
              feudalism: 3,
              primitivism: 8
            },
            politicalIdeology: {
              militocracy: 9,
              oligarchy: 7,
              autocracy: 8
            },
            politicalSource: {
              anarchy: 8
            },
            race: {
              'half-orc': 40,
              'orc': 50,
              'tiefling': 20,
              'goblin': 30
            }
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: 'Ares is the god of war and courage - cities and countries going to war would worship Ares before going into battle',
            adherents: ['warriors'],
            favouredWeapon: undefined,
            holyDays: {
              earth: [
                { title: 'Tuesday' }
              ]
            }
          },
          personality: {
            just: 50,
            merciful: -85,
            chaste: -80
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
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
            plants: [],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: [
            {
              name: 'Zeus',
              relationship: 'father'
            },
            {
              name: 'Aphrodite',
              relationship: 'lover'
            }
          ]
        },
        { // Hestia
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Hestia',
          key: 'Hestia',
          status: 'alive',
          aliases: ['Vesta'],
          titles: [
            'Daughter of lovely-haired Rhea',
            'Daughter of Cronos',
            'Rich in Blessings',
            'Beloved'
          ],
          rank: 'greater deity',
          description: 'Hestia is the First-born child of Kronos and Rhea and the first to be swallowed by him. After Apollo and Poseidon vied for her hand in marriage she refused and chose to be an eternal virgin.',
          appearance: 'a beautiful veiled woman, with long dark hair',
          history: undefined,
          powers: undefined,
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
          alignment: 'Neutral Good',
          symbol: 'hearth',
          combat: {
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: 'Hestia finds combat distasteful, and will try and defuse the situation before it gets out of hand.'
          },
          probabilityWeightings: {
            economicIdeology: {
              feudalism: 3,
              syndicalism: 3,
              communism: 2
            },
            politicalIdeology: {
              meritocracy: 4,
              sophocracy: 4,
              oligarchy: 4
            },
            race: {
              'elf': 40,
              'half-elf': 15
            }
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: undefined,
            favouredWeapon: undefined,
            holyDays: {
              earth: []
            }
          },
          personality: {
            just: 50,
            merciful: -85
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
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
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: [
            {
              name: 'Zeus',
              relationship: 'brother'
            }
          ]
        },
        { // Hephaestus
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Hephaestus',
          key: 'Hephaestus',
          status: 'alive',
          titles: [
            'Glorius Craftsman',
            'Famed Craftsman',
            'Of many Crafts',
            'Crooked-Foot',
            'Of Bronze'
          ],
          rank: 'greater deity',
          description: undefined,
          appearance: 'bearded man with twisted legs',
          history: undefined,
          powers: undefined,
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
          alignment: 'Neutral Good',
          symbol: 'Hammer and Anvil',
          combat: {
            description: undefined,
            weapon: 'a hammer',
            weaponDescription: undefined,
            tactics: undefined
          },
          probabilityWeightings: {
            economicIdeology: {
              feudalism: 3,
              capitalism: 6
            },
            politicalIdeology: {
              technocracy: 10,
              autocracy: 5
            },
            race: {
              dwarf: 20,
              gnome: 45
            }
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: 'Hephaestus is the god of the forge. He is worshipped by Craftsmen and his blessing gives them inspiration and skill,',
            adherents: ['smiths', 'craftsmen'],
            favouredWeapon: undefined,
            holyDays: {
              earth: []
            }
          },
          personality: {
            just: 50,
            merciful: -85,
            chaste: -80
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
              }
            ],
            animals: [
              'donkey'
            ],
            plants: [],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: [
            {
              title: 'inspiration'
            },
            {
              title: 'knowledge'
            }
          ],
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: []
        },
        { // Persephone
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Persephone',
          key: 'Persephone',
          status: 'alive',
          aliases: ['Kore'],
          equivalent: ['Libera', 'Proserpina', 'Prosperina'],
          titles: [
            'Queen of the Underworld',
            'Knowing One',
            'Exacter of Justice',
            'Of the Earth',
            'Bringer of Fruit'
          ],
          rank: 'intermediate deity',
          description: undefined,
          appearance: 'a beautiful young maiden with fair skin. Her face is the epitome of young beauty. She is often shown in long, flowing clothing with a wreath of flowers around her head.',
          history: undefined,
          powers: undefined,
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
          gender: 'woman',
          shape: 'human',
          race: 'god',
          domains: [
            'life',
            'grave',
            'death'
          ],
          channelDivinity: [],
          alignment: 'Neutral Good',
          symbol: ['pomegranate', 'torch'],
          combat: {
            description: undefined
          },
          probabilityWeightings: {
            economicIdeology: {
              feudalism: 3
            },
            politicalIdeology: {
              meritocracy: 2,
              oligarchy: 4,
              autocracy: 5
            },
            race: {
              'halfling': 20,
              'half-elf': 15,
              'elf': 15
            }
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: 'Persephone was a goddess of Spring and the Wife of Hades. Her favour might ensure a better afterlife for her worshippers.',
            adherents: ['farmers'],
            favouredWeapon: undefined,
            holyDays: {
              earth: []
            }
          },
          personality: {
            just: 50,
            merciful: 0,
            chaste: 75
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
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
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: [
            {
              name: 'Zeus',
              relationship: 'father'
            }
          ]
        },
        { // Hecate
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Hecate',
          key: 'Hecate',
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
          description: undefined,
          appearance: 'a woman wearing a crown. Sometimes, she has three bodies, conjoined to one another.',
          history: undefined,
          powers: undefined,
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
          alignment: 'Chaotic Evil',
          symbol: undefined,
          combat: {
            description: undefined
          },
          probabilityWeightings: {
            economicIdeology: {
              feudalism: 3
            },
            politicalIdeology: {
              magocracy: 8,
              oligarchy: 4,
              autocracy: 5
            },
            race: {
              human: 20,
              tiefling: 25
            }
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: 'Hecate is a mysterious Goddess who is a master of the Arcane Arts and lives in the Underworld, her followers ask for her secret knowledge.',
            adherents: ['magic users', 'necromancers'],
            favouredWeapon: undefined,
            holyDays: {
              earth: []
            }
          },
          personality: {
            just: 50,
            merciful: -85,
            chaste: -20
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
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
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: []
        },
        { // Nike
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Nike',
          key: 'Nike',
          status: 'alive',
          titles: ['Goddess of Victory', 'The Winged Goddess'],
          rank: 'lesser deity',
          description: undefined,
          appearance: 'an athletic woman with two large wings.',
          history: undefined,
          powers: undefined,
          portfolios: ['victory', 'speed', 'strength'],
          gender: 'woman',
          shape: 'human',
          race: 'god',
          domains: [
            'war',
            'peace'
          ],
          channelDivinity: [],
          alignment: 'Lawful Neutral',
          symbol: 'Winged Woman',
          combat: {
            description: undefined
          },
          probabilityWeightings: {
            economicIdeology: {
              feudalism: 3
            },
            politicalIdeology: {
              militocracy: 4,
              autocracy: 5
            },
            race: {
              'human': 20,
              'half-orc': 25,
              'orc': 15
            }
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: 'The Favour of Nike is a promise of victory, though it was rarely given without being earnt.',
            adherents: ['warriors'],
            favouredWeapon: undefined,
            holyDays: {
              earth: []
            }
          },
          personality: {
            just: 50,
            merciful: -85,
            chaste: -20
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
              }
            ],
            animals: [],
            plants: [
              'palm tree',
              'bay tree'
            ],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: []
        },
        { // Tyche
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Tyche',
          key: 'Tyche',
          status: 'alive',
          titles: ['Goddess of Fortune and Chance'],
          rank: 'lesser deity',
          description: undefined,
          appearance: 'a woman with a crown, often shown holding a horn of cornucopia.',
          history: undefined,
          powers: undefined,
          portfolios: ['luck', 'chance', 'fate', 'providence', 'natural disasters'],
          gender: 'woman',
          shape: 'human',
          race: 'god',
          domains: [
            'trickery'
          ],
          channelDivinity: [],
          alignment: 'Neutral',
          symbol: undefined,
          combat: {
            description: undefined
          },
          probabilityWeightings: {
            economicIdeology: {
              feudalism: 3,
              capitalism: 5
            },
            politicalIdeology: {
              meritocracy: 4,
              kleptocracy: 4
            },
            race: {
              halfling: 30,
              human: 15
            }
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: undefined,
            adherents: ['gamblers'],
            favouredWeapon: undefined,
            holyDays: {
              earth: []
            }
          },
          personality: {
            just: 50,
            merciful: -85,
            chaste: -20
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
              }
            ],
            animals: [],
            plants: [],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: []
        },
        { // Hebe
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Hebe',
          key: 'Hebe',
          status: 'alive',
          titles: ['Goddess of Eternal Youth',
            'Daughter of Zeus',
            'Wife of Hercules'
          ],
          rank: 'lesser deity',
          description: undefined,
          appearance: 'a woman in a sleeveless dress, with long brown hair.',
          history: undefined,
          powers: undefined,
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
          alignment: 'Neutral Good',
          symbol: undefined,
          combat: {
            description: undefined
          },
          probabilityWeightings: {
            race: {
              human: 20
            }
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: undefined,
            favouredWeapon: undefined,
            holyDays: {
              earth: [
                { title: 'June' }
              ]
            }
          },
          personality: {
            just: 50,
            merciful: -85,
            chaste: -80
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
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
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: [
            { title: 'restored youth' }
          ],
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: [
            {
              name: 'Zeus',
              relationship: 'father'
            },
            {
              name: 'Hercules',
              relationship: 'husband'
            }
          ]
        },
        { // Pan
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Pan',
          key: 'Pan',
          status: 'uncertain',
          titles: [
            'The God of the Wild',
            'Of the Pastures',
            'Terrifying One',
            'Of the Hunt'
          ],
          rank: 'intermediate deity',
          description: undefined,
          appearance: 'a satyr holding a set of Pan-pipes',
          history: undefined,
          powers: undefined,
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
          alignment: 'Chaotic Neutral',
          symbol: 'pan pipes',
          combat: {
            description: undefined
          },
          probabilityWeightings: {
            economicIdeology: {
              primitivism: 3
            },
            politicalIdeology: {
              kleptocracy: 4
            },
            race: {
              'halfling': 30,
              'gnome': 15,
              'elf': 25,
              'half-elf': 15
            }
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: undefined,
            adherents: ['wild beings', 'hunters'],
            favouredWeapon: undefined,
            holyDays: {
              earth: []
            }
          },
          personality: {
            just: 50,
            merciful: -85,
            chaste: -100
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
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
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: []
        },
        { // Asclepius
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Asclepius',
          key: 'Asclepius',
          status: 'alive',
          titles: [
            'God of Healing',
            'Lover of the People'
          ],
          rank: 'lesser deity',
          description: 'Asclepius is the son of Apollo whose skill in medicine was so great he could ressurect the dead, he was struck down by Zeus. He was placed among the stars and now serves as the Physician for the gods',
          appearance: 'a man with a full beard in a simple himation robe.',
          history: undefined,
          powers: undefined,
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
          alignment: 'Lawful Good',
          symbol: 'Serpent-entwined staff',
          combat: {
            description: undefined
          },
          probabilityWeightings: {
            economicIdeology: {
              communism: 3
            },
            politicalIdeology: {
              sophocracy: 5,
              democracy: 4
            },
            race: {
              'human': 20,
              'elf': 15,
              'half-elf': 15
            }
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: 'Asclepius was so skiled in medicine that he could ressurect the dead, Healers and the Sick pray for his favour for skill and recovery',
            adherents: ['healers', 'the sick'],
            favouredWeapon: undefined,
            holyDays: {
              earth: []
            }
          },
          personality: {
            just: 50,
            merciful: -85,
            chaste: -80
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
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
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: []
        },
        { // Chiron
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Chiron',
          key: 'Chiron',
          status: 'alive',
          titles: [
            'Wisest of the Centaurs',
            'The Teacher'
          ],
          rank: 'immortal',
          description: undefined,
          appearance: 'a centaur, though in some iterations his front legs are human legs.',
          history: undefined,
          powers: undefined,
          portfolios: [
            'teachers',
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
          alignment: 'Neutral Good',
          symbol: ['thread', 'serpent', 'bull'],
          combat: {
            description: undefined
          },
          probabilityWeightings: {
            politicalIdeology: {
              theocracy: 4,
              sophocracy: 4,
              technocracy: 3
            },
            race: {
              dragonborn: 15,
              human: 15
            }
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: 'Chiron is worshipped by Heroes and Centaurs alike for his wisdom and control.',
            adherents: ['teachers', 'centaurs', 'healers'],
            favouredWeapon: undefined,
            holyDays: {
              earth: []
            }
          },
          personality: {
            just: 50,
            merciful: 60,
            chaste: 90
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
              }
            ],
            animals: [],
            plants: [],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: []
        },
        { // Hercules
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Heracles',
          key: 'Heracles',
          status: 'alive',
          aliases: ['Hercules'],
          titles: ['Divine Protector of Mankind'],
          rank: 'lesser deity',
          description: 'The Son of Zeus who famously completed 12 Labours, Heracles ascended to godhood and is known as the greatest of the Greek Heroes',
          appearance: 'a muscular man with a beard',
          history: undefined,
          powers: undefined,
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
          alignment: 'Chaotic Good',
          symbol: 'olive-wood club and lion skin cape',
          combat: {
            description: undefined
          },
          probabilityWeightings: {
            economicIdeology: {
              feudalism: 3
            },
            politicalIdeology: {
              autocracy: 1
            },
            politicalSource: {
              'absolute monarchy': 10
            },
            race: {
              'human': 20,
              'half-orc': 35,
              'orc': 20
            }
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: 'Arguably the greatest of Heroes, Heracles is worshipped by mortals for his strength and fame',
            adherents: ['heroes', 'athletes', 'mortals'],
            favouredWeapon: undefined,
            holyDays: {
              earth: []
            }
          },
          personality: {
            just: 50,
            merciful: -85,
            chaste: -80
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
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
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: [
            {
              name: 'Zeus',
              relationship: 'father'
            }
          ]
        },
        { // Ariadne
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Ariadne',
          key: 'Ariadne',
          status: 'alive',
          equivalent: ['Libera', 'Proserpina'],
          titles: ['Wife of Dionysus'],
          rank: 'immortal',
          description: undefined,
          appearance: 'a woman with a laurel crown',
          history: undefined,
          powers: undefined,
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
          alignment: 'Neutral',
          symbol: undefined,
          combat: {
            description: undefined
          },
          probabilityWeightings: {
            race: {
              halfling: 20,
              tiefling: 15
            }
          },
          possessions: [
            {
              title: 'The Thread of Ariadne'
            }
          ],
          realm: undefined,
          followers: {
            description: undefined,
            adherents: ['farmers'],
            favouredWeapon: undefined,
            holyDays: {
              earth: []
            }
          },
          personality: {
            just: 50,
            merciful: -85,
            chaste: -80
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
              }
            ],
            animals: [],
            plants: [],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: [
            {
              name: 'Dionysus',
              relationship: 'consort'
            }
          ]
        }
      ]
    },
    norse: {
      name: 'norse',
      description: `Where the land plummets from the snowy hills into the icy fjords below, where the longboats draw up on to the beach, where the glaciers flow forward and retreat with every fall and spring—this is the land of the Vikings, the home of the Norse pantheon. It’s a brutal clime, and one that calls for brutal living. The warriors of the land have had to adapt to the harsh conditions in order to survive, but they haven’t been too twisted by the needs of their environment. Given the necessity of raiding for food and wealth, it’s surprising the mortals turned out as well as they did. Their powers reflect the need these warriors had for strong leadership and decisive action. Thus, they see their deities in every bend of a river, hear them in the crash of the thunder and the booming of the glaciers, and smell them in the smoke of a burning longhouse.

      The Norse pantheon includes two main families, the Aesir (deities of war and destiny) and the Vanir (gods of fertility and prosperity). Once enemies, these two families are now closely allied against their common enemies, the giants (including the gods Surtur and Thrym).`,
      followers: {
        description: '',
        favouredWeapon: '',
        holyDays: {
          earth: []
        }
      },
      gods: [
        { // Odin
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Odin',
          key: 'Odin',
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
          description: undefined,
          appearance: '',
          history: undefined,
          powers: undefined,
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
          faction: 'aesir',
          domains: [
            'knowledge',
            'trickery',
            'war',
            'arcana'
          ],
          channelDivinity: [],
          alignment: 'Lawful Good',
          symbol: '',
          combat: {
            description: undefined,
            weapon: 'spear',
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              title: 'Gungir',
              description: 'The spear Gungir is so well balanced it can hit any target, regardless of skill'
            },
            {
              title: 'Draupnir',
              description: 'A gold ring which drips forth eight identical rings after nine days'
            }
          ],
          realm: 'Valhalla',
          followers: {
            description: undefined,
            favouredWeapon: '',
            holyDays: {
              earth: [
                { title: 'Wednesday' }
              ]
            }
          },
          personality: {
            just: 70,
            merciful: -85,
            chaste: -20
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
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
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: []
        },
        { // Thor
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Thor',
          key: 'Thor',
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
          history: undefined,
          powers: undefined,
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
          faction: 'aesir',
          domains: [
            'tempest',
            'war',
            'nature'
          ],
          channelDivinity: [],
          alignment: 'Neutral Good',
          symbol: '',
          combat: {
            description: undefined,
            weapon: 'hammer',
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              title: 'Jarngreipr ',
              description: 'the pair of gloves he needs to handle Mjolnir'
            },
            {
              title: 'Mjolnir',
              description: 'The legendary hammer which summons thunderbolts and, in select cases, can ressurect the fallen. In its forging a mistake was made and the handle is short'// Don't think it returns - this is not Marvel
            },
            {
              title: 'Megingjord',
              description: 'A belt doubles Thors mighty strength, allowing him to lift Mjolnir'
            }
          ],
          realm: undefined,
          followers: {
            description: undefined,
            favouredWeapon: 'hammer',
            holyDays: {
              earth: [
                { title: 'Thursday' }
              ]
            }
          },
          personality: {
            just: 70,
            merciful: -85,
            chaste: -80
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
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
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: []
        },
        { // Loki
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Loki',
          key: 'Loki',
          status: 'alive', // unless he is bound to the stone with the snake above him - dunno about this
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
          description: undefined,
          appearance: '',
          history: undefined,
          powers: undefined,
          portfolios: [
            'magic',
            'mischief',
            'deceit',
            'thievery',
            'chaos',
            'change',
            'temptation',
            'shapeshifting'
          ], // Not fire, that is Logi, the Jotunn of Fire
          // Loki is a shapeshifter, but it is simpler to give his avatars the corresponding gender.
          // You probably didn't consciously notice that I just used the male pronouns for Loki.
          gender: 'man',
          shape: 'human',
          race: 'Jotunn',
          faction: 'aesir',
          domains: [
            'trickery'
          ],
          channelDivinity: [],
          alignment: 'Chaotic Evil',
          symbol: '',
          combat: {
            description: undefined
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: undefined,
            favouredWeapon: 'spear',
            holyDays: {
              earth: []
            }
          },
          personality: {
            just: 70,
            merciful: -85,
            chaste: -80
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
              }
            ],
            animals: [],
            plants: [
              'birch',
              'mistletoe'
            ],
            monsters: ['Fenrir', 'Jormungandr'],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: []
        },
        { // Frigga
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Frigg',
          key: 'Frigg',
          status: 'alive',
          aliases: [
            'Frigga'
          ],
          titles: [
            'Protectress',
            'Queen of the Gods'
          ],
          rank: 'greater deity',
          description: undefined,
          appearance: '',
          history: undefined,
          powers: undefined,
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
          alignment: 'Neutral',
          symbol: '',
          combat: {
            description: undefined
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: undefined,
            favouredWeapon: 'spear',
            holyDays: {
              earth: [
                { title: 'Friday' }
              ]
            }
          },
          personality: {
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
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
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: []
        },
        { // Freyr
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Freyr',
          key: 'Freyr',
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
          description: undefined,
          appearance: '',
          history: undefined,
          powers: undefined,
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
          alignment: 'Neutral',
          symbol: '',
          combat: {
            description: undefined
          },
          possessions: [
            {
              title: 'Gullinbursti',
              description: 'A golden boar'
            }
          ],
          realm: undefined,
          followers: {
            description: undefined,
            favouredWeapon: 'spear',
            holyDays: {
              earth: []
            }
          },
          personality: {
          },

          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
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
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: []
        },
        { // Freyja
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Freyja',
          key: 'Freyja',
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
          description: undefined,
          appearance: '',
          history: undefined,
          powers: undefined,
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
          alignment: 'Neutral',
          symbol: '',
          combat: {
            description: undefined
          },
          possessions: [],
          realm: 'Folkvangr',
          followers: {
            description: undefined,
            favouredWeapon: 'spear',
            holyDays: {
              earth: []
            }
          },
          personality: {
            chaste: 30
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
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
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: []
        },
        { // Bragi
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Bragi',
          key: 'Bragi',
          status: 'alive',
          titles: [
            'The long-bearded god',
            'The husband of Idunn',
            'First maker of Poetry',
            'Son of Odin'
          ],
          rank: 'greater deity',
          description: undefined,
          appearance: '',
          history: undefined,
          powers: undefined,
          portfolios: [
            'skaldic poetry',
            'wisdom'
          ],
          gender: 'man',
          shape: 'human',
          race: 'god',
          domains: [
            'knowledge'
          ],
          channelDivinity: [],
          alignment: 'Neutral',
          symbol: '',
          combat: {
            description: undefined,
            weapon: 'harp',
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: 'the Skalds are the story tellers of the Jarl, and rarely go into battle. They recite stories of the great deeds of gods and men',
            favouredWeapon: 'harp',
            holyDays: {
              earth: []
            }
          },
          personality: {
            just: 70,
            merciful: -85,
            chaste: -80
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
              }
            ],
            animals: [],
            plants: [],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: []
        },
        { // Sif
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Sif',
          key: 'Sif',
          status: 'alive',
          titles: [
            'The Prophetess Sibyl',
            'The Fair-haired Deity',
            'Loveliest of Women',
            'The Wife of Thor',
            'Mother of Ullr',
            'Good Mother'
          ],
          rank: 'greater deity',
          description: undefined,
          appearance: 'a beautiful woman with a brilliant wig made of gold',
          history: undefined,
          powers: undefined,
          portfolios: [
            'harvest',
            'autum',
            'vitality',
            'fertility',
            'wedlock'
          ],
          gender: 'man',
          shape: 'human',
          race: 'god',
          domains: [
            'nature'
          ],
          channelDivinity: [],
          alignment: 'Neutral',
          symbol: '',
          combat: {
            description: undefined
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: undefined,
            favouredWeapon: 'spear',
            holyDays: {
              earth: []
            }
          },
          personality: {
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
              }
            ],
            animals: [],
            plants: [
              'rowan'
            ],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: []
        },
        { // Baldr
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Baldr',
          key: 'Baldr',
          status: 'dead',
          titles: [
            'the Bleeding God',
            'Wisest of the Aesir',
            'Fairest of the Aesir'
          ],
          rank: 'greater deity',
          description: undefined,
          appearance: '',
          history: undefined,
          powers: undefined,
          portfolios: [
            'beauty',
            'light',
            'peace',
            'valour',
            'joy',
            'summer sun',
            'purity'
          ],
          gender: 'man',
          shape: 'human',
          race: 'god',
          domains: [
            'life',
            'light',
            'peace'
          ],
          channelDivinity: [],
          alignment: 'Neutral',
          symbol: '',
          combat: {
            description: undefined
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: undefined,
            favouredWeapon: 'spear',
            holyDays: {
              earth: []
            }
          },
          personality: {
            just: 70,
            merciful: -85,
            chaste: -80
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
              }
            ],
            animals: [],
            plants: ['scentless mayweed'],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: []
        },
        { // Aegir
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Name',
          key: 'Name',
          status: 'alive',
          titles: [
            ''
          ],
          rank: 'greater deity',
          description: undefined,
          appearance: '',
          history: undefined,
          powers: undefined,
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
          alignment: 'Neutral',
          symbol: '',
          combat: {
            description: undefined
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: undefined,
            favouredWeapon: 'spear',
            holyDays: {
              earth: []
            }
          },
          personality: {
            just: 70,
            merciful: -85,
            chaste: -80
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
              }
            ],
            animals: [],
            plants: [],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: []
        },
        { // Hel
          objectType: 'deity',
          passageName: 'DeityProfile',
          name: 'Hel',
          key: 'Hel',
          status: 'alive',
          titles: [
            ''
          ],
          rank: 'greater deity',
          description: undefined,
          appearance: '',
          history: undefined,
          powers: undefined,
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
          alignment: 'Neutral',
          symbol: '',
          combat: {
            description: undefined
          },
          possessions: [],
          realm: undefined,
          followers: {
            description: undefined,
            favouredWeapon: 'spear',
            holyDays: {
              earth: []
            }
          },
          personality: {
            just: 70,
            merciful: -85,
            chaste: -80
          },
          associations: {
            avatars: [
              {
                name: undefined,
                appearance: undefined,
                description: undefined,
                frequency: undefined,
                powers: undefined
              }
            ],
            animals: [],
            plants: [],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: undefined,
          curses: undefined,
          allies: [],
          enemies: [],
          relationships: []
        }
      ]
    }
  }
}
