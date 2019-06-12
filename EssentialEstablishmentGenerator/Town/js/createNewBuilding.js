setup.buildingTypes = {
  'tavern': 'setup.createTavern',
  'smithy': 'setup.createSmithy',
  'docks': 'setup.createDocks',
  'alchemist': 'setup.createAlchemist',
  'general store': 'setup.createGeneralStore',
  'brothel': 'setup.createBrothel',
  'town square': 'setup.createTownSquare',
  'temple': 'setup.createTemple',
  'market': 'setup.createMarket',
  'bakery': 'setup.goodsAndServices.bakery.create',
  'florist': 'setup.goodsAndServices.florist.create',
  'tailor': 'setup.goodsAndServices.tailor.create',
  'butcher': 'setup.goodsAndServices.butcher.create',
  'cobbler': 'setup.goodsAndServices.cobbler.create'
}
setup.createNewBuilding = function (town, buildingType, opts) {
  // this is necessary to point the function towards where the building creation function is kept.
  // unfortunately, it currently needs to be updated manually with each new building.

  if (!town.buildings[buildingType]) {
    town.buildings[buildingType] = {}
  }
  const building = setup.buildingTypes[buildingType](town, opts)
  town.buildings[buildingType][building.key] = building
  return town
}
