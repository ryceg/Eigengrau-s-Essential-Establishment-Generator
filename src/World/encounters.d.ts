interface Setup {
  initMiscEncounters(): void
  misc: SetupMisc
}

interface SetupMisc {
  encounters: Record<string, (town: Town, biome: unknown) => string>
}
