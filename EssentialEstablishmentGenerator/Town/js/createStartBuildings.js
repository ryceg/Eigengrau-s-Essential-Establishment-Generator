
setup.createStartBuildings = function (town) {
  const buildingType = ['townSquare', 'tavern', 'alchemist', 'GeneralStore', 'smithy', 'market', 'temple', 'docks']

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

  const bakery = setup.goodsAndServices.default.create(town, 'bakery')
  town.buildings.bakery[bakery.key] = bakery

  const florist = setup.goodsAndServices.default.create(town, 'florist')
  town.buildings.florist[florist.key] = florist

  const tailor = setup.goodsAndServices.default.create(town, 'tailor')
  town.buildings.tailor[tailor.key] = tailor

  const butcher = setup.goodsAndServices.default.create(town, 'butcher')
  town.buildings.butcher[butcher.key] = butcher

  const cobbler = setup.goodsAndServices.default.create(town, 'cobbler')
  town.buildings.cobbler[cobbler.key] = cobbler
  return town
}
