// uses setup.renderWeather
/**
 * This weather function is pretty complex.
 * Basically, temperature, precipitation,
 * and precipitation intensity are each independently tracked.
 */

import { Biome, Town, Weather, PrecipitationLevels, PrecipitationIntensityLevels } from '@lib'
import { renderWeather } from './renderWeather'

type Location = 'desert' | 'forest' | 'mountain' | 'road' | 'town'
export const createWeather = (town: Town, location?: Location, weather?: Weather): Weather => {
  console.groupCollapsed('Creating weather...')
  let biome: Biome
  console.log({ town, biome: location, weather })
  if (location) {
    switch (location) {
      case 'desert':
        biome = 'arid'
        break
      case 'town':
        biome = town.terrain || 'temperate'
        break
      default:
        biome = town.terrain
    }
  } else {
    biome = town.terrain
  }
  const time = 8
  if (weather) {
    if (weather.currentSeason !== town.currentSeason) {
      console.log('Changed season!')
      weather.currentSeason = town.currentSeason
      weather.timer = {
        precipitation: 0,
        cloud: 0,
        temperature: 0
      }
    }
  }
  const currentSeason = town.currentSeason
  console.log(`biome: ${location}`)
  if (weather) {
    // if it's passed the weather object (i.e. if it isn't the first time the user has clicked on the button, it doesn't need to set up everything.)
    console.log('Weather was already defined.')
    if (weather.timer) {
      console.log('Counting down timers!')
      weather.timer.precipitation -= time
      weather.timer.temperature -= time
      weather.timer.cloud -= time
    }
  } else {
    const seasonData = lib.terrain[biome].weather.season[currentSeason]

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
      readout: {
        precipitation: '',
        cloud: '',
        temperature: '',
        full: ''
      },
      precipitation: 'no precipitation',
      hasPrecipitation: false,
      cloudIntensity: 'clear',
      precipitationLevel: seasonData.precipitationLevel as PrecipitationLevels,
      precipitationIntensity: seasonData.precipitationIntensity as PrecipitationIntensityLevels
    }
  }
  weather.precipitationLevel.clamp(1, 4)
  weather.precipitationIntensity.clamp(1, 4)

  renderWeather(town, weather, biome)
  town.weather = weather
  console.groupEnd()
  return weather
}
