interface Setup {
  initMiscLocations(): void
  misc: SetupMisc
}

interface SetupMisc {
  graveStone: Record<string, unknown>
  locations: LocationObject[]
}

interface LocationObject {
  summary: string
  available: string[]
  function? (town: Town, biome: string): string
}
