interface Setup {
  initTavernData(): void
  tavern: {
    rollData: {
      wealth: [number, string, number, number][]
      size: [number, string][]
      cleanliness: [number, string][]
      bedCleanliness: [number, string][]
      expertise: [number, string][]
      roughness: [number, string][]
      reputation: [number, string][]
    }
    games: TavernGame[]
    stageDescriptor: string[]
    fun: string[]
    get: {
      customers: Customers[]
      patrons(town: Town, tavern: Tavern): string
      carousing(town: Town, tavern: Tavern): string
      entertainment(tavern: Tavern): string
      cheapFeature(tavern: Tavern): string
      averageFeature(tavern: Tavern): string
      wealthyFeature(tavern: Tavern): string
      lookAround(tavern: Tavern): TavernLookAround[]
      menu(tavern: Tavern): TavernMenu[]
      sleep(tavern: Tavern): TavernSleep[]
      draws(town: Town, tavern: Tavern): TavernDraw
      description(tavern: Tavern): TavernDescription[]
    }
    patrons: Record<string, PatronFn>
    specialBrew: SpecialBrew[]
    overheard: string[]
  }
}

interface Tavern extends Building {
  bartender: NPC
}

interface SpecialBrew {
  name: string
  type: string
  cost: number
  description: string
  author: string
}

type PatronFn = (town: Town, tavern: Tavern) => string

interface TavernDescription {
  size: number
  wealth: number
  note: string
}

interface TavernDraw {
  draw: string
  drawFeature: string
  drawFunction?(tavern: unknown): unknown
}

interface TavernSleep {
  restfulness: number
  sleepEasy: number
  note: string
}

interface TavernMenu {
  wealth: number
  roughness: number
  note: string
}

interface TavernLookAround {
  population: number
  roughness: number
  note: string
}

interface TavernGame {
  name: string
  type: string
  description: string
  rules: string
  bet: number
}

interface Customers {
  relationshipDescription: string
  relationships: {
    building: {
      relationship: string
      reciprocalRelationship?: string
    }
    associatedNPC?: {
      relationship: string
      reciprocalRelationship?: string
    }
  }
  base?: {
    profession?: string
  }
  description(building: Tavern, npc: NPC): unknown
}
