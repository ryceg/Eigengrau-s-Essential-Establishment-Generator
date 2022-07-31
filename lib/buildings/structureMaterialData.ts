import { constrainRecord } from '../src/constrainRecord'
import { ThresholdTable } from '../src/rollFromTable'

export interface MaterialType {
  readonly probability: number
  readonly noun: string
  readonly tier: number[]
  readonly alwaysAvailable?: boolean
  readonly roadMaterialTypes?: RoadMaterialType[]
}

export type MaterialTypes = keyof typeof structureMaterialData.types

export type RoadMaterialType = 'dirt' | 'gravel' | 'pavement' | 'brick'

export const structureMaterialData = {
  rollData: {
    wealth: {
      rolls: [
        [99, 'very solid'],
        [90, 'solid'],
        [80, 'finely crafted'],
        [70, 'well built'],
        [60, 'decently built'],
        [50, 'ageing'],
        [30, 'poorly made'],
        [20, 'run down'],
        [10, 'crumbling'],
        [0, 'structurally unsound'],
        [-100, 'death-trap tier']
        // FIXME currently defineRollDataGetter.js is mishandling rolls that are lower than any of the items.
      ] as ThresholdTable
    }
  },
  types: constrainRecord<MaterialType>()({
    'log': {
      probability: 10,
      tier: [1, 2],
      noun: 'log'
    },
    'split log': {
      probability: 10,
      tier: [1, 2],
      noun: 'split log'
    },
    // @TODO: Create a 'synonym' property so we don't have three weird duplicates.
    'wood': {
      probability: 10,
      tier: [1, 2],
      noun: 'wood',
      alwaysAvailable: true
    },
    'timber': {
      probability: 10,
      tier: [1, 2],
      noun: 'timber',
      alwaysAvailable: true
    },
    'plank': {
      probability: 10,
      tier: [1, 2],
      noun: 'plank',
      alwaysAvailable: true
    },
    'terra cotta': {
      probability: 30,
      tier: [1],
      noun: 'terra cotta'
    },
    'adobe': {
      probability: 30,
      tier: [1],
      noun: 'adobe'
    },
    'daub': {
      probability: 30,
      tier: [1],
      noun: 'daub'
    },
    'cob': {
      probability: 5,
      tier: [1],
      noun: 'cob'
    },
    'plaster': {
      probability: 30,
      tier: [3],
      noun: 'plaster'
    },
    'rock': {
      probability: 10,
      tier: [1],
      noun: 'rock',
      roadMaterialTypes: ['pavement', 'gravel']
    },
    'straw': {
      probability: 15,
      tier: [1],
      noun: 'straw'
    },
    'hewn rock': {
      probability: 5,
      tier: [2],
      noun: 'hewn rock',
      roadMaterialTypes: ['gravel']
    },
    'stone': {
      probability: 5,
      tier: [2],
      noun: 'stone',
      roadMaterialTypes: ['pavement', 'gravel']
    },
    'brick': {
      probability: 1,
      tier: [3],
      noun: 'brick',
      roadMaterialTypes: ['brick']
    },
    'clay': {
      probability: 5,
      tier: [1],
      noun: 'clay',
      roadMaterialTypes: ['dirt']
    },
    'cobblestone': {
      probability: 5,
      tier: [1],
      noun: 'cobblestone',
      roadMaterialTypes: ['gravel']
    },
    'limestone': {
      probability: 5,
      tier: [3],
      noun: 'limestone',
      roadMaterialTypes: ['pavement', 'brick', 'gravel']
    },
    'gypsum': {
      probability: 5,
      tier: [3],
      noun: 'gypsum',
      roadMaterialTypes: ['dirt']
    }
  })
}
