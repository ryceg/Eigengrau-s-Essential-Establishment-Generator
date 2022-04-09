import { BackgroundName, ClassName, NPC, RaceName, Town } from '@lib'

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
    idle: string[]
    reading: string[]
    currentMood: string[]
    scar: string[]
    tattoo: string[]
    demeanour: string[]
    adventure: string[]
    hairColour: string[]
    hairType: string[]
    dndClass: ClassName[]
    background: BackgroundName[]
    pockets: string[]
    value: string[]
    drive: string[]
    belief: string[]
    race: RaceName[]
    standardLanguages: string[]
    exoticLanguages: string[]
  }
}

interface Doesnt {
  probability: number
  exclusions(town: Town, npc: NPC): boolean
  function(town: Town, npc: NPC): string
}

interface LifeEvent {
  probability: number
  exclusions?(town: Town, npc: NPC): boolean
  function(town: Town, npc: NPC): string
  [key: string]: any
}
