const buildingTypes = {
  // please keep this in alphabetic order
  // TODO automatically sort into alphabetic order
  // TODO automatically find available buildings
  'Alchemist': setup.createAlchemist,
  'Bakery': setup.goodsAndServices.default.create('bakery'),
  'Barber': setup.goodsAndServices.default.create('barber'),
  'Brothel': setup.createBrothel,
  'Butcher': setup.goodsAndServices.default.create('butcher'),
  'Cobbler': setup.goodsAndServices.default.create('cobbler'),
  'Docks': setup.createDocks,
  'Fletcher': setup.goodsAndServices.default.create('fletcher'),
  'Florist': setup.goodsAndServices.default.create('florist'),
  'General Store': setup.createGeneralStore,
  'Graveyard': setup.createGraveyard,
  'Market': setup.createMarket,
  'Smithy': setup.createSmithy,
  'Tailor': setup.goodsAndServices.default.create('tailor'),
  'Tavern': setup.createTavern,
  'Temple': setup.createTemple,
  'Town Square': setup.createTownSquare
}
setup.createNewBuilding = (town, type) => {
  // this is necessary to point the function towards where the building creation function is kept.
  // unfortunately, it currently needs to be updated manually with each new building.

  const newBuilding = buildingTypes[type](town, { isHighlighted: true })

  if (!town.buildings[newBuilding.buildingType]) {
    town.buildings[newBuilding.buildingType] = {}
  }
  town.buildings[newBuilding.buildingType][newBuilding.key] = newBuilding
  return newBuilding
}
