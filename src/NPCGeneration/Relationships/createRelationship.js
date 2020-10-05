setup.createRelationship = (town, sourceNPC, targetNPC, type, targetType) => {
  console.log('Forming a relationship.', sourceNPC, targetNPC)

  const { npcs } = State.variables

  if (typeof sourceNPC === 'string') {
    console.error('First npc was passed a string!')
    sourceNPC = npcs[sourceNPC]
  }

  if (typeof targetNPC === 'string') {
    console.error('Second npc was passed a string!')
    targetNPC = npcs[targetNPC]
  }

  if (typeof type === 'object') {
    targetType = type.reciprocalRelationship || type.relationship
    type = type.relationship
  }

  if (sourceNPC.key === targetNPC.key) {
    console.error('Tried to make a relationship with the same NPC.')
    return
  }

  /** @type {NPC[]} */
  const npcsToClean = []

  if (sourceNPC.relationships[targetNPC.key] && npcs[sourceNPC.relationships[targetNPC.key]]) {
    /* npc already had a valid partner; mark it for removal */
    npcsToClean.push(npcs[targetNPC.key])
  }
  if (targetNPC.relationships[sourceNPC.key] && npcs[targetNPC.relationships[sourceNPC.key]]) {
    /* targetNPC already had a valid partner; mark it for removal */
    npcsToClean.push(npcs[targetNPC.relationships[sourceNPC.key]])
  }

  /* Remove "old" partners first */
  for (const n of npcsToClean) {
    n.relationships[sourceNPC.key] = ''
    n.relationships[targetNPC.key] = ''
  }

  /* Link the two */
  sourceNPC.relationships[targetNPC.key] = type
  targetNPC.relationships[sourceNPC.key] = targetType
  console.log(`${sourceNPC.name} is ${lib.articles.output(type)} to ${targetNPC.name}`)
  console.log(`${targetNPC.name} is ${lib.articles.output(targetType)} to ${sourceNPC.name}`)
}
