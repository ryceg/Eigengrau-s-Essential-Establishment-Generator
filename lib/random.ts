let seeded = (): number => {
  throw new Error("Function has not been set!")
}

export function setRandom(callback: () => number) {
  seeded = callback
}

export function random<T>(array: T[]): T
export function random(max: number): number
export function random(min: number, max: number): number
export function random(min: unknown, max?: unknown): unknown {
  if (Array.isArray(min)) {
    return min[random(min.length - 1)]
  }

  if (typeof min === "number") {
    if (typeof max === "number") {
      return Math.floor(seeded() * max) + min
    }
    if (typeof max === "undefined") {
      return random(0, min)
    }
  }

  throw new TypeError("Invalid arguments!")
}
