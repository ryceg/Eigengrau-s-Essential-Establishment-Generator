import { Town, NPC } from '@lib'

interface Setup {
  adventure: {
    create(town: Town): Adventure
    location: {
      dungeon: AdventureLocation
      wilderness: AdventureLocation
      other: AdventureLocation
    }
    introduction: string[]
    climax: string[]
    otherGoal: string[]
    backdrop: string[]
    quandary: string[]
    twist: string[]
    villainActions: string[]
    sidequest: Record<string, (town: Town, adventure: Partial<Adventure>) => string>
    patron: Record<string, Partial<NPC>>
    ally: Record<string, Partial<NPC>>
    villain: Record<string, (town: Town, adventure: Partial<Adventure>) => Partial<NPC>>
  }
}

interface Adventure {
  villainType: string
  villain: {
      name: string
      firstName: string
      himher: string
      gender: string
      hisher: string
  };
  ally: NPC
  allyType: string
  patron: NPC
  patronType: string
  sidequestType: string
  climax: string
  introduction: string
  otherGoal: string
  backdrop: string
  quandary: string
  twist: string
  sidequest: string
  villainActions: string
  goal: string
}

interface AdventureLocation {
  [key: string]: (town: Town, adventure: Partial<Adventure>) => string
}
