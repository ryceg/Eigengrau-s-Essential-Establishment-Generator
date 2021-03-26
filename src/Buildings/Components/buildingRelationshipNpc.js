// uses setup.createNPC, setup.createRelationship
/**
 *
 * @param {Town} town
 * @param {Building} building
 * @param {NPC} associatedNPC
 * @param {Record<string, any>[]} relationshipTable
 * @param {Record<string, any>} args
 */
setup.createBuildingRelationshipNpc = (town, building, associatedNPC, relationshipTable, args) => {
  // args: {
  //   objectKey?: 'building' - this is for if you're accessing a relationships object that has different names for the relationships
  //   relationshipKey?: 'relationship' - this is the discriminator for reciprocalRelationship / relationship
  //   targetKey: string - this is the string that's fed to the function. Typically _stringRelationship.
  // }
  //
  console.log('Creating a new NPC for this building.')
  console.log(relationshipTable, args)
  if (!args) args = {}
  if (typeof args === 'string') {
    const temp = args
    args = {
      targetKey: temp
    }
  }
  if (!args.base) args.base = {}
  if (!args.objectKey) args.objectKey = 'building'
  if (!args.relationshipKey) args.relationshipKey = 'relationship'
  // const relationship = lib.findInArray(relationshipTable, 'relationship', args.selectedRelationship)
  const index = relationshipTable.findIndex(obj => {
    return obj.relationships[args.objectKey][args.relationshipKey] === args.targetKey
  })
  const relationship = relationshipTable[index]
  if (relationship.base) Object.assign(args.base, relationship.base)
  const npc = setup.createNPC(town, args.base)
  if (relationship.relationships.associatedNPC) {
    setup.createRelationship(town, associatedNPC, npc, { relationship: relationship.relationships.associatedNPC.relationship, reciprocalRelationship: relationship.relationships.associatedNPC.reciprocalRelationship })
  }
  lib.createBuildingRelationship(town, building, npc, {
    description: relationship.description(building, npc),
    relationship: relationship.relationships.building.relationship,
    reciprocalRelationship: relationship.relationships.building.reciprocalRelationship || relationship.relationships.building.relationship
  })
  return npc
}
