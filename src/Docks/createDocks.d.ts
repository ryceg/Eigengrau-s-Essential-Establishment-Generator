interface Setup {
  createDocks(town: Town, opts?: Partial<Docks>): Docks
}

interface Docks {
  [key: string]: any
}