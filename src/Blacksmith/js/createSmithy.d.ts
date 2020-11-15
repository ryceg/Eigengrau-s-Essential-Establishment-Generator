interface Setup {
  createSmithy(town: Town, opts?: Partial<Smithy>): Smithy
}

export interface Smithy {
  wordNoun: string
  passageName: string
  initPassage: string
  buildingType: string
  weapons: string[]
  mundane: string[]
}
