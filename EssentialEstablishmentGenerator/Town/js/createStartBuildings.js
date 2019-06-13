setup.createStartBuildings = function (town) {
  const buildingType = ['Town Square', 'Tavern', 'Alchemist', 'General Store', 'Smithy', 'Market', 'Temple']

  if (town.location === 'seashore' || town.location === 'river coast') {
    buildingType.push('docks')
  }
  if (town.hasBrothel) {
    buildingType.push('brothel')
  }

  for (const type of buildingType) {
    if (!town.buildings[type]) {
      town.buildings[type] = {}
    }
    const building = setup.buildingTypes[type](town)
    town.buildings[type][building.key] = building
  }

  if (town.population > 100 || town.roll.wealth > 40) {
    const bakery = setup.goodsAndServices.default.create('bakery')(town)
    town.buildings.bakery[bakery.key] = bakery
  }

  if (town.population > 1000 || town.roll.wealth > 70) {
    const florist = setup.goodsAndServices.default.create('florist')(town)
    town.buildings.florist[florist.key] = florist
  }

  if (town.population > 600 || town.roll.wealth > 60) {
    const tailor = setup.goodsAndServices.default.create('tailor')(town)
    town.buildings.tailor[tailor.key] = tailor
  }

  if (town.population > 400 || town.roll.wealth > 40) {
    const butcher = setup.goodsAndServices.default.create('butcher')(town)
    town.buildings.butcher[butcher.key] = butcher
  }

  if (town.population > 700 || town.roll.wealth > 60) {
    const cobbler = setup.goodsAndServices.default.create('cobbler')(town)
    town.buildings.cobbler[cobbler.key] = cobbler
  }

  return town
}
