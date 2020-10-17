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
  name: string
  formalName: string
  title: string
  lastName: string
  firstName: string
  gender: GenderName
  race: RaceName
  beard: string
  heightRoll: number
  height: string
  weightRoll: number
  weight: string
  bmi: number
  muscleMass: number
  physicalTrait: string
  age: string
  ageStage: AgeName
  ageYears: number
  adventure?: string
  profession: string
  background: BackgroundName
  roll: Record<string, number>
  partnerID?: string
  relationships: Record<string, string>
  wealth: number
  finances: {
    creditors: Record<string, string>
    debtors: Record<string, string>
  }
  socialClass: SocialClassName
  professionType: string
  professionSector: string
  hasClass: boolean
  dndClass?: ClassName
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
  heshe: string
  hisher: string
  himher: string
  himherself: string
  backgroundOrigin: string
  bond: string
  ideal: string
}

export interface Relationship {
  relationship: string
  reciprocalRelationship?: string
  probability: number
  base: {
    profession?: string
    socialClass?: string
  }
  exclusions?(town: unknown, npc: NPC): boolean | undefined
}
