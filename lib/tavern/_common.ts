export interface Tavern {
  type: string
  draw: string
  name: string
  material: string
  roll: {
    wealth: number
    population: number
    sin: number
    roughness: number
    cleanliness: number
    bedCleanliness: number
    size: number
    reputation: number
  }
  priceModifier: number
  lodging: number
  food: number
  wealth: string
  sin: string
  size: string
  roughness: string
  cleanliness: string
  diversity: string
  reputation: string
  stageDescriptor: string
  colour1: string
  colour2: string
}
