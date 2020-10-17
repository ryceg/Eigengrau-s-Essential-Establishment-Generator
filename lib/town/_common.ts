import { Building, BuildingRelationship } from '../buildings/_common'
import { Faction } from '../faction/_common'
import { Profession } from '../npc-generation/professions'
import { GenderName, RaceName } from '../npc-generation/raceTraits'
import { NPC } from '../npc-generation/_common'
import { townData } from './townData'
import { EconomicIdeologyIST, PoliticalIdeologyIC } from './updateTownSocioPolitics'

import { Family } from '../../src/NPCGeneration/Relationships/createFamilyMembers'

export type EconomicIdeology = keyof typeof townData.economicIdeology

export type PoliticalIdeology = keyof typeof townData.politicalIdeology

export type PoliticalSource = keyof typeof townData.politicalSource

export interface Town {
  name: string
  type: string
  _type: string
  location: string
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
    religiosity: number
  }
  taxes: {
    welfare: number
    military: number
    economics: number
  }
  wealth: string
  economics: string
  welfare: string
  military: string
  law: string
  sin: string
  arcana: string
  hasBrothel: boolean
  pregen?: boolean
  dualLeaders: boolean
  reuseNpcProbability: number
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
  leaderType: string
  leader: NPC
  factions: Record<string, Faction>
  families: Record<string, Family>
  buildings: Building[]
  buildingRelations: BuildingRelationship[]
  politicalSource: PoliticalSource
  economicIdeology: EconomicIdeology
  politicalIdeology: PoliticalIdeology
  economicIdeologyIST: EconomicIdeologyIST
  politicalIdeologyIC: PoliticalIdeologyIC
  baseDemographics: Record<RaceName, number>
  _baseDemographics: Record<RaceName, number>
  _demographicPercentile: Record<RaceName, number>
  origin: string
  vegetation: string
}
