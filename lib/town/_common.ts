import { MaterialType, MaterialTypes } from '../buildings/structureData'
import { Building, BuildingRelationship } from '../buildings/_common'
import { Faction } from '../faction/_common'
import { Profession } from '../npc-generation/professions'
import { GenderName, RaceName } from '../npc-generation/raceTraits'
import { Family, NPC, NpcRelationship } from '../npc-generation/_common'
import { Road } from './roads'
import { Weather } from '../src/weather'
import { townData, TownType, PoliticalIdeology, EconomicIdeology } from './townData'
import { EconomicIdeologyIST, PoliticalIdeologyIC } from './updateTownSocioPolitics'
import { PantheonTypes } from 'lib/religion/religion'

export type PoliticalSource = keyof typeof townData.politicalSource
export type TownRolls =
| 'guardFunding'
| 'wealth'
| 'economics'
| 'welfare'
| 'military'
| 'law'
| 'sin'
| 'arcana'
| 'equality'
| 'religiosity'
| 'genderMakeup'

export type TaxTypes =
| 'welfare'
| 'military'
| 'economics'
| 'base'
| 'land'
| 'tithe'
export interface Town {
  name: string
  type: TownType
  _type: string
  location: string
  population: number
  ignoreGender: boolean
  // TODO: Add ignoreRace setting
  ignoreRace: boolean
  dominantGender: GenderName
  roll: Record<TownRolls, number>
  taxes: Record<TaxTypes, number>
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
    pantheon: PantheonTypes | string
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
