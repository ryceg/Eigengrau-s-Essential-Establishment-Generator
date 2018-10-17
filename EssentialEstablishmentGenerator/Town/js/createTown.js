setup.createTown = function (base) {

  var type = ['hamlet', 'hamlet', 'village', 'village', 'village', 'town', 'town', 'town', 'city', 'city'].random()
  var terrain = ['temperate', 'temperate', 'temperate', 'tropical', 'polar', 'arid'].random()

  var name = setup.createTownName()
  var town = {
    name: name,
    passageName: "TownOutput",
    type: type,
    population: setup.townData.type[type].population(),
    terrain: terrain,
    location: setup.townData.terrain[terrain].start.random(),
    primaryCrop: setup.townData.misc.primaryCrop.random(),
    primaryExport: setup.townData.misc.primaryExport.random(),
    currentEvent: setup.townData.misc.currentEvent.random(),
    microEvent: setup.townData.misc.microEvent,
    wealthRoll: random(1, 100).clamp(1, 100),
    reputationRoll: random(1, 100).clamp(1, 100),
    sinRoll: random(1, 100).clamp(1, 100),
    diversityRoll: random(1, 100).clamp(1, 100),
    magicRoll: random(1, 100).clamp(1, 100),
    sizeRoll: random(1, 100).clamp(1, 100),
    economicsRoll: random(1, 100).clamp(1, 100),
    welfareRoll: random(1, 100).clamp(1, 100),
    militaryRoll: random(1, 100).clamp(1, 100),
    lawRoll: random(1, 100).clamp(1, 100),
    arcanaRoll: random(1, 100).clamp(1, 100)
  }
  town.origin = setup.townData.terrain[town.terrain][town.location].origin.random()
  town.vegetation = setup.townData.terrain[town.terrain][town.location].vegetation.random()
  // town.location = setup.townData.terrain[terrain].random()
  town.wealthRoll += setup.townData.type[town.type].wealthRoll
  town.reputationRoll += setup.townData.type[town.type].reputationRoll
  town.sinRoll += setup.townData.type[town.type].sinRoll
  town.diversityRoll += setup.townData.type[town.type].diversityRoll

  town.guard = setup.createGuard(town)
  setup.createSocioPolitics(town)

  setup.townRender(town)
  return town
}
