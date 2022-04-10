import { Building } from '../buildings/_common'
import { NPC } from '../npc-generation/_common'

export interface Docks extends Building {
  buildingType: 'docks'
  notableFeature: string
  notice: string
  associatedNPC: NPC
  wordNoun: string
  ships: Record<string, Ship>
}

export interface Ship {
  name: string
  type: string
  captainType: string
  hull: string
  detail: string
  event: string
  roll: {
    size: number
    cleanliness: number
  }
  captain: NPC
  size: string
  cleanliness: string
}
