import { NPC } from '../npc-generation/_common'
import { Town } from '../town/_common'
import { Faction } from '../faction/_common'
import { Building } from './_common'
import { findReciprocalRelationships } from './findReciprocalRelationships'

export function deleteReciprocalRelationship (town: Town, building: Building | Faction | null, npc: NPC | null) {
  const relationships = findReciprocalRelationships(town, building, npc, 'building')

  for (const relationship of relationships) {
    const index = town.buildingRelations.findIndex(({ key }) => {
      return relationship.key === key
    })

    if (index) town.buildingRelations.splice(index, 1)

    const factionIndex = town.factionRelations.findIndex(({ key }) => {
      return relationship.key === key
    })

    if (factionIndex) town.factionRelations.splice(factionIndex, 1)
  }
}
