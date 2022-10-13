import { RollArray } from '../src/defineRollDataGetter'
import { constrainRecord } from '../src/constrainRecord'

interface RollData {
  description: string
  preceding: string
  rolls?: RollArray
}

export const castleRollData = constrainRecord<RollData>()({
  condition: {
    description: 'What condition is the castle in?',
    preceding: 'Castle Condition:',
    rolls: [
      [90, 'perfect; upkeep has been fastidious'],
      [70, 'good; it been well-maintained'],
      [50, 'decent; there are only a few cracks in the walls, but the place can withstand a siege'],
      [40, 'fair; the castle has seen better days'],
      [20, 'poor; the walls and towers are in dire need of repairs'],
      [0, 'decrepit; the place is practically a ruin']
    ]
  },
  age: {
    description: 'When was the castle built?',
    preceding: 'Castle Age:',
    rolls: [
      [90, 'in a past age'],
      [80, 'a couple hundred years ago'],
      [70, 'hundreds of years ago'],
      [60, 'perhaps a hundred years ago'],
      [50, 'a few decades ago'],
      [40, 'within living memory'],
      [30, 'three score years ago'],
      [20, 'a couple of decades ago'],
      [10, 'three decades ago'],
      [0, 'within the past decade']
    ]
  },
  size: {
    description: 'How large is the castle?',
    preceding: 'Castle Size:',
    rolls: [
    // the castle is _____
      [100, 'towering', 'so unbelievably large that it looms over the landscape, jutting out of the horizon, with hundreds of rooms inside'],
      [90, 'imposingly big', 'incredibly large, looming over the landscape. It no doubt has hundreds of rooms'],
      [80, 'incredibly large', 'massive, even for a castle; there are hundreds of rooms, more than enough to get lost in'],
      [70, 'very big', 'very large, even by castle standards. Inside, there is no shortage of space for every type of room under the sun'],
      [60, 'large', 'large. There is more than enough space inside for all types of rooms and purposes'],
      [50, 'average sized', 'of an average size, for a castle, with space limited by the stonework that was available at the time of its construction'],
      [40, 'somewhat small', 'slightly smaller than average, with more modest sized dining halls and ball rooms'],
      [30, 'tactically sized', 'more modest than one would expect- space is used carefully inside the castle'],
      [20, 'small', 'rather small for a castle. The rooms inside are smaller than average, though it is the servants that suffer the most by the lack of space'],
      [10, 'tiny', 'very small indeed, lacking the space and amenities that most expect of a castle'],
      [0, 'miniature', 'uncomfortably small, with the luxury of space that one typically associates with a castle nowhere to be found']
    ]
  },
  landSize: {
    description: 'How large is the castle?',
    preceding: 'Castle Size:',
    rolls: [
    // the castle's lands are _____
      [100, 'all-encompassing', 'absolutely enormous, encompassing hundreds of acres'],
      [90, 'massive', 'extremely large, with plenty of fields that are used for training exercises'],
      [80, 'very large', 'quite big, with acres upon acres of land that can be retrofitted for crops in times of war'],
      [70, 'rather large', 'very spacious, with plenty of space for jousting and other pursuits'],
      [60, 'spacious', 'spacious, with land available for jousting and other sundry uses'],
      [50, 'roomy', 'roomy, with enough land not occupied by houses that space can be cleared for jousting when needed'],
      [40, 'somewhat cramped', 'mostly tied up with buildings; there are plenty of spaces, but none very large that aren\'t already being used'],
      [30, 'cramped', 'cramped, with buildings occupying most of the real estate'],
      [20, 'small', 'unfortunately, not that spacious. It is clear that poor planning is to blame, with buildings well established in places where they probably should not have been built'],
      [10, 'tiny', 'virtually non-existant; the walls defend the castle, with few buildings outside the castle proper'],
      [0, 'non-existant', 'non-existant; the walls are not part of the castle proper purely so it is easier to repair them, but there is no room for any buildings outside the castle']
    ]
  }
})
