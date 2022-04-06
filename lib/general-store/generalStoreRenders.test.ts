import { generalStoreRenders } from './generalStoreRenders'
import { setRandom } from '../src/random'

// Set random to be deterministic
setRandom((min: number, max: number) => (min + max) / 2)

describe('generalStoreRenders', () => {
  it('mutates the general store into the expected result', () => {
    const originalObject = {
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

    const expectedResult = {
      roll: {
        activity: 50,
        expertise: 50,
        cleanliness: 50,
        size: 40,
        warmth: 65.5
      },
      activity: 'reasonably busy',
      cleanliness: 'reasonably tidy',
      expertise: 'finely-crafted',
      size: 'medium',
      warmth: 'uncomfortably warm'
    }

    generalStoreRenders(originalObject)
    expect(originalObject).toEqual(expectedResult)
  })
})
