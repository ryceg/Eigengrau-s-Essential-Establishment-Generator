setup.createEncounter = function (town, biome) {
  var encounter = setup.misc[biome].create(town)
  return encounter
}
