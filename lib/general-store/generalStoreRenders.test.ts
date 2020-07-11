import { generalStoreRenders } from './generalStoreRenders'
import { setRandom } from '../src/random'

// Set random to be deterministic
setRandom((min: number, max: number) => (min + max) / 2)

const store = {
  roll: {
    warmth: 50,
    cleanliness: 50,
    expertise: 50,
    activity: 50
  },
  size: 40,
  warmth: '',
  cleanliness: '',
  expertise: '',
  activity: ''
}

test('Testing general store rendering...', () => {
  const expected = {
    roll: {
      cleanliness: 50,
      expertise: 50,
      activity: 50,
      warmth: 65.5
    },
    size: 'slightly cramped',
    warmth: 'uncomfortably warm',
    cleanliness: 'somewhat messy',
    expertise: 'well-crafted',
    activity: 'not terribly busy'
  }
  expect(generalStoreRenders(store)).toEqual(expected)
})
