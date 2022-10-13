import { setRandom } from '../src/random'
import { createTavernName } from './createTavernName'

describe('createTavernName', () => {
  it('creates a tavern name', () => {
    setRandom((_, max: number) => max)
    expect(typeof createTavernName()).toBe('string')
  })
})
