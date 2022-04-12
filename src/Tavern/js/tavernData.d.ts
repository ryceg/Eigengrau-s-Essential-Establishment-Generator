import { Town, Tavern } from '@lib'

interface Setup {
  initTavernData(): void
  tavern: {
    games: TavernGame[]
    stageDescriptor: string[]
    fun: string[]
    get: {
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
    }
    patrons: Record<string, PatronFn>
    specialBrew: SpecialBrew[]
    overheard: string[]
  }
}

interface SpecialBrew {
  name: string
  type: string
  cost: number
  description: string
  author: string
}

type PatronFn = (town: Town, tavern: Tavern) => string

interface TavernDraw {
  draw: string
  drawFeature: string
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
