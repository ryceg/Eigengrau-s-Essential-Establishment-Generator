setup.createRelationship = (town, npc, targetNPC, type, targetType) => {
  console.log('Forming a relationship.', npc, targetNPC)

  const npcs = State.variables.npcs

  if (typeof npc === 'string') {
    console.error('First npc was passed a string!')
    npc = State.variables.npcs[npc]
  }

  if (typeof targetNPC === 'string') {
    console.error('Second npc was passed a string!')
    targetNPC = State.variables.npcs[targetNPC]
  }

  if (typeof type === 'object') {
    targetType = type.reciprocalRelationship || type.relationship
    type = type.relationship
  }

  if (npc.key === targetNPC.key) {
    console.error('Tried to make a relationship with the same NPC.')
    return
  }

  const npcsToClean = []
  if (npc.relationships[targetNPC.key] && npcs[npc.relationships[targetNPC.key]]) {
    /* npc already had a valid partner; mark it for removal */
    npcsToClean.push(npcs[targetNPC.key])
  }
  if (targetNPC.relationships[npc.key] && npcs[targetNPC.relationships[npc.key]]) {
    /* targetNPC already had a valid partner; mark it for removal */
    npcsToClean.push(npcs[targetNPC.relationships[npc.key]])
  }

  /* Remove "old" partners first */
  for (const n of npcsToClean) {
    n.relationships[npc.key] = ''
    n.relationships[targetNPC.key] = ''
  }

  /* Link the two */
  npc.relationships[targetNPC.key] = type
  targetNPC.relationships[npc.key] = targetType
  console.log(`${npc.name} is ${lib.articles.output(type)} to ${targetNPC.name}`)
  console.log(`${targetNPC.name} is ${lib.articles.output(targetType)} to ${npc.name}`)
}
