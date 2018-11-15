/* global setup random */
setup.createTown = function (base) {
  var type = ['hamlet', 'hamlet', 'village', 'village', 'village', 'town', 'town', 'town', 'city', 'city'].random()
  var terrain = ['temperate', 'temperate', 'temperate', 'tropical', 'polar', 'arid'].random()
  var townName = setup.createTownName()
  var economicIdeology = setup.townData.type[type].economicIdeology.random()
  var politicalSource = setup.townData.type[type].politicalSource.random()
  var politicalIdeology = setup.townData.politicalSource[politicalSource].politicalIdeology.random()
  let town = Object.assign({
    passageName: 'TownOutput',
    name: townName,
    get type () {
      console.log('Fetching town type.')
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
    buildings: {
      'smithy': [],
      'tavern': [],
      'alchemist': [],
      'brothel': [],
      'market': [],
      'GeneralStore': []
    },
    population: setup.townData.type[type].population(),
    _economicIdeology: economicIdeology,
    _politicalSource: politicalSource,
    _politicalIdeology: politicalIdeology,
    get economicIdeology () {
      console.log('Fetching town economic ideology.')
      return this._economicIdeology
    },
    set economicIdeology (value) {
      console.log('Setting town economic ideology.')
      this._economicIdeology = value
      Object.assign(this, setup.townData.economicIdeology[this._economicIdeology].descriptors)
    },
    get politicalSource () {
      console.log('Fetching town political source.')
      return this._politicalSource
    },
    set politicalSource (value) {
      console.log('Setting town political source.')
      this._politicalSource = value
    },
    get politicalIdeology () {
      console.log('Fetching town political ideology.')
      return this._politicalIdeology
    },
    set politicalIdeology (value) {
      console.log('Setting town political ideology.')
      this._politicalIdeology = value
      Object.assign(this, setup.townData.politicalIdeology[this._politicalIdeology].data)
    },
    get politicalSourceDescription () {
      console.log('Fetching town political source description.')
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
      console.log('Fetching town wealth.')
      var wealth = setup.townData.rollData.wealth.find(function (descriptor) {
        return descriptor[0] <= this.wealthRoll
      }, this)
      if (wealth === undefined) {
        console.log('Could not find a wealthRoll descriptor that was appropriate for a roll of ' + this.wealthRoll + ' for ' + this.name)
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
    wealthRoll: random(1, 100),
    reputationRoll: random(1, 100),
    sinRoll: random(1, 100),
    diversityRoll: random(1, 100),
    magicRoll: random(1, 100),
    sizeRoll: random(1, 100),
    economicsRoll: random(1, 100),
    welfareRoll: random(1, 100),
    militaryRoll: random(1, 100),
    lawRoll: random(1, 100),
    arcanaRoll: random(1, 100)
  }, base)
  town.economicIdeology = town.economicIdeology || town._economicIdeology
  town.politicalIdeology = town.politicalIdeology || town._politicalIdeology
  town.politicalSource = town.politicalSource || town._politicalSource

  console.groupCollapsed(town.name + ' is loading...')

  town.origin = setup.townData.terrain[town.terrain][town.location].origin.random()
  town.vegetation = setup.townData.terrain[town.terrain][town.location].vegetation.random()

  console.log('Assigning town size modifiers (btw ' + town.name + ' is a ' + town.type + ')')
  Object.assign(town, setup.townData.type[town.type].modifiers)

  town.guard = setup.createGuard(town.name)

  console.log('Assigning economic modifiers (btw ' + town.name + ' is a ' + town.economicIdeology + ')')
  // economic ideology attribute modifiers
  Object.assign(town, setup.townData.economicIdeology[town.economicIdeology].modifiers)
  // political ideology modifiers
  console.log('Assigning political ideology modifiers (btw ' + town.name + ' is a ' + town.politicalIdeology + ')')
  Object.assign(town, setup.townData.politicalIdeology[town.politicalIdeology].modifiers)

  setup.createSocioPolitics(town)

  town.wealthRoll.clamp(1, 100)
  town.reputationRoll.clamp(1, 100)
  town.sinRoll.clamp(1, 100)
  town.diversityRoll.clamp(1, 100)
  town.magicRoll.clamp(1, 100)
  town.sizeRoll.clamp(1, 100)
  town.economicsRoll.clamp(1, 100)
  town.welfareRoll.clamp(1, 100)
  town.militaryRoll.clamp(1, 100)
  town.lawRoll.clamp(1, 100)
  town.arcanaRoll.clamp(1, 100)
  setup.townRender(town)
  setup.createStartBuildings(town)

  console.log(town)
  console.groupEnd()
  console.log(town.name + ' has loaded.')
  return town
}
