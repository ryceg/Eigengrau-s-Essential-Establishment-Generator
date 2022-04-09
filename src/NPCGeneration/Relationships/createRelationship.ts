import type { NPC, Town } from '@lib'

type RelationshipType = {
  relationship: string
  reciprocalRelationship?: string
  description?: string
}

/**
 * Uses State.variables.npcs
 */
export const createRelationship = (town: Town, sourceNPC: NPC, targetNPC: NPC, type: RelationshipType): void => {
  lib.logger.info('Forming a relationship.', sourceNPC, targetNPC)
  const { npcs } = State.variables

  if (typeof sourceNPC === 'string') {
    lib.logger.error('First npc was passed a string!')
    sourceNPC = npcs[sourceNPC]
  }

  if (typeof targetNPC === 'string') {
    lib.logger.error('Second npc was passed a string!')
    targetNPC = npcs[targetNPC]
  }

  if (!type.reciprocalRelationship) type.reciprocalRelationship = type.relationship

  if (sourceNPC.key === targetNPC.key) {
    lib.logger.error('Tried to make a relationship with the same NPC.')
    return
  }

  const npcsToClean: { source: string, partner: string }[] = []

  if (checkPreviousRelationships(town, sourceNPC, targetNPC)) {
    /* npc already had a valid partner; mark it for removal */
    npcsToClean.push({ source: sourceNPC.key, partner: targetNPC.key })
  }

  if (checkPreviousRelationships(town, targetNPC, sourceNPC)) {
    /* targetNpc already had a valid partner; mark it for removal */
    npcsToClean.push({ source: targetNPC.key, partner: sourceNPC.key })
  }

  const { npcRelations } = town

  /* Remove "old" partners first */
  for (const npc of npcsToClean) {
    const oldRelationship = npcRelations[npc.source].map(relationship => relationship.targetNpcKey)
    npcRelations[npc.source].splice(oldRelationship.indexOf(npc.partner))
  }

  /* Create new relationship between these two */
  npcRelations[sourceNPC.key].push(buildRelationship(targetNPC, type.relationship, type.description))
  npcRelations[targetNPC.key].push(buildRelationship(sourceNPC, type.reciprocalRelationship, type.description))
}

function checkPreviousRelationships (town: Town, sourceNPC: NPC, targetNPC: NPC) {
  return town.npcRelations[sourceNPC.key]?.some(relation => {
    return relation.targetNpcKey === targetNPC.key
  })
}

function buildRelationship (targetNPC: NPC, type: string, description?: string) {
  return {
    targetNpcKey: targetNPC.key,
    relation: type,
    description: description || null
  }
}
