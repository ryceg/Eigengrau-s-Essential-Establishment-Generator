import { setRandomFloat } from './randomFloat'
import { getUUID } from './utils'

// Set random to be deterministic
setRandomFloat(() => 0)

describe('utils', () => {
  describe(getUUID.name, () => {
    it('generates a string', () => {
      expect(typeof getUUID()).toBe('string')
    })
    it('generates a string with the correct length', () => {
      expect(getUUID()).toHaveLength(36)
    })
  })
})
