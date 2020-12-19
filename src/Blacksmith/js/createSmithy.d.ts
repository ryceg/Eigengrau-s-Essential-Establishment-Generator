import { Building } from '../../../lib/buildings/_common'
import { NPC } from '../../../lib/npc-generation/_common'

interface Setup {
  createSmithy(town: Town, opts?: Partial<Options>): Smithy
}

interface Options {
  newBuilding(town: Town, type?: string): Building
  npc: Partial<NPC>
}

export interface Smithy extends Building {
  associatedNPC: NPC
  wordNoun: string
  passageName: string
  initPassage: string
  buildingType: string
  weapons: string[]
  mundane: string[]
}
