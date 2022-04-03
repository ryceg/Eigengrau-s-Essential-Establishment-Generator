import { Building, NPC } from '@lib'

export interface Customer {
  relationshipDescription: string
  relationships: {
    building: {
      relationship: string
      reciprocalRelationship?: string
    }
    associatedNPC: {
      relationship: string
      reciprocalRelationship?: string
    }
  }
  base?: Partial<NPC>
  description(brothel: Building, npc: NPC): string
}
