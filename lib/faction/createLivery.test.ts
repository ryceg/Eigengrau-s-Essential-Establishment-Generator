import { setRandom } from '../src/random'
import { keys } from '../src/utils'
import { createLivery } from './createLivery'
import { factionData } from './factionData'

describe('createLivery', () => {
  setRandom((_, max: number) => max)

  it('can create a livery object for every compatible faction type', () => {
    let calledNumberOfTimes = 0

    for (const type of keys(factionData)) {
      if (factionData[type].livery) {
        expect(createLivery(type)).toBeDefined()
        calledNumberOfTimes += 1
      }

      expect(calledNumberOfTimes).toBeGreaterThanOrEqual(1)
    }
  })
})
