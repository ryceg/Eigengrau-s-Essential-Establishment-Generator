setup.createMarket = function (town, opts) {
  opts = opts || {}
  let market = (opts['newBuilding'] || setup.createBuilding)(town, 'market')

  Object.assign(market, {
    name: ['The Markets', 'The Markets of ' + town.name, 'The ' + town.name + 'Bazaar'].random(),
    associatedTown: town.name,
    initPassage: 'MarketOutput',
    passageName: 'MarketOutput',
    BuildingType: 'market',
    wordNoun: 'market',
    location: setup.marketData.location.random(),
    size: setup.marketData.size.random(),
    cleanliness: setup.marketData.cleanliness.random(),
    draw: setup.marketData.draw.random(),
    organisation: setup.marketData.organisation.random()
  })
  market.notableFeature = market.draw
  // setup.townBinder(town, market, 'market')
  return market
}
