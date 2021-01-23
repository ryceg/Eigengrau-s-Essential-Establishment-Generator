import { RaceName, GenderName, AgeName, NPC } from '..'
import { AlignmentsAbbreviated, ClericDomains } from '../src/worldType'

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
  /** The name of the patheon, without riders or indefinite articles.
   * @example 'Greek'
   * @usage "The `Greek` gods"
   */
  name: string
  /** The description of the whole pantheon.
   * @example 'The gods of Olympus make themselves known with the gentle lap of waves against the shores and the crash of the thunder among the cloud–enshrouded peaks. The thick boar–infested woods and the sere, olive–covered hillsides hold evidence of their passing. Every aspect of nature echoes with their presence, and they’ve made a place for themselves inside the human heart, too.'
   */
  description: string
  /** Origin stories! */
  origin?: string
  /** Who follows the pantheon? */
  followers?: Followers
  gods: Deity[]
}

export interface Deity {
  /** For sanity's sake, only one name is allowed so we can easily find the deity. If your deity has multiple names, you can add them to `aliases`, which it will be pulled from at random. */
  name: string
  /**
   * For the deity with many names, use `aliases`. When an alias is used instead of the 'main' name, it will be specified that the deity is also known as `name`. 
   * NOTE: This is when there are multiple names for the same god - if two cultures have similar gods it should be 'equivalent'
   * @example ['El', 'Anu', 'An', 'Thoru-el']
    */
  aliases?: string[]
    /** While Zeus and Jupiter are arguably the same god, Aphrodite and Ishtar are not, but there is a connection between them. 
     * @example Aphrodite: ['Ishtar', 'Astarte']
     */
  equivalent?: string[]
    /** All of the titles that a god might have. Will typically be used as a rider after the name.
   * @example ['Lord of the Skies', 'Ruler of All That He Sees']
   * @usage 'Zeus, Lord of the Skies'
   */    
  titles: string[]
  /** Trying to make rank more granular is just asking for trouble.
   * @default 'lesser deity'
  */
  rank: 'leader' | 'greater deity' | 'intermediate deity' | 'lesser deity' | 'immortal' | 'demigod' | 'saint'
  /** Description of the deity overall. If omitted, description will be generated from the rest of the included data. */
  description?: string
  /** Description of how the deity is depicted typically. Distinct from their `avatars`. */
  appearance: string
  /** The aspects that the deity manages.
   * @example Zeus: ['the skies', 'thunder and lightning', 'law and order', 'fate']
   * @usage 'Zeus is God of `the skies`, `thunder and lightning`, `law and order`, and `fate`.
   */
  portfolios: string[]
  /** To assign whether to call them gods, goddesses, or deities, and use the correct pronouns. */
  gender: GenderName | 'none'
  /** The race the deity appears as. */
  race: RaceName | string
  /** For spirits and other things that shouldn't be called gods, goddesses, or deities.
   * @default 'god'
  */
  wordNoun?: string
  /** Distinct from `portfolios`, Domains are used in 5th Edition Dungeons and Dragons to assign spells. */
  domains: ClericDomains[]
  /** For channel divinity spells and features. */
  channelDivinity: string[]
  /** Alignments, for those that are still stuck on 2nd Edition. */
  alignment: AlignmentsAbbreviated
  /** The equivalent of a deity's heraldry, an icon or symbol that represents them. Without any indefinite articles.
   * @example Zeus: 'fist full of lightning bolts'
  */
  symbol: string | string[]
  combat: {
    /** For when you want to describe how your deity fights in battle. */
    description: string
    /** Their weapon of choice
     * @example Zeus: 'lightning'
     * @usage 'In combat, Zeus uses `lightning`.
     */
    weapon: string
    /** For descriptions about combat.
     * @usage 'Zeus is hotheaded, and does not shy away from a righteous fight.'
     */
    tactics: string
  }
  /** For things that the deity owns.
   * @example `${'Thor'} owns the ${'hammer'} ${'Mjölnir'}, which ${"could return to its owner's hand when thrown, and call lightning down on enemies."}`
   */
  possessions: Possession[]
  followers: Followers
  /** If a deity particularly embodies a virtue or vice, it can be specified. Be sure to not specify the same pair (i.e. chaste/lust)
   * Expressed as a 0-100.
   * @example ```Zeus: {
   *   just: 70,
   *   vengeful: 85,
   *   lust: 80
   * }```
   */
  // FIXME can't
  // personality: Record<PartialVirtues, number>
  personality: Record<string, number>
  /** Things that the god are associated with, e.g. Sacred plants and animals. */
  associations: {
    /** A deity can have multiple different avatars, some more rare than others. */
    avatars: Avatar[]
    animals: string[]
    plants: string[]
    monsters: string[]
    gems?: string[]
    colours?: string[]
    miscellaneous: string[]
  }
  beliefs: string
  heresies: string

  /**Some suggested blessings from the god
   * @example ```Aphrodite: [
   * 'beauty',
   * ]```
   */
  blessings?: string[]
    /**Some suggested curses from the god
   * @example ```Aphrodite: [
   * 'ugliness'
   * ]```
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

interface ReligionData {
  pantheon: Record<string, Pantheon>
}

export const religion: ReligionData = {
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
        { //Zeus
          name: 'Zeus',
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
          race: 'human',
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
        { //Poseidon
          name: 'Poseidon',
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
          race: 'human', 
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
        { //Hades
          name: 'Hades',
          aliases: ['Pluto', 'Pluton', 'The Cthonic Zeus'],
          equivalent: ['Pluto'], //Pluto was originally a different god to Hades
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
          race: 'human', 
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
              'Serpents', //Not Sure
              'Black-Rams' // Not Sure
              //Hades' Cattle? Not sure because it is specifically the cattle of Hades (Likewise Apollo has cattle that are his)
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
        { //Aphrodite
          name: 'Aphrodite',
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
            'love poetry', 
            ],
          gender: 'woman',
          race: 'human', 
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
              'wryneck' //English name for Iynx
            ],
            plants: [
              'rose',
              'myrtle',
              'apple',
              'poppy',
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
        { //Artemis
          name: 'Artemis',
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
          race: 'human', 
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
              'partridge',
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
        { //Apollo
          name: 'Apollo',
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
          race: 'human', 
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
        { //Athena
          name: 'Athena',
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
          race: 'human', 
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
        { //Dionysus
          name: 'Dionysus',
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
          race: 'human', 
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
            
            //energetic: 'lazy',
            //generous: 'selfish',
            //honest: 'deceitful',
            //merciful: 'cruel',
            //modest: 'proud',
            //pious: 'worldly',
            //prudent: 'reckless',
            //temperate: 'indulgent',
            //trusting: 'suspicious',
            //valorous: 'cowardly'
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
        { //Demeter
          name: 'Demeter',
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
            'Lovely Haired',
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
          race: 'human', 
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
        { //Hermes
          name: 'Hermes',
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
            'guiding the dead', //also known as Psychopomp
            'sleep',
            'rustic divination',
            'rustic music',
            'rustic fables',
          ],
          gender: 'man',
          race: 'human', 
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
            },
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
        { //Hera
          name: 'Hera',
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
          race: 'human', 
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
        { //Ares
          name: 'Ares',
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
            'rage',
          ],
          gender: 'man',
          race: 'human', 
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
        { //Hestia
          name: 'Hestia',
          aliases: ['Vesta'],
          titles: [
            'Daughter of lovely-haired Rhea',
            'Daughter of Cronos',
            'Rich in Blessings',
            'Beloved',
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
          race: 'human', 
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
        { //Hephaestus
          name: 'Hephaestus',
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
          race: 'human', 
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
        { //Persephone
          name: 'Persephone',
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
          race: 'human', 
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
        { //Hecate
          name: 'Hecate',
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
          race: 'human', 
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
          name: 'string',
          titles: ['Goddess of Victory', 'The Winged Goddess'],
          rank: 'lesser deity',
          description: 'string',
          appearance: 'string',
          portfolios: ['victory', 'speed', 'strength'],
          gender: 'woman',
          race: 'human', 
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
        { //Tyche
          name: 'Tyche',
          titles: ['Godess of Fortune and Chance'],
          rank: 'lesser deity',
          description: 'string',
          appearance: 'string',
          portfolios: ['luck', 'chance', 'fate', 'providence', 'natural disasters'],
          gender: 'woman',
          race: 'human', 
          domains: [
            'trickery',
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
        { //Hebe
          name: 'Hebe',
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
          race: 'human', 
          domains: [
            'life',
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
        { //Pan
          name: 'Pan',
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
          race: 'satyr', 
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
        { //Aslepius
          name: 'Aslepius',
          titles: [
            'God of Healing',
            'Lover of the People',
            
          ],
          rank: 'lesser deity',
          description: 'string',
          appearance: 'string',
          portfolios: [
            'medicine',
            'healing',
            'rejuvination',
            'doctors',
          ],
          gender: 'man',
          race: 'man', 
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
        { //Chiron
          name: 'Chrion',
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
        { //Hercules
          name: 'Heracles',
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
          race: 'human', 
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
        { //Ariadne
          name: 'Ariadne',
          equivalent: ['Libera', 'Proserpina'],
          titles: ['Wife of Dionysus'],
          rank: 'saint',
          description: 'string',
          appearance: 'string',
          portfolios: [
            'mazes',
            'fertility',
            'wine',
            'seasonal agriculture'
          ],
          gender: 'woman',
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
        },
      ]
    }
  }
}
