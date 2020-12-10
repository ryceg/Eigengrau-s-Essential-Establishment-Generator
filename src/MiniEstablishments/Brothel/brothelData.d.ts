interface Setup {
  brothel: {
    rollData: {
      wealth: {
        description: string
        preceding: string
        rolls: [number, string][]
      }
      size: {
        description: string
        preceding: string
        rolls: [number, string][]
      }
      cleanliness: {
        description: string
        preceding: string
        rolls: [number, string][]
      }
      bedCleanliness: {
        description: string
        preceding: string
        rolls: [number, string][]
      }
    }
    name: string[]
    /** @example "Apparently, it specializes in ____" */
    specialty: string[]
    /** @example "When people talk about the brothel, they say ____" */
    talk(): string[]
    rumour: string[]
    brothelColours: string[]
    brothelScents: string[]
    /**
     * @description these are the lines used to select the notice action in BrothelOutput
     * @example "You notice _____"
     */
    notice(): string[]
    idle(): string[]
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
    customers: Customer[]
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
