/* global setup random clone */
setup.createTown = function (base) {
  var type = ['hamlet', 'hamlet', 'village', 'village', 'village', 'town', 'town', 'town', 'city', 'city'].random()
  var terrain = ['temperate', 'temperate', 'temperate', 'tropical', 'polar', 'arid'].random()
  var season = ['summer', 'autumn', 'winter', 'spring']
  var townName = setup.createTownName()
  console.groupCollapsed(townName + ' is loading...')
  var economicIdeology = setup.townData.type[type].economicIdeology.random()
  var politicalSource = setup.townData.type[type].politicalSource.random()
  var politicalIdeology = setup.townData.politicalSource[politicalSource].politicalIdeology.random()
  let town = Object.assign({
    passageName: 'TownOutput',
    name: townName,
    get type () {
      console.log('Getting town type.')
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
    // type: type,
    terrain: terrain,
    currentSeason: season.random(),
    season: season,
    factions: {
    },
    buildings: {
      'smithy': [],
      'tavern': [],
      'alchemist': [],
      'market': [],
      'GeneralStore': [],
      'temple': [],
      'brothel': [],
      // 'docks': []
    },
    population: setup.townData.type[type].population(),
    _demographic: {},
    // Clone the raw demographic data for the town type.
    _baseDemographics: clone(setup.townData.type[type].demographic),
    get baseDemographics () {
      console.log('Getting base demographics.')
      return this._baseDemographics
    },
    set baseDemographics (newDemographics) {
      console.log('Setting base demographics.')
      Object.keys(newDemographics).forEach(function (byRace) {
        this._baseDemographics[byRace] = newDemographics[byRace]
      }, this)
      console.log(this.demographic)
    },
    get demographic () {
      // console.log('Getting demographic percent.')
      // Get an array of the demographic keys (race names).
      var races = Object.keys(this._baseDemographics)
      // Calculate the sum of the raw demographic values.
      var sum = races
        .map(function (byRace) {
          return this._baseDemographics[byRace]
        }, this)
        .reduce(function (acc, cur) {
          return acc + cur
        }, 0)
      // Calculate the demographic percentages.
      races.forEach(function (byRace) {
        this._demographic[byRace] = this._baseDemographics[byRace] / sum * 100
      }, this)
      return this._demographic
    },
    _economicIdeology: economicIdeology,
    _politicalSource: politicalSource,
    _politicalIdeology: politicalIdeology,
    get economicIdeology () {
      console.log('Getting town economic ideology.')
      return this._economicIdeology
    },
    set economicIdeology (value) {
      console.log('Setting town economic ideology.')
      this._economicIdeology = value
      Object.assign(this, setup.townData.economicIdeology[this._economicIdeology].descriptors)
    },
    get politicalSource () {
      console.log('Getting town political source.')
      return this._politicalSource
    },
    set politicalSource (value) {
      console.log('Setting town political source.')
      this._politicalSource = value
    },
    get politicalIdeology () {
      console.log('Getting town political ideology.')
      return this._politicalIdeology
    },
    set politicalIdeology (value) {
      console.log('Setting town political ideology.')
      this._politicalIdeology = value
      Object.assign(this, setup.townData.politicalIdeology[this._politicalIdeology].data)
    },
    get politicalSourceDescription () {
      console.log('Getting town political source description.')
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
      console.log('Getting town wealth.')
      var wealth = setup.townData.rollData.wealth.find(function (descriptor) {
        return descriptor[0] <= this.roll.wealth
      }, this)
      if (wealth === undefined) {
        console.log('Could not find a wealthRoll descriptor that was appropriate for a roll of ' + this.roll.wealth + ' for ' + this.name)
        wealth = setup.townData.rollData.wealth[setup.townData.rollData.wealth.length - 1]
      }
      this._wealth = wealth[1]
      return this._wealth
    },
    location: setup.townData.terrain[terrain].start.random(),
    primaryCrop: setup.townData.misc.primaryCrop.random(),
    primaryExport: setup.townData.misc.primaryExport.random(),
    landmark: setup.townData.misc.landmark.random(),
    currentEvent: setup.townData.misc.currentEvent.random(),
    microEvent: setup.townData.misc.microEvent,
    roll: {
      wealth: random(1, 100),
      reputation: random(1, 100),
      sin: random(1, 100),
      diversity: random(1, 100),
      magic: random(1, 100),
      size: random(1, 100),
      economics: random(1, 100),
      welfare: random(1, 100),
      military: random(1, 100),
      law: random(1, 100),
      arcana: random(1, 100)
    }
  }, base)

  town.professions = setup.fetchProfessions(town)

  town.economicIdeology = town.economicIdeology || town._economicIdeology
  town.politicalIdeology = town.politicalIdeology || town._politicalIdeology
  town.politicalSource = town.politicalSource || town._politicalSource
  town.origin = setup.townData.terrain[town.terrain].location[town.location].origin.random()
  town.vegetation = setup.townData.terrain[town.terrain].location[town.location].vegetation.random()

  Object.keys(town.roll).forEach(function (roll) {
    town.roll[roll].clamp(1, 100)
  })

  console.log('Assigning town size modifiers (btw ' + town.name + ' is a ' + town.type + ')')
  Object.keys(setup.townData.type[town.type].modifiers).forEach(function (modifier) {
    town.roll[modifier] = Math.fm(town.roll[modifier], setup.townData.type[town.type].modifiers[modifier])
  })

  town.guard = setup.createGuard(town)

  console.log('Assigning economic modifiers (btw ' + town.name + ' is a ' + town.economicIdeology + ')')
  // economic ideology attribute modifiers

  Object.keys(setup.townData.economicIdeology[town.economicIdeology].modifiers).forEach(function (modifier) {
    console.log(setup.townData.economicIdeology[town.economicIdeology].modifiers[modifier])
    town.roll[modifier] = Math.fm(town.roll[modifier], setup.townData.economicIdeology[town.economicIdeology].modifiers[modifier])
  })
  // political ideology modifiers
  console.log('Assigning political ideology modifiers (btw ' + town.name + ' is a ' + town.politicalIdeology + ')')

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

  setup.townRender(town)
  setup.createStartBuildings(town)
  setup.createStartFactions(town)

  console.log(town)
  console.groupEnd()
  // setup.createWeather(town)
  console.log(town.name + ' has loaded.')

  return town
}
