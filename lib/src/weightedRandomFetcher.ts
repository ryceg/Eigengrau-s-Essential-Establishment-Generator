import { randomFloat } from './randomFloat'

/**
 * @param town Needed because everything needs town to evaluate
 *
 * @param args The object containing the objects that you're drawing from
 *
 * @param obj The optional npc, building, or whatever that is needed for functions.
 *
 * @param exclusionFunction The optional global exclusion testing function;
 * this is for things like pulling just the paper type objects from plothooks.
 * Saves on LoC. Leave exclusionFunction blank if everything in your object is
 * always going to be allowed.
 *
 * @param output What should be outputted at the end. Set to 'object' to return the whole object.
 * defaultProbability is the optional default unit. You won't usually need to supply this.
 */
export const weightedRandomFetcher: WRF = (town, args, obj, exclusionFunction, output = 'function', defaultProbability = 10) => {
  console.groupCollapsed('Running a weighted random search...')
  console.log({ args, obj, exclusionFunction, output, defaultProbability })

  const pool = []

  let totalWeight = 0

  for (const arg of Object.values(args)) {
    let isValid: boolean
    let fnValid: boolean

    if (typeof arg.exclusions === 'function' && obj) {
      isValid = arg.exclusions(town, obj)
    } else {
      isValid = true
    }

    if (typeof arg.probability === 'number' && arg.probability <= 0) {
      isValid = false
    }

    if (typeof exclusionFunction === 'function') {
      fnValid = exclusionFunction(town, arg)
    } else {
      fnValid = true
    }

    if (isValid === true && fnValid === true) {
      pool.push(arg)
      totalWeight += arg.probability || defaultProbability
    }
  }

  let random = Math.floor(randomFloat(1) * totalWeight)
  let selected

  for (const item of pool) {
    random -= item.probability || defaultProbability
    if (random < 0) {
      selected = item
      break
    }
  }

  console.log(selected)
  console.groupEnd()

  if (typeof selected === 'undefined') {
    throw new Error('Selected is not defined.')
  }

  // If the string 'object' is passed, then it returns the object itself.
  if (output === 'object') {
    return selected
  }

  const property = selected[output]
  if (!property) {
    throw new Error(`The randomly fetched object does not have the property ${output}.`)
  }

  if (typeof property === 'function') {
    const value = property(town, obj)
    console.log(value)
    return value
  }

  console.log(property)
  return property
}

interface Arg<T> {
  probability?: number
  function?(...args: unknown[]): unknown
  exclusions?(town: unknown, obj: T): boolean
  [key: string]: unknown
}

type WRF = <T, A extends Arg<T>>(
  town: unknown,
  args: Record<string, A>,
  obj?: T,
  exclusionFunction?: (town: unknown, obj: A) => boolean,
  output?: string,
  defaultProbability?: number
) => unknown
