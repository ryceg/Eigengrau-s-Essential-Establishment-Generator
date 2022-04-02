import { DeadNPC } from 'src/NPCGeneration/setupDeath'
import { Faction } from '../faction/_common'
import { Namesake, NPC } from '../npc-generation/_common'
import { assign, getUUID } from '../src/utils'
import { Town } from '../town/_common'
import { Building, ReciprocalRelationship } from './_common'

interface Options {
  relationship: string
  reciprocalRelationship: string
  description?: string | ((entity: Entity, npc: NPC) => string)
}

type Entity = Building | Faction | NPC | Namesake | DeadNPC

export function createReciprocalRelationship (town: Town, entity: Entity, npc: Entity, options: Options) {
  if (!entity || !npc || !options) {
    console.error('Not enough parameters passed.')
  }

  const isBetweenSameEntityAndNPC = (relation: ReciprocalRelationship) => {
    return relation.otherKey === entity.key && relation.npcKey === npc.key
  }

  const updateRelation = (relation: ReciprocalRelationship) => {
    if (isBetweenSameEntityAndNPC(relation)) {
      assign(relation, {
        relationship: options.relationship,
        reciprocalRelationship: options.reciprocalRelationship,
        description: getDescription()
      })
    }
  }

  const getDescription = () => {
    if (typeof options.description === 'function') {
      return options.description(entity, npc)
    }
    return options.description || null
  }

  // If there is already an existing relationship between the two,
  // test to see if the relationship needs updating.
  for (const relation of town.buildingRelations.concat(town.buildingRelations)) {
    updateRelation(relation)
  }

  const finished = {
    key: getUUID(),
    otherKey: entity.key,
    npcKey: npc.key,
    relationship: options.relationship,
    reciprocalRelationship: options.reciprocalRelationship,
    description: getDescription()
  }
  if (entity.objectType === 'building') {
    town.buildingRelations.push(finished)
  } else if (entity.objectType === 'faction') {
    town.factionRelations.push(finished)
  }
}
