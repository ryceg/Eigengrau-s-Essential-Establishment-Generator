import { Profession } from '../npc-generation/professions'
import { GenderName } from '../npc-generation/raceTraits'

export interface Town {
  name: string
  type: string
  population: number
  ignoreGender: boolean
  dominantGender: GenderName
  roll: {
    guardFunding: number
    wealth: number
    economics: number
    welfare: number
    military: number
    law: number
    sin: number
    arcana: number
    equality: number
  }
  wealth: string
  economics: string
  welfare: string
  military: string
  law: string
  sin: string
  arcana: string
  politicalIdeology: string
  hasBrothel: boolean
  guard: {
    funding: string
  }
  possibleMaterials: string[]
  materialProbability: {
    [key: string]: {
      probability: number
    }
  }
  professions: Record<string, Profession & {
    name: string,
    population: number
  }>
}
