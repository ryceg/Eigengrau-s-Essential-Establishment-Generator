import { NPC } from '../npc-generation/_common'

export interface Building {
  key: string
  passageName?: string
  parentKey?: string
  objectType: string
  isChild?: boolean
  type: string
  name?: string
  wordNoun?: string
  associatedNPC?: NPC
  structure?: BuildingStructure
  roll: BuildingRolls
  priceModifier?: number
  wealth?: string
  size?: string
  activity?: string
  roughness?: string
  sin?: string
  cleanliness?: string
  diversity?: string
  reputation?: string
  material: {
    noun: string
    probability: number
  }
  tippyDescription?: string
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
  wealth: number
  cleanliness: number
  size: number
  landSize?: number
  age?: number
  condition?: number
  activity?: number
  diversity?: number
  expertise?: number
  magic?: number
  population?: number
  reputation?: number
  roughness?: number
  sin?: number
}

export interface BuildingRelationship {
  key: string
  buildingKey: string
  npcKey: string
  relationship: string
  reciprocalRelationship: string
  description: string | null
}
