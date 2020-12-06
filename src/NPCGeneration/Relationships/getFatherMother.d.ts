import { NPC } from '../../../lib/npc-generation/_common'
import { Town } from '../../../lib/town/_common'

interface Setup {
  getFatherMother(town: Town, npc: NPC): Parents
}

interface Parents {
  father?: NPC
  mother?: NPC
}
