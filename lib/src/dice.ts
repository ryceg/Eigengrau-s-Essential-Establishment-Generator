// operations, by chapel; for sugarcube 2.x
// v1.0.0
// adds a dice roller and 'fairmath'

import { randomFloat } from './randomFloat'

/**
 * Range of fairmath.
 */
const fmRange = [0, 100]

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

/* DICE */

const diceHelpers = {
  processDice: (a: string | number, b?: number) => {
    // find the number of dice and the type of die
    let roll = []
    let result = 0

    if (typeof a === 'string') {
      roll = a.split('d')
    } else if (typeof a === 'number' && b) {
      roll = [a, b]
    } else if (Array.isArray(a) && a.length >= 2) {
      a.length = 2
      roll = a
    } else {
      throw new TypeError('diceHelpers.processDice(): could not process arguments...')
    }

    /*
      we're going to roll each die. we could generate a number
      between the max and min possible simply enough,
      but real dice have weights -- rolling 3d6 is far more likely to result
      in 10 or 11 than in 3 or 18, and pure randomization will not emulate this
    */
    for (let i = 0; i < roll[0]; i++) {
      const die = Math.floor(randomFloat(1) * roll[1]) + 1
      result += die
    }

    // this preliminary result ignores modifiers; it only rolls the dice
    return result
  },
  processString: (string: string) => {
    // remove all whitespace and trim
    const trimmed = string.trim().replace(/\s/g, '')

    // check for and return the parts of the roll (2 chunks: '1d6' and '+6')
    const parsed = trimmed.match(/(\d*d\d*)(.*)/)

    if (parsed) {
      const [, roll, modifier] = parsed
      return [roll, Number(modifier)] as const // send the data off as an array
    }

    throw new Error('Invalid parsed result.')
  },
  roll: (a: string | number, b?: number) => {
    if (typeof a === 'string') {
      const result = diceHelpers.processString(a)
      /*
        The expression below rolls the dice and adds the modifier,
        which must be additive (i.e. +5 or -5, but never *5).
      */
      return diceHelpers.processDice(result[0]) + result[1]
    }
    // just run it, it'll toss out its own errors
    return diceHelpers.processDice(a, b)
  }
}

export function dice (a: string | number, b?: number) {
  return diceHelpers.roll(a, b)
}

/* FAIRMATH */

// fairmath method; fairmath(base, value)
export function fm (base: number, val: number) {
  // errors
  const [rangeStart, rangeEnd] = fmRange

  if (val == null || typeof val !== 'number' || val > 100 || val < -100) {
    throw new TypeError('fairmath given incorrect argument or an argument that is out of the valid 0-100 range.')
  }

  if (base < rangeStart || base > rangeEnd) {
    console.warn('Clamping a roll of ', base)
    base = clamp(Math.trunc(base), rangeStart, rangeEnd)
  }
  // a 0 increase or decrease; just trunc and clamp
  if (val === 0) {
    return clamp(Math.trunc(base), rangeStart, rangeEnd)
  }

  // number is negative, representing a decrease
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
