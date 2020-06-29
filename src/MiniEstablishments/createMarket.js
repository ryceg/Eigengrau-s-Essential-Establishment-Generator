setup.createMarket = (town, opts = {}) => {
  const market = (opts.newBuilding || setup.createBuilding)(town, 'market')

  Object.assign(market, {
    associatedTown: town.name,
    initPassage: 'MarketOutput',
    passageName: 'MarketOutput',
    buildingType: 'market',
    wordNoun: ['market', 'bazaar', 'agora', 'emporium', 'plaza', 'piazza'].random(),
    needsWordNoun: false,
    location: lib.market.location.random(),
    size: lib.market.size.random(),
    cleanliness: lib.market.cleanliness.random(),
    draw: lib.market.draw.random(),
    organisation: lib.market.organisation.random(),
    crowd: lib.market.crowd.random()
  })

  market.name = [
    'The Markets',
    `The Markets of ${town.name}`,
    `The ${[town.name, market.road].random()} ${market.wordNoun}`
  ].random()
  market.notableFeature = market.draw
  market.tippyDescription = `${lib.articles.output(market.size || market._size).toUpperFirst()} ${market.wordNoun} that's ${market.cleanliness || market._cleanliness}, and is known for ${market.notableFeature}.`
  return market
}
