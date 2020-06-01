interface Setup {
  adventure: {
    create(town: Town): any
    location: {
      dungeon: Record<string, (town: Town, adventure: Adventure) => string>
      wilderness: Record<string, (town: Town, adventure: Adventure) => string>
      other: Record<string, (town: Town, adventure: Adventure) => string>
    }
    introduction: string[]
    climax: string[]
    otherGoal: string[]
    backdrop: string[]
    quandary: string[]
    twist: string[]
    villainActions: string[]
    sidequest: Record<string, (town: Town, adventure: Adventure) => string>
    patron: Record<string, Partial<NPC>>
    ally: Record<string, Partial<NPC>>
    villain: Record<string, (town: Town, adventure: Adventure) => Partial<NPC>>
  }
}

interface Adventure {
  [key: string]: any
}
