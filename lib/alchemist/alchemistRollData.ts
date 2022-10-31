import { constrainRecord } from '../src/constrainRecord'
import { ThresholdTable } from '../src/rollFromTable'

interface RollData {
  description: string
  preceding: string
  rolls?: ThresholdTable
}

export const alchemistRollData = constrainRecord<RollData>()({
  wealth: {
    description: 'How successful is the alchemist?',
    preceding: 'Alchemist Wealth:',
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
    description: 'How large is the shop?',
    preceding: 'Alchemist Size:',
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
    description: 'How clean is the alchemist?',
    preceding: 'Alchemist Cleanliness:',
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
    description: 'How skilled is the alchemist? Can they make complex potions, or are they limited to a simple healing potion?',
    preceding: 'Potion Making Skills:',
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
  reputation: {
    description: 'Is it well known, or is it a hobby shop?',
    preceding: 'Alchemist Reputation:'
  },
  activity: {
    description: 'How busy is the alchemist?',
    preceding: 'Alchemist Activity:'
  },
  priceModifier: {
    description: 'How do the prices here compare to your average alchemist?',
    preceding: 'Alchemist Price Modifier:'
  }
})
