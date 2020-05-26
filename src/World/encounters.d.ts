interface Setup {
  misc: SetupMisc
}

interface SetupMisc {
  encounters: Record<string, (town: Town) => string>
}
