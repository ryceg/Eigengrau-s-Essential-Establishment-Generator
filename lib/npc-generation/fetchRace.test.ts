import { setRandomFloat } from '../src/randomFloat'
import { fetchRace } from './fetchRace'
import { Town } from '../town/_common'

beforeAll(() => {
  setRandomFloat(() => 0.5)
})

const getTown = (args = {}) => ({ baseDemographics: { dog: 2, cat: 1, android: 100 }, ...args } as unknown) as Town

describe('fetchRace', () => {
  test('when given a town - fetches a race based on races\'s population weight', () => {
    const actual = fetchRace(getTown())
    expect(actual).toBe('android')
  })
})
