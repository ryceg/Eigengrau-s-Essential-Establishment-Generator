export interface Building {
  key: string
  type: string
  name: string
  roll: BuildingRolls
  wealth: string
  sin: string
  size: string
  activity: string
  roughness: string
  cleanliness: string
  diversity: string
  reputation: string
  material: {
    noun: string
    probability: number
  }
}

export interface BuildingRolls {
  activity: number
  cleanliness: number
  diversity: number
  expertise: number
  magic: number
  population: number
  reputation: number
  roughness: number
  sin: number
  size: number
  wealth: number
}

export interface BuildingRelationship {
  key: string
  buildingKey: string
  npcKey: string
  relationship: string
  reciprocalRelationship: string
  description: string | null
}
