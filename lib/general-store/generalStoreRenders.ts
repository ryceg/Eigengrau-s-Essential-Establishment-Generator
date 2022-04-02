import { constrainRecord } from 'lib/src/constrainRecord'
import { getRolledFromTable, ThresholdTable } from 'lib/src/rollFromTable'
import { random } from '../src/random'
import { keys, last } from '../src/utils'
import { GeneralStore } from './_common'

export function generalStoreRenders (generalStore: GeneralStore) {
  // update warmth based on store size
  let warmthRoll = random(1, 100)
  const size = generalStore.roll.size
  if (size > 80) {
    generalStore.size = 'huge'
    warmthRoll -= 20
  } else if (size > 70) {
    generalStore.size = 'quite large'
    warmthRoll -= 15
  } else if (size > 60) {
    generalStore.size = 'large'
    warmthRoll -= 10
  } else if (size > 50) {
    generalStore.size = 'spacious'
    warmthRoll -= 5
  } else if (size > 40) {
    generalStore.size = 'medium'
  } else if (size > 30) {
    generalStore.size = 'slightly cramped'
    warmthRoll += 15
  } else if (size > 20) {
    generalStore.size = 'small'
    warmthRoll += 15
  } else if (size <= 20) {
    generalStore.size = 'tiny'
    warmthRoll += 30
  }

  // set warmth roll
  generalStore.roll.warmth = warmthRoll

  // actually add attributes to store object
  for (const key of keys(attributes)) {
    const table = attributes[key]
    const roll = generalStore.roll[key]

    generalStore[key] = getRolledFromTable(table, roll) || last(table)[1]
  }
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
  ]
})
