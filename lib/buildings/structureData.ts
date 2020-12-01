import { ThresholdTable } from '../src/rollFromTable'

export interface RoofType {
  probability: number
  noun: string
  verb: string
  canBeColoured?: boolean
}

export interface MaterialType {
  probability: number
  noun: string
  tier: number[]
  alwaysAvailable?: boolean
  canBeUsedAsRoad: boolean
  roadMaterialType?: RoadMaterialTypes[]
}

export type MaterialTypes = keyof typeof structureData.material.types

type RoadMaterialTypes = 'dirt' | 'gravel' | 'pavement' | 'brick'

export const structureData = {
  colour: [
    'red',
    'blue',
    'grey',
    'black',
    'white',
    'yellow',
    'orange'
  ] as string[],
  rollData: {
    size: {
      rolls: [
        [99, 'cavernous'],
        [95, 'cavernous'],
        [80, 'huge'],
        [70, 'quite large'],
        [60, 'large'],
        [50, 'spacious'],
        [40, 'average sized'],
        [30, 'somewhat cramped'],
        [20, 'small'],
        [10, 'tiny'],
        [0, 'extremely cramped']
      ] as ThresholdTable
    }
  },
  material: {
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
    types: {
      'log': {
        probability: 10,
        tier: [1, 2],
        noun: 'log',
        canBeUsedAsRoad: false
      },
      'split log': {
        probability: 10,
        tier: [1, 2],
        noun: 'split log',
        canBeUsedAsRoad: false
      },
      'wood': {
        probability: 10,
        tier: [1, 2],
        noun: 'wood',
        alwaysAvailable: true,
        canBeUsedAsRoad: false
      },
      'timber': {
        probability: 10,
        tier: [1, 2],
        noun: 'timber',
        alwaysAvailable: true,
        canBeUsedAsRoad: false
      },
      'plank': {
        probability: 10,
        tier: [1, 2],
        noun: 'plank',
        alwaysAvailable: true,
        canBeUsedAsRoad: false
      },
      'terra cotta': {
        probability: 30,
        tier: [1],
        noun: 'terra cotta',
        canBeUsedAsRoad: false
      },
      'adobe': {
        probability: 30,
        tier: [1],
        noun: 'adobe',
        canBeUsedAsRoad: false
      },
      'daub': {
        probability: 30,
        tier: [1],
        noun: 'daub',
        canBeUsedAsRoad: false
      },
      'cob': {
        probability: 5,
        tier: [1],
        noun: 'cob',
        canBeUsedAsRoad: false
      },
      'plaster': {
        probability: 30,
        tier: [3],
        noun: 'plaster',
        canBeUsedAsRoad: false
      },
      'rock': {
        probability: 10,
        tier: [1],
        noun: 'rock',
        canBeUsedAsRoad: true,
        roadMaterialType: ['pavement', 'gravel']
      },
      'straw': {
        probability: 15,
        tier: [1],
        noun: 'straw',
        canBeUsedAsRoad: false
      },
      'hewn rock': {
        probability: 5,
        tier: [2],
        noun: 'hewn rock',
        canBeUsedAsRoad: false,
        roadMaterialType: ['gravel']
      },
      'stone': {
        probability: 5,
        tier: [2],
        noun: 'stone',
        canBeUsedAsRoad: false,
        roadMaterialType: ['pavement', 'gravel']
      },
      'brick': {
        probability: 1,
        tier: [3],
        noun: 'brick',
        canBeUsedAsRoad: false,
        roadMaterialType: ['brick']
      },
      'clay': {
        probability: 5,
        tier: [1],
        noun: 'clay',
        canBeUsedAsRoad: true,
        roadMaterialType: ['dirt']
      },
      'cobblestone': {
        probability: 5,
        tier: [1],
        noun: 'cobblestone',
        canBeUsedAsRoad: false,
        roadMaterialType: ['gravel']
      },
      'limestone': {
        probability: 5,
        tier: [3],
        noun: 'limestone',
        canBeUsedAsRoad: true,
        roadMaterialType: ['pavement', 'brick', 'gravel']
      },
      'gypsum': {
        probability: 5,
        tier: [3],
        noun: 'gypsum',
        canBeUsedAsRoad: true,
        roadMaterialType: ['dirt']
      }
    } as Record<string, MaterialType>
  },
  roof: {
    colour: [
      'red',
      'blue',
      'grey',
      'black',
      'white',
      'yellow',
      'orange'
    ] as string[],
    rollData: {
      wealth: {
        rolls: [
          [99, 'immaculately maintained'],
          [90, 'perfectly maintained'],
          [80, 'well maintained'],
          [60, 'weathered'],
          [40, 'shabby'],
          [30, 'moss covered'],
          [20, 'patchy'],
          [0, 'hole riddled'],
          [-100, 'hole riddled']
        ] as ThresholdTable
      }
    },
    types: {
      thatch: {
        probability: 40,
        noun: 'thatch',
        verb: 'thatched'
      },
      straw: {
        probability: 30,
        noun: 'straw',
        verb: 'straw'
      },
      plank: {
        probability: 20,
        noun: 'plank',
        verb: 'planked'
      },
      tile: {
        probability: 25,
        canBeColoured: true,
        noun: 'tile',
        verb: 'tiled'
      },
      shingle: {
        probability: 10,
        canBeColoured: true,
        noun: 'shingle',
        verb: 'shingled'
      }
    } as Record<string, RoofType>
  }
}
