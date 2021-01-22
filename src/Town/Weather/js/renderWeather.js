// uses setup.toCelsius (which uses settings)
/**
 * @param {import("../../../../lib/town/_common").Town} town
 * @param {import("../../../../lib/index").Weather} weather
 * @param {string} biome
 * @returns {void}
 */
setup.renderWeather = (town, weather, biome = town.terrain) => {
  console.log('Rendering weather...')

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
    console.log('Timer for temperature has run out. Rolling temp timer!')
    console.log({ weather, finalKey })
    weather.timer.temperature = Math.trunc((lib.terrain[biome].weather.tempVariation[finalKey].temperatureTimer() || random(24, 48)) / 8)

    /** @type {number} */
    const tempVariation = lib.terrain[biome].weather.tempVariation[finalKey].temperature() || lib.terrain.temperate.weather.tempVariation[finalKey].temperature()
    weather.temperature = (lib.terrain[biome].weather.season[weather.currentSeason].baseTemp || lib.terrain.temperate.weather.season.spring.baseTemp) + tempVariation - random(-2, 2)

    if (weather.timer.precipitation < 1) {
      console.log('Resetting precipitation timer...')
      weather.roll.precipitation = random(1, 100)
      weather.precipitation = lib.weather.precipitationLevel[weather.precipitationLevel](weather)
    }

    if (weather.precipitation && weather.temperature <= 32) {
      console.log('Rolling on the freezing table...')
      weather.roll.precipitationIntensity = random(1, 100)
      lib.weather.precipitationIntensity[weather.precipitationIntensity].freezing(weather)
    } else if (weather.precipitation) {
      console.log('Rolling on the raining table...')
      weather.roll.precipitationIntensity = random(1, 100)
      lib.weather.precipitationIntensity[weather.precipitationIntensity].raining(weather)
    } else {
      console.log('Clear day!')
      weather.precipitation = 'no precipitation'
      weather.timer.precipitation = random(1, 8)
    }

    if (weather.timer.cloud < 1) {
      console.log('Resetting cloud timer...')
      weather.roll.cloud = random(1, 100)
      lib.weather.precipitationIntensity[weather.precipitationIntensity].cloud(weather)
    }

    weather.readout.precipitation = getPrecipitationReadout(weather)
    weather.readout.cloud = lib.weather.cloudIntensityDescriptors[weather.cloudIntensity].random()

    console.log('Rendering temperature...')
    for (const [threshold, description] of lib.weather.temperatureDescriptors) {
      if (weather.temperature >= threshold) {
        const readout = `${setup.toCelsius(weather.temperature)}, to be precise.`
        weather.readout.temperature = lib.createTippyFull(readout, description)
        break
      }
    }

    weather.readout.full = `It's ${weather.readout.temperature}. ${weather.readout.cloud.toUpperFirst()}, and ${weather.readout.precipitation}. `
    console.log(weather)
  }

  /**
 * @param {import("../../../../lib/index").Weather} weather
 * @returns {string}
 */
  function getPrecipitationReadout (weather) {
    /** @type {string} */
    let readout
    if (weather.precipitation) {
      readout = lib.random(lib.weather.precipitationDescriptors[weather.precipitation])
    } else {
      readout = ''
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
}
