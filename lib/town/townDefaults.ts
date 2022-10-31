import { ThresholdTable } from '../src/rollFromTable'
import { Seasons, Biome } from '../src/terrain'
import { WeightRecord } from '../types'
import { TownType } from './townData'

export const townDefaults: {
  type: WeightRecord<TownType>
  season: WeightRecord<Seasons>
  terrain: WeightRecord<Biome>,
  lifestyleStandards: ThresholdTable
} = {
  type: {
    hamlet: 1,
    village: 2,
    town: 3,
    city: 2
  },
  terrain: {
    temperate: 3,
    tropical: 1,
    polar: 1,
    arid: 1
  },
  season: {
    summer: 1,
    autumn: 1,
    winter: 1,
    spring: 1
  },
  lifestyleStandards: [
    [1000, 'aristocratic'],
    [400, 'wealthy'],
    [200, 'comfortable'],
    [100, 'modest'],
    [20, 'poor'],
    [10, 'squalid'],
    [0, 'wretched']
  ]
}
