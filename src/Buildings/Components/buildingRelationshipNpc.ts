// uses setup.createNPC, setup.createRelationship

import { Building, NPC, Town } from '@lib'

interface Args {
  /** this is the string that's fed to the function
   * @defaul _stringRelationship
   */
  targetKey: string
  base: any
  /** this is for if you're accessing a relationships object that has different names for the relationships */
  objectKey: string
  /** this is the discriminator for reciprocalRelationship / relationship */
  relationshipKey: string
}

export const createBuildingRelationshipNpc = (town: Town, building: Building, associatedNPC: NPC, relationshipTable: Record<string, any>[], args: Args) => {
  // args: {
  //   objectKey?: 'building' - this is for if you're accessing a relationships object that has different names for the relationships
  //   relationshipKey?: 'relationship' - this is the discriminator for reciprocalRelationship / relationship
  //   targetKey: string - this is the string that's fed to the function. Typically _stringRelationship.
  // }
  //
  console.log('Creating a new NPC for this building.')
  console.log(relationshipTable, args)
  lib.assign({
    base: {},
    objectKey: 'building',
    relationshipKey: 'relationship'
  }, args)
  console.log('1')
  // const relationship = lib.findInArray(relationshipTable, 'relationship', args.selectedRelationship)
  // const relationship = relationshipTable.find(obj => {
  //   return obj.relationships.relationshipDescription === args.targetKey
  //   // return obj.relationships[args.objectKey][args.relationshipKey] === args.targetKey
  // })
  // FIXME: Uses relationshipDescription instead of the [objectKey][relationshipKey] that it should.
  const relationship = lib.findInArray(relationshipTable, 'relationshipDescription', args.targetKey)

  const base: Partial<NPC> = {}
  console.log('2')
  console.log(relationship)
  if (relationship?.base) Object.assign(base, relationship.base, args.base)
  console.log('base', base)
  const npc = setup.createNPC(town, base)
  if (relationship?.relationships.associatedNPC) {
    setup.createRelationship(town, associatedNPC, npc, { relationship: relationship.relationships.associatedNPC.relationship, reciprocalRelationship: relationship.relationships.associatedNPC.reciprocalRelationship })
  }
  console.log('3')
  lib.createBuildingRelationship(town, building, npc, {
    description: relationship?.description(building, npc),
    relationship: relationship?.relationships.building.relationship,
    reciprocalRelationship: relationship?.relationships.building.reciprocalRelationship || relationship?.relationships.building.relationship
  })
  console.log('4')
  return npc
}
