/* eslint-disable @typescript-eslint/ban-ts-comment */
import { assignEconomicModifiers, assignPoliticalModifiers, assignSizeModifiers, BinaryGender, Biome, calculateTax, RaceName, RollArray, Seasons, Town, TownBasics, TownRollData, TownType } from '@lib'

export const createTown = (base: TownBasics | Town) => {
  console.groupCollapsed('The town is loading...')
  console.log(base)
  // @ts-ignore
  if (!base) base = setup.createTownBiome()
  const type = base.type || lib.weightRandom(lib.townData.defaults.type) as TownType
  const terrain = base.terrain || lib.weightRandom(lib.townData.defaults.terrain) as Biome
  const season = base.currentSeason || lib.weightRandom(lib.townData.defaults.season) as Seasons
  // @ts-ignore
  const townName = base.name || setup.createTownName(base)
  const economicIdeology = base.economicIdeology || lib.politicsWeightedRoll(type, 'economicIdeology')
  const politicalSource = base.politicalSource || lib.politicsWeightedRoll(type, 'politicalSource')
  const politicalIdeology = base.politicalIdeology || lib.random(lib.townData.politicalSource[politicalSource].politicalIdeology)
  const town = Object.assign({
    passageName: 'TownOutput',
    name: townName,
    key: lib.getUUID(),
    generated: 'full',
    objectType: 'town',
    townMaterial: 'mainTownMaterial',
    ignoreGender: false,
    taxes: {
      base: 5,
      land: 5,
      tithe: 1
    },
    _type: type,
    location: lib.weightRandom(lib.terrain[terrain].start),
    // @ts-ignore
    get type () {
      // @ts-ignore
      return lib.getTownType(this)
    },
    set type (type) {
      console.log('type unnecessary')
    },
    // type: type,
    terrain,
    currentSeason: season,
    factions: {
    },
    buildings: [],
    families: {
    },
    religion: {
      _customPantheon: State.metadata.get('pantheon'),
      _percentages: {},
      _baseProbabilities: {} as Record<string, number>,
      _modifiers: {} as Record<string, number>,
      _probabilities: {} as Record<string, number>
    },
    get religionPercentages () {
      return lib.getAllPantheonPercentages(this as unknown as Town)
    },
    set religionPercentages (data: Record<string, number>) {
      console.warn('Trying to set religion percentages, which is a read-only!')
      console.log(this.religionPercentages)
      console.log(data)
    },
    set religionProbabilities (data: Record<string, number>) {
      console.groupCollapsed('Setting religion probabilities!')
      this.religion._probabilities = data
      console.log('Before unaltered')
      const unaltered = lib.getUnalteredTownDeityWeightings(this as unknown as Town)

      if (!this.religion._modifiers) this.religion._modifiers = {}
      if (!this.religion._probabilities) this.religion._probabilities = {}
      if (!this.religion._baseProbabilities) this.religion._baseProbabilities = {}
      for (const deity in this.religion._probabilities) {
        this.religion._baseProbabilities[deity] = unaltered[deity]
        this.religion._modifiers[deity] = this.religion._probabilities[deity] - this.religion._baseProbabilities[deity]
      }
      this.religion._percentages = lib.getAllPantheonPercentages(this as unknown as Town)
      console.groupEnd()
    },
    get customPantheon () {
      if (this.religion._customPantheon) return this.religion._customPantheon
      return State.metadata.get('pantheon')
    },
    set customPantheon (data) {
      State.metadata.set('pantheon', data)
      this.religion._customPantheon = data
    },
    bans: [''],
    buildingRelations: [],
    factionRelations: [],
    npcRelations: {},
    population: lib.townData.type[type].population(),
    _economicIdeology: economicIdeology,
    _politicalSource: politicalSource,
    _politicalIdeology: politicalIdeology,
    _demographicPercentile: {} as Record<RaceName, number>,
    _baseDemographics: {} as Record<RaceName, number>,
    get baseDemographics () {
      console.log('Getting base demographics.')
      return this._baseDemographics
    },
    set baseDemographics (newDemographics) {
      // lib.setBaseDemographics(this as unknown as Town, newDemographics)
      console.log('Setting base demographics.')
      // alert(JSON.stringify(newDemographics))
      Object.keys(newDemographics).forEach((byRace) => {
        const race = byRace as RaceName
        this._baseDemographics[race] = newDemographics[race]
      })
    },
    set demographicPercentile (data) { console.log('Useless demographicPercentile setter. ') },
    get demographicPercentile () {
      return lib.getDemographicPercentile(this as unknown as Town)
    },
    get economicIdeology () {
      return this._economicIdeology
    },
    set economicIdeology (value) {
      this._economicIdeology = value
      Object.assign(this, lib.townData.economicIdeology[this._economicIdeology].descriptors)
    },
    get politicalSource () {
      return this._politicalSource
    },
    set politicalSource (value) {
      this._politicalSource = value
    },
    get politicalIdeology () {
      return this._politicalIdeology
    },
    set politicalIdeology (value) {
      this._politicalIdeology = value
      Object.assign(this, lib.townData.politicalIdeology[this._politicalIdeology].data)
    },
    // get politicalSourceDescription () {
    //   if (this._politicalSource === 'absolute monarchy' || this._politicalSource === 'constitutional monarchy') {
    //     if (this.politicalIdeology === 'autocracy') {
    //       return lib.townData.politicalSource[this._politicalSource].autocracy.politicalSourceDescription(this as unknown as Town)
    //     } else {
    //       return lib.townData.politicalSource[this._politicalSource].default.politicalSourceDescription(this as unknown as Town)
    //     }
    //   } else {
    //     return lib.townData.politicalSource[this._politicalSource].politicalSourceDescription(this as unknown as Town)
    //   }
    // },
    // set politicalSourceDescription (data) {
    //   console.warn('Trying to set politicalSourceDescription, which is a read-only!')
    //   console.log(this.religionPercentages)
    //   console.log(data)
    // },
    // get wealth () {
    //   const rollData = lib.townData.rollData.wealth as TownRollData
    //   if (rollData) {
    //     let wealth = rollData.rolls.find(descriptor => {
    //       return descriptor[0] <= this.roll.wealth
    //     })
    //     if (wealth === undefined) {
    //       console.log(`Could not find a wealth descriptor that was appropriate for a roll of ${this.roll.wealth} for ${this.name}`)
    //       wealth = lib.townData.rollData.wealth.rolls[lib.townData.rollData.wealth.rolls.length - 1]
    //     }
    //     this._wealth = wealth[1]
    //     return this._wealth
    //   }
    // },
    // set wealth (value) {
    //   this._wealth = value
    // },
    roads: {},
    dominantGender: lib.random(['man', 'man', 'man', 'man', 'man', 'woman', 'woman']) as BinaryGender,
    // for creating relationships (so there aren't a trillion npcs that all don't know one another)
    reuseNpcProbability: 0,
    roll: {
      wealth: lib.dice(2, 50),
      reputation: lib.dice(2, 50),
      religiosity: lib.dice(2, 50),
      religionSeed: lib.dice(1, 100),
      sin: lib.dice(2, 50),
      diversity: lib.dice(2, 50),
      magic: lib.dice(2, 50),
      size: lib.dice(1, 100),
      economics: lib.dice(2, 50),
      welfare: lib.dice(3, 33) - 10,
      military: lib.dice(2, 50),
      law: lib.dice(2, 50),
      arcana: lib.dice(2, 50),
      equality: lib.dice(2, 50) - 20,
      /** @description Percentage of the dominant gender */
      genderMakeup: lib.random(49, 51)
    }
  }, base, {
    generated: 'full'
  })
  lib.townDemographics(town)

  town.economicIdeology = town.economicIdeology || town._economicIdeology
  town.politicalIdeology = town.politicalIdeology || town._politicalIdeology
  town.politicalSource = town.politicalSource || town._politicalSource
  town.materialProbability = lib.structureData.material.types
  if (State.metadata.has('pantheon')) town.religion._customPantheon = State.metadata.get('pantheon')

  console.log('Defining taxes')
  Object.defineProperty(town.taxes, 'welfare', {
    get () {
      console.log(this)
      // TODO fix the getter's workaround.
      return calculateTax(2, State.variables.town.roll.welfare)
    }
  })

  Object.defineProperty(town.taxes, 'military', {
    get () {
      console.log(this)
      // TODO fix the getter's workaround.
      return calculateTax(2, State.variables.town.roll.military)
    }
  })

  Object.defineProperty(town.taxes, 'economics', {
    get () {
      console.log(this)
      // TODO fix the getter's workaround.
      return calculateTax(3, State.variables.town.roll.economics)
    }
  })

  if (town.generated === 'biome') {
    lib.createTownReligion(town as unknown as Town)
    assignSizeModifiers(town)
    assignEconomicModifiers(town)
    assignPoliticalModifiers(town)
  }

  if (settings.ignoreGender === true || town.ignoreGender === true) {
    town.roll.equality = 100
  }

  if (settings.disableNSFW === true || town.disableNSFW === true) {
    town.bans.push('slavery', 'prostitution')
  }

  setup.createSocioPolitics(town as unknown as Town)

  lib.clampRolls(town.roll)

  // @ts-ignore
  const genderRollData = lib.townData.rollData.equality[town.dominantGender] as TownRollData
  // @ts-ignore
  lib.defineRollDataGetter(town, genderRollData.rolls as RollArray, 'equality', 'equality', 1)
  // @ts-ignore
  lib.defineRollDataGetter(town, genderRollData.rolls as RollArray, 'equalityDescription', 'equality', 2)
  const possibleMaterials = lib.terrain[town.terrain].location[town.location].possibleMaterials
  town.townMaterial = lib.getTownMaterial(possibleMaterials, town.roll.wealth, town.roll.size)
  lib.setMaterialProbability(town as unknown as Town, possibleMaterials)
  // @ts-ignore
  setup.createStartBuildings(town)
  // @ts-ignore
  setup.createStartFactions(town)
  setup.findPoliceSource(town as unknown as Town)
  lib.replaceTownName(town as unknown as Town)
  town.generated = 'full'
  lib.townRender(town as unknown as Town)

  console.groupEnd()
  console.log(`${town.name} has loaded.`)
  console.log(town)
  return town as unknown as Town
}
