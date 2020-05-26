interface Setup {
  createAlchemist(town: Town, opts?: any): Alchemist
}

interface Alchemist extends Building {}
