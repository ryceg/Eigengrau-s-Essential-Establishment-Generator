import { NPC } from '../npc-generation/_common'

export interface Building {
  key: string
  type: string
  name: string
  wordNoun: string
  associatedNPC?: NPC
  structure: BuildingStructure
  roll: BuildingRolls
  wealth: string
  sin: string
  size: string
  activity: string
  roughness: string
  cleanliness: string
  diversity: string
  reputation: string
  material: {
    noun: string
    probability: number
  }
  tippyDescription: string
  road: string
  notableFeature?: string
  specialty?: string
  owner?: string
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
  activity: number
  cleanliness: number
  diversity: number
  expertise: number
  magic: number
  population: number
  reputation: number
  roughness: number
  sin: number
  size: number
  wealth: number
}

export interface BuildingRelationship {
  key: string
  buildingKey: string
  npcKey: string
  relationship: string
  reciprocalRelationship: string
  description: string | null
}
