interface Setup {
  initMiscEncounters(): void
  misc: SetupMisc
}

interface SetupMisc {
  encounters: Encounter[]
  caravan: CaravanData
  religion: Record<string, unknown>
  town: Record<string, unknown>
  road: Record<string, unknown>
  desert: Record<string, unknown>
  mountain: Record<string, unknown>
  forest: Record<string, unknown>
}

interface CaravanData {
  create(town: Town, base: Partial<Caravan>): Caravan
  caravanType: string[]
  type: string[]
  animals(): string[]
  transporting(): string[]
  mood: string[]
  masterType: Record<string, Partial<NPC>>
  masterLooking: string[]
  masterAvoid: string[]
  masterCarry: string[]
  handlerTrait: string[]
  handlerWant: string[]
  handlerCarry: string[]
  cookGreet: string[]
  cookLook: string[]
  cookCarry: string[]
  guardIs: string[]
  guardReason: string[]
  guardTrait: string[]
  guideType: string[]
  guideLook: string[]
  guideCarry: string[]
  merchantIs: string[]
  merchantLook: string[]
  merchantCarry: string[]
  travelerIs: string[]
  travelerWant: string[]
  travelerLook: string[]
}

interface Caravan {
  type: string
  animals: string
  transporting: string
  mood: string
  masterType: string
  masterLooking: string
  masterAvoid: string
  masterCarry: string
  readout: string
  tippy: string
  tippyWord: string
  master: NPC
}

interface Encounter {
  summary: string
  available?: BiomeName[]
  function?(town: Town, biome: BiomeName): string
}
