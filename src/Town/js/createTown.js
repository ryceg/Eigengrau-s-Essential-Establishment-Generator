setup.createTown = function (base) {
  const type = ['hamlet', 'hamlet', 'village', 'village', 'village', 'town', 'town', 'town', 'city', 'city'].random()
  const terrain = ['temperate', 'temperate', 'temperate', 'tropical', 'polar', 'arid'].random()
  const season = ['summer', 'autumn', 'winter', 'spring']
  const townName = setup.createTownName()
  console.groupCollapsed(`${townName} is loading...`)
  const economicIdeology = setup.townData.type[type].economicIdeology.random()
  const politicalSource = setup.townData.type[type].politicalSource.random()
  const politicalIdeology = setup.townData.politicalSource[politicalSource].politicalIdeology.random()
  const town = Object.assign({
    passageName: 'TownOutput',
    name: townName,
    townMaterial: 'mainTownMaterial',
    taxes: {
      base: 5,
      land: 5,

      // get military () {
      //   return 1
      //   // return (this.roll.military / 50)
      // },
      tithe: 1
    },
    taxRate (town) {
      let totalTax = 0
      Object.keys(town.taxes).forEach(function (tax) {
        // if (tax === 'land') {
        // totalTax += (town.taxes[tax] * (setup.socialClass[npc.socialClass].landRate || 1))
        // } else if (typeof town.taxes[tax] === 'number') {
        if (typeof town.taxes[tax] === 'number') {
          totalTax += town.taxes[tax]
        } else if (typeof town.taxes[tax] === 'function') {
          const temp = town.taxes[tax](this)
          totalTax += temp
        } else {
          console.log(`non-integer tax! ${town.taxes[tax]}`)
        }
      })
      return Math.round(totalTax * 100) / 100
    },
    get type () {
      // console.log('Getting town type.')
      if (this.population > 3000) {
        return 'city'
      } else if (this.population > 1000) {
        return 'town'
      } else if (this.population > 300) {
        return 'village'
      } else if (this.population > 30) {
        return 'hamlet'
      } else if (this.population <= 30) {
        console.log('Population is less than 30. Setting to 30.')
        this.population = 30
        return 'hamlet'
      }
    },
    set type (value) {
      console.log('Setting town type.')
      this._type = value
    },
    // type: type,
    terrain,
    currentSeason: season.random(),
    season,
    factions: {
    },
    buildings: {
    },
    families: {
    },
    population: setup.townData.type[type].population(),
    _demographic: {},
    // Clone the raw demographic data for the town type.
    // _baseDemographics: clone(setup.townData.type['hamlet'].demographics.random().output),
    get baseDemographics () {
      // console.log('Getting base demographics.')
      return this._baseDemographics
    },
    set baseDemographics (newDemographics) {
      // console.log('Setting base demographics.')
      Object.keys(newDemographics).forEach(function (byRace) {
        this._baseDemographics[byRace] = newDemographics[byRace]
      }, this)
      console.log(this.demographic)
    },
    get demographic () {
      // console.log('Getting demographic percent.')
      // Get an array of the demographic keys (race names).
      const races = Object.keys(this.baseDemographics)
      // Calculate the sum of the raw demographic values.
      const sum = races
        .map(function (byRace) {
          return this.baseDemographics[byRace]
        }, this)
        .reduce(function (acc, cur) {
          return acc + cur
        }, 0)
      // Calculate the demographic percentages.
      races.forEach(function (byRace) {
        this._demographic[byRace] = this.baseDemographics[byRace] / sum * 100
      }, this)
      return this._demographic
    },
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
      Object.assign(this, setup.townData.economicIdeology[this._economicIdeology].descriptors)
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
      Object.assign(this, setup.townData.politicalIdeology[this._politicalIdeology].data)
    },
    get politicalSourceDescription () {
      // console.log('Getting town political source description.')
      if (this._politicalSource === 'absolute monarchy' || this._politicalSource === 'constitutional monarchy') {
        if (this.politicalIdeology === 'autocracy') {
          return setup.townData.politicalSource[this._politicalSource].autocracy.politicalSourceDescription
        } else {
          return setup.townData.politicalSource[this._politicalSource].default.politicalSourceDescription
        }
      } else {
        return setup.townData.politicalSource[this._politicalSource].politicalSourceDescription
      }
    },
    get wealth () {
      // console.log('Getting town wealth.')
      let wealth = setup.townData.rollData.wealth.find(function (descriptor) {
        return descriptor[0] <= this.roll.wealth
      }, this)
      if (wealth === undefined) {
        console.log(`Could not find a wealthRoll descriptor that was appropriate for a roll of ${this.roll.wealth} for ${this.name}`)
        wealth = setup.townData.rollData.wealth[setup.townData.rollData.wealth.length - 1]
      }
      this._wealth = wealth[1]
      return this._wealth
    },
    set wealth (value) {
      // console.log('Setting town wealth.')
      this._wealth = value
    },
    roads: {},
    location: setup.townData.terrain[terrain].start.random(),
    primaryCrop: setup.townData.misc.primaryCrop.random(),
    primaryExport: setup.townData.misc.primaryExport.random(),
    landmark: setup.townData.misc.landmark.random(),
    currentEvent: setup.townData.misc.currentEvent.random(),
    microEvent: setup.townData.misc.microEvent,
    roll: {
      wealth: dice(2, 50),
      reputation: dice(2, 50),
      religiosity: dice(2, 50),
      sin: dice(2, 50),
      diversity: dice(2, 50),
      magic: dice(2, 50),
      size: random(1, 100),
      economics: dice(2, 50),
      welfare: dice(3, 33) - 10,
      military: dice(2, 50),
      law: dice(2, 50),
      arcana: dice(2, 50),
      equality: dice(2, 50) - 20
    }
  }, base)

  setup.townDemographics(town)
  town.professions = setup.fetchProfessions(town)

  town.economicIdeology = town.economicIdeology || town._economicIdeology
  town.politicalIdeology = town.politicalIdeology || town._politicalIdeology
  town.politicalSource = town.politicalSource || town._politicalSource
  town.origin = setup.townData.terrain[town.terrain].location[town.location].origin.random()
  town.vegetation = setup.weightRandom(setup.townData.terrain[town.terrain].location[town.location].vegetation)
  town.possibleMaterials = setup.townData.terrain[town.terrain].location[town.location].possibleMaterials
  town.materialProbability = setup.structure.material.types
  Object.keys(town.roll).forEach(function (roll) {
    town.roll[roll].clamp(1, 100)
  })

  console.log('Defining taxes')
  Object.defineProperty(town.taxes, 'welfare', {
    get () {
      console.log(this)
      // TODO fix the getter's workaround.
      const tempWelfare = State.variables.town.roll.welfare
      const welfarePercentile = tempWelfare
      const nominalTarget = 2
      const result = nominalTarget + (-1 / (welfarePercentile + 0.1)) + (1 / (10 - welfarePercentile))
      return result
      // return (this.roll.welfare / 50)
    }
  })

  Object.defineProperty(town.taxes, 'military', {
    get () {
      console.log(this)
      // TODO fix the getter's workaround.
      const tempMilitary = State.variables.town.roll.military
      const militaryPercentile = tempMilitary
      const nominalTarget = 2
      const result = nominalTarget + (-1 / (militaryPercentile + 0.1)) + (1 / (10 - militaryPercentile))
      return result
      // return (this.roll.military / 50)
    }
  })

  console.log(`Assigning town size modifiers (btw ${town.name} is a ${town.type})`)
  Object.keys(setup.townData.type[town.type].modifiers).forEach(function (modifier) {
    town.roll[modifier] = Math.fm(town.roll[modifier], setup.townData.type[town.type].modifiers[modifier])
  })

  town.guard = setup.createGuard(town)

  console.log(`Assigning economic modifiers (btw ${town.name} is a ${town.economicIdeology})`)
  // economic ideology attribute modifiers

  Object.keys(setup.townData.economicIdeology[town.economicIdeology].modifiers).forEach(function (modifier) {
    console.log(setup.townData.economicIdeology[town.economicIdeology].modifiers[modifier])
    town.roll[modifier] = Math.fm(town.roll[modifier], setup.townData.economicIdeology[town.economicIdeology].modifiers[modifier])
  })
  // political ideology modifiers
  console.log(`Assigning political ideology modifiers (btw ${town.name} is a ${town.politicalIdeology})`)

  Object.keys(setup.townData.politicalIdeology[town.politicalIdeology].modifiers).forEach(function (modifier) {
    console.log(modifier)
    console.log(setup.townData.politicalIdeology[town.politicalIdeology].modifiers[modifier])
    town.roll[modifier] = Math.fm(town.roll[modifier], setup.townData.politicalIdeology[town.politicalIdeology].modifiers[modifier])
  })
  // Object.assign(town.leader, setup.townData.politicalIdeology[town.politicalIdeology].data)

  setup.createSocioPolitics(town)

  Object.keys(town.roll).forEach(function (roll) {
    town.roll[roll].clamp(1, 100)
  })

  town.equality = ''
  town.equalityDescription = ''
  setup.defineRollDataGetter(town, setup.townData.rollData, 'equality', 'equality', 1)
  setup.defineRollDataGetter(town, setup.townData.rollData, 'equalityDescription', 'equality', 2)
  town.townMaterial = setup.createTownMaterial(setup.townData.terrain[town.terrain].location[town.location].possibleMaterials, town.roll.wealth, town.roll.size)
  setup.townRender(town)
  setup.createStartBuildings(town)
  setup.createStartFactions(town)
  setup.setMaterialProbability(town)

  console.groupEnd()
  // setup.createWeather(town)
  console.log(`${town.name} has loaded.`)
  console.log(town)
  // console.log('loaded', town.wealth, town.roll.size)
  // confirm(town.townMaterial)
  return town
}
