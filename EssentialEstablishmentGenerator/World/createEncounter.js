setup.createEncounter = function (town, biome) {
  // console.log('scenario:')
  // console.log(scenario)
  const encounter = setup.misc[biome].create(town)
  // weather: scenario.weather || setup.createWeather(town, biome)
  // scenario.weather = setup.createWeather(town, biome, scenario.weather, 4)
  // console.log(scenario)

  return encounter
}
