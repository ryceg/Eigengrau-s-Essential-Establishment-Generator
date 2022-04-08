import { RollArray } from '../src/defineRollDataGetter'
import { constrainRecord } from '../src/constrainRecord'

interface RollData {
  description: string
  preceding: string
  isHidden?: true
  rolls?: RollArray;
}

export const tavernRollData = constrainRecord<RollData>()({
  wealth: {
    description: 'How wealthy is the patronage?',
    preceding: 'Tavern Wealth:',
    rolls: [
      [95, 'kingly', 800],
      [80, 'aristocratic', 400],
      [70, 'wealthy', 200],
      [60, 'comfortable', 50],
      [50, 'modest', 30],
      [25, 'poor', 10],
      [15, 'squalid', 7],
      [0, 'destitute', 6]
    ]
  },
  size: {
    description: 'How large is the tavern?',
    preceding: 'Tavern Size:',
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
    description: 'How clean is the tavern?',
    preceding: 'Tavern Cleanliness:',
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
    ]
  },
  bedCleanliness: {
    description: 'How clean are the beds?',
    preceding: 'Bed Cleanliness',
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
  },
  roughness: {
    description: 'How likely is there to be a fight here?',
    preceding: 'Tavern Roughness:',
    rolls: [
      [80, 'bloodthirsty'],
      [60, 'rough'],
      [50, 'alright'],
      [40, 'placid'],
      [30, 'calm'],
      [20, 'tranquil'],
      [10, 'serene'],
      [0, 'utterly serene']
    ]
  },
  reputation: {
    description: 'How well known is this place? Does it have a legendary ale, or is it just another hole in the wall?',
    preceding: 'Tavern Reputation',
    rolls: [
      [80, 'famous'],
      [60, 'well known'],
      [40, 'famoush-ish'],
      [20, 'reviled'],
      [0, 'infamous']
    ]
  },
  sin: {
    description: 'Is it a respectable venue, or a wretched hive of scum and villainy??',
    preceding: 'Tavern Sin',
    rolls: [
      [80, 'extremely shady'],
      [60, 'dodgy'],
      [40, 'somewhat shady'],
      [20, 'honest'],
      [0, 'a paragon of virtue']
    ]
  }
})
