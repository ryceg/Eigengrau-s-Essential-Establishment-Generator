/* global setup */
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
    location: setup.market.location.random(),
    size: setup.market.size.random(),
    cleanliness: setup.market.cleanliness.random(),
    draw: setup.market.draw.random(),
    organisation: setup.market.organisation.random()
  })
  market.notableFeature = market.draw
  // setup.townBinder(town, market, 'market')
  return market
}
