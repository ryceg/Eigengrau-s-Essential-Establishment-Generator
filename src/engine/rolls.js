import Randoma from 'randoma'

/**
 * All functions use this pseudo-random number generation library.
 * @see https://www.npmjs.com/package/randoma
 */
const seeded = new Randoma({ seed: Math.random() })

/**
 * Returns a random number between zero and the defined maximum value.
 * @param {number} max
 */
export function random (max) {
  return seeded.integerInRange(0, max)
}

/**
 * Returns a random number between the defined minimum and maximum value.
 * @param {number} min
 * @param {number} max
 */
export function randomRange (min, max) {
  return seeded.integerInRange(min, max)
}

/**
 * Returns a random value from an array.
 * @template T
 * @param {T[]} array
 */
export function randomValue (array) {
  return array[seeded.integerInRange(0, array.length - 1)]
}
