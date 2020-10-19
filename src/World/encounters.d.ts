interface Setup {
  initMiscEncounters(): void
  misc: SetupMisc
}

interface SetupMisc {
  encounters: Encounter[]
  caravan: Record<string, unknown>
  religion: Record<string, unknown>
  town: Record<string, unknown>
  road: Record<string, unknown>
  desert: Record<string, unknown>
  mountain: Record<string, unknown>
  forest: Record<string, unknown>
}

interface Encounter {
  summary: string
  available?: BiomeName[]
  function?(town: Town, biome: BiomeName): string
}
