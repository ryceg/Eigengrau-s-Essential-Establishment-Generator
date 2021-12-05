// import { assignEconomicModifiers, assignPoliticalModifiers, assignSizeModifiers, Biome, Building, calculateTax, EconomicIdeology, EconomicIdeologyIST, Faction, Family, GenderName, MaterialType, MaterialTypes, NPC, NpcRelationship, Pantheon, PantheonTypes, PoliticalIdeology, PoliticalIdeologyIC, PoliticalSource, Profession, RaceName, ReciprocalRelationship, Road, Seasons, TownRolls, TownType, Weather } from '@lib'

// export class Town {
//   constructor () {
//     console.groupCollapsed(`The ${this.type} is loading...`)
//     this.economicIdeology = this.economicIdeology || this._economicIdeology
//     this.politicalIdeology = this.politicalIdeology || this._politicalIdeology
//     this.politicalSource = this.politicalSource || this._politicalSource

//     lib.createTownReligion(this)
//     assignSizeModifiers(this)
//     assignEconomicModifiers(this)
//     assignPoliticalModifiers(this)
//     if (State.metadata.has('pantheon')) this.religion._customPantheon = State.metadata.get('pantheon')
//     Object.defineProperty(this.taxes, 'welfare', {
//       get () {
//         console.log(this)
//         // TODO fix the getter's workaround.
//         return calculateTax(2, State.variables.town.roll.welfare)
//       }
//     })

//     Object.defineProperty(this.taxes, 'military', {
//       get () {
//         console.log(this)
//         // TODO fix the getter's workaround.
//         return calculateTax(2, State.variables.town.roll.military)
//       }
//     })

//     Object.defineProperty(this.taxes, 'economics', {
//       get () {
//         console.log(this)
//         // TODO fix the getter's workaround.
//         return calculateTax(3, State.variables.town.roll.economics)
//       }
//     })
//   }

//   key: string = lib.getUUID()
//   get type (): TownType {
//     if (this.population > 6000) return 'city'
//     if (this.population > 3000) return 'town'
//     if (this.population > 1000) return 'village'
//     if (this.population > 30) return 'hamlet'

//     // TODO: Remove unexpected side effect are bad.
//     if (this.population <= 30) {
//       console.log('Population is less than 30. Setting to 30.')
//       this.population = 30
//       return 'hamlet'
//     }
//     return 'village'
//   }

//   _type: TownType = lib.weightRandom(lib.townData.defaults.type)
//   // TODO: Remove the type assertion by strengthening lib.weightedRandomFetcher
//   _baseDemographics: Record<RaceName, number> = lib.weightedRandomFetcher(this, lib.townData.type[this.type].demographics(), undefined, undefined, 'popPercentages') as Record<RaceName, number>
//   get baseDemographics () {
//     console.log('Getting base demographics.')
//     return this._baseDemographics
//   }

//   set baseDemographics (newDemographics) {
//     // lib.setBaseDemographics(this as unknown as Town, newDemographics)
//     console.log('Setting base demographics.')
//     // alert(JSON.stringify(newDemographics))
//     Object.keys(newDemographics).forEach((byRace) => {
//       const race = byRace as RaceName
//       this._baseDemographics[race] = newDemographics[race]
//     })
//   }

//   set demographicPercentile (data: Record<RaceName, number>) { console.log('Useless demographicPercentile setter. ') }
//   get demographicPercentile () {
//     return lib.getDemographicPercentile(this)
//   }

//   _economicIdeology: EconomicIdeology = lib.politicsWeightedRoll(this.type, 'economicIdeology')
//   get economicIdeology () {
//     return this._economicIdeology
//   }

//   set economicIdeology (value) {
//     this._economicIdeology = value
//     Object.assign(this, lib.townData.economicIdeology[this._economicIdeology].descriptors)
//   }

//   _politicalSource: PoliticalSource = lib.politicsWeightedRoll(this.type, 'politicalSource')
//   get politicalSource () {
//     return this._politicalSource
//   }

//   set politicalSource (value) {
//     this._politicalSource = value
//   }

//   _politicalIdeology: PoliticalIdeology = lib.random(lib.townData.politicalSource[this.politicalSource].politicalIdeology)
//   get politicalIdeology () {
//     return this._politicalIdeology
//   }

//   set politicalIdeology (value) {
//     this._politicalIdeology = value
//     Object.assign(this, lib.townData.politicalIdeology[this._politicalIdeology].data)
//   }

//   name: string
//   generated: 'biome' | 'full' = 'full'
//   terrain: Biome = lib.weightRandom(lib.townData.defaults.terrain)
//   location: string = lib.weightRandom(lib.terrain[this.terrain].start)
//   vegetation: string = lib.weightRandom(lib.terrain[this.terrain].location[this.location].vegetation)
//   origin: string = lib.random(lib.terrain[this.terrain].location[this.location].origin)
//   population: number = lib.townData.type[this.type].population()
//   professions: Record<string, TownProfessions> = lib.fetchProfessions(this)
//   ignoreGender = false
//   ignoreRace = false
//   disableNSFW = false
//   dominantGender: GenderName = lib.random(['man', 'man', 'man', 'man', 'man', 'woman', 'woman'])
//   roll: Record<TownRolls, number> = {
//     guardFunding: 50,
//     wealth: lib.dice(2, 50),
//     religiosity: lib.dice(2, 50),
//     sin: lib.dice(2, 50),
//     magic: lib.dice(2, 50),
//     size: lib.dice(1, 100),
//     economics: lib.dice(2, 50),
//     welfare: lib.dice(3, 33) - 10,
//     military: lib.dice(2, 50),
//     law: lib.dice(2, 50),
//     arcana: lib.dice(2, 50),
//     equality: lib.dice(2, 50) - 20,
//     /** @description Percentage of the dominant gender */
//     genderMakeup: lib.random(49, 51)
//   }

//   get economicIdeologyIST (): EconomicIdeologyIST {
//     return lib.townData.economicIdeology[this.economicIdeology].descriptors.economicIdeologyIST
//   }

//   get politicalIdeologyIC (): PoliticalIdeologyIC {
//     return lib.townData.politicalIdeology[this.politicalIdeology].data.politicalIdeologyIC
//   }

//   _demographicPercentile: Record<RaceName, number> = {}

//   currentSeason: Seasons = lib.weightRandom(lib.townData.defaults.season)
//   founder?: string
//   economicIdeologyDescription(town: Town): string
//   // politicalSourceDescription(town: Town): string
//   get politicalSourceDescription (): string {
//     if (this._politicalSource === 'absolute monarchy' || this._politicalSource === 'constitutional monarchy') {
//       if (this.politicalIdeology === 'autocracy') {
//         return lib.townData.politicalSource[this._politicalSource].autocracy.politicalSourceDescription(this)
//       } else {
//         return lib.townData.politicalSource[this._politicalSource].default.politicalSourceDescription(this)
//       }
//     } else {
//       return lib.townData.politicalSource[this._politicalSource].politicalSourceDescription(this)
//     }
//   }

//   localImage = ''
//   taxes: {
//     welfare: number
//     military: number
//     economics: number
//     base: number
//     land: number
//     tithe: number
//   }

//   reuseNpcProbability = 0
//   guard!: Faction
//   religionProbabilities: Record<string, number> = {}
//   religion: {
//     _customPantheon?: Pantheon
//     /** Each item indexes the matching deity in the pantheon */
//     _modifiers: Record<string, number>
//     /** Probabilities sans the manual bonuses. */
//     _baseProbabilities: Record<string, number>
//     _probabilities: Record<string, number>
//     _percentages: Record<string, number>
//     pantheon: PantheonTypes | string
//     deity: string
//   } = {
//     _customPantheon: State.metadata.get('pantheon'),
//     _modifiers: {},
//     _baseProbabilities: {},
//     _probabilities: {},
//     _percentages: {},
//     pantheon: 'greek',
//     deity: ''
//   }

//   roads: Record<string, Road> = {}
//   townMaterial: string
//   leaderType: string
//   leader: NPC | null = null
//   ruler?: NPC
//   factions: Record<string, Faction> = {}
//   families: Record<string, Family> = {}
//   buildings: Building[] = []
//   buildingRelations: ReciprocalRelationship[] = []
//   npcRelations: Record<string, NpcRelationship[]> = {}
//   factionRelations: ReciprocalRelationship[] = []
//   weather: Weather
//   rulerType?: string
//   bans: Ban[] = []
//   primaryCrop: string = lib.random(lib.townData.misc.primaryCrop)
//   primaryExport: string = lib.random(lib.townData.misc.primaryExport)
//   landmark: string = lib.random(lib.townData.misc.landmark)
//   currentEvent: string = lib.random(lib.townData.misc.currentEvent)
//   materialProbability: Record<MaterialTypes, MaterialType> = lib.structureData.material.types
//   possibleMaterials: MaterialTypes[] = lib.terrain[this.terrain].location[this.location].possibleMaterials
// }

// export interface TownProfessions extends Profession {
//   name: string;
//   population: number;
// }

// type Ban =
//   | 'alcoholDiscouraged'
//   | 'alcohol'
//   | 'children'
//   | 'softDrugs'
//   | 'hardDrugs'
//   | 'schools'
//   | 'elderly'
//   | 'young'
//   | 'sickness'
//   | 'religion'
//   | 'magic'
//   | 'music'
//   | 'artwork'
//   | 'acting'
//   | 'nobility'
//   | 'outsiders'
//   | 'slavery'
//   | 'prostitution'
//   | 'animals'
//   | 'unemployment'
//   | 'panhandling'
