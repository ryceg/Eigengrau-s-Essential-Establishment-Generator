import { getWeightedIndex } from './math'
import { setRandomFloat } from './randomFloat'

beforeAll(() => {
  // NOTE: This sets the prng to always return a constant, making it
  // not random. Tests depend on this.
  setRandomFloat(() => 0.5)
})

describe('getWeightedIndex', () => {
  it('when passed a set of numbers - returns the correct index', () => {
    const nums = [1, 10, 1, 1, 3]
    const actual = getWeightedIndex(nums)

    expect(actual).toBe(1)
  })
})
