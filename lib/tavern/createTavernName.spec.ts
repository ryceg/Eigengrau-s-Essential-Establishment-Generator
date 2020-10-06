import { setRandom } from '../src/random'
import { createTavernName } from './createTavernName'

// Set random to be deterministic
setRandom((min: number, max: number) => Math.round((min + max) / 2))

describe('createTavernName', () => {
  it('creates a tavern name', () => {
    expect(typeof createTavernName()).toBe('string')
  })
})
