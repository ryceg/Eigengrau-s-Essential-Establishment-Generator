import { Family } from '../../src/NPCGeneration/Relationships/createFamilyMembers'
import { MaterialType, MaterialTypes } from '../buildings/structureData'
import { Building, BuildingRelationship } from '../buildings/_common'
import { Faction } from '../faction/_common'
import { Profession } from '../npc-generation/professions'
import { GenderName, RaceName } from '../npc-generation/raceTraits'
import { NPC, NpcRelationship } from '../npc-generation/_common'
import { Road } from './roads'
import { Weather } from '../src/weather'
import { townData, TownType, PoliticalIdeology, EconomicIdeology } from './townData'
import { EconomicIdeologyIST, PoliticalIdeologyIC } from './updateTownSocioPolitics'

export type PoliticalSource = keyof typeof townData.politicalSource

export interface Town {
  name: string
  type: TownType
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
    genderMakeup: number
  }
  taxes: {
    welfare: number
    military: number
    economics: number
    base: number
    land: number
    tithe: number
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
  possibleMaterials: MaterialTypes[]
  materialProbability: Record<MaterialTypes, MaterialType>
  professions: Record<string, Profession & {
    name: string,
    population: number
  }>
  religion: {
    deity: string
  }
  roads: Record<string, Road>
  townMaterial: string
  leaderType: string
  leader: NPC
  ruler?: NPC
  founder?: string
  factions: Record<string, Faction>
  families: Record<string, Family>
  buildings: Building[]
  buildingRelations: BuildingRelationship[]
  npcRelations: Record<string, NpcRelationship[]>
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
  terrain: 'temperate' | 'tropical' | 'polar' | 'arid'
  currentSeason: 'summer' | 'autumn' | 'winter' | 'spring'
  weather: Weather
}
