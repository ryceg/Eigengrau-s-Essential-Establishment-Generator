/* global setup random */
setup.createWeather = function (town, biome, weather, time) {
  if (biome) {
    switch (biome) {
      case 'forest':
      case 'road':
      case 'mountain':
        biome = 'temperate'
        break
      case 'desert':
        biome = 'arid'
        break
      case 'town':
        biome = town.terrain
        break
      default:
        biome = 'temperate'
    }
  }
  biome = biome || town.terrain
  console.log('biome: ' + biome)
  if (weather) {
    console.log('Weather was already defined.')
    if (time) {
      console.log('Counting down timers!')
      weather.timer.precipitation -= time
      weather.timer.temperature -= time
      weather.timer.cloud -= time
    }
  } else {
    weather = {
      temperature: setup.townData.terrain[biome].weather[town.currentSeason].baseTemp,
      tempVariation: random(1, 100),
      timer: {
        precipitation: 0,
        cloud: 0,
        temperature: 0
      },
      roll: {
        precipitationIntensity: random(1, 100),
        precipitation: random(1, 100),
        cloud: random(1, 100)
      },
      readout: {
        precipitation: '',
        cloud: '',
        temperature: ''
      },
      precipitationLevel: setup.townData.terrain[biome].weather[town.currentSeason].precipitationLevel,
      precipitationIntensity: setup.townData.terrain[biome].weather[town.currentSeason].precipitationIntensity
    }
  }
  // console.log('weather:')
  // console.log(weather)
  weather.precipitationLevel.clamp(1, 4)
  weather.precipitationIntensity.clamp(1, 4)

  setup.renderWeather(town, biome, weather)
  // console.log('weather after render:')
  // console.log(weather)
  return weather
}
