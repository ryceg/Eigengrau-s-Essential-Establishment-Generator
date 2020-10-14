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
  available: BiomeName[]
  function? (town: Town, biome: BiomeName): string
}

type BiomeName = 'mountain' | 'desert' | 'forest' | 'road' | 'trail' |'path'
