type Building = import('../lib/building/_common').Building

interface Setup {
  createBuilding(town: Town, type?: string, base?: Partial<Building>): Building
}
