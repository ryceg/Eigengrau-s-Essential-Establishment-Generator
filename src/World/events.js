// uses setup.misc.encounters
setup.getLocation = biome => {
  return lib.random(setup.locations.filter(location => {
    return location.available.includes(biome)
  }))
}

setup.getEncounter = biome => {
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
