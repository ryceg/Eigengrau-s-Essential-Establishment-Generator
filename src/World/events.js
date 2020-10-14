setup.getLocationEvent = biome => {
  return lib.random(setup.misc.locations.filter(location => {
    return location.available.includes(biome)
  }))
}

setup.getEncounterEvent = biome => {
  return lib.random(setup.misc.encounters.filter(encounter => {
    return encounter.available && encounter.available.includes(biome)
  }))
}

setup.getEventDescription = (event, town, biome) => {
  if (event.function) {
    return event.function(town, biome)
  }
  return event.summary
}
