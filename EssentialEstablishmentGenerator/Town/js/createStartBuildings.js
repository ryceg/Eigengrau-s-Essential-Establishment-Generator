/* global setup */
setup.createStartBuildings = function (town) {
  var buildingType = ['townSquare', 'tavern', 'alchemist', 'GeneralStore', 'smithy', 'market', 'temple', 'docks']

  if (town.hasBrothel) {
    buildingType.push('brothel')
  }

  buildingType.forEach(function (type) {
    if (!town.buildings[type]) {
      town.buildings[type] = {}
    }
    var building = setup['create' + type.toUpperFirst()](town)
    town.buildings[type][building.key] = building
  })

  var bakery = setup.goodsAndServices.default.create(town, 'bakery')
  town.buildings.bakery[bakery.key] = bakery

  var florist = setup.goodsAndServices.default.create(town, 'florist')
  town.buildings.florist[florist.key] = florist

  var tailor = setup.goodsAndServices.default.create(town, 'tailor')
  town.buildings.tailor[tailor.key] = tailor
  return town
}
