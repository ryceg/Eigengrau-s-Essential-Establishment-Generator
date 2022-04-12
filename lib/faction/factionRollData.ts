import { constrainRecord } from '../src/constrainRecord'
import { ThresholdTable } from '../src/rollFromTable'

interface RollData {
  rolls: ThresholdTable
}

export const factionRollData = constrainRecord<RollData>()({
  reputation: {
    rolls: [
      [95, 'excellent'],
      [90, 'very good'],
      [80, 'quite good'],
      [70, 'good'],
      [60, 'above average'],
      [55, 'slightly above average'],
      [50, 'average'],
      [45, 'slightly below average'],
      [40, 'poor'],
      [30, 'quite poor'],
      [20, 'very poor'],
      [0, 'extremely poor']
    ]
  },
  resources: {
    rolls: [
      [95, 'limitless'],
      [90, 'near limitless'],
      [80, 'extensive'],
      [70, 'significant'],
      [60, 'many'],
      [55, 'decent'],
      [50, 'average'],
      [45, 'slightly below average'],
      [40, 'somewhat limited'],
      [30, 'limited'],
      [20, 'quite poor'],
      [10, 'extremely poor'],
      [0, 'destitute']
    ]
  }
})
