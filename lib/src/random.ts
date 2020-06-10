let randomFn = (): number => {
  throw new Error('Function has not been set!')
}

export function setRandom (fn: (...args: unknown[]) => number) {
  randomFn = fn
}

export function random <T>(array: T[]): T
export function random (max: number): number
export function random (min: number, max: number): number
export function random (min: unknown, max?: unknown): unknown {
  if (Array.isArray(min)) {
    return min[random(min.length - 1)]
  }

  if (typeof min === 'number') {
    if (typeof max === 'number') {
      return Math.floor(randomFn() * max) + min
    }
    if (typeof max === 'undefined') {
      return random(0, min)
    }
  }

  throw new TypeError('Invalid arguments!')
}
