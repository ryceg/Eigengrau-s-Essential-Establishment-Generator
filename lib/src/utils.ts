/**
 * An alternative, stricter typed version of `Object.keys`.
 *
 * @example
 * const obj = { a: 0, b: 1 }
 * Object.keys(obj) // string[]
 * keys(obj) // "a" | "b"
 */
export const keys = <T>(object: T) => {
  return Object.keys(object) as (keyof T)[]
}
