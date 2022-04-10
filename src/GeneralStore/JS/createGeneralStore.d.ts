import { Town, GeneralStore, NPC, Building } from '@lib'

interface Setup {
  createGeneralStore(town: Town, opts?: Partial<Options>): GeneralStore
}

interface Options {
  newBuilding(town: Town, type?: string): Building
  npc: Partial<NPC>
}
