import type { Building, Town } from '@lib'
import { deleteNPC } from '../NPCGeneration/deleteNPC'

export const deleteBuilding = (town: Town, building: Building): void => {
  if (building.associatedNPC) {
    deleteNPC(building.associatedNPC)
  }
  lib.roads.deleteBuilding(town, town.roads[building.road], building)

  lib.removeFromArrayByPredicate(town.buildings, b => b.key === building.key)
}
