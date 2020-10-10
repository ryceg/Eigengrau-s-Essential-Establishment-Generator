
import { setRandom } from '../src/random'
import { keys } from '../src/utils'
import { createName } from './createName'
import { raceTraits } from './raceTraits'

// Set random to be deterministic
setRandom((min: number, max: number) => Math.round((min + max) / 2))

describe('createName', () => {
  it('creates a name', () => {
    expect(typeof createName()).toBe('string')
  })

  it('creates a male name', () => {
    expect(typeof createName({ gender: 'man' })).toBe('string')
  })

  it('creates a female name', () => {
    expect(typeof createName({ gender: 'woman' })).toBe('string')
  })

  it('creates a male first name for every race', () => {
    for (const raceName of keys(raceTraits)) {
      expect(typeof createName({ gender: 'man', race: raceName })).toBe('string')
    }
  })

  it('creates a female first name for every race', () => {
    for (const raceName of keys(raceTraits)) {
      expect(typeof createName({ gender: 'woman', race: raceName })).toBe('string')
    }
  })

  it('creates a last name for every race', () => {
    for (const raceName of keys(raceTraits)) {
      expect(typeof createName({ race: raceName, firstOrLast: 'lastName' })).toBe('string')
    }
  })
})
