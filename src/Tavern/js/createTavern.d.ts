interface Setup {
  createTavern(town: Town, base?: Partial<Tavern>): Tavern
  getTavernLodging(tavern: Tavern): number
}
