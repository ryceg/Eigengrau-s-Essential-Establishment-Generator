interface Setup {
  breakGenderNorms(town: Town, npc: NPC): boolean
  isDominantGender(town: Town, npc: NPC): boolean
  initSexistProfession(town: Town, npc: NPC): NPC
}
