let randomFloatFn = (): number => {
  throw new Error('Function has not been set!')
}

export function setRandomFloat (fn: (...args: unknown[]) => number) {
  randomFloatFn = fn
}

export function randomFloat (max: number): number
export function randomFloat (min: number, max: number): number
export function randomFloat (min: unknown, max?: unknown): unknown {
  if (typeof min === 'number') {
    if (typeof max === 'number') {
      return Math.floor(randomFloatFn() * max) + min
    }
    if (typeof max === 'undefined') {
      return randomFloat(0, min)
    }
  }

  throw new TypeError('Invalid arguments!')
}
