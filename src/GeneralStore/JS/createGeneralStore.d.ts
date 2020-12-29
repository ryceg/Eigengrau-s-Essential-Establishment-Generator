import { GeneralStore } from '../../../lib/general-store/_common'

interface Setup {
  createGeneralStore(town: Town, opts?: Partial<Options>): GeneralStore
}

interface Options {
  newBuilding(town: Town, type?: string): Building
  npc: Partial<NPC>
}
