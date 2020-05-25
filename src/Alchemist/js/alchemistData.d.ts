interface Setup {
  alchemist: {
    rollData: {
      wealth: [number, string][]
      size: [number, string][]
      cleanliness: [number, string][]
      expertise: [number, string][]
    }
    get: {
      lookAround(alchemist: any): {
        cleanliness: number
        wealth: number
        note: string
      }[]
      priceTalk(alchemist: any): {
        priceModifier: number
        wealth: number
        priceTalk: string
      }[]
    }
    name: {
      noun: string[]
      adjective: string[]
      rider: string[]
    }
  }
}
