setup.createEncounter = function (town, biome, scenario) {
  // console.log('scenario:')
  // console.log(scenario)
  scenario = {
    encounter: setup.misc[biome].create(town)
    // weather: scenario.weather || setup.createWeather(town, biome)
  }
  // scenario.weather = setup.createWeather(town, biome, scenario.weather, 4)
  // console.log(scenario)

  scenario.readout = scenario.encounter
  return scenario
}
