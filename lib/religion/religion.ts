import { ProfessionNames, ProfessionSector } from '../npc-generation/professions'
import { EconomicIdeology, PoliticalIdeology } from '../town/townData'
import { PoliticalSource, Town } from '../town/_common'
import { AlignmentsAbbreviated, ClericDomains, WorldType } from '../src/worldType'
import { RaceName, GenderName, NPC, ThresholdTable, PartialRecord, Virtues } from '../'

interface Followers {
  /**
   * @example 'Zeus is followed by many, of all different race and creed.'
   */
  description: string
  /**
   * Who Actually Worshipped the god?
   * @example Poseidon : 'Sailors'
   */
  adherents?: string[]
  /**
   * @example 'spear'
   * @usage 'In battle, his followers favour the ${favouredWeapon}'
   */
  favouredWeapon: string
  /**
   * Holy days
   * @example ['the month of January', 'Saturdays', 'days ending with the letter y']
   * @usage 'Their holy days are ______' (parsed as a list with an oxford comma.)
   * @default 'earth'
   */
  holyDays: PartialRecord<WorldType, string[]>
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
  status: DeityStatus
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
       * Some races are going to be more interested in certain gods than others.
       * Weighted probabilities (default is 10)
       * Can be turned off.
       */
      race: Record<RaceName, number>
      /**
       * If there's a Patron Deity of Cheesemakers in the Pantheon, it's pretty likely that the cheesemaker will worship that deity.
       */
      profession: Record<ProfessionNames, number>
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
   * @usage '${deity.name} is depicted as ______'
   */
  appearance?: string
  /**
   * Just in case you have history that you want to cover.
   */
  history?: string
  /**
   * For smart one-liners, or quotes about the deity.
   * Will be printed in a <blockquote> element.
   * If given an array, will be picked at random.
   * @example {
   *    description: 'Bear up, my child, bear up; Zeus who oversees and directs all things is still mighty in heaven.',
   *    author: 'Sophocles'
   * }
   */
  quotes?: Quotation | Quotation[]
  /**
   * Generic extra text.
   * @example [
   *  '<h4>Birth</h4>', 'The birth of Zeus was not your average birth.',
   *  '<h4>Death</h4>', 'Zeus dies at the end of the film.'
   * ]
   */
  paragraphs?: string[]
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
  channelDivinity: string[]
  /**
   * Alignments, for those that are still stuck on 2nd Edition.
   */
  alignment: AlignmentsAbbreviated
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
   * @example `${'Thor'} owns the ${'hammer'} ${'Mjölnir'}, which ${"could return to its owner's hand when thrown, and call lightning down on enemies."}`
   */
  possessions: Partial<Possession[]>
  /** Some gods had planes/domain which they ruled
   * @example ```Odin: 'Valhalla'```
   */
  realm?: string
  followers: Partial<Followers>
  /**
   * If a deity particularly embodies a virtue or vice, it can be specified.
   * Be sure to not specify the same pair (i.e. chaste/lust)
   * Expressed as a 0-100.
   * @example
   * Zeus: {
   *   just: 70,
   *   merciful: -85,
   *   lust: 80
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
  beliefs?: string
  heresies?: string
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
  /**
   * The name of the object.
   * @example 'Aegis'
   */
  name?: string
  /**
   * What the object is.
   * @example 'shield'
   * @usage 'Zeus owns the ${shield} Aegis'
   */
  wordNoun?: string
  /**
   * What the object does.
   * @example 'bears the head of a Gorgon, and makes a terrible roaring sound in battle.'
   * @usage 'Zeus owns the ${shield} Aegis, which _____'
   */
  powers?: string
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

interface Quotation {
  description: string
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
          earth: []
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
          description: 'Zeus is the leader of the Greek gods, and lives atop Mount Olympus, where he rules over the mortal world below.',
          appearance: 'Zeus is depicted as a regal, mature man with a sturdy figure and dark beard grasping a lightning bolt and wreathed in a crown of olive leaves.',
          quotes: {
            description: 'Bear up, my child, bear up; Zeus who oversees and directs all things is still mighty in heaven.',
            author: 'Sophocles'
          },
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
            description: 'Zeus famously led the Greek gods in the battle against the Titans, and is a fearsome foe.',
            weapon: 'lightning',
            weaponDescription: 'Zeus calls down electric energy and fashions them into mighty spears of lightning to hurl at his enemies.',
            tactics: 'Zeus is hotheaded, and does not always think things through.'
          },
          possessions: [
            {
              name: 'Aegis',
              wordNoun: 'shield',
              powers: 'bears the head of a Gorgon, and makes a terrible roaring sound in battle.'
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
          heresies: undefined
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
          description: 'Poseidon is the god of the Sea - all things underwater are under his purview',
          appearance: 'a mature man with a sturdy build and a dark beard holding a trident and a sea-creature encrusted boulder, simply crowned with a headband with a cloak draped around his arms.',
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
            weapon: 'trident',
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
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
          blessings: ['Smooth Sailing', 'managment of horses'],
          curses: ['mad horses', 'rough seas']
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
          description: 'Hades is the god of the Dead and the first son of Kronos. However when He, Zeus and Poseidon were drawing lots for the division of the cosmos, Hades gained dominion of the Underworld. As far below the earth as the heavens are above, Hades realm is a dark and depressing place.',
          appearance: 'a dark-bearded, regal god, with a bird tipped sceptre with Cerebus seated by his throne.',
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
            description: undefined,
            weapon: 'Sceptre',
            weaponDescription: 'A powerful relic that is able to create a passage between the worlds of the living and the dead',
            tactics: undefined
          },
          possessions: [
            {
              name: 'Cap of Invisibility',
              wordNoun: 'helmet',
              powers: 'can turn the wearer invisible'
            }
          ],
          followers: {
            description: 'Hades, as the god of the dead, was a fearsome figure to those still living; in no hurry to meet him, they were reluctant to swear oaths in his name, and averted their faces when sacrificing to him. Since to many, simply to say the word "Hades" was frightening, euphemisms were pressed into use.',
            adherents: ['mourners', 'undertakers', 'necromancers', 'miners'],
            favouredWeapon: undefined,
            holyDays: {
              earth: ['second to last day of every month'],
              fr: ['second to last day of every month'],
              gn: ['second to last day of every month']
            }
          },
          personality: {
            just: 90,
            merciful: -85,
            chaste: -20
          },
          associations: {
            avatars: [
              {
                name: 'Ploutos',
                appearance: undefined,
                description: 'As Ploutos, Hades is the God of wealth and precious metals',
                frequency: undefined,
                powers: undefined
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
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined,
          blessings: ['plenty from the earth', 'the ability to be un-noticed']
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
          description: 'Aphrodite is the goddess of love and scorns those who stay away from relationships. Her love can be a thing of beauty or a thing of terror and destruction.',
          appearance: 'Aphrodite is consistently portrayed as a nubile, infinitely desirable adult, having had no childhood.',
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
          symbol: 'dove',
          combat: {
            description: 'While Aphrodite is most well known as the goddess of Love, she is also known as a goddess of War - especially by people like the Spartans. ',
            weapon: 'Spear',
            weaponDescription: 'Aphrodite Areia wields a spear ',
            tactics: 'Aphrodite is ready to use deciptive strategies, such as how she lured the Gigantes one by one into a cave for them to be murered'
          },
          possessions: [
            {
              name: 'Girdle',
              wordNoun: undefined,
              powers: 'inspires desire in all those who look upon the wearer'
            }
          ],
          followers: {
            description: 'As the goddess of beauty and love the favour of Aphrodite was worshipped by all people, though especially by Prostitutes. She was also worshippeed as Aphrodite the Warlike by warriors',
            adherents: ['everyone', 'prostitutes', 'warriors'],
            favouredWeapon: undefined,
            holyDays: {
              earth: ['the fourth day of every month']
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
                appearance: 'Clad in armour and bearing weapons',
                description: 'Aphrodite Areia is war-like aspect of Aphrodite',
                frequency: 'Worshipped by the Spartans and other war-loving people',
                powers: undefined
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
            'beauty'
          ],
          curses: [
            'ugliness',
            'unwashable stink'
          ]
        },
        { // Artemis
          name: 'Artemis',
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
          alignment: 'N',
          symbol: 'bow and quiver of arrows',
          combat: {
            description: 'Artemis is quick to strike down those who offend her with animals and wild beasts',
            weapon: 'bow and arrows',
            weaponDescription: 'The Bow of Artemis was forged by the Cyclopses',
            tactics: 'Artemis is a dedicated huntress and will pursue her quarry until it is caught.'
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
          followers: {
            description: 'Artemis is worshipped by Hunters and Women, young girls could be expected to serve Artemis until they come of age.',
            adherents: ['hunters', 'young girls', 'expecting mothers', 'wild beings'],
            favouredWeapon: 'bow',
            holyDays: {
              earth: ['the sixth day']
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
          beliefs: 'chastity',
          heresies: undefined,
          curses: ['tranformation into a wild animal']
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
          description: 'The twin brother of Artemis, Apollo is the inventor of music. Those that he loves and loses or those that he hates can find themselves transformed and immortalised as a part of nature. ',
          appearance: 'a handsome youth, beardless with long hair and holds either a lyre or a bow.',
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
          alignment: 'N',
          symbol: 'lyre',
          combat: {
            description: undefined,
            weapon: 'bow',
            weaponDescription: undefined,
            tactics: 'The bow of Apollo fires arrows and plagues upon those who anger him'
          },
          possessions: [
            {
              name: 'The Lyre of Apollo',
              wordNoun: 'lyre',
              powers: undefined
            }
          ],
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
          heresies: undefined
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
          description: 'Athena is a wise goddess and protects those that follow her. She does have the rage of a goddess, and affronts to her are paid back with divine retribution.',
          appearance: 'a stately woman wearing a helmet armed with a spear and Aegis',
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
            description: undefined,
            weapon: 'spear',
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: 'Aegis of Athena',
              wordNoun: undefined,
              powers: undefined
            }
          ],
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
          heresies: undefined
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
          description: 'Dionysus is the god of Wine and Theatre, his revelry is open to all. However, he has his dark side - he is the god of madness the anger of Dionysus is a terrifying thing',
          appearance: 'long haired youth, almost effeminate in appearance. He holds a staff topped with a pinecone and brings revelry with him',
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
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
          followers: {
            description: 'Dionysus is a god of the people and youths. Those who value proper decorum and modesty are apallled at the revelry of the Bacchic crowds. Devotees of Dionysus may engage in the rending of animals with their bare hands',
            adherents: ['wine-makers', 'actors', 'farmers', 'revelers'],
            favouredWeapon: undefined,
            holyDays: {
              earth: ['the eighth month']
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
          heresies: undefined
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
          description: 'Demeter is the goddess of Agriculture - her favour promised a bountiful harvest and more grain then could be eaten. However her anger promised frosts and famine.',
          appearance: 'a mature woman wearing a crown holding wheat in a cornocopia and a torch',
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
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
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
          blessings: ['bountiful harvest', 'satiated appetite', 'a better afterlife']

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
          description: 'Hermes is the hessenger of the gods and the personal messenger of Zeus. He brings the souls of the deceased to the edge of the underworld, where they are ferried deeper by the Cthonic gods',
          appearance: 'an athletic man wearing winged boots, full of energy. Ontop of his head is a helmet with two wings attached.',
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
            description: undefined,
            weapon: 'sword',
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: 'Adamantine Blade',
              wordNoun: undefined,
              powers: undefined
            },
            {
              name: 'Talaria',
              wordNoun: 'Winged boots',
              powers: undefined
            },
            {
              name: 'Winged helm',
              wordNoun: undefined,
              powers: undefined
            }
          ],
          followers: {
            description: 'Hermes was the messenger of Zeus',
            adherents: ['thieves', 'traders', 'messengers', 'athletes', 'diplomats', 'travellers'],
            favouredWeapon: undefined,
            holyDays: {
              earth: ['Wednesday']
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
          heresies: undefined
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
          description: 'Hera is the Queen of the gods, forever tested by her husband Zeus. Unable to attack Zeus, her anger is often directed to his consorts or his children.',
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
          symbol: undefined,
          combat: {
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
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
          heresies: undefined
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
          description: undefined,
          appearance: 'always clad in armour, holding weapons and ready for battle. He can appear as the fresh-faced youth or the grizzeled veteran depending on his mood.',
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
          symbol: undefined,
          combat: {
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
          followers: {
            description: 'Ares is the god of war and courage - cities and countries going to war would worship Ares before going into battle',
            adherents: ['warriors'],
            favouredWeapon: undefined,
            holyDays: {
              earth: ['Tuesday']
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
            plants: [
              ''
            ],
            monsters: [],
            gems: [],
            colours: [],
            miscellaneous: []
          },
          beliefs: undefined,
          heresies: undefined
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
          description: 'Hestia is the First-born child of Kronos and Rhea and the first to be swallowed by him. After Apollo and Poseidon vied for her hand in marriage she refused and chose to be an eternal virgin.',
          appearance: 'a beautiful veiled woman, with long dark hair',
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
          symbol: undefined,
          combat: {
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
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
          heresies: undefined
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
          description: undefined,
          appearance: 'bearded man with twisted legs',
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
            description: undefined,
            weapon: 'hammer',
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
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
          blessings: ['inspiration', 'knowledge']
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
          description: undefined,
          appearance: undefined,
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
          alignment: 'N',
          symbol: undefined,
          combat: {
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
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
          heresies: undefined
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
          description: undefined,
          appearance: undefined,
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
          symbol: undefined,
          combat: {
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
          followers: {
            description: 'Hecate is a mysterious Goddess who is a master of the Arcane Arts and lives in the Underworld, her followers ask for her secret knowledge.',
            adherents: ['Magic Users', 'Necromancers'],
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
          heresies: undefined
        },
        { // Nike
          name: 'Nike',
          status: 'alive',
          titles: ['Goddess of Victory', 'The Winged Goddess'],
          rank: 'lesser deity',
          description: undefined,
          appearance: undefined,
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
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
          followers: {
            description: 'The Favour of Nike is a promise of victory, though it was rarely given without being earnt. ',
            adherents: ['Warriors'],
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
          heresies: undefined
        },
        { // Tyche
          name: 'Tyche',
          status: 'alive',
          titles: ['Godess of Fortune and Chance'],
          rank: 'lesser deity',
          description: undefined,
          appearance: undefined,
          portfolios: ['luck', 'chance', 'fate', 'providence', 'natural disasters'],
          gender: 'woman',
          shape: 'human',
          race: 'god',
          domains: [
            'trickery'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: undefined,
          combat: {
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
          followers: {
            description: undefined,
            adherents: ['Gamblers', 'All'],
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
          heresies: undefined
        },
        { // Hebe
          name: 'Hebe',
          status: 'alive',
          titles: ['Goddess of Eternal Youth',
            'Daughter of Zeus',
            'Wife of Hercules'
          ],
          rank: 'lesser deity',
          description: undefined,
          appearance: undefined,
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
          symbol: undefined,
          combat: {
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
          followers: {
            description: undefined,
            favouredWeapon: undefined,
            holyDays: {
              earth: ['June']
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
          description: undefined,
          appearance: 'a satyr holding a set of Pan-pipes',
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
          symbol: undefined,
          combat: {
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
          followers: {
            description: undefined,
            adherents: ['Wild Beings', 'Hunters'],
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
          heresies: undefined
        },
        { // Asclepius
          name: 'Asclepius',
          status: 'alive',
          titles: [
            'God of Healing',
            'Lover of the People'
          ],
          rank: 'lesser deity',
          description: 'Asclepius is the son of Apollo whose skill in medicine was so great he could ressurect the dead, he was struck down by Zeus. He was placed among the stars and now serves as the Physician for the gods',
          appearance: undefined,
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
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
          followers: {
            description: 'Asclepius was so skiled in medicine that he could ressurect the dead, Healers and the Sick pray for his favour for skill and recovery',
            adherents: ['Healers', 'The Sick'],
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
          heresies: undefined
        },
        { // Chiron
          name: 'Chrion',
          status: 'alive',
          titles: [
            'Wisest of the Centaurs',
            'The Teacher'
          ],
          rank: 'immortal',
          description: undefined,
          appearance: undefined,
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
          symbol: undefined,
          combat: {
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
          followers: {
            description: 'Chiron is worshipped by Heroes and Centaurs alike for his wisdom and control.',
            adherents: ['Teachers', 'Centaurs', 'Healers'],
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
          heresies: undefined
        },
        { // Hercules
          name: 'Heracles',
          status: 'alive',
          aliases: ['Hercules'],
          titles: ['Divine Protector of Mankind'],
          rank: 'lesser deity',
          description: 'The Son of Zeus who famously completed 12 Labours, Heracles ascended to godhood and is known as the greatest of the Greek Heroes',
          appearance: undefined,
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
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
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
          heresies: undefined
        },
        { // Ariadne
          name: 'Ariadne',
          status: 'alive',
          equivalent: ['Libera', 'Proserpina'],
          titles: ['Wife of Dionysus'],
          rank: 'immortal',
          description: undefined,
          appearance: undefined,
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
          symbol: undefined,
          combat: {
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: 'The Thread of Ariadne',
              wordNoun: 'thread',
              powers: undefined
            }
          ],
          followers: {
            description: undefined,
            adherents: ['Farmers'],
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
          heresies: undefined
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
          earth: []
        }
      },
      gods: [
        { // Odin
          name: 'Odin',
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
          alignment: 'N',
          symbol: '',
          combat: {
            description: undefined,
            weapon: 'spear',
            weaponDescription: undefined,
            tactics: undefined
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
            description: undefined,
            favouredWeapon: '',
            holyDays: {
              earth: ['Wednesday']
            }
          },
          personality: {
            just: 70,
            merciful: -85,
            chaste: -20
          },
          realm: 'Valhalla',
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
          heresies: undefined
        },
        { // Thor
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
          faction: 'aesir',
          domains: [
            'tempest',
            'war',
            'nature'
          ],
          channelDivinity: [],
          alignment: 'N',
          symbol: '',
          combat: {
            description: undefined,
            weapon: 'hammer',
            weaponDescription: undefined,
            tactics: undefined
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
              powers: 'summons thunderbolts and, in select cases, can ressurect the fallen. In its forging a mistake was made and the handle is short'// Don't think it returns - this is not Marvel
            },
            {
              name: 'Megingjord',
              wordNoun: 'belt',
              powers: 'doubles Thors mighty strength, allowing him to lift to Mjolnir'
            }
          ],
          followers: {
            description: undefined,
            favouredWeapon: 'hammer',
            holyDays: {
              earth: ['Thursday']
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
          heresies: undefined
        },
        { // Loki
          name: 'Loki',
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
          alignment: 'N',
          symbol: '',
          combat: {
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
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
          heresies: undefined
        },
        { // Frigga
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
          description: undefined,
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
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
          followers: {
            description: undefined,
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
          heresies: undefined
        },
        { // Freyr
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
          description: undefined,
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
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: 'Gullinbursti',
              wordNoun: 'golden boar',
              powers: undefined
            }
          ],
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
          heresies: undefined
        },
        { // Freyja
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
          description: undefined,
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
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
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
          realm: 'Folkvangr',
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
          heresies: undefined
        },
        { // Bragi
          name: 'Bragi',
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
          alignment: 'N',
          symbol: '',
          combat: {
            description: undefined,
            weapon: 'harp',
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
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
          heresies: undefined
        },
        { // Sif
          name: 'Sif',
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
          alignment: 'N',
          symbol: '',
          combat: {
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
          followers: {
            description: undefined,
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
          heresies: undefined
        },
        { // Baldr
          name: 'Baldr',
          status: 'dead',
          titles: [
            'the Bleeding God',
            'Wisest of the Aesir',
            'Fairest of the Aesir'
          ],
          rank: 'greater deity',
          description: undefined,
          appearance: '',
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
          alignment: 'N',
          symbol: '',
          combat: {
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
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
          heresies: undefined
        },
        { // Aegir
          name: 'Name',
          status: 'alive',
          titles: [
            ''
          ],
          rank: 'greater deity',
          description: undefined,
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
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
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
          heresies: undefined
        },
        { // Hel
          name: 'Hel',
          status: 'alive',
          titles: [
            ''
          ],
          rank: 'greater deity',
          description: undefined,
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
            description: undefined,
            weapon: undefined,
            weaponDescription: undefined,
            tactics: undefined
          },
          possessions: [
            {
              name: undefined,
              wordNoun: undefined,
              powers: undefined
            }
          ],
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
          heresies: undefined
        }
      ]
    }
  }
}
