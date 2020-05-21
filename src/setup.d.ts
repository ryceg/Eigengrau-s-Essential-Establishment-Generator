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
  }
  alchemistModifiers(alchemist: any): any
  createAlchemist(alchemist: any, opts:any): any
  createAlchemistName(alchemistFirstName: string): string
  createChemist(town: any): any
}
