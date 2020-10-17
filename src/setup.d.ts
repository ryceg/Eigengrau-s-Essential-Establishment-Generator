type Town = import('../lib/town/_common').Town
type NPC = import('../lib/npc-generation/_common').NPC

interface Setup {
  init(): void
  npcTaxRate(town: Town, npc: NPC): number
  profile(obj: any, base?: string, type?: string): string
  createClass(town: Town, npc: NPC): void
  createFamily(town: Town, npc: NPC): void
  expandFamily(town: Town, npc: NPC): void
  fetchFamily(town: Town, npc: NPC): Record<string, any>
  createHistory(town: Town, npc: NPC): void
  createLifeEvents(town: Town, npc: NPC): void
  createName(parameters: CreateNameParameters): string
  createNPC(town: Town, base?: Partial<NPC>): NPC
  createSocialClass(town: Town, npc: NPC): void
  firstCharacter(word: string): string

  npcLifestyleStandard(town: Town, npc: NPC): any
  npcTotalLifestyleExpenses(town: Town, npc: NPC): number
  npcProfit(town: Town, npc: NPC): number
  npcLifestyleExpenses(town: Town, npc: NPC): number
  npcGrossIncome(town: Town, npc: NPC): number
  npcNetIncome(town: Town, npc: NPC): number
  npcDeath(town: Town, npc: NPC, base?: Partial<NPC>)
  createDeadNPC(town: Town, base?: Partial<NPC>)
  expandNPC(town: Town, npc: NPC)
  checkRaces(town: Town, npcs: Record<string, NPC>)

  createStartBuildings(town: Town): any
  createStartFactions(town: Town): any
  findPoliceSource(town: Town): any
  getTownType(town: Town): string
  createTownName(): string
}

interface CreateNameParameters {
  race?: string
  gender?: string
  firstOrLast?: string
}

interface Customer {
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
  description(brothel: Building, npc: NPC)
}
