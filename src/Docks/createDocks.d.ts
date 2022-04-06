import { Building } from '../../lib/buildings/_common'
import { NPC } from '../../lib/npc-generation/_common'
import { Town } from '../../lib/town/_common'
import { Docks } from '../../lib/docks/_common'

interface Setup {
  createDocks(town: Town, opts?: Partial<Options>): Docks
}

interface Options {
  newBuilding(town: Town, type?: string): Building
  npc: Partial<NPC>
}
