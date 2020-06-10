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
