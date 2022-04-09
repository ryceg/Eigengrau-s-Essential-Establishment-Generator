// uses setup.createNPC, setup.createRelationship

import { Building, NPC, Town } from '@lib'

interface Args {
  /** this is the string that's fed to the function
   * @default _stringRelationship
   */
  targetKey: string
  base: Partial<NPC>
  /**
   * this is for if you're accessing a relationships object that has different names for the relationships
   * @default 'building'
   */
  objectKey: string
  /**
   * this is the discriminator for reciprocalRelationship / relationship
   * @default 'relationship'
  */
  relationshipKey: string
}

export const createReciprocalRelationshipNpc = (
  town: Town,
  building: Building,
  associatedNPC: NPC,
  relationshipTable: Record<string, any>[],
  args: Args) => {
  lib.logger.info('Creating a new NPC for this building.')
  lib.logger.info(relationshipTable, args, associatedNPC)
  Object.assign({
    base: {},
    objectKey: 'building',
    relationshipKey: 'relationship'
  }, args)
  // const relationship = lib.findInArray(relationshipTable, 'relationship', args.selectedRelationship)
  // const relationship = relationshipTable.find(obj => {
  //   return obj.relationships.relationshipDescription === args.targetKey
  //   // return obj.relationships[args.objectKey][args.relationshipKey] === args.targetKey
  // })
  // FIXME: Uses relationshipDescription instead of the [objectKey][relationshipKey] that it should.
  const relationship = lib.findInArray(relationshipTable, 'relationshipDescription', args.targetKey)

  let base: Partial<NPC> = {}
  if (relationship?.base) base = Object.assign(base, relationship.base, args?.base)
  const npc = setup.createNPC(town, base)
  if (relationship?.relationships?.associatedNPC) {
    setup.createRelationship(town, associatedNPC, npc, {
      relationship: relationship.relationships.associatedNPC.relationship,
      reciprocalRelationship: relationship.relationships.associatedNPC.reciprocalRelationship
    })
  }
  lib.createReciprocalRelationship(town, building, npc, {
    description: relationship?.description(building, npc) || relationship?.relationships.building.relationship,
    relationship: relationship?.relationships.building.relationship,
    reciprocalRelationship: relationship?.relationships.building.reciprocalRelationship || relationship?.relationships.building.relationship
  })
  return npc
}
