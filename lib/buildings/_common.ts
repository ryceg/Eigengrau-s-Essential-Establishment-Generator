import { NPC } from '../npc-generation/_common'

export interface Location {
  key: string
  /** 'building', 'faction', 'npc', or 'room'. */
  objectType: 'building'
  /** The type of building- 'castle', 'townSquare', 'generalStore', etc. */
  type: string
  buildingType: string
  initPassage?: string
  passageName?: string
  PassageFormat?: string
  parentKey?: string
  name?: string
  wordNoun?: string
  needsWordNoun?: boolean
  associatedNPC?: NPC
  tippyDescription?: string
  isOffRoad?: boolean
}

export interface Structure extends Location {
  structure?: BuildingStructure
  roadSizeRequirement?: number
  material: {
    noun: string
    probability: number
  }
  road: string
  owner?: string
}

export type BuildingTypes =
'home'
| 'alchemist'
| 'bakery'
| 'barber'
| 'brothel'
| 'butcher'
| 'castle'
| 'cobbler'
| 'dungeon'
| 'fletcher'
| 'florist'
| 'generalStore'
| 'graveyard'
| 'guardhouse'
| 'jeweller'
| 'tailor'
| 'tavern'
| 'temple'
| 'townSquare'
| 'market'
export interface Building extends Structure {
  passageName: string
  type: BuildingTypes
  name: string
  priceModifier: number
  wealth?: string
  size?: string
  activity?: string
  roughness?: string
  sin?: string
  cleanliness?: string
  diversity?: string
  reputation?: string
  notableFeature?: string
  specialty?: string
  roll: BuildingRolls
}

export interface BuildingStructure {
  descriptor: string
  descriptors: string[]
  material: BuildingMaterial
  roof: BuildingRoof
}

export interface BuildingRoof {
  canBeColoured: boolean
  colour: string
  wealth: string
  verb: string
  noun: string
}

export interface BuildingMaterial {
  noun: string
  wealth: string
}

export interface BuildingRolls {
  wealth: number
  cleanliness: number
  size: number
  landSize?: number
  age?: number
  condition?: number
  activity: number
  diversity: number
  expertise: number
  magic?: number
  population: number
  reputation: number
  roughness: number
  sin: number
}

export interface ReciprocalRelationship {
  key: string
  otherKey: string
  npcKey: string
  relationship: string
  reciprocalRelationship: string
  description: string | null
}
