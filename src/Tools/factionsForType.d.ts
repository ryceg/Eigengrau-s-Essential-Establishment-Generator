interface Setup {
  factionsForType<K extends keyof Faction>(
    town: Town,
    variable: K,
    value: Faction[K]
  ): Faction
}
