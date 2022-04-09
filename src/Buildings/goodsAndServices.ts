import { Town, Building } from '@lib'

interface GoodsAndServices {
  default: {
    create(
      type: keyof GoodsAndServices
    ): (town: Town, opts?: unknown) => unknown
  }
  bakery: GoodsAndService & {
    name: {
      nounBakedGood: string[]
      beast: string[]
      foodAdjective: string[]
    }
  }
  confectionary: GoodsAndService & {
    name: {
      foodAdjective: string[]
    }
  }
  florist: GoodsAndService
  tailor: GoodsAndService
  butcher: GoodsAndService
  cobbler: GoodsAndService
  fletcher: GoodsAndService
  barber: GoodsAndService
  jeweller: GoodsAndService
}

export interface GoodsAndService {
  create(town: Town, building: Building, opts?: unknown): Building
  name: {
    function(town: Town, building: Building): string
    unique: string[]
    noun: string[]
    adjective: string[]
    wordNoun: string[]
    adjectivePerson?: string[]
  }
  wordNoun?: string
  PassageFormat(): string[]
  profession: GoodsAndServicesProfession
  goods: GeneralGood[]
  type: string
  notableFeature: string[]
  specialty: string[]
}

interface GoodsAndServicesProfession {
  name: string
  opts: {
    profession: string
    hasClass: boolean
    idle: string[]
  }
}
interface GeneralGood {
  summary: string
  cost: number
  type?: string
  description: string
  exclusions?(town: Town, building: Building): boolean
}
