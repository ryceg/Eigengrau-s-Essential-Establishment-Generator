interface Setup {
  initCastleData(): void
  createCastle(town: Town, opts?: Partial<Castle>): Castle
}

interface CastleData {
  name: {
    unique: string[]
    wordNouns: string[]
    nouns: string[]
    adjectives: string[]
    morphemes: {
      prefix: string[]
      suffix: string[]
    }
  }
  location: Record<string, CastleLocation>
  builtBy: string[]
  knownFor: string[]
  ruler: {
    lookingFor: string[]
    getAcquisitionMethod(town: Town, castle: Castle): any
    types: CastleRulerType
  }
  lookingFor(town: Town): string

}

interface CastleRulerType {
  probability?: number
  type: string
  lookingFor?: string[]
  acquisitionMethod: string
  base: Partial<NPC>
}

interface CastleLocation {
  vignette: string[]
  defenseReason: string[]
}
