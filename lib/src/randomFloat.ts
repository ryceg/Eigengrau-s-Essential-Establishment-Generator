// eslint-disable-next-line @typescript-eslint/no-unused-vars
let randomFloatFn = (...args: unknown[]): number => {
  throw new Error('Function has not been set!')
}

export function setRandomFloat (fn: typeof randomFloatFn) {
  randomFloatFn = fn
}

export function randomFloat (max: number): number
export function randomFloat (min: number, max: number): number
export function randomFloat (min: unknown, max?: unknown): unknown {
  if (typeof max === 'undefined') {
    return randomFloatFn(min)
  }
  return randomFloatFn(min, max)
}
