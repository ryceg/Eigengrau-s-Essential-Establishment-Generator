// Attaches itself to the *global* node object.
global.setup = {}
require('../EssentialEstablishmentGenerator/Tools/matchFirst')

const map = {
  2: 'A',
  1: 'B',
  0: 'C'
}

describe('matchFirst', () => {
  it('equalTo', () => {
    const { equalTo } = setup.matchFirst
    expect(equalTo(3, map)).toEqual(undefined)
    expect(equalTo(2, map)).toEqual('A')
    expect(equalTo(1, map)).toEqual('B')
    expect(equalTo(0, map)).toEqual('C')
  })

  it('notEqualTo', () => {
    const { notEqualTo } = setup.matchFirst
    expect(notEqualTo(3, map)).toEqual('A')
    expect(notEqualTo(2, map)).toEqual('B')
    expect(notEqualTo(1, map)).toEqual('A')
    expect(notEqualTo(0, map)).toEqual('A')
  })

  it('largerThan', () => {
    const { largerThan } = setup.matchFirst
    expect(largerThan(3, map)).toEqual('A')
    expect(largerThan(2, map)).toEqual('B')
    expect(largerThan(1, map)).toEqual('C')
    expect(largerThan(0, map)).toEqual(undefined)
  })

  it('largerThanOrEqualTo', () => {
    const { largerThanOrEqualTo } = setup.matchFirst
    expect(largerThanOrEqualTo(3, map)).toEqual('A')
    expect(largerThanOrEqualTo(2, map)).toEqual('A')
    expect(largerThanOrEqualTo(1, map)).toEqual('B')
    expect(largerThanOrEqualTo(0, map)).toEqual('C')
  })

  it('smallerThan', () => {
    const { smallerThan } = setup.matchFirst
    expect(smallerThan(3, map)).toEqual(undefined)
    expect(smallerThan(2, map)).toEqual(undefined)
    expect(smallerThan(1, map)).toEqual('A')
    expect(smallerThan(0, map)).toEqual('A')
  })

  it('smallerThanOrEqualTo', () => {
    const { smallerThanOrEqualTo } = setup.matchFirst
    expect(smallerThanOrEqualTo(3, map)).toEqual(undefined)
    expect(smallerThanOrEqualTo(2, map)).toEqual('A')
    expect(smallerThanOrEqualTo(1, map)).toEqual('A')
    expect(smallerThanOrEqualTo(0, map)).toEqual('A')
  })
})
