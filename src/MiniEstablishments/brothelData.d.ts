interface Setup {
  brothel: {
    rollData: {
      wealth: [number, string][]
      size: [number, string][]
      cleanliness: [number, string][]
      bedCleanliness: [number, string][]
    }
    name: string[]
    specialty: string[]
    talk: string[]
    rumour: string[]
    brothelColours: string[]
    brothelScents: string[]
    notice: string[]
    idle: string[]
    pimp: Record<string, Partial<NPC>>
    harlot: {
      create(town: Town, brothel: Building, base: Partial<NPC>): string
      type: Record<string, HarlotTypeData>
      feature: string[]
      skill: string[]
      physicalTrait: string[]
      flawSeverity: string[]
      looks: string[]
    }
  }
}

interface HarlotTypeData {
  gender: string
  ageStage?: string
  calmTrait?: string
  note?: string
  weight?: string
  background?: string
  vocalPattern?: string
  callbackFunction?(town: Town, npc: NPC): void
}
