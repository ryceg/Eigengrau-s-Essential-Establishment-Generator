import { defineRollDataGetter, RollArray } from '../src/defineRollDataGetter'
import { getUUID, keys } from '../src/utils'
import { random } from '../src/random'
import { Construct, ConstructUtils } from './_common'

interface Cabin extends Construct<'cabin'> {
  wordNoun?: string
  material: string
  feature: string
  insideFeature: string
  size: string
  cleanliness: string
  bedCleanliness: string
  roll: {
    size: number
    cleanliness: number
    bedCleanliness: number
  }
}

export const cabin: ConstructUtils<Cabin> = {
  create: base => {
    const cabin: Cabin = {
      $uuid: getUUID(),
      $type: 'cabin',
      material: random(['wooden', 'wooden', 'wooden', 'stone']),
      feature: random(features),
      insideFeature: random(insideFeatures),
      size: '',
      cleanliness: '',
      bedCleanliness: '',
      roll: {
        size: random(1, 100),
        cleanliness: random(1, 100),
        bedCleanliness: random(1, 100)
      },
      ...base
    }

    setRollGetters(cabin)

    return cabin
  },
  readout: cabin => {
    return `The ${cabin.material} ${cabin.wordNoun || cabin.$type} is ${cabin.size}. ${cabin.feature} Inside, it is ${cabin.cleanliness}. ${cabin.insideFeature} There is a bed, which is ${cabin.bedCleanliness}.`
  }
}

const features = [
  'The door has deep scratch marks in it.',
  'There is a pair of large boots by the door.',
  'The steps leading to the door are rather dirty.',
  'The chimney has a bird nesting in it.',
  'The windows are rather grotty, with cobwebs all over.',
  'There is a rusty shovel leaning against the door.',
  'There is an empty water bowl next to the door.'
]

const insideFeatures = [
  'There are seemingly hundreds of dishes stacked, in desperate need of a clean.',
  'There is a toy pram in the corner of the room.',
  'A decorative tapestry is hanging up on one of the walls.',
  'There is a rather impressive bookcase in the corner of the room.',
  'There is a hunk of bread lying on the table.',
  'The room feels cramped, with tables and chairs cluttering everything up.',
  'The room feels spacious, with a single table and chair in the corner.',
  'There is a huge cast iron pot sitting in the fireplace.',
  'Dried herbs sit in bunches on the table.'
]

function setRollGetters (cabin: Cabin) {
  for (const propName of keys(rollData)) {
    defineRollDataGetter(cabin, rollData[propName].rolls, propName)
  }
}

const rollData = {
  size: {
    rolls: [
      [95, 'huge'],
      [80, 'quite large'],
      [70, 'large'],
      [60, 'spacious'],
      [50, 'relatively spacious'],
      [40, 'average sized'],
      [30, 'somewhat cramped'],
      [20, 'small'],
      [10, 'tiny'],
      [0, 'extremely cramped']
    ] as RollArray
  },
  cleanliness: {
    rolls: [
      [80, 'absolutely spotless'],
      [75, 'spotless'],
      [70, 'nice and well cleaned'],
      [60, 'hygienic'],
      [50, 'decently hygienic'],
      [40, 'slightly grubby'],
      [30, 'quite dirty'],
      [20, 'filthy'],
      [10, 'rather filthy'],
      [0, 'absolutely putrid']
    ] as RollArray
  },
  bedCleanliness: {
    rolls: [
      [90, 'perfectly prepared, with fresh sheets and a lemon scent in the air of the room'],
      [80, 'recently prepared and well cleaned'],
      [70, 'freshly cleaned and neat'],
      [60, 'tidy and neat'],
      [50, 'reasonably clean'],
      [40, 'somewhat tidy'],
      [30, 'disgusting'],
      [20, 'teeming with rats'],
      [10, 'rather filthy'],
      [0, 'festering with bugs']
    ] as RollArray
  }
}
