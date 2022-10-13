import { NPC } from '../npc-generation/_common'
import { Building } from './_common'

export interface BuildingToCreate {
  buildingType: string;
  opts?: Partial<{
    npc: Partial<NPC>
    building: Partial<Building>
  }>
}

export interface BuildingOpts {
    npc?: Partial<NPC>
    building?: Partial<Building>
}
