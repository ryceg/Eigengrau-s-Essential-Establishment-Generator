import { Weather } from '../lib/index'
import { Town } from '../lib/town/_common'

type NPC = import('../lib/npc-generation/_common').NPC

export interface Setup {
  renderWeather(town: Town, biome: string, weather: Weather): void
  createWeather(town: Town, biome: string, weather: Weather): Weather
  toCelsius(temperature: number);
  init(): void
  initMisc(): void
  npcTaxRate(town: Town, npc: NPC): number
  profile(obj: NPC | Building | Faction, base?: string, type?: string): string
  createClass(town: Town, npc: NPC): void
  createFamily(town: Town, npc: NPC): void
  expandFamily(town: Town, npc: NPC): void
  createParentage(town: Town, family: Family, npc: NPC, forceFather?: boolean, forceMother?: boolean): void
  createRelative(town: Town, family: Family, base: Partial<NPC>, force?: boolean): NPC

  fetchFamily(town: Town, npc: NPC): Family
  createMarriage(town: Town, family: Family, npc: NPC, force?: boolean): Marriage

  createHistory(town: Town, npc: NPC): void
  createLifeEvents(town: Town, npc: NPC): void
  createName(parameters: CreateNameParameters): string
  createSocialClass(town: Town, npc: NPC): void
  firstCharacter(word: string): string

  npcDeath(town: Town, npc: NPC, base?: Partial<NPC>): NPC
  createDeadNPC(town: Town, base?: Partial<NPC>): NPC
  expandNPC(town: Town, npc: NPC)
  checkRaces(town: Town, npcs: Record<string, NPC>)

  createStartBuildings(town: Town): void
  createStartFactions(town: Town): void
  createBrothel(town: Town): Building
  createCastle(town: Town): Building
  findPoliceSource(town: Town): void
  makePolice(town: Town, faction: Faction): void
  getTownType(town: Town): string
  createTownName(town: Town): string
}

export interface CreateNameParameters {
  race?: string
  gender?: string
  firstOrLast?: string
}

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
  description(brothel: Building, npc: NPC)
}

export interface History {
  data: {
    key: string
    passageName: string
    objectType: string
    linkDescription: string
  },
  passageName: string,
  linkDescription: string
}
