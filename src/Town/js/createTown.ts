/* eslint-disable @typescript-eslint/ban-ts-comment */
import { BinaryGender, Biome, RaceName, RollArray, Seasons, Town, TownBasics, TownRollData, TownRolls, TownType } from '@lib'

export const createTown = (base: TownBasics | Town) => {
  lib.logger.openGroup('The town is loading...')
  lib.logger.info(base)
  // @ts-ignore
  if (!base) base = {}
  const type = base.type || lib.weightRandom(lib.townData.defaults.type) as TownType
  const terrain = base.terrain || lib.weightRandom(lib.townData.defaults.terrain) as Biome
  const season = base.currentSeason || lib.weightRandom(lib.townData.defaults.season) as Seasons
  const townName = base.name || lib.createTownName(base)
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
      lib.logger.info('type unnecessary')
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
      _customPantheon: State.metadata.get('pantheon') || null,
      _percentages: {},
      _baseProbabilities: {} as Record<string, number>,
      _modifiers: {} as Record<string, number>,
      _probabilities: {} as Record<string, number>
    },
    baseDemographics: {} as Record<RaceName, number>,
    get religionPercentages () {
      return lib.getAllPantheonPercentages(this as unknown as Town)
    },
    set religionPercentages (data: Record<string, number>) {
      lib.logger.warn('Trying to set religion percentages, which is a read-only!')
      lib.logger.info(this.religionPercentages)
      lib.logger.info(data)
    },
    set religionProbabilities (data: Record<string, number>) {
      lib.logger.openGroup('Setting religion probabilities!')
      this.religion._probabilities = data
      lib.logger.info('Before unaltered')
      const unaltered = lib.getUnalteredTownDeityWeightings(this as unknown as Town)

      if (!this.religion._modifiers) this.religion._modifiers = {}
      if (!this.religion._probabilities) this.religion._probabilities = {}
      if (!this.religion._baseProbabilities) this.religion._baseProbabilities = {}
      for (const deity in this.religion._probabilities) {
        this.religion._baseProbabilities[deity] = unaltered[deity]
        this.religion._modifiers[deity] = this.religion._probabilities[deity] - this.religion._baseProbabilities[deity]
      }
      this.religion._percentages = lib.getAllPantheonPercentages(this as unknown as Town)
      lib.logger.closeGroup()
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
    roads: {},
    primaryCrop: lib.random(lib.townData.misc.primaryCrop),
    primaryExport: lib.random(lib.townData.misc.primaryExport),
    landmark: lib.random(lib.townData.misc.landmark),
    currentEvent: lib.random(lib.townData.misc.currentEvent),
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
  town.professions = lib.fetchProfessions(town)

  town.economicIdeology = town.economicIdeology || town._economicIdeology
  town.politicalIdeology = town.politicalIdeology || town._politicalIdeology
  town.politicalSource = town.politicalSource || town._politicalSource
  const locationData = lib.terrain[town.terrain].location[town.location]

  town.origin = town.origin || lib.random(locationData.origin)
  town.vegetation = town.vegetation || lib.weightRandom(locationData.vegetation)
  town.possibleMaterials = locationData.possibleMaterials
  town.materialProbability = lib.structureMaterialData.types
  if (State.metadata.has('pantheon')) town.religion._customPantheon = State.metadata.get('pantheon')

  if (town.generated === 'biome') {
    lib.createTownReligion(town as unknown as Town)
    assignSizeModifiers(town)
    assignEconomicModifiers(town)
    assignPoliticalModifiers(town)
  }

  if (settings.ignoreGender === true || town.ignoreGender === true) {
    town.roll.equality = 100
    settings.ignoreGender = true
    town.ignoreGender = true
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

  lib.logger.closeGroup()
  lib.logger.info(`${town.name} has loaded.`)
  lib.logger.info(town)
  return town as unknown as Town
}

function assignSizeModifiers (town: TownBasics) {
  lib.logger.info(`Assigning town size modifiers (btw ${town.name} is a ${town.type})`)
  assignRollModifiers(town, lib.townData.type[town.type].modifiers)
}

function assignEconomicModifiers (town: TownBasics) {
  lib.logger.info(`Assigning economic modifiers (btw ${town.name} is a ${town.economicIdeology})`)
  assignRollModifiers(town, lib.townData.economicIdeology[town.economicIdeology].modifiers)
}

function assignPoliticalModifiers (town: TownBasics) {
  lib.logger.info(`Assigning political ideology modifiers (btw ${town.name} is a ${town.politicalIdeology})`)
  assignRollModifiers(town, lib.townData.politicalIdeology[town.politicalIdeology].modifiers)
}

function assignRollModifiers (town: TownBasics, modifiers: Record<TownRolls, number>) {
  for (const [key, modifier] of Object.entries(modifiers)) {
    const roll = key as TownRolls
    town.roll[roll] = lib.fm(town.roll[roll], modifier)
  }
}
