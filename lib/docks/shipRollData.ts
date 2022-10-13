import { ThresholdTable } from '../src/rollFromTable'
import { constrainRecord } from '../src/constrainRecord'

interface RollData {
  rolls: ThresholdTable
}

export const shipRollData = constrainRecord<RollData>()({
  size: {
    rolls: [
    // it is a _______ $ship.type
      [90, 'huge'],
      [80, 'impressively sized'],
      [60, 'somewhat impressive'],
      [50, 'average sized'],
      [30, 'somewhat unimpressive'],
      [20, 'cluttered'],
      [10, 'cluttered and cramped']
    ]
  },
  cleanliness: {
    rolls: [
    // ... that is
      [80, 'absolutely spotless; it must have been cleaned recently, as no barnacles adorn the bottom of the ship'],
      [80, 'spotless, save for a couple barnacles'],
      [70, 'in quite good condition, with only a couple barnacles clinging on to the bottom'],
      [50, 'in reasonable condition, with some barnacles hanging on, creating drag at speed'],
      [40, 'in need of a good clean, with barnacles clinging to the bottom of the ship'],
      [30, 'in desperate need of a thorough de-barnacleing, as well as a general clean'],
      [20, 'filthy and laden with barnacles covering the bottom of the boat']
    ]
  }
})
