setup.createTown = function (base) {
  var type = ['hamlet', 'hamlet', 'village', 'village', 'village', 'town', 'town', 'town', 'city', 'city'].random()
  var terrain = ['temperate', 'temperate', 'temperate', 'tropical', 'polar', 'arid'].random()
  var name = setup.createTownName()

  var town = Object.assign({
    passageName: 'TownOutput',
    name: name,
    type: type,
    terrain: terrain,
    population: setup.townData.type[type].population(),
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

  // town.guard = setup.createGuard(town)
  setup.createSocioPolitics(town)

  // setup.townRender(town)
  console.log(town)
  return town
}
