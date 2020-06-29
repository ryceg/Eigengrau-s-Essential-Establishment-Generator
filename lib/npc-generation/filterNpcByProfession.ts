import { NPC } from './_common'

export function filterNpcByProfession (npcs: Record<string, NPC>, profession: string) {
  return Object.values(npcs).filter(npc => {
    return npc.profession === profession
  })
}
