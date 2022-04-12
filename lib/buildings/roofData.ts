import { ThresholdTable } from '../src/rollFromTable'

export interface RoofType {
  probability: number;
  noun: string;
  verb: string;
  canBeColoured?: boolean;
}

export const roofData: {
  colour: string[]
  rollData: {
    wealth: {
      rolls: ThresholdTable
    }
  }
  types: Record<string, RoofType>
} = {
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
      ]
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
  }
}
