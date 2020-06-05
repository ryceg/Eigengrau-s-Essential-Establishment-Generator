interface Setup {
  breakGenderNorms(town: Town, npc: NPC): boolean
  isDominantGender(town: Town, npc: NPC): boolean
  checkProfessionGender(town: Town, professionString: string): any
  initSexistProfession(town: Town, npc: NPC): NPC
}
