type Faction = import('../../lib/faction/_common').Faction

interface Setup {
  createFaction(town: Town, opts?: Partial<Faction>): Faction
}
