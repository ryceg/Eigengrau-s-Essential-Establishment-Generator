import { RaceName, GenderName, AgeName } from './raceTraits'

export interface NPC {
  name: string
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
  age: string
  ageStage: AgeName
  ageYears: number
  profession: string
  background: string
  roll: Record<string, number>
  partnerID?: string
  relationships: string[]
  socialClass: string
  professionType: string
  professionSector: string
  hasClass: boolean
  dndClass?: string
  isBreakingGenderNorms: boolean
  heshe: string
  hisher: string
  himher: string
}

export interface Relationship {
  relationship: string
  reciprocal?: string
  probability: number
  base: {
    profession?: string
    socialClass?: string
  }
  exclusions?(town: unknown, npc: NPC): boolean | undefined
}
