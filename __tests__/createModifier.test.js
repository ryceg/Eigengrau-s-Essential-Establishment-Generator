// Attaches itself to the *global* node object.
global.setup = {}
require('../EssentialEstablishmentGenerator/Tools/createModifier')

const map = {
  2: 'A',
  1: 'B',
  0: 'C'
}

describe('createModifier', () => {
  it('works with strict equality', () => {
    const getFirstEqualTo = setup.createModifier((value, key) => {
      return value === key
    })

    expect(getFirstEqualTo(3, map)).toEqual(undefined)
    expect(getFirstEqualTo(2, map)).toEqual('A')
    expect(getFirstEqualTo(1, map)).toEqual('B')
    expect(getFirstEqualTo(0, map)).toEqual('C')
  })

  it('works with larger than comparison', () => {
    const getFirstLargerThan = setup.createModifier((value, key) => {
      return value > key
    })

    expect(getFirstLargerThan(2, map)).toEqual('B')
    expect(getFirstLargerThan(1, map)).toEqual('C')
    expect(getFirstLargerThan(0, map)).toEqual(undefined)
  })
})
