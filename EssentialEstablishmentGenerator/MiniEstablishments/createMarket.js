
setup.createMarket = function (town, opts) {
  opts = opts || {}
  let market = (opts['newBuilding'] || setup.createBuilding)(town, 'market')

  Object.assign(market, {
    name: ['The Markets', 'The Markets of ' + town.name, 'The ' + town.name + ' Bazaar'].seededrandom(),
    associatedTown: town.name,
    initPassage: 'MarketOutput',
    passageName: 'MarketOutput',
    BuildingType: 'market',
    wordNoun: 'market',
    needsWordNoun: false,
    location: setup.market.location.seededrandom(),
    size: setup.market.size.seededrandom(),
    cleanliness: setup.market.cleanliness.seededrandom(),
    draw: setup.market.draw.seededrandom(),
    organisation: setup.market.organisation.seededrandom()
  })
  market.notableFeature = market.draw
  return market
}
