interface Setup {
  createTavern(town: Town, base?: Partial<Tavern>): Tavern
  getTavernLodging(tavern: Tavern): number
  getTavernBedCleanliness(tavern: Tavern): string
}
