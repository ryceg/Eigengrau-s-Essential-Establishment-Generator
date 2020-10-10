import { ClassName } from './classTraits'
import { RaceName, GenderName, AgeName } from './raceTraits'

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
  background: string
  roll: Record<string, number>
  partnerID?: string
  relationships: Record<string, string>
  socialClass: string
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
  heshe: string
  hisher: string
  himher: string

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
