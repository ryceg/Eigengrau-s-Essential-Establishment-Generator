
import { setRandomFloat } from '../src/randomFloat'
import { keys } from '../src/utils'
import { politicsWeightedRoll } from './politicsWeightedRoll'
import { townData } from './townData'

// Set random to be deterministic
setRandomFloat(() => 0)

describe('politicsWeightedRoll', () => {
  it('runs without crashing', () => {
    for (const type of keys(townData.type)) {
      expect(typeof politicsWeightedRoll(type, 'economicIdeology')).toBe('string')
      expect(typeof politicsWeightedRoll(type, 'politicalSource')).toBe('string')
    }
  })
})
