// eslint-disable-next-line @typescript-eslint/no-unused-vars
let randomFn = (...args: unknown[]): number => {
  throw new Error('Function has not been set!')
}

export function setRandom (fn: typeof randomFn) {
  randomFn = fn
}

export function random <T>(array: T[]): T
export function random (max: number): number
export function random (min: number, max: number): number
export function random (min: unknown, max?: unknown): unknown {
  if (Array.isArray(min)) {
    return min[randomFn(min.length - 1)]
  }
  if (typeof max === 'undefined') {
    randomFn(min)
  }
  randomFn(min, max)
}
