import { generalStoreRenders } from './generalStoreRenders'
import { setRandom } from '../src/random'
import { GeneralStore } from './_common'

// Set random to be deterministic
setRandom((min: number, max: number) => (min + max) / 2)

const store = {
  roll: {
    activity: 50,
    expertise: 50,
    cleanliness: 50,
    size: 40,
    warmth: 50
  },
  activity: '',
  expertise: '',
  cleanliness: '',
  size: '',
  warmth: ''
}

test('Testing general store rendering...', () => {
  const expected = {
    roll: {
      activity: 50,
      expertise: 50,
      cleanliness: 50,
      size: 40,
      warmth: 65.5
    },
    activity: 'not terribly busy',
    cleanliness: 'somewhat messy',
    expertise: 'well-crafted',
    size: 'slightly cramped',
    warmth: 'uncomfortably warm'
  }

  generalStoreRenders(store as GeneralStore)
  expect(store).toEqual(expected)
})
