import { logger } from '../logger'
import { Town } from '../town/_common'
import { NPC } from './_common'

/**
 *
 * @param town The $town State.variables object
 * @param npcs The $npcs State.variables object
 * @param npc1 The key of the NPC
 * @param npc2 The key of the NPC
 */
export const swapNPCs = (town: Town, npcs: Record<string, NPC>, npc1: string, npc2: string) => {
  if (!npcs[npc1]) logger.error(`Error! ${npc1} doesn't exist on $npcs`)
  if (!npcs[npc2]) logger.error(`Error! ${npc2} doesn't exist on $npcs`)
  const npcRelations1 = town.npcRelations[npc1]
  const npcRelations2 = town.npcRelations[npc2]
  if (npcRelations2) {
    town.npcRelations[npc2] = npcRelations1
  }
  if (npcRelations1) {
    town.npcRelations[npc1] = npcRelations2
  }
}
