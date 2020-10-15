type Building = import('../../lib/buildings/_common').Building

interface Setup {
  createBuilding(town: Town, type?: string, base?: Partial<Building>): Building
}
