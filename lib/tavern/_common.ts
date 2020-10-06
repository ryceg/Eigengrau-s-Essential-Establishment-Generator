export interface Tavern {
  type: string
  draw: string
  material: string
  roll: {
    wealth: number
    population: number
    sin: number
    roughness: number
    cleanliness: number
    size: number
    reputation: number
  }
  priceModifier: number
}
