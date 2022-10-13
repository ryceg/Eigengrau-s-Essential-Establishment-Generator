import { NPC } from './npc-generation/_common'

export interface Customer<Building> {
  relationshipDescription: string
  relationships: {
    building?: {
      relationship: string
      reciprocalRelationship?: string
    }
    associatedNPC?: {
      relationship: string
      reciprocalRelationship?: string
    }
  }
  base?: Partial<NPC>
  description(building: Building, npc: NPC): string
}
