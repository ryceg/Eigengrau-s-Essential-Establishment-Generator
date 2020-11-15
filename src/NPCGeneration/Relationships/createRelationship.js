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

  const npcsToClean = []

  if (checkPreviousRelationships(town, sourceNPC, targetNPC)) {
    /* npc already had a valid partner; mark it for removal */
    npcsToClean.push({ source: sourceNPC.key, partner: targetNPC.key })
  }

  if (checkPreviousRelationships(town, targetNPC, sourceNPC)) {
    /* targetNpc already had a valid partner; mark it for removal */
    npcsToClean.push({ source: targetNPC.key, partner: sourceNPC.key })
  }

  /* Remove "old" partners first */
  for (const npc of npcsToClean) {
    const oldRelationship = town.npcRelations[npc.source].map(
      relationship => relationship.targetNpcKey
    ).indexOf(npc.partner)
    town.npcRelations[npc.source].splice(oldRelationship)
  }

  /* Create new relationship between these two */
  town.npcRelations[sourceNPC.key].push(buildRelationship(targetNPC, type))
  town.npcRelations[targetNPC.key].push(buildRelationship(sourceNPC, targetType))
}

function checkPreviousRelationships (town, sourceNPC, targetNPC) {
  town.npcRelations[sourceNPC]?.forEach(relation => {
    if (relation.targetNpcKey === targetNPC.key) {
      return true
    }
  })
  return false
}

function buildRelationship (targetNPC, type) {
  return {
    targetNpcKey: targetNPC.key,
    relation: type,
    description: null
  }
}
