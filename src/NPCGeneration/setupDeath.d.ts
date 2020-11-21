import { NPC } from '../../lib/npc-generation/_common'
import { Town } from '../../lib/town/_common'

interface Setup {
  createDeadNPC(town: Town, base: Partial<NPC>): NPC
  npcDeath(town: Town, npc: NPC, base: Partial<NPC>): NPC
}

export type DeathData = {
  whileAdventuring(town: Town, npc: NPC, text: string): string
  cause: CauseOfDeath[]
  burialConditions(town: Town, npc: NPC, base: Partial<NPC>): NPC
  bodyCondition: [number, string][]
}

interface CauseOfDeath {
  probability?: number
  exclusions(town: Town, npc: NPC): boolean
  function(town: Town, npc: NPC): string
}
