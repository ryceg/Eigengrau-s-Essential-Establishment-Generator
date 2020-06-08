interface Setup {
  initGoodsAndServices(): void
  goodsAndServices: GoodsAndServices
}

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
    bakedGoods: {
      function(): unknown
      type: Record<string, BakeryGoodType>
      qualityDescriptors: Record<string, string[]>
      cookingDescriptors: Record<string, string[]>
      aroma: Record<string, string[]>
      accoutrements: Record<string, string[]>
    }
  }
  florist: GoodsAndService
  tailor: GoodsAndService
  butcher: GoodsAndService
  cobbler: GoodsAndService
  fletcher: GoodsAndService
  barber: GoodsAndService
}

interface GoodsAndService {
  create(town: Town, building: Building, opts?: unknown): Building
  name: {
    function(town: Building): string
    unique: string[]
    noun: string[]
    adjective: string[]
    wordNoun: string[]
    adjectivePerson?: string[]
  }
  PassageFormat(): string[]
  profession: GoodsAndServicesProfession
  goods: Record<string, GeneralGood>
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

interface BakeryGoodType {
  synonyms?: string[]
  qualities: string[]
  precedingWord: string[]
  cooking: string[]
}

interface GeneralGood {
  cost: number
  type?: string
  description: string
  exclusions?(town: Town, building: Building): boolean
}
