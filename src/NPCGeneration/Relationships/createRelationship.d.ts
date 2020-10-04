interface Setup {
  /**
   * Creates a relationship between two NPCs.
   */
  createRelationship(town: Town, npc: string | NPC, targetNPC: string | NPC, type: Type, targetType: string): void
}

type Type = string | {
  relationship: string
  reciprocalRelationship?: string
}
