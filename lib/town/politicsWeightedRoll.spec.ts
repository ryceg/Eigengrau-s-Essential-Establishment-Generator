
import { setRandomFloat } from '../src/randomFloat'
import { keys } from '../src/utils'
import { politicsWeightedRoll } from './politicsWeightedRoll'
import { townData } from './townData'

describe('politicsWeightedRoll', () => {
  it('runs without crashing', () => {
    setRandomFloat(() => 0)
    for (const type of keys(townData.type)) {
      expect(typeof politicsWeightedRoll(type, 'economicIdeology')).toBe('string')
      expect(typeof politicsWeightedRoll(type, 'politicalSource')).toBe('string')
    }
  })
})
