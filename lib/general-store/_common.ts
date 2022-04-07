import { BuildingRollsDefault } from '../buildings/_common'
import { NPC } from '../npc-generation/_common'

export interface GeneralStoreRolls extends BuildingRollsDefault {
  activity: number
  warmth: number
}

export interface GeneralStore {
  name: string
  associatedNPC: NPC
  assistant?: NPC
  roll: GeneralStoreRolls
  size: string
  warmth: string
  cleanliness: string
  expertise: string
  activity: string
  priceModifier: number
}
