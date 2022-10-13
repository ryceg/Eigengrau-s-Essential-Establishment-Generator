import { logger } from '../logger'
import { Faction } from '../faction/_common'
import { DeadNPC, Namesake, NPC } from '../npc-generation/_common'
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
    logger.error('Not enough parameters passed.')
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - This isn't going to be used outside of NPCs, so it doesn't matter that Namesakes aren't supported.
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
    otherKey: entity?.key,
    npcKey: npc?.key,
    relationship: options.relationship,
    reciprocalRelationship: options.reciprocalRelationship,
    description: getDescription()
  }
  // I'm not sure how I can narrow the typing to exclude Namesakes from it.
  if (typeof entity?.objectType !== 'undefined') {
    switch (entity.objectType) {
      case 'building':
        town.buildingRelations.push(finished)
        break
      case 'faction':
        town.factionRelations.push(finished)
    }
  }
}
