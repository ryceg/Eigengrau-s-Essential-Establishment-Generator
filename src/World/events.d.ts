interface Setup{
  getLocation(biome: BiomeName): LocationObject
  getEncounter(biome: BiomeName): Encounter
  getEventDescription(event: LocationObject|Encounter, town: Town, biome: Biome): string
}
