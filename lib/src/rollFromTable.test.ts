import { getRolledFromTable, ThresholdTable } from './rollFromTable'

describe('getRolledFromTable', () => {
  const table: ThresholdTable = [
    [3, 'a'],
    [2, 'b'],
    [1, 'c']
  ]

  it('should return the value for each exact match', () => {
    expect(getRolledFromTable(table, 3)).toBe('a')
    expect(getRolledFromTable(table, 2)).toBe('b')
    expect(getRolledFromTable(table, 1)).toBe('c')
  })

  it('should return the value for the first threshold lower than the roll', () => {
    expect(getRolledFromTable(table, 3.5)).toBe('a')
    expect(getRolledFromTable(table, 2.5)).toBe('b')
    expect(getRolledFromTable(table, 1.5)).toBe('c')
  })

  it('should return the first value if the roll higher than the first threshold', () => {
    expect(getRolledFromTable(table, 4)).toBe('a')
  })

  it('should return the last value if the roll is lower than the lowest', () => {
    expect(getRolledFromTable(table, 0)).toBe('c')
  })
})
