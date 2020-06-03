interface Setup {
  initMiscLocations(): void
  misc: SetupMisc
}

interface SetupMisc {
  locations: Record<string, (town: Town, biome: string) => string>
}
