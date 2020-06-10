/**
 * An alternative, stricter typed version of `Object.keys`.
 *
 * @example
 * const obj = { a: 0, b: 1 }
 * Object.keys(obj) // string[]
 * keys(obj) // "a" | "b"
 */
export function keys <T> (object: T) {
  return Object.keys(object) as (keyof T)[]
}

/**
 * An alternative to `Object.assign`,
 * which asserts that the properties are added to the type.
 *
 * @example
 * const obj = { a: 0, b: 1}
 * assign(obj, { c: 2 }) // Typescript now knows that c is available.
 */
export function assign <T, S> (target: T, source: S): asserts target is T & S {
  Object.assign(target, source)
}

/**
 * Error class for assertion errors.
 */
export class AssertionError extends Error {}

/**
 * Asserts that a condition is true.
 * Any code after this assertion will consider the condition to be true.
 * See https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
 *
 * @example
 * // Before, 'value' is of an unknown type.
 * assert(typeof value === 'string')
 * // After, 'value' is known to be a string.
 */
export function assert (condition: boolean, message?: string): asserts condition {
  if (!condition) {
    throw new AssertionError(message)
  }
}
