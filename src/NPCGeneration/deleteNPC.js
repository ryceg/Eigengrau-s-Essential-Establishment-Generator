setup.deleteNPC = npc => {
  if (!npc) return
  console.log('Deleting NPC!', npc)

  if (typeof npc === 'string') {
    npc = State.variables.npcs[npc]
  }

  const relationships = Object.keys(npc.relationships)

  for (const relationship of relationships) {
    delete State.variables.npcs[relationship].relationships[npc.key]
  }

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
