export interface Building {
  key: string
  type: string
  name: string
  roll: {
    magic: string
    size: string
    diversity: string
    wealth: string
    population: string
    reputation: string
    sin: string
    roughness: string
    cleanliness: string
    expertise: string
    activity: string
  }
}

export interface BuildingRelationship {
  key: string
  buildingKey: string
  npcKey: string
  relationship: string
  reciprocalRelationship: string
  description: string | null
}
