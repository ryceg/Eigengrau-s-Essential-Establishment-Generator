type Town = import('../lib/town/_common').Town
type NPC = import('../lib/npc-generation/_common').NPC

interface Setup {
  init(): void
  initMisc(): void
  npcTaxRate(town: Town, npc: NPC): number
  profile(obj: any, base?: string, type?: string): string
  createClass(town: Town, npc: NPC): void
  createFamily(town: Town, npc: NPC): void
  expandFamily(town: Town, npc: NPC): void
  createParentage(town: Town, family: Family, npc: NPC, forceFather: boolean, forceMother: boolean): void
  createRelative(town: Town, family: Family, base: Partial<NPC>, force: boolean): NPC

  fetchFamily(town: Town, npc: NPC): Family
  createMarriage(town: Town, family: Family, npc: NPC, force: boolean): Marriage
  createChildren(town: Town, family: Family, marriage: Marriage, amount: number, motherRace: string, fatherRace: string, force: boolean)
  familyData: FamilyData

  createHistory(town: Town, npc: NPC): void
  createLifeEvents(town: Town, npc: NPC): void
  createName(parameters: CreateNameParameters): string
  createSocialClass(town: Town, npc: NPC): void
  firstCharacter(word: string): string

  npcLifestyleStandard(town: Town, npc: NPC): any
  npcTotalLifestyleExpenses(town: Town, npc: NPC): number
  npcProfit(town: Town, npc: NPC): number
  npcLifestyleExpenses(town: Town, npc: NPC): number
  npcGrossIncome(town: Town, npc: NPC): number
  npcNetIncome(town: Town, npc: NPC): number
  npcDeath(town: Town, npc: NPC, base?: Partial<NPC>): NPC
  createDeadNPC(town: Town, base?: Partial<NPC>): NPC
  expandNPC(town: Town, npc: NPC)
  checkRaces(town: Town, npcs: Record<string, NPC>)

  createStartBuildings(town: Town): any
  createStartFactions(town: Town): any
  createBrothel(town: Town): Building
  findPoliceSource(town: Town): any
  makePolice(town: Town, faction: Faction): void
  getTownType(town: Town): string
  createTownName(): string
  townDemographics(town: Town): void
  updateDemographics(town: Town, newDemographics: Record<RaceName, number>): void
}

interface FamilyData {
  absencePercent: number
  oldAbsencePercent: number
  veryOldAbsencePercent: number
  orphanPercent: number
  marriagePercent: number
  remarriagePercent: number
  parentStageTable: string[string[]]
  parentAge(npc: NPC): number
  siblingAge(npc: NPC): number
  childAge(npc: NPC): number
  partnerAge(npc: NPC): number
  siblingRoll(): number
  relativeBase: Partial<NPC>
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
