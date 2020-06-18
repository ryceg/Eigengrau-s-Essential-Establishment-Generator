/**
 * A common interface for simple objects.
 */
export interface ConstructUtils<T = unknown> {
  create: (base?: Partial<T>) => T
  readout: (object: T) => string
}

export interface Construct {
  _uuid: string
  _type: string
}
