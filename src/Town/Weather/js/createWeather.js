// uses setup.renderWeather
/**
 * This weather function is pretty complex.
 * Basically, temperature, precipitation,
 * and precipitation intensity are each independently tracked.
 */
/**
 * @param {import("../../../../lib/town/_common").Town} town
 * @param {string} biome
 * @param {import("../../../../lib/index").Weather} weather
 * @returns {import("../../../../lib/index").Weather}
 */
setup.createWeather = (town, biome, weather) => {
  lib.logger.openGroup('Creating weather...')

  lib.logger.info({ town, biome, weather })
  if (biome) {
    switch (biome) {
      case 'desert':
        biome = 'arid'
        break
      case 'town':
        biome = town.terrain || 'temperate'
        break
      default:
        biome = town.terrain
    }
  }
  const time = 8
  if (weather) {
    if (weather.currentSeason !== town.currentSeason) {
      lib.logger.info('Changed season!')
      weather.currentSeason = town.currentSeason
      weather.timer = {
        precipitation: 0,
        cloud: 0,
        temperature: 0
      }
    }
  }
  const currentSeason = town.currentSeason
  lib.logger.info(`Biome: ${biome}`)
  if (weather) {
    // if it's passed the weather object (i.e. if it isn't the first time the user has clicked on the button, it doesn't need to set up everything.)
    lib.logger.info('Weather was already defined.')
    if (weather.timer) {
      lib.logger.info('Counting down timers!')
      weather.timer.precipitation -= time
      weather.timer.temperature -= time
      weather.timer.cloud -= time
    }
  } else {
    /** @type {import("../../../../lib/src/terrain").SeasonData} */
    const seasonData = lib.terrain[biome].weather.season[currentSeason]

    /** @interface Weather */
    weather = {
      temperature: seasonData.baseTemp || lib.terrain.temperate.weather.season.summer.baseTemp,
      tempVariation: lib.dice(2, 50),
      currentSeason,
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
      precipitation: '',
      cloudIntensity: '',
      precipitationLevel: seasonData.precipitationLevel,
      precipitationIntensity: seasonData.precipitationIntensity
    }
  }
  weather.precipitationLevel.clamp(1, 4)
  weather.precipitationIntensity.clamp(1, 4)

  setup.renderWeather(town, weather, biome)
  town.weather = weather
  lib.logger.closeGroup()
  return weather
}
