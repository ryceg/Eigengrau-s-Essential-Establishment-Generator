/* global setup random */
setup.createWeather = function (town, biome, weather, season, time) {
  console.groupCollapsed('Creating weather...')
  if (biome) {
    switch (biome) {
      case 'desert':
        biome = 'arid'
        break
      case 'town':
        biome = town.terrain || 'temperate'
        break
      default:
        biome = 'temperate'
    }
  }
  biome = biome || town.terrain
  time = time || 8
  season = season || season
  console.log('biome: ' + biome)
  if (weather) {
    console.log('Weather was already defined.')
    if (weather.timer) {
      console.log('Counting down timers!')
      weather.timer.precipitation -= time
      weather.timer.temperature -= time
      weather.timer.cloud -= time
    }
  } else {
    weather = {
      temperature: setup.townData.terrain[biome].weather[season].baseTemp || setup.townData.terrain['temperate'].weather['summer'].baseTemp,
      tempVariation: dice(2, 50),
      season: season,
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
      precipitationLevel: setup.townData.terrain[biome].weather[season].precipitationLevel,
      precipitationIntensity: setup.townData.terrain[biome].weather[season].precipitationIntensity
    }
  }
  // console.log('weather:')
  // console.log(weather)
  weather.precipitationLevel.clamp(1, 4)
  weather.precipitationIntensity.clamp(1, 4)

  setup.renderWeather(town, biome, weather)
  // console.log('weather after render:')
  // console.log(weather)
  console.groupEnd()
  return weather
}
