
setup.createStartBuildings = function (town) {
  const buildingType = ['townSquare', 'tavern', 'alchemist', 'GeneralStore', 'smithy', 'market', 'temple']

  if (town.location === 'seashore' || town.location === 'river coast') {
    buildingType.push('docks')
  }
  if (town.hasBrothel) {
    buildingType.push('brothel')
  }

  buildingType.forEach(function (type) {
    if (!town.buildings[type]) {
      town.buildings[type] = {}
    }
    const building = setup['create' + type.toUpperFirst()](town)
    town.buildings[type][building.key] = building
  })

  if (town.population > 100 || town.roll.wealth > 40) {
    const bakery = setup.goodsAndServices.default.create(town, 'bakery')
    town.buildings.bakery[bakery.key] = bakery
  }

  if (town.population > 1000 || town.roll.wealth > 70) {
    const florist = setup.goodsAndServices.default.create(town, 'florist')
    town.buildings.florist[florist.key] = florist
  }

  if (town.population > 600 || town.roll.wealth > 60) {
    const tailor = setup.goodsAndServices.default.create(town, 'tailor')
    town.buildings.tailor[tailor.key] = tailor
  }

  if (town.population > 400 || town.roll.wealth > 40) {
    const butcher = setup.goodsAndServices.default.create(town, 'butcher')
    town.buildings.butcher[butcher.key] = butcher
  }

  if (town.population > 700 || town.roll.wealth > 60) {
    const cobbler = setup.goodsAndServices.default.create(town, 'cobbler')
    town.buildings.cobbler[cobbler.key] = cobbler
  }

  return town
}
