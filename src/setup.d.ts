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
  alchemistModifiers(alchemist: any): any
  createAlchemist(alchemist: any, opts:any): any
  createAlchemistName(alchemistFirstName: string): string
  createChemist(town: any): any

  flora: {
    flower: {
      stemP: string[]
      stemS: string[]
      bush: string[]
    }
    fruit: {
      fruitP: string[]
      fruitS: string[]
      tree: string[]
    }
    vegetable: {
      vegetableP: string[]
      vegetableS: string[]
    }
    tree: {
      typeS: string[]
      typeArticle: string[]
    }
  }

  getMoralsData(npc: any): MoralsData[]
  npcTaxRate(town: any, npc: any): number
  profile(obj: any, base?: string, type?: string): string
  setAsPartners(npc1: any, npc2: any): void
  createAge(npc: any): any
  isOfAge(ageStage, race, ageYears): boolean
  createBackground(npc: any): any
  createClass(town: any, npc: any): any
  createFamily(town: any, npc: any): void
  expandFamily(town: any, npc: any): void
  fetchFamily(town: any, npc: any): Record<string, any>
  createHistory(town: any, npc: any): any
  createLifeEvents(town: any, npc: any): any
  createName(parameters: CreateNameParameters): string
  createNPC(town: any, base?: any): any
  createSocialClass(town: any, npc: any): any
}

interface CreateNameParameters {
  race?: string
  gender?: string
  firstOrLast?: string
}

interface MoralsData {
  name: string
  note: string
}