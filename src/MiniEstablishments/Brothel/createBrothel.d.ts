interface Setup {
  createBrothel(town: Town, opts?: Partial<Options>): Brothel
}

interface Options {
  newBuilding(town: Town, type?: string): Building
  npc: Partial<NPC>
}

interface Brothel {
  initPassage: string
  passageName: string
  buildingType: string
  name: string
  wordNoun: string
  needsWordNoun: boolean
  specialty: string
  talk: string
  rumour: string
  notice: string
  idle: string
  owner: string
  notableFeature: string
  wealth: string
  size: string
  cleanliness: string
  associatedNPC: NPC
  tippyDescription?: string
}
