import { NPC } from '../npc-generation/_common'

export interface GeneralStore {
  name: string
  associatedNPC: NPC

  roll: {
    sin: number
    size: number
    wealth: number
    roughness: number
    population: number
    reputation: number
    warmth: number
    cleanliness: number
    expertise: number
    activity: number
  }
  size: string
  warmth: string
  cleanliness: string
  expertise: string
  activity: string
  priceModifier: number
}
