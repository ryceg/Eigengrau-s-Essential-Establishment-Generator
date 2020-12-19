interface Setup {
  createDocks(town: Town, opts?: Partial<Options>): Docks
}

interface Options {
  newBuilding(town: Town, type?: string): Building
  npc: Partial<NPC>
}

export interface Docks {
  notableFeature: string
  notice: string
  passageName: string
  initPassage: string
  buildingType: string
  needsWordNoun: string
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
