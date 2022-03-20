import { dice, fm } from './dice'
import { setRandomFloat } from './randomFloat'

beforeEach(() => {
  // NOTE: This sets the prng to always return a constant, making it
  // not random. Tests depend on this.
  setRandomFloat(() => 1)
})

describe('dice test', () => {
  test.each([
    // equality here is weird because the prng isn't random for these tests
    { string: '1d4', equalTo: 5 },
    { string: '2d10+4', equalTo: 26 },
    { string: '    2d10+ 4', equalTo: 26 },
    { string: 'd6+3', equalTo: 10 }
  ])('when string is `$string` - correctly rolls dice', (props) => {
    const actual = dice(props.string)
    expect(actual).toBe(props.equalTo)
  })

  // NOTE: This is the most common method of using the dice fn
  test('when given a array of numbers - returns a number', () => {
    const actual = dice(2, 10)

    expect(actual).toBe(22)
  })

  test.each([
    'please roll two dice five times',
    '1d+5'
  ])('when string is $string - throws TypeError', (val) => {
    expect(() => {
      dice(val)
    }).toThrow(TypeError)
  })
})

describe('fairmath tests', () => {
  test.each([
    [100, null],
    [100, 'thirty'],
    [100, 600],
    [100, -300]
  ])('when base is %p and val is %p - throws TypeError', (base, val) => {
    expect(() => {
      fm(base, val as number)
    }).toThrow(TypeError)
  })

  test.each([
    { args: [100.2, 0], expected: 100 }, // truncates base, adds nothing
    { args: [90, -20], expected: 72 },
    { args: [90, 20], expected: 92 }
  ])('when args are $args, fair math should return $expected', ({ args, expected }) => {
    const [base, val] = args
    expect(fm(base, val)).toBe(expected)
  })
})
