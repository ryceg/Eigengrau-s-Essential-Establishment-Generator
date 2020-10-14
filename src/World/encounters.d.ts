interface Setup {
  initMiscEncounters(): void
  misc: SetupMisc
}

interface SetupMisc {
  encounters: Encounter[]
  graveStone: Record<string, (town: Town, base?: unknown) => unknown>
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
  function?(town: Town, biome: BiomeName): string
}
