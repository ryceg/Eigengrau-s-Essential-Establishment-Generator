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
  'Bakery': setup.goodsAndServices.default.create('bakery'),
  'Florist': setup.goodsAndServices.default.create('florist'),
  'Tailor': setup.goodsAndServices.default.create('tailor'),
  'Butcher': setup.goodsAndServices.default.create('butcher'),
  'Cobbler': setup.goodsAndServices.default.create('cobbler')
}
setup.createNewBuilding = function (town, buildingType, opts) {
  // this is necessary to point the function towards where the building creation function is kept.
  // unfortunately, it currently needs to be updated manually with each new building.

  setup.buildingTypes[buildingType](town, opts)
  return town
}
