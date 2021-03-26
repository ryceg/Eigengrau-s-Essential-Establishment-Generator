import { Building, BuildingRolls, BuildingStructure } from '../buildings/_common'
import { NPC } from '../npc-generation/_common'

export interface Tavern extends Building {
  barmaid: NPC
  associatedNPC: NPC
  draw: string
  roll: BuildingRolls & {
    bedCleanliness: number
    roughness: number
    reputation: number
    sin: number
    activity: number
  }
  size: string
  priceModifier: number
  lodging: number
  stageDescriptor: string
  entertainment: string
  colour1: string
  colour2: string
  structure: BuildingStructure
}
