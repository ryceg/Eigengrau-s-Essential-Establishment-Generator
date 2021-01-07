import { AgeName, GenderName, NPC, RaceName } from '@lib'
import { AlignmentsAbbreviated } from 'lib/src/worldType'

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
   * @example ['El', 'Anu', 'An', 'Thoru-el']
    */
  aliases?: string[]
    /** All of the titles that a god might have. Will typically be used as a rider after the name.
   * @example ['Lord of the Skies', 'Ruler of All That He Sees']
   * @usage 'Zeus, Lord of the Skies'
   */
  titles: string[]
  /** Trying to make rank more granular is just asking for trouble.
   * @default 'lesser deity'
  */
  rank: 'leader' | 'greater deity' | 'intermediate deity' | 'lesser deity' | 'demigod' | 'saint'
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
  /** For spirits and other things that shouldn't be called gods, goddesses, or deities. */
  wordNoun?: string
  /** Distinct from `portfolios`, Domains are used in 5th Edition Dungeons and Dragons to assign spells. */
  domains: string[]
  /** For channel divinity spells and features. */
  channelDivinity: string[]
  /** Alignments, for those that are still stuck on 2nd Edition. */
  alignment: AlignmentsAbbreviated
  /** The equivalent of a deity's heraldry, an icon or symbol that represents them. Without any indefinite articles.
   * @example Zeus: 'fist full of lightning bolts'
  */
  symbol: string | string[]
  combat: {
    /** Their weapon of choice
     * @example Zeus: 'lightning'
     * @usage 'In combat, Zeus uses `lightning`.
     */
    weapon: string
    /** For descriptions about combat.
     * @usage 'Zeus is hotheaded, and does not shy away from a righteous fight.'
     */
    description: string
    /** For when you want to describe how your deity fights in battle. */
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
  /** Manifesting an avatar can be energy intensive; deities that wish to announce their presence may sometimes do so through a more economic way, by means of a supernatural event, such as an item glowing a specific colour, a duck appearing out of nowhere, etc. */
  manifestations: {
    /** A deity can have multiple different avatars, some more rare than others. */
    avatars: Avatar[]
    animals: string[]
    plants: string[]
    monsters: string[]
    gems: string[]
    colours: string[]
    miscellaneous: string[]
  }
  beliefs: string
  heresies: string
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
        {
          name: 'Zeus',
          titles: ['God of the Sky', 'Ruler of the Gods'],
          rank: 'leader',
          description: 'string',
          appearance: 'Zeus is depicted as a regal, mature man with a sturdy figure and dark beard.',
          portfolios: ['the skies', 'thunder and lightning', 'law and order', 'fate'],
          gender: 'man',
          race: 'human',
          domains: [
            'tempest'
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
              name: 'string',
              wordNoun: 'string',
              powers: 'string'
            }
          ],
          followers: {
            description: 'Zeus is followed by many, of all different race and creed.',
            favouredWeapon: 'spear',
            holyDays: {
              earth: ['June 12']
            }
          },
          personality: {
            just: 70,
            vengeful: 85,
            lustful: 80
          },
          manifestations: {
            avatars: [
              {
                name: 'string',
                appearance: 'string',
                description: 'string',
                frequency: 'string',
                powers: 'string'
              }
            ],
            animals: ['eagle', 'bull'],
            plants: [
              'olive tree',
              'evergreen holm oak'
            ],
            monsters: [],
            gems: [],
            colours: ['yellow'],
            miscellaneous: []
          },
          beliefs: 'string',
          heresies: 'string'
        }
      ]
    }
  }
}
