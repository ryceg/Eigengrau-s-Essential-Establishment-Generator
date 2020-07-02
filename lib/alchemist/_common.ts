
export interface Alchemist {
  name: string
  roll: {
    size: number
    activity: number
    roughness: number
    cleanliness: number
    wealth: number
    expertise: number
    reputation: number
    population: number
  }
  size: string
  activity: string
  material: {
    noun: string
  }
  priceModifier: number
}
