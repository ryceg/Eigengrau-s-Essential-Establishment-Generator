// uses setup.toCelsius (which uses settings)
/**
 * @param {import("../../../../lib/town/_common").Town} town
 * @param {import("../../../../lib/index").Weather} weather
 * @param {string} biome
 * @returns {void}
 */
setup.renderWeather = (town, weather, biome = town.terrain) => {
  lib.logger.info('Rendering weather...')

  weather.precipitationLevel = Math.clamp(weather.precipitationLevel, 1, 4)
  weather.precipitationIntensity = Math.clamp(weather.precipitationIntensity, 1, 4)

  const tempVariationRoll = random(0, 100)
  const tempVariationKeys = Object.keys(lib.terrain[biome].weather.tempVariation).reverse()

  // Interpret the key for each tempVariation object as an integer.
  const intKeys = tempVariationKeys.map(Number)

  // Find one that's equal or lesser than tempVariationRoll to use as the final key.
  let finalKey = intKeys.find(key => {
    return tempVariationRoll >= key
  })

  if (!finalKey) finalKey = 0
  if (weather.timer.temperature < 1) {
    lib.logger.info('Timer for temperature has run out. Rolling temp timer!')
    lib.logger.info({ weather, finalKey })
    weather.timer.temperature = Math.trunc((lib.terrain[biome].weather.tempVariation[finalKey].temperatureTimer() || random(24, 48)) / 8)

    /** @type {number} */
    const tempVariation = lib.terrain[biome].weather.tempVariation[finalKey].temperature() || lib.terrain.temperate.weather.tempVariation[finalKey].temperature()
    weather.temperature = (lib.terrain[biome].weather.season[weather.currentSeason].baseTemp || lib.terrain.temperate.weather.season.spring.baseTemp) + tempVariation - random(-2, 2)

    if (weather.timer.precipitation < 1) {
      lib.logger.info('Resetting precipitation timer...')
      weather.roll.precipitation = random(1, 100)
      weather.precipitation = lib.weather.precipitationLevel[weather.precipitationLevel](weather)
    }

    if (weather.precipitation && weather.temperature <= 32) {
      lib.logger.info('Rolling on the freezing table...')
      weather.roll.precipitationIntensity = random(1, 100)
      lib.weather.precipitationIntensity[weather.precipitationIntensity].freezing(weather)
    } else if (weather.precipitation) {
      lib.logger.info('Rolling on the raining table...')
      weather.roll.precipitationIntensity = random(1, 100)
      lib.weather.precipitationIntensity[weather.precipitationIntensity].raining(weather)
    } else {
      lib.logger.info('Clear day!')
      weather.precipitation = 'no precipitation'
      weather.timer.precipitation = random(1, 8)
    }

    if (weather.timer.cloud < 1) {
      lib.logger.info('Resetting cloud timer...')
      weather.roll.cloud = random(1, 100)
      lib.weather.precipitationIntensity[weather.precipitationIntensity].cloud(weather)
    }

    lib.logger.info(weather)
  }
}

/**
* @param {import("../../../../lib/index").Weather} weather
* @returns {string}
*/
setup.getWeatherReadout = (weather) => {
  return `It's ${getTemperatureReadout(weather)}. ${getCloudReadout(weather).toUpperFirst()}, and ${getPrecipitationReadout(weather)}. `
}

/**
* @param {import("../../../../lib/index").Weather} weather
* @returns {string}
*/
function getTemperatureReadout (weather) {
  for (const [threshold, description] of lib.weather.temperatureDescriptors) {
    if (weather.temperature >= threshold) {
      const readout = `${setup.toCelsius(weather.temperature)}, to be precise.`
      return lib.createTippyFull(readout, description)
    }
  }
  throw new Error('Could not get temperature readout!')
}

/**
* @param {import("../../../../lib/index").Weather} weather
* @returns {string}
*/
function getCloudReadout (weather) {
  return lib.random(lib.weather.cloudIntensityDescriptors[weather.cloudIntensity])
}

/**
* @param {import("../../../../lib/index").Weather} weather
* @returns {string}
*/
function getPrecipitationReadout (weather) {
  let readout = ''

  if (weather.precipitation) {
    readout = lib.random(lib.weather.precipitationDescriptors[weather.precipitation])
  }

  if (weather.precipitation !== 'no precipitation' && weather.timer.precipitation > 18) {
    return `${readout}. It doesn't look like it'll be clearing up today`
  }

  if (weather.precipitation !== 'no precipitation' && weather.timer.precipitation > 12) {
    return `${readout}. It doesn't look like it'll be clearing up soon`
  }

  if (weather.precipitation !== 'no precipitation' && weather.timer.precipitation <= 2) {
    return `${readout}. It's clearing up pretty quickly, though`
  }

  return readout
}
