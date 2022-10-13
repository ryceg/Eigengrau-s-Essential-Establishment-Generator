import { constrainRecord } from '../src/constrainRecord'
import { getRolledFromTable, ThresholdTable } from '../src/rollFromTable'
import { random } from '../src/random'
import { keys, last } from '../src/utils'
import { GeneralStoreRolls } from './_common'

type Attributes = keyof typeof attributes

interface Renderable extends Record<Attributes, string> {
  roll: Pick<GeneralStoreRolls, Attributes>
}

export function generalStoreRenders (generalStore: Renderable) {
  // set warmth roll
  generalStore.roll.warmth = random(1, 100) + getWarmthRollModfier(generalStore.roll.size)

  // actually add attributes to store object
  for (const key of keys(attributes)) {
    const table = attributes[key]
    const roll = generalStore.roll[key]

    generalStore[key] = getRolledFromTable(table, roll) || last(table)[1]
  }
}

function getWarmthRollModfier (size: number) {
  const warmthTable: [number, number][] = [
    [80, -20],
    [70, -15],
    [60, -10],
    [50, -5],
    [40, 15],
    [30, 15],
    [20, 15]
  ]
  for (const [roll, warmthModifier] of warmthTable) {
    if (size > roll) {
      return warmthModifier
    }
  }
  return 30
}

const attributes = constrainRecord<ThresholdTable>()({
  warmth: [
    [80, 'swelteringly hot'],
    [70, 'extremely warm'],
    [60, 'uncomfortably warm'],
    [50, 'nice and toasty'],
    [40, 'quite warm'],
    [30, 'warm'],
    [20, 'mild'],
    [0, 'cold']
  ],
  cleanliness: [
    [80, 'fastidious'],
    [70, 'very tidy'],
    [60, 'tidy'],
    [50, 'reasonably tidy'],
    [40, 'somewhat messy'],
    [30, 'rather messy'],
    [20, 'very messy'],
    [0, 'filthy']
  ],
  expertise: [
    [80, 'masterful'],
    [70, 'exceptional'],
    [60, 'superior quality'],
    [50, 'finely-crafted'],
    [40, 'well-crafted'],
    [30, 'somewhat well made'],
    [20, 'somewhat amateur'],
    [20, 'blatantly amateur']
  ],
  activity: [
    [80, 'extremely busy'],
    [70, 'very busy'],
    [60, 'rather busy'],
    [50, 'reasonably busy'],
    [40, 'not terribly busy'],
    [30, 'not busy'],
    [20, 'rather quiet'],
    [0, 'very quiet']
  ],
  size: [
    [80, 'huge'],
    [70, 'quite large'],
    [60, 'large'],
    [50, 'spacious'],
    [40, 'medium'],
    [30, 'slightly cramped'],
    [20, 'small'],
    [0, 'tiny']
  ]
})
