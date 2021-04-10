import { Town, NPC } from '@lib'
import { Building } from 'lib/buildings/_common'

// TODO DocksData is currently not being used.
export interface DocksData {
    rollData: {
      cleanliness: {
        description: string
        preceding: string
        rolls: [number, string, string][]
      }
      size: {
        description: string
        preceding: string
        rolls: [number, string, string][]
      }
      activity: {
        description: string
        preceding: string
        rolls: [number, string | string[]][]
      }
    }
    notableFeature: string[]
    notice: string[]
    get: {
      customers: Customer[]
    }
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
      type: Record<string, ShipTypeData>
      captain: Record<string, Partial<NPC>>
      rollData: {
        cleanliness: [number, string][]
        size: [number, string][]
      }
    }
}
export interface ShipTypeData {
  masts: number,
  rigging: string,
  length: number,
  purpose: string[],
  hasOars: boolean,
  crewMen: number
}

export interface Docks extends Building {
  notableFeature: string
  notice: string
  passageName: string
  initPassage: string
  buildingType: string
  associatedNPC: NPC
  wordNoun: string
  ships: Record<string, Ship>
}

export interface Ship {
  name: string
  type: string
  captainType: string
  hull: string
  detail: string
  event: string
  roll: {
    size: number
    cleanliness: number
  }
  captain: NPC
  size: string
  cleanliness: string
}

interface Customer {
  relationshipDescription: string
  relationships: {
    building?: {
      relationship: string
      reciprocalRelationship?: string
    }
    associatedNPC?: {
      relationship: string
      reciprocalRelationship: string
    }
  }
  base?: Partial<NPC>
  description(docks: Docks, npc: NPC): string
}
