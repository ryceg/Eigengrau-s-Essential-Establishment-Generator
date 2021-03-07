import { MaterialType, MaterialTypes } from '../buildings/structureData'
import { Building, BuildingRelationship } from '../buildings/_common'
import { Faction } from '../faction/_common'
import { Profession } from '../npc-generation/professions'
import { RaceName } from '../npc-generation/raceTraits'
import { Family, NPC, NpcRelationship } from '../npc-generation/_common'
import { Road } from './roads'
import { Weather } from '../src/weather'
import { townData, TownType, PoliticalIdeology, EconomicIdeology } from './townData'
import { EconomicIdeologyIST, PoliticalIdeologyIC } from './updateTownSocioPolitics'
import { GenderName } from '../../lib/src/genderData'
import { Biome, Seasons } from '../../lib/src/terrain'

export type PoliticalSource = keyof typeof townData.politicalSource
export type TownRolls =
  'guardFunding'
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

export interface TownBasics {
  name: string
  pregen?: boolean
  generated: 'biome' | 'full'
  type: TownType
  _type: TownType
  location: string
  population: number
  ignoreGender: boolean
  dominantGender: GenderName
  roll: Record<TownRolls, number>
  possibleMaterials: MaterialTypes[]
  materialProbability: Record<MaterialTypes, MaterialType>
  politicalSource: PoliticalSource
  economicIdeology: EconomicIdeology
  politicalIdeology: PoliticalIdeology
  _politicalSource: PoliticalSource
  _economicIdeology: EconomicIdeology
  _politicalIdeology: PoliticalIdeology
  economicIdeologyIST: EconomicIdeologyIST
  politicalIdeologyIC: PoliticalIdeologyIC
  baseDemographics: Record<RaceName, number>
  _baseDemographics: Record<RaceName, number>
  _demographicPercentile: Record<RaceName, number>
  demographicPercentile: Record<RaceName, number>
  origin: string
  vegetation: string
  terrain: Biome
  currentSeason: Seasons
  founder?: string
}

export interface TownProfessions extends Profession {
  name: string;
  population: number;
}

export interface Town extends TownBasics {
  taxes: {
    welfare: number
    military: number
    economics: number
    base: number
    land: number
    tithe: number
  }
  reuseNpcProbability: number
  guard: Faction
  professions: Record<string, TownProfessions>
  religion: {
    deity: string
  }
  roads: Record<string, Road>
  townMaterial: string
  leaderType: string
  leader: NPC
  ruler?: NPC
  factions: Record<string, Faction>
  families: Record<string, Family>
  buildings: Building[]
  buildingRelations: BuildingRelationship[]
  npcRelations: Record<string, NpcRelationship[]>
  weather: Weather
  rulerType?: string
  bans: Ban[]
}

type Ban =
  | 'alcoholDiscouraged'
  | 'alcohol'
  | 'children'
  | 'softDrugs'
  | 'hardDrugs'
  | 'schools'
  | 'elderly'
  | 'young'
  | 'sickness'
  | 'religion'
  | 'magic'
  | 'music'
  | 'artwork'
  | 'acting'
  | 'nobility'
  | 'outsiders'
  | 'slavery'
  | 'animals'
  | 'unemployment'
  | 'panhandling'
