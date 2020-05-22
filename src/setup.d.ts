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

  getMoralsData(npc: any): MoralsData[]
  npcTaxRate(town: any, npc: any): number
  profile(obj: any, base: string, type?: string): string
  setAsPartners(npc1: any, npc2: any): void
  createAge(npc: any): any
  isOfAge(ageStage, race, ageYears): boolean
  createBackground(npc: any): any
  createClass(town: any, npc: any): any
}


interface MoralsData {
  name: string
  note: string
}