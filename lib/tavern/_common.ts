import { Building, BuildingRollsDefault, BuildingStructure } from '../buildings/_common'
import { NPC } from '../npc-generation/_common'

export interface TavernRolls extends BuildingRollsDefault {
  bedCleanliness: number
}

export interface Tavern extends Building {
  barmaid: NPC
  associatedNPC: NPC
  tavernType: string
  draw: string
  roll: TavernRolls
  size: string
  priceModifier: number
  lodging: number
  lighting: string
  stageDescriptor: string
  entertainment: string
  colour1: string
  colour2: string
  structure: BuildingStructure
}
