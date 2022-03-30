import { Building, NPC } from '@lib'

interface BuildingWithNPC extends Building {
  associatedNPC: NPC
}

export function assertBuildingHasNPC (building: Building): asserts building is BuildingWithNPC {
  if (!building?.associatedNPC?.name) throw new Error('Building does not have an associated NPC!')
}
