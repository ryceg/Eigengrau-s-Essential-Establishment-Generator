import { constrainRecord } from '../src/constrainRecord'
import { ThresholdTable } from '../src/rollFromTable'

interface RollData {
  description: string
  preceding: string
  rolls?: ThresholdTable
}

export const smithyRollData = constrainRecord<RollData>()({
  wealth: {
    description: 'How successful is the smithy?',
    preceding: 'Smithy Wealth:',
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
    description: 'How large is the smithy?',
    preceding: 'Smithy Size:',
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
    description: 'How clean is the smithy?',
    preceding: 'Smithy Cleanliness:',
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
  expertise: {
    description: 'How skilled is the blacksmith?',
    preceding: 'Smithy Expertise:',
    rolls: [
      [80, 'masterful'],
      [70, 'exceptional'],
      [60, 'superior quality'],
      [50, 'finely crafted'],
      [40, 'well crafted'],
      [30, 'sloppily made'],
      [20, 'somewhat amateur'],
      [10, 'amateur'],
      [0, 'blatantly amateur']
    ]
  },
  activity: {
    description: 'How busy is the blacksmith? Is there a backlog a mile long, or are apprentices sitting idle?',
    preceding: 'Smithy:',
    rolls: [
      [80, 'extremely busy'],
      [70, 'very busy'],
      [60, 'rather busy'],
      [50, 'reasonably busy'],
      [40, 'not terribly busy'],
      [30, 'reasonably quiet'],
      [20, 'rather quiet'],
      [10, 'totally empty'],
      [0, 'totally empty']
    ]
  },
  reputation: {
    description: 'Is it well known, or is it a hobby shop?',
    preceding: 'Smithy Reputation:'
  },
  priceModifier: {
    description: 'How do the prices here compare to your average smithy?',
    preceding: 'Smithy Price Modifier:'
  }
})
