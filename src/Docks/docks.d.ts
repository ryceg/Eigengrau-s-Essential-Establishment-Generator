interface Setup {
  docks: {
    rollData: {
      cleanliness: [number, string, string][]
      size: [number, string, string][]
      activity: [number, string | string[]][]
    }
    notableFeature: string[]
    notice: string[]
    get: {
      customers: Customer[]
    }
    ships: {
      create(town: Town, docks: any, opts?: any): any
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
      typePool: string[]
      captain: Record<string, Partial<NPC>>
      rollData: {
        cleanliness: [number, string][]
        size: [number, string][]
      }
    }
  }
}

interface Customer {
    relationship: string
    reciprocalRelationship?: string
    base?: Base
    description(docks: Docks, npc: NPC): string
}
interface ShipType {
  masts: number,
  rigging: string,
  length: number,
  purpose: string[],
  hasOars: boolean,
  crewMen: number
}
