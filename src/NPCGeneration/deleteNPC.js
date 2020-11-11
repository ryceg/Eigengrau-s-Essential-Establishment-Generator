setup.deleteNPC = npc => {
  if (!npc) return
  console.log('Deleting NPC!', npc)

  if (typeof npc === 'string') {
    npc = State.variables.npcs[npc]
  }

  deleteRelations(npc)

  delete State.variables.npcs[npc.key]
}

setup.deleteThrowawayNPCs = () => {
  const npcs = Object.values(State.variables.npcs)

  for (const npc of npcs) {
    if (npc.isThrowaway === true) {
      setup.deleteNPC(npc)
    }
  }
}

function removeForeignRelations (npc) {
  const town = State.variables.town

  const npcsWithRelationshipsToNpc = town.npcRelations[npc.key].map(r => r.targetNpcKey)
  for (const npcWRTN in npcsWithRelationshipsToNpc) {
    if (town.npcRelations[npcWRTN]) {
      const index = town.npcRelations[npcWRTN].map(r => r.targetNpcKey).indexOf(npc)
      town.npcRelations[npcWRTN].splice(index, 1)
    }
  }
}

function deleteOwnRelations (npc) {
  delete State.variables.town.npcRelations[npc.key]
}

function deleteRelations (npc) {
  if (State.variables.town.npcRelations[npc.key]) removeForeignRelations(npc)
  deleteOwnRelations(npc)
}
