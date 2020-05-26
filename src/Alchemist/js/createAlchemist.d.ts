interface Setup {
  createAlchemist(town: Town, opts?: any): Alchemist
}

interface Alchemist {
  [key: string]: any
}
