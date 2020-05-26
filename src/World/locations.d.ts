interface Setup {
  misc: SetupMisc
}

interface SetupMisc {
  locations: Record<string, (town: Town, biome: string) => string>
}
