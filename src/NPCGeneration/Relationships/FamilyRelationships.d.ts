interface Setup {
  familyRelationships: {
    nouns: Record<string, string>
    verbose(key: string): string
    inverse(npc: NPC, key: string): string
  }
  knewParents(town: Town, npc: NPC): boolean
  getMarriages(town: Town, npc: NPC): any
  getFatherMother(town: Town, npc: NPC): any
}
