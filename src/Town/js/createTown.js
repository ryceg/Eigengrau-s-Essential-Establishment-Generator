setup.createTown = (base = {}) => {
  const type = base.type || ['hamlet', 'hamlet', 'village', 'village', 'village', 'town', 'town', 'town', 'city', 'city'].random()
  const terrain = base.terrain || ['temperate', 'temperate', 'temperate', 'tropical', 'polar', 'arid'].random()
  const season = base.season || ['summer', 'autumn', 'winter', 'spring'].random()
  const townName = base.name || setup.createTownName()
  console.groupCollapsed(`${townName} is loading...`)
  console.log(base)

  const economicIdeology = base.economicIdeology || lib.politicsWeightedRoll(type, 'economicIdeology')
  const politicalSource = base.politicalSource || lib.politicsWeightedRoll(type, 'politicalSource')
  const politicalIdeology = base.politicalIdeology || lib.townData.politicalSource[politicalSource].politicalIdeology.random()
  const town = Object.assign({
    passageName: 'TownOutput',
    name: townName,
    objectType: 'town',
    townMaterial: 'mainTownMaterial',
    ignoreGender: false,
    taxes: {
      base: 5,
      land: 5,
      tithe: 1
    },
    get type () {
      return setup.getTownType(this)
    },
    set type (value) {
      console.log('Setting town type.')
      this._type = value
    },
    // type: type,
    terrain,
    currentSeason: season,
    season,
    factions: {
    },
    buildings: [],
    families: {
    },
    bans: {
      alcoholDiscouraged: false,
      alcohol: false,
      softDrugs: false,
      hardDrugs: true,
      schools: false,
      elderly: false,
      young: false,
      sickness: false,
      religion: false,
      magic: false,
      music: false,
      artwork: false,
      acting: false,
      nobility: false,
      outsiders: false,
      slavery: false,
      animals: false,
      unemployment: false,
      panhandling: false
    },
    buildingRelations: [],
    npcRelations: {},
    population: lib.townData.type[type].population(),
    _demographicPercentile: {},
    get baseDemographics () {
      return this._baseDemographics
    },
    set baseDemographics (newDemographics) {
      console.log('Setting base demographics. Old:')
      console.log(this._baseDemographics)
      console.log('New:')
      console.log(newDemographics)
      if (!this._baseDemographics) this._baseDemographics = {}
      Object.keys(newDemographics).forEach(byRace => {
        this._baseDemographics[byRace] = newDemographics[byRace]
      })
      console.log('Updated:')
      console.log(this._baseDemographics)
      // console.log(this.demographicPercentile)
    },
    get demographicPercentile () {
      console.log('Getting demographic percent.')

      // Get an array of the demographic keys (race names).
      const races = Object.keys(this.baseDemographics)

      // Calculate the sum of the raw demographic values.
      const sum = races
        .map(byRace => this.baseDemographics[byRace])
        .reduce((acc, cur) => acc + cur, 0)

      // Calculate the demographic percentages.
      races.forEach(byRace => {
        this._demographicPercentile[byRace] = this.baseDemographics[byRace] / sum * 100
      })
      return this._demographicPercentile
    },
    set demographicPercentile (data) { console.warn('Setter for demographicPercentile is not a thing. Chucking out the following data:', data) },
    _economicIdeology: economicIdeology,
    _politicalSource: politicalSource,
    _politicalIdeology: politicalIdeology,
    get economicIdeology () {
      // console.log(`Getting town economic ideology - ${this._economicIdeology}`)
      return this._economicIdeology
    },
    set economicIdeology (value) {
      // console.log('Setting town economic ideology.')
      this._economicIdeology = value
      Object.assign(this, lib.townData.economicIdeology[this._economicIdeology].descriptors)
    },
    get politicalSource () {
      // console.log(`Getting town political source - ${this._politicalSource}`)
      return this._politicalSource
    },
    set politicalSource (value) {
      // console.log('Setting town political source.')
      this._politicalSource = value
    },
    get politicalIdeology () {
      // console.log(`Getting town political ideology - ${this._politicalIdeology}`)
      return this._politicalIdeology
    },
    set politicalIdeology (value) {
      // console.log('Setting town political ideology.')
      this._politicalIdeology = value
      Object.assign(this, lib.townData.politicalIdeology[this._politicalIdeology].data)
    },
    get politicalSourceDescription () {
      // console.log('Getting town political source description.')
      if (this._politicalSource === 'absolute monarchy' || this._politicalSource === 'constitutional monarchy') {
        if (this.politicalIdeology === 'autocracy') {
          return lib.townData.politicalSource[this._politicalSource].autocracy.politicalSourceDescription
        } else {
          return lib.townData.politicalSource[this._politicalSource].default.politicalSourceDescription
        }
      } else {
        return lib.townData.politicalSource[this._politicalSource].politicalSourceDescription
      }
    },
    get wealth () {
      // console.log('Getting town wealth.')
      let wealth = lib.townData.rollData.wealth.rolls.find(descriptor => {
        return descriptor[0] <= this.roll.wealth
      })
      if (wealth === undefined) {
        console.log(`Could not find a wealth descriptor that was appropriate for a roll of ${this.roll.wealth} for ${this.name}`)
        wealth = lib.townData.rollData.wealth.rolls[lib.townData.rollData.wealth.rolls.length - 1]
      }
      this._wealth = wealth[1]
      return this._wealth
    },
    set wealth (value) {
      // console.log('Setting town wealth.')
      this._wealth = value
    },
    roads: {},
    location: lib.terrain[terrain].start.random(),
    primaryCrop: lib.townData.misc.primaryCrop.random(),
    primaryExport: lib.townData.misc.primaryExport.random(),
    landmark: lib.townData.misc.landmark.random(),
    currentEvent: lib.townData.misc.currentEvent.random(),
    dominantGender: ['man', 'man', 'man', 'man', 'man', 'woman', 'woman'].random(),
    // for creating relationships (so there aren't a trillion npcs that all don't know one another)
    reuseNpcProbability: 0,
    roll: {
      wealth: lib.dice(2, 50),
      reputation: lib.dice(2, 50),
      religiosity: lib.dice(2, 50),
      sin: lib.dice(2, 50),
      diversity: lib.dice(2, 50),
      magic: lib.dice(2, 50),
      size: random(1, 100),
      economics: lib.dice(2, 50),
      welfare: lib.dice(3, 33) - 10,
      military: lib.dice(2, 50),
      law: lib.dice(2, 50),
      arcana: lib.dice(2, 50),
      equality: lib.dice(2, 50) - 20
    }
  }, base)

  lib.townDemographics(town)
  town.professions = lib.fetchProfessions(town)

  town.economicIdeology = town.economicIdeology || town._economicIdeology
  town.politicalIdeology = town.politicalIdeology || town._politicalIdeology
  town.politicalSource = town.politicalSource || town._politicalSource
  town.origin = town.origin || lib.terrain[town.terrain].location[town.location].origin.random()
  town.vegetation = town.vegetation || lib.weightRandom(lib.terrain[town.terrain].location[town.location].vegetation)
  town.materialProbability = lib.structureData.material.types

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

  if (!town.pregen) {
    assignSizeModifiers(town)
    assignEconomicModifiers(town)
    assignPoliticalModifiers(town)
  }

  setup.createSocioPolitics(town)

  lib.clampRolls(town.roll)

  if (settings.ignoreGender === true || town.ignoreGender === true) {
    town.roll.equality = 100
  }

  lib.defineRollDataGetter(town, lib.townData.rollData.equality[town.dominantGender].rolls, 'equality', 'equality', 1)
  lib.defineRollDataGetter(town, lib.townData.rollData.equality[town.dominantGender].rolls, 'equalityDescription', 'equality', 2)
  const possibleMaterials = lib.terrain[town.terrain].location[town.location].possibleMaterials
  town.townMaterial = lib.getTownMaterial(possibleMaterials, town.roll.wealth, town.roll.size)
  lib.setMaterialProbability(town, possibleMaterials)
  setup.createStartBuildings(town)
  setup.createStartFactions(town)
  setup.findPoliceSource(town)
  lib.townRender(town)

  console.groupEnd()
  console.log(`${town.name} has loaded.`)
  console.log(town)
  return town
}

setup.getTownType = town => {
  if (town.population > 6000) return 'city'
  if (town.population > 3000) return 'town'
  if (town.population > 1000) return 'village'
  if (town.population > 30) return 'hamlet'

  // TODO: Remove unexpected side effect are bad.
  if (town.population <= 30) {
    console.log('Population is less than 30. Setting to 30.')
    town.population = 30
    return 'hamlet'
  }
}

/**
 * @param {number} nominalTarget
 * @param {number} economics
 */
function calculateTax (nominalTarget, economics) {
  return nominalTarget + (-1 / (economics + 0.1)) + (1 / (10 - economics))
}

/** @param {Town} town */
function assignSizeModifiers (town) {
  console.log(`Assigning town size modifiers (btw ${town.name} is a ${town.type})`)
  assignRollModifiers(town, lib.townData.type[town.type].modifiers)
}

/** @param {Town} town */
function assignEconomicModifiers (town) {
  console.log(`Assigning economic modifiers (btw ${town.name} is a ${town.economicIdeology})`)
  assignRollModifiers(town, lib.townData.economicIdeology[town.economicIdeology].modifiers)
}

/** @param {Town} town */
function assignPoliticalModifiers (town) {
  console.log(`Assigning political ideology modifiers (btw ${town.name} is a ${town.politicalIdeology})`)
  assignRollModifiers(town, lib.townData.politicalIdeology[town.politicalIdeology].modifiers)
}

/** @param {Town} town */
function assignRollModifiers (town, modifiers) {
  for (const [key, modifier] of Object.entries(modifiers)) {
    town.roll[key] = lib.fm(town.roll[key], modifier)
  }
}
