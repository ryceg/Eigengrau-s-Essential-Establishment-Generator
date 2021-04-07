import { NPC } from '../npc-generation/_common'

export interface Location {
  key: string
  /** 'building', 'faction', 'npc', or 'room'. */
  objectType: 'building'
  /** The type of building- 'castle', 'townSquare', 'generalStore', etc. */
  type: string
  passageName?: string
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

export interface Building extends Structure {
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

export interface BuildingRelationship {
  key: string
  buildingKey: string
  npcKey: string
  relationship: string
  reciprocalRelationship: string
  description: string | null
}
