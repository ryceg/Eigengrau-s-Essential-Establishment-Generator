export interface NPC {
  gender: 'man' | 'woman'
  age: number
  ageStage: string
  profession: string
  roll: Record<string, number>
  partnerID?: string
  relationships: string[]
}

export interface Relationship {
  relationship: string
  reciprocal?: string
  probability: number
  base: {
    profession?: string
    socialClass?: string
  }
  exclusions?(town: unknown, npc: NPC): boolean | undefined
}
