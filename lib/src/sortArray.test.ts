import { sortArray } from './sortArray'

describe('sortArray', () => {
  it('maps a dictionary into a sorted array', () => {
    const dictionary = {
      human: 16.12,
      dragonborn: 0.3,
      dwarf: 6.1249
    }

    expect(sortArray(dictionary)).toEqual([
      ['dragonborn', 0.3],
      ['dwarf', 6.1249],
      ['human', 16.12]
    ])
  })
})
