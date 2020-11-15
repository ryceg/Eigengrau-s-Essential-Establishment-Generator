import { defineRollDataGetter } from './defineRollDataGetter'
import { ThresholdTable } from './rollFromTable'

describe('defineRollDataGetter', () => {
  it('handles exact rolls', () => {
    const wealthyTavern = {
      name: 'Test Tavern',
      roll: {
        wealth: 99
      },
      wealth: undefined,
      rollData: {
        wealth: [
          [99, 'very solid'],
          [90, 'solid'],
          [50, 'not solid']
        ] as ThresholdTable
      }
    }
    defineRollDataGetter(wealthyTavern, wealthyTavern.rollData.wealth, 'wealth')
    // This should roll a '99' and go with the default
    expect(wealthyTavern.wealth).toEqual('very solid')
  })
  it('handles rolls between range', () => {
    const wealthyTavern = {
      name: 'Test Tavern',
      roll: {
        wealth: 95
      },
      wealth: undefined,
      rollData: {
        wealth: [
          [99, 'very solid'],
          [90, 'solid'],
          [50, 'not solid']
        ] as ThresholdTable
      }
    }
    defineRollDataGetter(wealthyTavern, wealthyTavern.rollData.wealth, 'wealth')
    // This should roll a '95' and go between '90' and '99'
    expect(wealthyTavern.wealth).toEqual('solid')
  })
  it('handles negative rolls', () => {
    const wealthyTavern = {
      name: 'Test Tavern',
      roll: {
        wealth: -5
      },
      wealth: undefined,
      rollData: {
        wealth: [
          [99, 'very solid'],
          [90, 'solid'],
          [50, 'not solid']
        ] as ThresholdTable
      }
    }
    defineRollDataGetter(wealthyTavern, wealthyTavern.rollData.wealth, 'wealth')
    // This should roll a '-5' and then default to the last value in array
    expect(wealthyTavern.wealth).toEqual('not solid')
  })
})
