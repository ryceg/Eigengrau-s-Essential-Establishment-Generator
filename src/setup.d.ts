interface Setup {
  getMoralsData(npc: NPC): MoralsData[]
  npcTaxRate(town: Town, npc: NPC): number
  profile(obj: any, base?: string, type?: string): string
  setAsPartners(npc1: NPC, npc2: NPC): void
  createAge(npc: NPC): any
  isOfAge(ageStage, race, ageYears): boolean
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
  firstCharacter(word: Word): string

  guardData: any
  createGuard(town: Town): any

  townData: any
  updateSocioPolitics(town: Town): Town
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

interface MoralsData {
  name: string
  note: string
}

