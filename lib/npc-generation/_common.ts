import { Town } from '../town/_common'
import { ReligionStrength } from '../religion/religion'
import { ProfessionName, ProfessionSector, ProfessionType } from './professions'
import { LifestyleStandardName } from './lifestyleStandards'
import { Virtues } from './traits/getTraits'
import { GenderName } from '../npc-generation/genderData'
import { BackgroundName } from './backgroundTraits'
import { ClassName } from './classTraits'
import { RaceName, AgeName } from './raceTraits'
import { SocialClassName } from './socialClass'

interface NPCRolls {
  traits: Record<Virtues, number>
  /** How lucky/good someone is at their job. */
  professionLuck: number
  /** "Rarity" of the trait- not really a super important attribute. */
  physicalTrait: number
  /** 100 is an exceedingly charismatic person, 1 is uber-awkward. */
  gregariousness: number
  /** 100 is a sheep, 50 is a regular person, 1 is "call the cops cuz i really don't care" */
  conformity: number
  /** The number used to determine their gender. */
  gender: number
  /** The number used to determine their religious fervor. */
  religiosity: number
  socialClass: number
  kinsey: number
  sexuality?: number
}

export interface NPC {
  key: string
  objectType: 'npc'
  passageName: string
  name: string
  formalName: string
  title: string
  lastName: string
  firstName: string
  gender: GenderName
  race: RaceName
  raceName: RaceName
  beard: string
  skinColour: string
  heightInches: number
  height: string
  weightPounds: number
  weight: string
  raceRoll: number
  bmi: number
  muscleMass: number
  physicalTrait: string
  age: string
  ageStage: AgeName
  ageYears: number
  adventure?: string
  profession: ProfessionName
  /** In the style of Xanathar's Class Origins, for the professions. */
  professionOrigin: string
  professionSuccess: string
  background: BackgroundName
  roll: NPCRolls
  partnerID?: string
  lifeEvents: string[]
  callbackFunction?(town: Town, npc: NPC): void
  wealth: number
  finances: {
    creditors: Record<string, number>
    debtors: Record<string, number>
  }
  religion: {
    strength: ReligionStrength
    deity: string
  }
  socialClass: SocialClassName
  professionType: ProfessionType
  professionSector: ProfessionSector
  hasClass: boolean
  dndClass?: ClassName
  weapon?: string
  canBeCustom?: boolean
  isThrowaway?: boolean
  isShallow?: boolean
  isAlive?: boolean
  hasHistory?: boolean
  keyIsAlreadyDefined?: boolean
  trait: string
  /** How the NPC acts when they're calm. */
  calmTrait: string
    /** How the NPC acts when they're stressed. */
  stressTrait: string
  /**
   * @decription A noticeable vocal pattern.
   */
  vocalPattern: string
  pronouns: {
    heshe: string
    hisher: string
    himher: string
    himherself: string
    malefemale: string
    manwoman: string
    boygirl: string
  }
  heshe: string
  hisher: string
  himher: string
  himherself: string
  malefemale: string
  manwoman: string
  boygirl: string
  parentNoun: string
  siblingNoun: string
  niblingNoun: string
  childNoun: string
  note?: string
  descriptors: string[]
  descriptor: string
  /** In the style of Xanathar's Background Origins */
  backgroundOrigin: string
  /** @example 'In a camp' */
  birthplace: string
  siblingNumber: number
  /**
   * Influenced by `npc.roll.gregariousness`.
   * @example 'I had some friends growing up, and my childhood was generally a happy one. */
  childhoodMemories: string
  parentalLineage?: string
  partnerGenderProbability(npc: NPC): GenderName
  family: string
  familyHome: string
  familyLifestyle: LifestyleStandardName
  /** @example 'my maternal grandparents' */
  familyUnit: string
  knewParents: boolean
    /** In the style of PHB bonds. */
  bond: string
  /** In the style of PHB ideals. */
  ideal: string
    /** In the style of PHB flaws. */
  flaw?: string
  greeting?: string[]
  death?: {
    murderer: null | string
    burialConditions: string
    graveStandard: string
    cause: string
    timeSinceDeath: number
  }
  eyes: string
  idle: string[]
  hairColour: string
  hairType: string
  scar?: string
  owner?: string
  chitchat?: string[]
  inventory?: string
}

interface DeadNPCRolls extends NPCRolls{
  deathConditions: number

}

export interface DeadNPC extends NPC {
  isAlive: false
  roll: DeadNPCRolls
  death: {
    graveStandard: string
    cause: string
    murderer: string | null
    timeSinceDeath: number
    burialConditions: string
  }
}

export interface Relationship {
  relationship: string
  reciprocalRelationship?: string
  probability: number
  base: {
    profession?: string
    socialClass?: string
  }
  exclusions?(town: Partial<Town>, npc: NPC): boolean | undefined
}

export interface NpcRelationship {
  targetNpcKey: string
  relation: string
  description: string | null
}

export interface Namesake {
  firstName: string
  lastName: string
  gender: GenderName
  key: string
  // may i not live to regret this
  objectType: 'npc'
  race: RaceName
  profession?: ProfessionName
  reason?: string
  note?: string
}

export interface Marriage {
  parents: string[]
  children: string[]
  socialClass?: SocialClassName
  lifestyle?: LifestyleStandardName
  familyUnit?: string
  home?: string
}

export interface Family {
  key: string
  members: Record<string, FamilyMember>
  home: {
    road: string
  }
}

export interface FamilyMember {
  /** The key of the NPC */
  key: string
  parentMarriage?: Marriage
  marriages?: Marriage[],
  canRemarry: boolean
  /** Keys of siblings */
  siblings?: string[]
}
