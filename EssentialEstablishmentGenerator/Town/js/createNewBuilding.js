setup.buildingTypes = {
  'Tavern': setup.createTavern,
  'Smithy': setup.createSmithy,
  'Docks': setup.createDocks,
  'Alchemist': setup.createAlchemist,
  'General Store': setup.createGeneralStore,
  'Brothel': setup.createBrothel,
  'Town Square': setup.createTownSquare,
  'Temple': setup.createTemple,
  'Market': setup.createMarket,
  'bakery': setup.goodsAndServices.default.create('bakery'),
  'florist': setup.goodsAndServices.default.create('florist'),
  'tailor': setup.goodsAndServices.default.create('tailor'),
  'butcher': setup.goodsAndServices.default.create('butcher'),
  'cobbler': setup.goodsAndServices.default.create('cobbler')
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
