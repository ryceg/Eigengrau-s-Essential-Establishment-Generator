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
    classTraits: Record<string, ClassTrait>
    backgroundTraits: Record<string, BackgroundTrait>
    professionTraits: Record<string, ProfessionTrait>
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

interface ProfessionTrait {
  professionOrigin: string[]
  background: string[]
  weapon: string[]
  wealth: number
}

interface BackgroundTrait {
  extraLanguage?: boolean
  backgroundOrigin: string[]
  ideal: string[]
  personalityTrait: string[]
  bond: string[]
  wealth: number
}

interface ClassTrait {
  professionOrigin: string[]
  background: string[]
  weapon: string[]
  wealth(): number
}

interface RaceTrait {
  probability: number
  muscleMass: number
  bmiModifier: number
  ageTraits: AgeTraits
  genderTraits: {
    man: GenderTraits
    woman: GenderTraits
  }
  lastName: string[]
  eyes: string[]
  raceWords: RaceWords
  knownLanguages: string[]
  beard: string[]
  abilities: Record<string, string>
}

interface RaceWords {
  raceName: string
  racePlural: string
  raceSingular: string
  raceAdjective: string
  raceLanguage: string
}

interface GenderTraits {
  firstName: string[]
  beardProbability: number
  baseHeight: number
  baseWeight: number
  heightModifier(): number
  weightModifier(): number
}

interface AgeTraits {
  ageDescriptors: [number, string][]
  elderly: AgeTrait
  'settled adult': AgeTrait
  'young adult': AgeTrait
  child: AgeTrait
}

interface AgeTrait {
  baseAge: number
  ageModifier(): number
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

interface GenderGrammar {
  title: string
  domTitle: string
  heshe: string
  himher: string
  himherself: string
  hisher: string
  hisherself: string
  boygirl: string
  manwoman: string
  menwomen: string
  malefemale: string
  guygirl: string
  marriageNoun: string
  niblingReciprocalNoun: string
  parentNoun: string
  childNoun: string
  siblingNoun: string
  niblingNoun: string
  oppositeGender: string
}
