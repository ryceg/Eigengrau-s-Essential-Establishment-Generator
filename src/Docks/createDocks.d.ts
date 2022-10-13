import { Town, Docks, Building, NPC } from '@lib'

interface Setup {
  createDocks(town: Town, opts?: Partial<Options>): Docks
}

interface Options {
  newBuilding(town: Town, type?: string): Building
  npc: Partial<NPC>
}
