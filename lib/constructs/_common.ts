export interface Construct<T extends string = string> {
  readonly $type: T
  readonly $uuid: string
}

export interface ConstructUtils<C extends Construct = Construct> {
  create: (base?: Partial<C>) => C
  readout: (object: Readonly<C>) => string
}
