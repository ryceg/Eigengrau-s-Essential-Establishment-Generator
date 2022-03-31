import { BuildingRollsDefault } from '../buildings/_common'
import { NPC } from '../npc-generation/_common'

export interface GeneralStore {
  name: string
  associatedNPC: NPC
  assistant?: NPC
  roll: BuildingRollsDefault & {
    activity: number
    expertise: number
    reputation: number
    sin: number
    warmth: number
    cleanliness: number
  }
  size: string
  warmth: string
  cleanliness: string
  expertise: string
  activity: string
  priceModifier: number
}
