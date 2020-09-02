interface Setup {
  initMiscLocations(): void
  misc: SetupMisc
}

interface SetupMisc {
  graveStone: Record<string, unknown>
  locations: Record<string, unknown>
}
