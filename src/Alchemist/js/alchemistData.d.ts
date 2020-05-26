interface Setup {
  alchemist: {
    rollData: {
      wealth: [number, string][]
      size: [number, string][]
      cleanliness: [number, string][]
      expertise: [number, string][]
    }
    get: {
      lookAround(alchemist: Alchemist): LookAround[]
      priceTalk(alchemist: Alchemist): PriceTalk[]
    }
    name: {
      noun: string[]
      adjective: string[]
      rider: string[]
    }
  }
}

interface LookAround {
  cleanliness: number
  wealth: number
  note: string
}

interface PriceTalk {
  priceModifier: number
  wealth: number
  priceTalk: string
}
