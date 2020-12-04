import { MaterialTypes } from '../buildings/structureData'
import { WeightRecord } from '../types'
import { dice } from './dice'
import { random } from './random'

export type Biome = 'temperate' | 'tropical' | 'arid' | 'polar'
export type Seasons = 'spring' | 'summer' | 'autumn' | 'winter'

export interface TerrainData {
  weather: WeatherData
   start: string[]
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
  precipitationIntensity: number
  origin: string[]
  vegetation: Record<string, number>
  plants: WeightRecord<string>
  possibleMaterials: MaterialTypes[]
}

export const terrain: Record<Biome, TerrainData> = {
  temperate: {
    weather: {
      tempVariation: {
        95: {
          temperature: () => dice(3, 10),
          temperatureTimer: () => random(24, 48)
        },
        85: {
          temperature: () => dice(2, 10),
          temperatureTimer: () => random(24, 96)
        },
        65: {
          temperature: () => random(1, 10),
          temperatureTimer: () => random(48, 120)
        },
        35: {
          temperature: () => random(-5, 5),
          temperatureTimer: () => random(48, 144)
        },
        15: {
          temperature: () => random(-1, -10),
          temperatureTimer: () => random(48, 120)
        },
        5: {
          temperature: () => 0 - dice(2, 10),
          temperatureTimer: () => random(24, 96)
        },
        0: {
          temperature: () => random(-1, -24),
          temperatureTimer: () => random(24, 48)
        }
      },
      season: {
        summer: {
          precipitationLevel: 4,
          precipitationIntensity: 1,
          baseTemp: 80
        },
        autumn: {
          precipitationLevel: 3,
          precipitationIntensity: 1,
          baseTemp: 60
        },
        winter: {
          precipitationLevel: 2,
          precipitationIntensity: 1,
          baseTemp: 30
        },
        spring: {
          precipitationLevel: 3,
          precipitationIntensity: 1,
          baseTemp: 60
        }
      }
    },
    start: ['seashore', 'seashore', 'seashore', 'seashore', 'forest', 'forest', 'hills', 'plains', 'mountains', 'river coast', 'river coast'],
    location: {
      // town.Name is located in the _
      'seashore': {
        precipitationIntensity: 3,
        // town.Name grew around _
        origin: [
          'a coastal harbor',
          'a calm, coastal bay',
          'a large freshwater lake',
          'a wide, navigable river',
          'a river navigable by small craft',
          'the mouth of a river',
          'the confluence of two rivers',
          'a series of natural springs',
          'a well-traveled crossroads',
          'a water source and a well-traveled road'
        ],
        // where the vegetation is _
        vegetation: {
          sparse: 1,
          lush: 4,
          thick: 3
        },
        plants: {
          'shrubs': 1,
          'bush': 1,
          'windswept trees': 1
        },
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone']
      },
      'forest': {
        precipitationIntensity: 2,
        origin: [
          'a large freshwater lake',
          'a wide, navigable river',
          'a river navigable by small craft',
          'the mouth of a river',
          'a deep freshwater river',
          'a river that runs through the forest',
          'a series of natural springs',
          'a well-traveled crossroads',
          'a road that passes through the forests',
          'a water source and a well-traveled road leading through the forest'
        ],
        vegetation: {
          sparse: 1,
          lush: 3,
          thick: 6
        },
        plants: {
          'oak trees': 3,
          'pine trees': 1,
          'maple trees': 1,
          'birch trees': 1,
          'ash trees': 1,
          'elm trees': 1,
          'fir trees': 1,
          'spruce trees': 1,
          'sycamore trees': 1,
          'alder trees': 1,
          'cypress trees': 1,
          'yew trees': 1
        },
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob']
      },
      'hills': {
        precipitationIntensity: 2,
        origin: [
          'a large freshwater lake',
          'a wide, navigable river',
          'a river navigable by small craft',
          'a road traveled by merchants on the way to another, larger city',
          'a well maintained road',
          'a road that connects two other cities',
          'a well-traveled crossroads',
          'a water source and a well-traveled road'],
        vegetation: {
          sparse: 1,
          lush: 3,
          thick: 6
        },
        plants: {
          // TODO: expand out the plants for everything past this point- they're all placeholder text.
          shrubs: 1,
          bush: 1,
          trees: 2
        },
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob']
      },
      'plains': {
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
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob']
      },
      'mountains': {
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
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob']
      },
      'river coast': {
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
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob']
      }
    }
  },
  tropical: {
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
    start: ['seacoast', 'forest', 'hills', 'plains', 'mountains', 'river coast', 'jungle', 'volcanic field'],
    location: {
      'seacoast': {
        precipitationIntensity: 3,
        origin: [
          'a coastal harbor',
          'a calm, coastal bay',
          'a large freshwater lake',
          'a wide, navigable river',
          'a river navigable by small craft',
          'the mouth of a river',
          'the confluence of two rivers',
          'a series of natural springs',
          'a well-traveled crossroads',
          'a water source and a well-traveled road'],
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
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']
      },
      'forest': {
        precipitationIntensity: 2,
        origin: [
          'a large freshwater lake',
          'a wide, navigable river',
          'a river navigable by small craft',
          'the mouth of a river',
          'a deep freshwater river',
          'a river that runs through the forest',
          'a series of natural springs',
          'a well-traveled crossroads',
          'a road that passes through the forests',
          'a water source and a well-traveled road leading through the forest'],
        vegetation: {
          sparse: 1,
          lush: 3,
          thick: 6
        },
        plants: {
          shrubs: 1,
          bush: 1,
          trees: 2
        },
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']
      },
      'hills': {
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
      },
      'volcanic field': {
        precipitationIntensity: 3,
        origin: [
          'a large freshwater lake',
          'a wide, navigable river',
          'a river navigable by small craft',
          'the mouth of a river',
          'a series of natural springs',
          'a series of natural springs',
          'a series of natural springs',
          'a water source and a well-traveled road'],
        // vegetation: ['desolate', 'desolate', 'desolate', 'desolate', 'desolate', 'desolate', 'desolate', 'sparse', 'sparse', 'sparse', 'lush'],
        vegetation: {
          desolate: 7,
          sparse: 3,
          lush: 1
        },
        plants: {
          shrubs: 1,
          bush: 1,
          trees: 2
        },
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'cobblestone', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']
      }
    }
  },
  arid: {
    weather: {
      tempVariation: {
        95: {
          temperature: () => dice(3, 10),
          temperatureTimer: () => random(24, 48)
        },
        85: {
          temperature: () => dice(2, 10),
          temperatureTimer: () => random(24, 96)
        },
        65: {
          temperature: () => random(1, 10),
          temperatureTimer: () => random(48, 120)
        },
        35: {
          temperature: () => 0 - random(-5, 5),
          temperatureTimer: () => random(48, 144)
        },
        15: {
          temperature: () => 0 - random(1, 4),
          temperatureTimer: () => random(48, 120)
        },
        5: {
          temperature: () => 0 - dice(1, 10),
          temperatureTimer: () => random(24, 96)
        },
        0: {
          temperature: () => 0 - dice(2, 6),
          temperatureTimer: () => random(24, 48)
        }
      },
      season: {
        summer: {
          precipitationLevel: 3,
          precipitationIntensity: -1,
          baseTemp: 95
        },
        autumn: {
          precipitationLevel: 3,
          precipitationIntensity: -1,
          baseTemp: 75
        },
        winter: {
          precipitationLevel: 2,
          precipitationIntensity: -1,
          baseTemp: 50
        },
        spring: {
          precipitationLevel: 2,
          precipitationIntensity: -1,
          baseTemp: 75
        }
      }
    },
    start: ['desert', 'hills', 'plains', 'mountains', 'river coast', 'wasteland', 'oasis'],
    location: {
      'desert': {
        precipitationIntensity: 2,
        origin: [
          'a coastal harbor',
          'a calm, coastal bay',
          'a large freshwater lake',
          'a wide, navigable river',
          'a river navigable by small craft',
          'the mouth of a river',
          'the confluence of two rivers',
          'a series of natural springs',
          'a well-traveled crossroads',
          'a water source and a well-traveled road'],
        vegetation: {
          desolate: 3,
          sparse: 1,
          lush: 4,
          thick: 3
        },
        plants: {
          shrubs: 1,
          bush: 1,
          trees: 2
        },
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw']
      },
      'forest': {
        precipitationIntensity: 2,
        origin: [
          'a large freshwater lake',
          'a wide, navigable river',
          'a river navigable by small craft',
          'the mouth of a river',
          'a deep freshwater river',
          'a river that runs through the forest',
          'a series of natural springs',
          'a well-traveled crossroads',
          'a road that passes through the forests',
          'a water source and a well-traveled road leading through the forest'],
        vegetation: {
          desolate: 2,
          sparse: 1,
          lush: 3,
          thick: 6
        },
        plants: {
          shrubs: 1,
          bush: 1,
          trees: 2
        },
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob', 'straw', 'terra cotta', 'clay']
      },
      'hills': {
        precipitationIntensity: 2,
        origin: [
          'a large freshwater lake',
          'a wide, navigable river',
          'a river navigable by small craft',
          'a road traveled by merchants on the way to another, larger city',
          'a well maintained road',
          'a road that connects two other cities',
          'a well-traveled crossroads',
          'a water source and a well-traveled road'],
        vegetation: {
          desolate: 5,
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
      'plains': {
        precipitationIntensity: 2,
        origin: [
          'a wide, navigable river',
          'a road traveled by merchants on the way to another, larger city',
          'a well maintained road',
          'a road that connects two other cities',
          'a well-traveled crossroads',
          'a water source and a well-traveled road'],
        vegetation: {
          desolate: 5,
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
          desolate: 5,
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
        precipitationIntensity: 2,
        origin: [
          'a coastal harbor',
          'a calm, coastal bay',
          'a wide, navigable river',
          'a river navigable by small craft'],
        vegetation: {
          desolate: 3,
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
      'wasteland': {
        precipitationIntensity: 2,
        origin: [
          'a road traveled by merchants on the way to another, larger city',
          'a well maintained road',
          'a road that connects two other cities',
          'a well-traveled crossroads',
          'a water source and a well-traveled road'],
        vegetation: {
          desolate: 7,
          sparse: 3,
          lush: 1
        },
        plants: {
          shrubs: 1,
          bush: 1,
          trees: 2
        },
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone', 'plaster', 'gypsum', 'adobe', 'daub', 'cob']
      },
      'oasis': {
        precipitationIntensity: 1,
        origin: [
          'a series of natural springs',
          'a series of natural springs',
          'a large oasis of water',
          'a large oasis of water',
          'a large oasis of water',
          'a large oasis of water',
          'a water source and a well-traveled road'],
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
      }
    }
  },
  polar: {
    weather: {
      tempVariation: {
        100: {
          temperature: () => dice(3, 10),
          temperatureTimer: () => random(24, 48)
        },
        95: {
          temperature: () => dice(2, 10),
          temperatureTimer: () => random(24, 96)
        },
        80: {
          temperature: () => random(1, 10),
          temperatureTimer: () => random(48, 120)
        },
        60: {
          temperature: () => random(-5, 5),
          temperatureTimer: () => random(48, 144)
        },
        40: {
          temperature: () => random(0, -10),
          temperatureTimer: () => random(48, 120)
        },
        20: {
          temperature: () => random(-2, -20),
          temperatureTimer: () => random(24, 96)
        },
        0: {
          temperature: () => random(-3, -30),
          temperatureTimer: () => random(24, 48)
        }
      },
      season: {
        summer: {
          precipitationLevel: 4,
          precipitationIntensity: 1,
          baseTemp: 40
        },
        autumn: {
          precipitationLevel: 4,
          precipitationIntensity: 1,
          baseTemp: 30
        },
        winter: {
          precipitationLevel: 2,
          precipitationIntensity: 1,
          baseTemp: 20
        },
        spring: {
          precipitationLevel: 3,
          precipitationIntensity: 1,
          baseTemp: 30
        }
      }
    },
    start: ['seacoast', 'forest', 'hills', 'plains', 'mountains', 'river coast', 'tundra', 'ice sheet', 'seacoast'],
    location: {
      'seacoast': {
        precipitationIntensity: 3,
        origin: [
          'a coastal harbor',
          'a calm, coastal bay',
          'a large freshwater lake',
          'a wide, navigable river',
          'a river navigable by small craft',
          'the mouth of a river',
          'the confluence of two rivers',
          'a series of natural springs',
          'a well-traveled crossroads',
          'a water source and a well-traveled road'],
        vegetation: {
          desolate: 3,
          sparse: 1,
          lush: 4,
          thick: 3
        },
        plants: {
          shrubs: 1,
          bush: 1,
          trees: 2
        },
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone']
      },
      'forest': {
        precipitationIntensity: 2,
        origin: [
          'a large freshwater lake',
          'a wide, navigable river',
          'a river navigable by small craft',
          'the mouth of a river',
          'a deep freshwater river',
          'a river that runs through the forest',
          'a series of natural springs',
          'a well-traveled crossroads',
          'a road that passes through the forests',
          'a water source and a well-traveled road leading through the forest'],
        vegetation: {
          desolate: 2,
          sparse: 1,
          lush: 3,
          thick: 6
        },
        plants: {
          shrubs: 1,
          bush: 1,
          trees: 2
        },
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone']
      },
      'hills': {
        precipitationIntensity: 2,
        origin: [
          'a large freshwater lake',
          'a wide, navigable river',
          'a river navigable by small craft',
          'a road traveled by merchants on the way to another, larger city',
          'a well maintained road',
          'a road that connects two other cities',
          'a well-traveled crossroads',
          'a water source and a well-traveled road'],
        vegetation: {
          desolate: 4,
          sparse: 1,
          lush: 4,
          thick: 3
        },
        plants: {
          shrubs: 1,
          bush: 1,
          trees: 2
        },
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone']
      },
      'plains': {
        precipitationIntensity: 2,
        origin: [
          'a wide, navigable river',
          'a road traveled by merchants on the way to another, larger city',
          'a well maintained road',
          'a road that connects two other cities',
          'a well-traveled crossroads',
          'a water source and a well-traveled road'],
        vegetation: {
          desolate: 5,
          sparse: 5,
          lush: 1,
          thick: 1
        },
        plants: {
          shrubs: 1,
          bush: 1,
          trees: 2
        },
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone']
      },
      'mountains': {
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
          desolate: 5,
          sparse: 5,
          lush: 1,
          thick: 1
        },
        plants: {
          shrubs: 1,
          bush: 1,
          trees: 2
        },
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone']
      },
      'river coast': {
        precipitationIntensity: 2,
        origin: [
          'a coastal harbor',
          'a calm, coastal bay',
          'a wide, navigable river',
          'a river navigable by small craft'],
        vegetation: {
          desolate: 3,
          sparse: 1,
          lush: 4,
          thick: 3
        },
        plants: {
          shrubs: 1,
          bush: 1,
          trees: 2
        },
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone']
      },
      'tundra': {
        precipitationIntensity: 2,
        origin: [
          'a wide, navigable river',
          'a road traveled by merchants on the way to another, larger city',
          'a well maintained road',
          'a road that connects two other cities',
          'a well-traveled crossroads',
          'a water source and a well-traveled road'],
        vegetation: {
          desolate: 7,
          sparse: 3,
          lush: 1
        },
        plants: {
          shrubs: 1,
          bush: 1,
          trees: 2
        },
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone']
      },
      'ice sheet': {
        precipitationIntensity: 3,
        origin: [
          'a wide, navigable river',
          'a road traveled by merchants on the way to another, larger city',
          'a well maintained road',
          'a road that connects two other cities',
          'a well-traveled crossroads',
          'a water source and a well-traveled road'],
        vegetation: {
          desolate: 7,
          sparse: 3,
          lush: 1
        },
        plants: {
          shrubs: 1,
          bush: 1,
          trees: 2
        },
        possibleMaterials: ['hewn rock', 'stone', 'cobblestone', 'wood', 'brick', 'limestone']
      }
    }
  }
}
