import { NPC } from '@lib'

/**
 * Uses State.variables.npcs
 */
export const deleteNPC = (npc: string | NPC) => {
  if (!npc) return
  console.log('Deleting NPC!', npc)

  if (typeof npc === 'string') {
    npc = State.variables.npcs[npc]
  }

  deleteRelations(npc)

  delete State.variables.npcs[npc.key]
}

/**
 * Uses State.variables.npcs
 */
export const deleteThrowawayNPCs = () => {
  const npcs = Object.values(State.variables.npcs)

  for (const npc of npcs) {
    if (npc.isThrowaway === true) {
      deleteNPC(npc)
    }
  }
}

function removeForeignRelations (npc: NPC) {
  const town = State.variables.town

  const npcsWithRelationshipsToNpc = town.npcRelations[npc.key].map(r => r.targetNpcKey)
  for (const npcWRTN in npcsWithRelationshipsToNpc) {
    const relations = town.npcRelations[npcWRTN]
    if (relations) {
      removeFromArray(relations, r => r.targetNpcKey === npc.key)
    }
  }
}

function removeFromArray<T> (array: T[], predicate: (value: T, index: number, array: T[]) => boolean) {
  array.splice(array.findIndex(predicate), 1)
}

function deleteOwnRelations (npc: NPC) {
  delete State.variables.town.npcRelations[npc.key]
}

function deleteRelations (npc: NPC) {
  if (State.variables.town.npcRelations[npc.key]) {
    removeForeignRelations(npc)
  }
  deleteOwnRelations(npc)
}
