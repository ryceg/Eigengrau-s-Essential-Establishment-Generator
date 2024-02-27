import { MaterialTypes } from '../buildings/structureMaterialData'
import { WeightRecord } from '../types'
import { dice } from './dice'
import { random } from './random'

export type Biome = 'tropical'
export type Seasons = 'spring' | 'summer' | 'autumn' | 'winter'

export interface TerrainData {
  start: WeightRecord<string>
  weather: WeatherData
  location: Record<string, LocationData>
}

interface WeatherData {
  tempVariation: Record<number, TempVariation>
  season: Record<Seasons, SeasonData>
}

export interface SeasonData {
  precipitationLevel: number
  precipitationIntensity: number
  baseTemp: number
}

interface TempVariation {
  temperature(): number
  temperatureTimer(): number
}

interface LocationData {
  preposition: string
  precipitationIntensity: number
  origin: string[]
  vegetation: Record<string, number>
  plants: WeightRecord<string>
  possibleMaterials: MaterialTypes[]
}

export const terrain: Record<Biome, TerrainData> = {
  tropical: {
    start: {
      'seacoast': 1,
      'forest': 1,
      'river coast': 2,
      'jungle': 1,
      'volcanic field': 1,
      'hills': 1,
      'plains': 1,
      'mountains': 1
    },
    weather: {
      tempVariation: {
        85: {
          temperature: () => dice(2, 10),
          temperatureTimer: () => random(24, 48)
        },
        55: {
          temperature: () => random(1, 10),
          temperatureTimer: () => random(48, 120)
        },
        25: {
          temperature: () => 0 - random(-5, 5),
          temperatureTimer: () => random(48, 120)
        },
        10: {
          temperature: () => 0 - random(1, 10),
          temperatureTimer: () => random(24, 48)
        },
        0: {
          temperature: () => 0 - dice(2, 10),
          temperatureTimer: () => random(24, 48)
        }
      },
      season: {
        summer: {
          precipitationLevel: 3,
          precipitationIntensity: 1,
          baseTemp: 90
        },
        autumn: {
          precipitationLevel: 3,
          precipitationIntensity: 1,
          baseTemp: 75
        },
        winter: {
          precipitationLevel: 2,
          precipitationIntensity: 1,
          baseTemp: 50
        },
        spring: {
          precipitationLevel: 4,
          precipitationIntensity: 1,
          baseTemp: 75
        }
      }
    },
    location: {
      'hills': {
        preposition: 'in',
        precipitationIntensity: 2,
        origin: [
          'a large freshwater lake',
          'a wide, navigable river',
          'a river navigable by small craft',
          'a road traveled by merchants on the way to another, larger city',
          'a well maintained road',
          'a road that connects two other cities',
          'a well-traveled crossroads'],
        vegetation: {
          sparse: 1,
          lush: 4,
          thick: 3
        },
        plants: {
          shrubs: 1,
          bush: 1,
          trees: 2
        },
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']
      },
      'plains': {
        preposition: 'on',
        precipitationIntensity: 2,
        origin: [
          'a wide, navigable river',
          'a road traveled by merchants on the way to another, larger city',
          'a well maintained road',
          'a road that connects two other cities',
          'a well-traveled crossroads',
          'a water source and a well-traveled road'],
        vegetation: {
          sparse: 5,
          lush: 1,
          thick: 1
        },
        plants: {
          shrubs: 1,
          bush: 1,
          trees: 2
        },
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']

      },
      'mountains': {
        preposition: 'in',
        precipitationIntensity: 2,
        origin: [
          'a large freshwater lake',
          'a river navigable by small craft',
          'a series of natural springs',
          'a road that connects two other cities',
          'a road that leads through the mountains',
          'a trade route through the mountains',
          'a well-traveled crossroads',
          'a water source and a well-traveled road'],
        vegetation: {
          sparse: 5,
          lush: 1,
          thick: 1
        },
        plants: {
          shrubs: 1,
          bush: 1,
          trees: 2
        },
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']
      },
      'river coast': {
        preposition: 'on',
        precipitationIntensity: 2,
        origin: [
          'a coastal harbor',
          'a calm, coastal bay',
          'a wide, navigable river',
          'a river navigable by small craft'],
        vegetation: {
          sparse: 1,
          lush: 4,
          thick: 3
        },
        plants: {
          shrubs: 1,
          bush: 1,
          trees: 2
        },
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']
      },
      'jungle': {
        preposition: 'in',
        precipitationIntensity: 2,
        origin: [
          'a river navigable by small craft',
          'a series of natural springs',
          'a road that connects two other cities',
          'a road that leads through the jungle',
          'a trade route through the jungle',
          'a water source and a well-traveled road that leads through the jungle'],
        vegetation: {
          sparse: 1,
          lush: 1,
          thick: 9
        },
        plants: {
          shrubs: 1,
          bush: 1,
          trees: 2
        },
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']
      }
    }
  }
}
