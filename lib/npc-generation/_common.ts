import { Town } from '../town/_common'
import { BackgroundName } from './backgroundTraits'
import { ClassName } from './classTraits'
import { RaceName, GenderName, AgeName } from './raceTraits'

export type SocialClassName =
  | 'indentured servitude'
  | 'paupery'
  | 'peasantry'
  | 'commoner'
  | 'nobility'
  | 'aristocracy'

export interface NPC {
  key: string
  objectType: string
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
  profession: string
  professionOrigin: string
  professionSuccess: string
  background: BackgroundName
  roll: Record<string, number>
  partnerID?: string
  lifeEvents: string[]
  callbackFunction?(town: Town): any
  wealth: number
  finances: {
    creditors: Record<string, number>
    debtors: Record<string, number>
  }
  religion: {
    strength: string
  }
  socialClass: SocialClassName
  professionType: string
  professionSector: string
  hasClass: boolean
  dndClass?: ClassName
  weapon?: string
  canBeCustom?: boolean
  isThrowaway?: boolean
  isShallow?: boolean
  hasHistory?: boolean
  isBreakingGenderNorms: boolean
  keyIsAlreadyDefined?: boolean
  trait: string
  calmTrait: string
  stressTrait: string
  relaxedTrait: string
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
  backgroundOrigin: string
  birthplace: string
  siblingNumber: number
  childhoodMemories: string
  parentalLineage: string
  partnerGenderProbability(npc: NPC): GenderName
  family: string
  familyHome: string
  familyLifestyle: string
  familyUnit: string
  knewParents: boolean
  bond: string
  ideal: string
  greeting?: string[]
  death?: {
    murderer: null | string
    burialConditions: string
    graveStandard: string
    cause: string
    timeSinceDeath: number
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
