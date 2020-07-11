interface Setup {
  init(): void
  npcTaxRate(town: Town, npc: NPC): number
  profile(obj: any, base?: string, type?: string): string
  createBackground(npc: NPC): any
  createClass(town: Town, npc: NPC): any
  createFamily(town: Town, npc: NPC): void
  expandFamily(town: Town, npc: NPC): void
  fetchFamily(town: Town, npc: NPC): Record<string, any>
  createHistory(town: Town, npc: NPC): any
  createLifeEvents(town: Town, npc: NPC): any
  createName(parameters: CreateNameParameters): string
  createNPC(town: Town, base?: Partial<NPC>): NPC
  createSocialClass(town: Town, npc: NPC): any
  firstCharacter(word: string): string

  createGuard(town: Town): any
}

interface Town {
  [key: string]: any
}

interface NPC {
  [key: string]: any
}

interface CreateNameParameters {
  race?: string
  gender?: string
  firstOrLast?: string
}
