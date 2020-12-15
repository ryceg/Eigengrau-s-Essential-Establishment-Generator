import { Building } from '../../../lib/buildings/_common'
import { NPC } from '../../../lib/npc-generation/_common'

interface Setup {
  createSmithy(town: Town, opts?: Partial<Smithy>): Smithy
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
