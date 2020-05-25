interface Setup {
  createFaction(town: Town, opts?: Partial<Faction>): Faction
}

interface Faction {
  [key: string]: any
}
