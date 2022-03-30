import { DeepReadonly, WeightRecord } from '../types'
import { randomFloat } from './randomFloat'
import { validateWeight } from './weightRandom'

/**
 * An alternative, stricter typed version of `Object.keys`.
 *
 * @example
 * const obj = { a: 0, b: 1 }
 * Object.keys(obj) // string[]
 * keys(obj) // "a" | "b"
 */
export function keys<T> (object: T) {
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
export function assign<T, S> (target: T, source: S): asserts target is T & S {
  Object.assign(target, source)
}

type Key = string | number | symbol;

export function has<K extends Key, T> (key: K, t: T): t is T & Record<K, unknown> {
  return key in t
}

export function isObject (maybeObj: unknown): maybeObj is Record<string | number | symbol, unknown> {
  return typeof maybeObj === 'object' && maybeObj !== null
}

/**
 * Freezes objects to prevent accidental mutation.
 * To improve speed, it does not apply in production mode.
 */
export function freeze<T> (obj: T) {
  if (process.env.NODE_ENV === 'production') {
    return obj as Readonly<T>
  }
  return Object.freeze(obj)
}

/**
 * Recursive variant of `freeze`
 */
export function deepFreeze <T> (obj: T) {
  if (process.env.NODE_ENV === 'production') {
    return obj as DeepReadonly<T>
  }
  for (const key of keys(obj)) {
    if (Object.isFrozen(obj[key])) {
      continue
    }
    if (typeof obj[key] === 'object') {
      deepFreeze(obj[key])
    }
  }
  return freeze(obj) as DeepReadonly<T>
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
export function assert (
  condition: boolean,
  message?: string
): asserts condition {
  if (!condition) {
    throw new AssertionError(message)
  }
}

/**
 * Returns the first element of an array or string.
 */
export function first(array: string): string
export function first<T>(array: T[]): T
export function first<T> (array: T[] | string) {
  return array[0]
}

/**
 * Returns the last element of an array.
 */
export function last(array: string): string
export function last<T>(array: T[]): T
export function last<T> (array: T[] | string) {
  return array[array.length - 1]
}

export function clamp (value: number, min?: number, max?: number) {
  if (!min) min = 0
  if (!max) max = 100
  return Math.min(Math.max(value, min), max)
}

/**
 * Somewhat low quality UUID generation,
 * based on the seeded randomness.
 */
export function getUUID () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, char => {
    const randomValue = randomFloat(16) | 0
    const value = char === 'x' ? randomValue : (randomValue & 0x3) | 0x8
    return value.toString(16)
  })
}

export function isDefined<T> (value?: T): value is T {
  return typeof value !== 'undefined'
}

export function isUndefined<T> (value?: T): value is undefined {
  return typeof value === 'undefined'
}

/**
 * Removes a value from the array.
 */
export function removeFromArray<T> (array: T[], value: T) {
  array.splice(array.indexOf(value), 1)
}

/**
 * Uses a predicate callback to remove a value from an array.
 */
export function removeFromArrayByPredicate<T> (array: T[], predicate: (value: T, index: number, array: T[]) => boolean) {
  array.splice(array.findIndex(predicate), 1)
}

/**
 * Calls a function N number of times.
 */
export function repeat (fn: (index: number) => void, times: number) {
  for (let i = 0; i < times; i++) fn(i)
}

export function capitalizeFirstLetter (text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function sumWeights<T extends string> (
  defaultWeights: WeightRecord<T>,
  customWeights: WeightRecord<T>
) {
  const finalWeights: WeightRecord<T> = {}

  for (const name of keys(customWeights)) {
    const weight = validateWeight(customWeights[name])
    const defaultWeight = defaultWeights[name] ?? 0
    finalWeights[name] = defaultWeight + weight
  }

  return finalWeights
}
