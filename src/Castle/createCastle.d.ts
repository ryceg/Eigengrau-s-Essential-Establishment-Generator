interface Setup {
  createCastle(town: Town, opts?: Partial<Options>): Castle
}

interface Options {
  newBuilding(town: Town, type?: string): Building
  npc: Partial<NPC>
}

interface Castle {
  initPassage: string
  passageName: string
  buildingType: string
  name: string
  associatedNPC: NPC
  wordNoun: string
  needsWordNoun: boolean
  defense: {
    reason: string
    innerWalls: string
    outerWalls: string
  }
  lookingFor: string
  notableFeature?: string
  wealth: string
  age: string
  condition: string
  landSize: string
  size: string
  cleanliness: string
  tippyDescription?: string
}
