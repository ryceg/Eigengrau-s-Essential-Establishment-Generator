import { Docks, NPC, Ship, Town } from '@lib'

export interface Setup {
  initDocks(): void
  docks: {
    notableFeature: string[]
    notice: string[]
    ships: {
      create(town: Town, docks: Docks, opts?: Partial<Ship>): Ship
      crew: {
        create(town: Town): string
        type: Record<string, any>
        bodyFeature: string[]
        itemFeature: string[]
        sailing: string[]
      }
      name: string[]
      hullDesc: string[]
      shipDetail: string[]
      eventDetail: string[]
      type: Record<string, ShipType>
      captain: Record<string, Partial<NPC>>
      rollData: {
        cleanliness: [number, string][]
        size: [number, string][]
      }
    }
  }
}

interface ShipType {
  masts: number,
  rigging: string,
  length: number,
  purpose: string[],
  hasOars: boolean,
  crewMen: number
}
