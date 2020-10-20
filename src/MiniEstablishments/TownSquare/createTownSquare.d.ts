interface Setup {
  createTownSquare(town: Town, opts?: Partial<TownSquareOptions>): unknown
}

interface TownSquareOptions {
  newBuilding: typeof setup.createBuilding
}
