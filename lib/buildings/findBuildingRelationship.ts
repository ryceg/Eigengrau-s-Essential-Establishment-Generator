import { NPC } from '../npc-generation/_common'
import { Town } from '../town/_common'
import { Building } from './_common'

/**
 * If supplied just the building, it finds the indexes of all relationships with the building as the buildingKey
 * If supplied the npc, it finds the indexes of all with the npc as the npcKey
 * providing both will only find the index of that relationship
 */
export function findBuildingRelationship (town: Town, building: Building | null, npc: NPC | null) {
  console.groupCollapsed('findBuildingRelationship')

  if (!town) {
    console.error('Not enough parameters passed.')
  }

  const foundRelationships = town.buildingRelations.filter(relation => {
    if (building && npc) {
      return relation.buildingKey === building.key && relation.npcKey === npc.key
    }
    if (building) {
      return relation.buildingKey === building.key
    }
    if (npc) {
      return relation.npcKey === npc.key
    }
    return false
  })

  console.log('array', foundRelationships)
  console.groupEnd()

  return foundRelationships
}

export function findIndexOfBuildingRelationship (town: Town, building: Building | null, npc: NPC | null) {
  const foundRelationshipsIndex = town.buildingRelations.findIndex(relation => {
    if (building && npc) {
      return relation.buildingKey === building.key && relation.npcKey === npc.key
    }
    if (building) {
      return relation.buildingKey === building.key
    }
    if (npc) {
      return relation.npcKey === npc.key
    }
    return false
  })
  return foundRelationshipsIndex
}
