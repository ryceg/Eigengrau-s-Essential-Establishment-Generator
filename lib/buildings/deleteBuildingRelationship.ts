import { NPC } from '../npc-generation/_common'
import { Town } from '../town/_common'
import { Building } from './_common'
import { findBuildingRelationship } from './findBuildingRelationship'

export function deleteBuildingRelationship (town: Town, building: Building | null, npc: NPC | null) {
  const relationships = findBuildingRelationship(town, building, npc)

  for (const relationship of relationships) {
    const index = town.buildingRelations.findIndex(({ key }) => {
      return relationship.key === key
    })

    town.buildingRelations.splice(index, 1)
  }
}
