import { Building, BuildingRolls } from '../buildings/_common'
import { NPC } from '../npc-generation/_common'

export interface Tavern extends Building {
  barmaid: NPC
  draw: string
  roll: BuildingRolls & {
    bedCleanliness: number
    roughness: number
    reputation: number
    sin: number
    activity: number
  }
  priceModifier: number
  lodging: number
  stageDescriptor: string
  colour1: string
  colour2: string
}
