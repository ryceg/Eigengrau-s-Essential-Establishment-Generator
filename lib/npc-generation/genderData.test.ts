import { GenderName, getOppositeGender, getNpcGender, getRandomGender, isValidNPCGender } from './genderData'
import { setRandom } from '../src/random'
import { Town } from '../town/_common'
import { NPC } from '../npc-generation/_common'

const getTown = (args = {}) => ({ dominantGender: 'woman', roll: { genderMakeup: 50 }, ...args }) as Town

beforeAll(() => {
  setRandom(() => 50)
})

describe('getOppositeGender', () => {
  test.each([
    { genderName: 'man', expected: 'woman' },
    { genderName: 'woman', expected: 'man' },
    { genderName: 'nonbinary', expected: 'man' },
    { genderName: 'entity', expected: 'man' }
  ])('when provided $genderName - returns correct opposite gender', ({ genderName, expected }) => {
    const actual = getOppositeGender(genderName as GenderName)
    expect(actual).toBe(expected)
  })
})

describe('isValidNPCGender', () => {
  test('when npc does not have a gender - returns false', () => {
    const town = getTown()
    const npc = { roll: { gender: 1 } } as Partial<NPC>

    const actual = isValidNPCGender(town, npc)

    expect(actual).toBe(false)
  })

  test('when npc does not have a gender roll object - returns false', () => {
    const town = getTown()
    const npc = { gender: 'nonbinary' } as Partial<NPC>

    const actual = isValidNPCGender(town, npc)

    expect(actual).toBe(false)
  })

  test('when npc should be dominant gender but is not - returns false', () => {
    const town = getTown()
    const npc = { gender: 'nonbinary', roll: { gender: 100 } } as Partial<NPC>

    const actual = isValidNPCGender(town, npc)

    expect(actual).toBe(false)
  })

  test('when npc should be dominant gender and is - returns true', () => {
    const town = getTown()
    const npc = { gender: 'woman', roll: { gender: 1 } } as Partial<NPC>

    const actual = isValidNPCGender(town, npc)

    expect(actual).toBe(true)
  })

  test('when npc should be non-dominant gender and is - returns true', () => {
    const town = getTown()
    const npc = { gender: 'man', roll: { gender: 100 } } as Partial<NPC>

    const actual = isValidNPCGender(town, npc)

    expect(actual).toBe(true)
  })

  test('when npc should be non-dominant gender and is not - returns false', () => {
    const town = getTown()
    const npc = { gender: 'woman', roll: { gender: 1 } } as Partial<NPC>

    const actual = isValidNPCGender(town, npc)

    expect(actual).toBe(true)
  })
})

describe('getNpcGender', () => {
  test('when npc has no gender - returns random gender', () => {
    const town = getTown()
    const npc = {} as Partial<NPC>

    const actual = getNpcGender(town, npc)

    expect(actual).toBe('woman')
  })

  test('when npc roll is less than town dominant gender - returns opposite gender', () => {
    const town = getTown()
    const npc = { gender: 'nonbinary', roll: { gender: 1 } } as Partial<NPC>

    const actual = getNpcGender(town, npc)

    expect(actual).toBe('woman')
  })

  test('when npc roll is less than town dominant gender - returns opposite gender', () => {
    const town = getTown()
    const npc = { gender: 'nonbinary', roll: { gender: 100 } } as Partial<NPC>

    const actual = getNpcGender(town, npc)

    expect(actual).toBe('man')
  })
})

describe('getRandomGender', () => {
  test('when given town with dominant gender - returns dominant gender', () => {
    const town = getTown()

    const actual = getRandomGender(town)

    expect(actual).toBe('woman')
  })
})
