/**
  I couldn't decide on which syntax mode was best, especially for dice.
  So I wound up including a bunch of options, and they all work essentially the same way.
  Though the dice 'parser' [e.g. dice('string')] syntax and the shortcuts [e.g. x.fm(), x.d()]
  perform slightly worse / are slightly slower than the other potential syntax modes.
  Supported syntax:
    1. the dice roller: (all the following work and are all equivalent to '3d6+10')
      a. dice(3, 6) + 10
      b. dice('3d6 + 10')
      c. dice('3d6+10')
      d. dice('3d6') + 10
      e. !!! dice('3d6' + 10) -- Will roll 3 610-sided dice; the parser can't accept mixed arguments
    2. the fairmath system (based on the ChoiceScript stats system)
      a. fm(50, 40)      [=70]
    3. Notes.
      a. be careful! rolling dice with floating point numbers or negatives will cause errors
      b. likewise, fairmath will spit out errors if it's given bizarre numbers

  Options:
    fmRange   : move the minimum and maximum range for the fairmath system, if you need to
          note that the results are constrained by this range, but can never actually hit it
          that is, [0, 100] will limit the actual numbers to 1-99,
          [10, 45] would limit the results to 11-44, etc.
*/

import { logger } from '../logger'
import { randomFloat } from './randomFloat'

// Range of fairmath.
const fmRange = [0, 100]

/**
 * Die regex. Will match on the following:
 * {number?}d{number}{modifier}, e.g.,
 * 1d10
 * d10+4
 * 5d4+3
 * NOTE: floats like 1.4d6.6 will cause errors with this regex,
 *       but why are you doing that anyway?
 */
const dieStringRegex = /(\d*)d(\d+)(.*)/

interface parsedDice {
  die: number,
  times: number,
  modifier: number,
}

/**
 * Parses a raw dice-looking string (i.e., `1d4`) into
 * something more useful for rolling dice
 */
function parseDiceString (diceString: string): parsedDice | null {
  // remove all whitespace and trim
  const trimmed = diceString.trim().replace(/\s/g, '')

  // chunk the string into parts
  const [, numberOfDice, dieValue, modifier] = trimmed.match(dieStringRegex) ?? []
  // if we get 1d+5, we don't know what die to roll. We can't proceed
  if (dieValue == null) return null

  return {
    die: parseInt(dieValue, 10),
    times: numberOfDice === ''
      ? 1
      : parseInt(numberOfDice, 10),
    modifier: modifier === ''
      ? 0
      : parseInt(modifier, 10)
  }
}

/**
 * Rolls dice with a parsed string. We roll each die individually,
 * then add them together with the modifier at the end. we could
 * generate a number between the max and min possible simply enough,
 * but real dice have weights -- rolling 3d6 is far more likely to result
 * in 10 or 11 than in 3 or 18, and pure randomization will not emulate this
 */
function rollDice (parsedDice: parsedDice): number {
  const { die, times, modifier } = parsedDice
  let result = 0
  for (let i = 0; i < times; i++) {
    result += Math.floor(randomFloat(1) * die) + 1
  }
  return result + modifier
}

/**
 * Rolls a set of dice. Accepts either a string with an optional modifier
 * like `1d4+10` or accepts two numbers like `dice(1, 4)`. If it is not
 * possible to parse passed in values, will return `null`. NOTE: mixed
 * arguments will cause odd behavior. `dice('3d6' + 10)` will be parsed
 * to `dice('3d610')` due to coerced values.
 */
export function dice (a: string | number, b?: number): number {
  // e.g., dice('1d10+4')
  if (typeof a === 'string') {
    const parsedString = parseDiceString(a)
    if (!parsedString) {
      throw TypeError('Cannot parse string!')
    }
    return rollDice(parsedString)
  }
  // e.g, dice(1, 10)
  if (typeof a === 'number' && typeof b === 'number') {
    return rollDice({
      die: b,
      times: a,
      modifier: 0
    })
  }

  throw TypeError('Cannot parse args!')
}

/**
 * Fairmath is a percentile modification to the base value, meaning that you
 * add or subtract the percentage of the val to the base. When subtracting
 * percentages, we use the value itself to subtract the percentage from,
 * but for increasing a value, we use the difference between the value and 100.
 * @example
 * `fm(18, 30)` will result in 34: round((100-18)*.3) + 18
 * @example
 * `fm(18, -30)` will result in 13: 18 - round((18 * .3))
 */
export function fm (base: number, val: number) {
  const [rangeStart, rangeEnd] = fmRange

  if (val == null || typeof val !== 'number' || val > 100 || val < -100) {
    throw new TypeError('fairmath given incorrect argument or an argument that is out of the valid 0-100 range.')
  }

  if (base < rangeStart || base > rangeEnd) {
    logger.info('Clamping a roll of ', base)
    base = clamp(Math.trunc(base), rangeStart, rangeEnd)
  }
  // a 0 increase or decrease; just trunc and clamp
  if (val === 0) {
    return clamp(Math.trunc(base), rangeStart, rangeEnd)
  }

  // number is negative, representing a decrease
  //  round(x-(x*(y/100)))
  if (val < 0) {
    // make positive for the math below
    val = val * -1
    return clamp(Math.trunc(
      base - ((base - rangeStart) * (val / rangeEnd))
    ), rangeStart, rangeEnd)
  }

  // number is positive, representing an increase
  if (val > 0) {
    return clamp(Math.trunc(
      base + ((rangeEnd - base) * (val / rangeEnd))
    ), rangeStart, rangeEnd)
  }

  // something inexplicable happened
  throw new Error('fairmath encountered an unspecified error.')
}

/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * (x * 255).clamp(0, 255)
 *
 * @param min The lower boundary of the output range
 * @param max The upper boundary of the output range
 * @returns A number in the range [min, max]
 */
function clamp (value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}
