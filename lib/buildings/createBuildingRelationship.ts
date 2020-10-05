import { NPC } from '../npc-generation/_common'
import { assign, getUUID } from '../src/utils'
import { Town } from '../town/_common'
import { Building, BuildingRelationship } from './_common'

interface Options {
  relationship: string
  reciprocalRelationship: string
  description?: string | ((building: Building, npc: NPC) => string)
}

export function createBuildingRelationship (town: Town, building: Building, npc: NPC, options: Options) {
  if (!building || !npc || !options) {
    console.error('Not enough parameters passed.')
  }

  const isBetweenSameBuildingAndNPC = (relation: BuildingRelationship) => {
    return relation.buildingKey === building.key && relation.npcKey === npc.key
  }

  const getDescription = () => {
    if (typeof options.description === 'function') {
      return options.description(building, npc)
    }
    return options.description || null
  }

  // If there is already an existing relationship between the two,
  // test to see if the relationship needs updating.
  for (const relation of town.buildingRelations) {
    if (isBetweenSameBuildingAndNPC(relation)) {
      assign(relation, {
        relationship: options.relationship,
        reciprocalRelationship: options.reciprocalRelationship,
        description: getDescription()
      })
      return
    }
  }

  town.buildingRelations.push({
    key: getUUID(),
    buildingKey: building.key,
    npcKey: npc.key,
    relationship: options.relationship,
    reciprocalRelationship: options.reciprocalRelationship,
    description: getDescription()
  })
}
