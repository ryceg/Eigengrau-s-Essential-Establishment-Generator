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
  console.log('1')
  const index = relationshipTable.findIndex(obj => {
    return obj.relationships[args.objectKey][args.relationshipKey] === args.targetKey
  })
  console.log('2')
  const relationship = relationshipTable[index]
  if (relationship.base) Object.assign(args.base, relationship.base)
  const npc = setup.createNPC(town, args.base)
  console.log('3')
  if (relationship.relationships.associatedNPC) {
    setup.createRelationship(town, associatedNPC, npc, relationship.relationships.associatedNPC.relationship, relationship.relationships.associatedNPC.reciprocalRelationship)
  }
  console.log('4')
  lib.createBuildingRelationship(town, building, npc, {
    description: relationship.description(building, npc),
    relationship: relationship.relationships.building.relationship,
    reciprocalRelationship: relationship.relationships.building.reciprocalRelationship || relationship.relationships.building.relationship
  })
  console.log('5')
  return npc
}
