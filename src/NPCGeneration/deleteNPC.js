setup.deleteNPC = function (npc) {
  if (!npc) return
  console.log('Deleting NPC!')
  console.log(npc)

  if (typeof npc === 'number') {
    npc = State.variables.npcs[npc]
  }
  const relationships = Object.keys(npc.relationships)
  for (const relationship of relationships) {
    console.log(relationship)
    delete State.variables.npcs[relationship].relationships[npc.key]
  }
  delete State.variables.npcs[npc.key]
}
