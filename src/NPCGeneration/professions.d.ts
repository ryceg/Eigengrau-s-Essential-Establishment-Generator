interface Setup {
  initTownDataProfessions(): void
  townData: TownData
}

interface TownData {
  professions: Record<string, Profession>
}

interface Profession {
  sv: number
  type: string
  sector: string
  synonyms: string[]
  description: string
  domSub?: "dom" | "sub"
  dailyWage: number
  socialClass: string
  professionOrigin?: string[]
  function?(town: Town, npc: NPC): number
  socialClassRoll(): number
  relationships?(town: Town, npc: NPC): Record<string, unknown>
}
