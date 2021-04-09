import { Faction } from 'lib/faction/_common'
import { NPC } from '../npc-generation/_common'
import { Town } from '../town/_common'
import { Building, ReciprocalRelationship } from './_common'

/**
 * If supplied just the building, it finds the indexes of all relationships with the building as the otherKey
 *
 * If supplied the npc, it finds the indexes of all with the npc as the npcKey
 *
 * providing both will only find the index of that relationship
 */
export function findReciprocalRelationships (town: Town, entity: Building | Faction | null, npc: NPC | null, target: 'building' | 'faction' | 'both' = 'both') {
  console.groupCollapsed('findReciprocalRelationships')

  if (!town) {
    console.error('Not enough parameters passed.')
  }

  let pool: ReciprocalRelationship[] = []
  switch (target) {
    case 'building':
      pool = town.buildingRelations
      break
    case 'faction':
      pool = town.factionRelations
      break
    default:
      pool = town.buildingRelations.concat(town.factionRelations)
  }
  console.log('pool', pool)
  const foundRelationships = pool.filter(relation => {
    if (entity && npc) {
      return relation.otherKey === entity.key && relation.npcKey === npc.key
    }
    if (entity) {
      return relation.otherKey === entity.key
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

export function findIndexOfReciprocalRelationship (town: Town, entity: Building | Faction | null, npc: NPC | null) {
  const foundRelationshipsIndex = town.buildingRelations.concat(town.factionRelations).findIndex(relation => {
    if (entity && npc) {
      return relation.otherKey === entity.key && relation.npcKey === npc.key
    }
    if (entity) {
      return relation.otherKey === entity.key
    }
    if (npc) {
      return relation.npcKey === npc.key
    }
    return false
  })
  return foundRelationshipsIndex
}
