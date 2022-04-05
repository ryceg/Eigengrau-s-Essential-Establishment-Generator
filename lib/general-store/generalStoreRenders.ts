import { constrainRecord } from '../src/constrainRecord'
import { getRolledFromTable, ThresholdTable } from '../src/rollFromTable'
import { random } from '../src/random'
import { keys, last } from '../src/utils'
import { GeneralStore } from './_common'

export function generalStoreRenders (generalStore: GeneralStore) {
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
  if (size > 80) return -20
  if (size > 70) return -15
  if (size > 60) return -10
  if (size > 50) return -5
  if (size > 40) return 15
  if (size > 30) return 15
  if (size > 20) return 15
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
