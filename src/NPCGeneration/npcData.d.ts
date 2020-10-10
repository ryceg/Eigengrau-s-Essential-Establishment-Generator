interface Setup {
  initNpcData(): void
  npcData: {
    heightChart: [number, string][]
    lifeEvents: {
      performed: LifeEvent
      warMedal: LifeEvent
      magicalCreature: LifeEvent
      festival: LifeEvent
      apprentice: LifeEvent
      trinket: LifeEvent
      nobleEvent: LifeEvent
      journey: LifeEvent
      lostChild: LifeEvent
      pilgrimage: LifeEvent
      meetFriendNPC: LifeEvent
      meetEnemyNPC: LifeEvent
      meetPartnerNPC: LifeEvent
      backgroundWork: LifeEvent
      meetImportantNPC: LifeEvent
      adventure: LifeEvent
      supernatural: LifeEvent
      miracle: LifeEvent
      war: LifeEvent
      crime: LifeEvent
      arcaneMatters: LifeEvent
      weirdStuff: LifeEvent
    }
    doesnt: Record<string, Doesnt>
    skinColour: string[]
    profession: string[]
    trait: string[]
    idle: string[]
    reading: string[]
    currentMood: string[]
    scar: string[]
    tattoo: string[]
    demeanour: string[]
    vocalPattern: string[]
    calmTrait: string[]
    stressTrait: string[]
    adventure: string[]
    hairColour: string[]
    hairType: string[]
    dndClass: string[]
    background: string[]
    pockets: string[]
    value: string[]
    drive: string[]
    belief: string[]
    race: string[]
    standardLanguages: string[]
    exoticLanguages: string[]
    religion: {
      strength: [number, string][]
    }
    backgroundTraits: Record<string, BackgroundTrait>
    bodyParts: BodyParts
  }
}

interface BodyParts {
  head: {
    hair: string[]
    eyes: string[]
    nose: string[]
    mouth: string[]
    chin: string[]
    ears: string[]
    misc: string[]
  }
  torso: {
    descriptions: string[]
  }
  arms: {
    descriptions: string[]
  }
  legs: {
    descriptions: string[]
  }
}

interface BackgroundTrait {
  extraLanguage?: boolean
  backgroundOrigin: string[]
  ideal: string[]
  personalityTrait: string[]
  bond: string[]
  wealth: number
}

interface Doesnt {
  probability: number
  exclusions(town: Town, npc: NPC): boolean
  function(town: Town, npc: NPC): string
}

interface LifeEvent {
  probability: number
  exclusions(town: Town, npc: NPC): boolean
  function(town: Town, npc: NPC): string
  [key: string]: any
}
