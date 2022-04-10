import { constrainRecord } from '../src/constrainRecord'
import { ThresholdTable } from '../src/rollFromTable'

interface RollData {
  description: string
  preceding: string
  rolls: ThresholdTable
}

export const brothelRollData = constrainRecord<RollData>()({
  wealth: {
    description: 'How successful is the brothel?',
    preceding: 'Brothel Wealth:',
    rolls: [
      [95, 'kingly'],
      [80, 'aristocratic'],
      [70, 'wealthy'],
      [60, 'comfortable'],
      [50, 'modest'],
      [25, 'poor'],
      [15, 'squalid'],
      [0, 'destitute']
    ]
  },
  size: {
    description: 'How large is the brothel?',
    preceding: 'Brothel Size:',
    rolls: [
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
    ]
  },
  cleanliness: {
    description: 'How clean is the brothel?',
    preceding: 'Brothel Cleanliness:',
    rolls: [
      [80, 'fastidious'],
      [70, 'very tidy'],
      [60, 'tidy'],
      [50, 'reasonably tidy'],
      [40, 'somewhat messy'],
      [30, 'rather messy'],
      [20, 'very messy'],
      [10, 'extremely messy'],
      [0, 'dangerously messy']
    ]
  },
  bedCleanliness: {
    description: 'How clean are the brothel beds?',
    preceding: 'Brothel Bed Cleanliness:',
    rolls: [
      [80, 'perfectly prepared, with fresh sheets and a lemon scent in the air of the room'],
      [75, 'recently prepared and well cleaned'],
      [70, 'freshly cleaned and neat'],
      [60, 'tidy and neat'],
      [50, 'reasonably clean'],
      [40, 'somewhat tidy'],
      [30, 'disgusting'],
      [20, 'teeming with rats'],
      [10, 'rather filthy'],
      [0, 'festering with bugs']
    ]
  }
})
