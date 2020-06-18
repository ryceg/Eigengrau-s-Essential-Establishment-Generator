export interface Construct<T extends string = string> {
  $type: T
  $uuid: string
}

export interface ConstructUtils<C extends Construct = Construct> {
  create: (base?: Partial<C>) => C
  readout: (object: C) => string
}
