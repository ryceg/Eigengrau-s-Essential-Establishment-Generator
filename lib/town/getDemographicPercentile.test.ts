
import { setRandomFloat } from '../src/randomFloat'
import { Town } from './_common'
import { getDemographicPercentile } from './getDemographicPercentile'

beforeAll(() => {
  setRandomFloat(() => 0.5)
})

const getTown = (args = {}) => ({ baseDemographics: { dog: 25, cat: 25, android: 50 }, ...args } as unknown) as Town

describe('getDemographicPercentile', () => {
  it('when given demographics information - correctly returns calculated percentages', () => {
    const actual = getDemographicPercentile(getTown())

    const expected = { dog: 25, cat: 25, android: 50 }
    expect(actual).toStrictEqual(expected)
  })
})
