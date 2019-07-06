
setup.createMarket = function (town, opts) {
  opts = opts || {}
  const market = (opts['newBuilding'] || setup.createBuilding)(town, 'market')

  Object.assign(market, {
    associatedTown: town.name,
    initPassage: 'MarketOutput',
    passageName: 'MarketOutput',
    buildingType: 'market',
    wordNoun: ['market', 'bazaar', 'agora', 'emporium', 'plaza', 'piazza'].seededrandom(),
    needsWordNoun: false,
    location: setup.market.location.seededrandom(),
    size: setup.market.size.seededrandom(),
    cleanliness: setup.market.cleanliness.seededrandom(),
    draw: setup.market.draw.seededrandom(),
    organisation: setup.market.organisation.seededrandom(),
    crowd: setup.market.crowd.seededrandom()
  })

  market.name = [
    'The Markets',
    'The Markets of ' + town.name,
    'The ' + [town.name, market.road].seededrandom() + ' ' + market.wordNoun
  ].seededrandom()
  market.notableFeature = market.draw
  market.tippyDescription = 'A ' + (market.size || market._size) + ' ' + market.wordNoun + " that's " + (market.cleanliness || market._cleanliness) + ', and is known for ' + market.notableFeature + '.'
  // setup.townBinder(town, market, 'market')
  return market
}
