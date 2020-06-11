interface Setup {
  initMiscLocations(): void
  misc: SetupMisc
}

interface SetupMisc {
  locations: Record<string, unknown>
}
