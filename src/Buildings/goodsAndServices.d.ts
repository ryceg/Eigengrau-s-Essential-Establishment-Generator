interface Setup {
  initGoodsAndServices(): void
  goodsAndServices: GoodsAndServices
}

interface GoodsAndServices {
  default: {
    create(type: string): (town: Town, opts?: unknown) => unknown
  }
  bakery: {
    create(town: Town, building: Building, opts?: unknown): Building
    name: {
      function(town: Town, building: Building): string
      unique: string[]
      noun: string[]
      nounBakedGood: string[]
      beast: string[]
      adjective: string[]
      foodAdjective: string[]
      wordNoun: string[]
    }
    PassageFormat(): string[]
    profession: {
      name: string
      opts: {
        profession: string
        hasClass: boolean
        idle: string[]
      }
    }
    bakedGoods: {
      function(): unknown
      type: Record<string, BakedGoodType>
      qualityDescriptors: Record<string, string[]>
      cookingDescriptors: Record<string, string[]>
      aroma: Record<string, string[]>
      accoutrements: Record<string, string[]>
    }
    goods: Record<string, BakedGood>
    type: string
    notableFeature: string[]
    specialty: string[]
  }
}

interface BakedGoodType {
  synonyms?: string[]
  qualities: string[]
  precedingWord: string[]
  cooking: string[]
}

interface BakedGood {
  cost: number
  description: string
  exclusions?(town: Town, building: Building): boolean
}
