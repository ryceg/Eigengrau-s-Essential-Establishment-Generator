interface Setup{
  getLocationEvent(biome: BiomeName): LocationObject
  getEncounterEvent(biome: BiomeName): Encounter
  getEventDescription(event: LocationObject|Encounter, town: Town, biome: Biome): string
}
