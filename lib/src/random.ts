// eslint-disable-next-line @typescript-eslint/no-unused-vars
let randomFn = (...args: unknown[]): number => {
  throw new Error('Function has not been set!')
}

export function setRandom (fn: typeof randomFn) {
  randomFn = fn
}

export function random <T>(array: readonly T[]): T
export function random (max: number): number
export function random (min: number, max: number): number
export function random (min: unknown, max?: unknown): unknown {
  if (Array.isArray(min)) {
    return min[randomFn(0, min.length - 1)]
  }
  if (typeof max === 'undefined') {
    return randomFn(0, min)
  }
  return randomFn(min, max)
}
