import { Building } from '../../../lib/buildings/_common'
import { GeneralStore } from '../../../lib/general-store/_common'
import { NPC } from '../../../lib/npc-generation/_common'
import { Town } from '../../../lib/town/_common'

interface Setup {
  createGeneralStore(town: Town, opts?: Partial<Options>): GeneralStore
}

interface Options {
  newBuilding(town: Town, type?: string): Building
  npc: Partial<NPC>
}
