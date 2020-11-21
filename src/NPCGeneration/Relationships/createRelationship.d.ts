import { GenderName } from '../../../lib/index'
import { NPC } from '../../../lib/npc-generation/_common'

interface Setup {
  /**
   * Creates a relationship between two NPCs.
   */
  createRelationship(town: Town, sourceNPC: string | NPC, targetNPC: string | NPC, type: Type, targetType: string): void
}

type Type = string | {
  relationship: string
  reciprocalRelationship?: string
}

export type Kinsey = {
  sexuality: string
  partnerGenderProbability(npc: NPC): GenderName
}
