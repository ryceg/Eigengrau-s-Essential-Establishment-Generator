interface Setup {
  createGuardhouse(town: Town, opts?: Partial<Options>): Guardhouse
}

interface Options {
  newBuilding(town: Town, type?: string): Building
  npc: Partial<NPC>
}
