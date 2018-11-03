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
      if (this.population > 3000) {
        return 'city'
      } else if (this.population > 1000) {
        return 'town'
      } else if (this.population > 300) {
        return 'village'
      } else if (this.population > 30) {
        return 'hamlet'
      } else if (this.population <= 30) {
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
      'GeneralStore': []
    },
    population: setup.townData.type[type].population(),
    _economicIdeology: economicIdeology,
    _politicalSource: politicalSource,
    _politicalIdeology: politicalIdeology,
    get economicIdeology () {
      return this._economicIdeology
    },
    set economicIdeology (value) {
      this._economicIdeology = value
      Object.assign(this, setup.townData.economicIdeology[this._economicIdeology].descriptors)
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
      Object.assign(this, setup.townData.politicalIdeology[this._politicalIdeology].data)
    },
    get politicalSourceDescription () {
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
  town.wealthRoll = Math.clamp(town.wealthRoll, 1, 100)
  town.reputationRoll = Math.clamp(town.reputationRoll, 1, 100)
  town.sinRoll = Math.clamp(town.sinRoll, 1, 100)
  town.diversityRoll = Math.clamp(town.diversityRoll, 1, 100)
  town.magicRoll = Math.clamp(town.magicRoll, 1, 100)
  town.sizeRoll = Math.clamp(town.sizeRoll, 1, 100)
  town.economicsRoll = Math.clamp(town.economicsRoll, 1, 100)
  town.welfareRoll = Math.clamp(town.welfareRoll, 1, 100)
  town.militaryRoll = Math.clamp(town.militaryRoll, 1, 100)
  town.lawRoll = Math.clamp(town.lawRoll, 1, 100)
  town.arcanaRoll = Math.clamp(town.arcanaRoll, 1, 100)

  town.origin = setup.townData.terrain[town.terrain][town.location].origin.random()
  town.vegetation = setup.townData.terrain[town.terrain][town.location].vegetation.random()
  Object.assign(town, setup.townData.type[town.type].modifiers)

  town.guard = setup.createGuard(town.name)

  console.log('Assigning economic modifiers (btw ' + town.name + ' is a ' + town.economicIdeology + ')')
  // economic ideology attribute modifiers
  Object.assign(town, setup.townData.economicIdeology[town.economicIdeology].modifiers)
  // political ideology modifiers
  console.log('Assigning political ideology modifiers (btw ' + town.name + ' is a ' + town.politicalIdeology + ')')
  Object.assign(town, setup.townData.politicalIdeology[town.politicalIdeology].modifiers)

  setup.createSocioPolitics(town)

  setup.townRender(town)

  console.log(town)
  console.groupEnd();
  console.log(town.name + ' has loaded.')
  return town
}
