export interface Building {
  key: string
}

export interface BuildingRelationship {
  key: string
  buildingKey: string
  npcKey: string,
  relationship: string,
  reciprocalRelationship: string
  description: string | null
}
