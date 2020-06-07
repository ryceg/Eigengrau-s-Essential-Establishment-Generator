setup.createMarket = (town, opts = {}) => {
  const market = (opts.newBuilding || setup.createBuilding)(town, 'market')

  Object.assign(market, {
    associatedTown: town.name,
    initPassage: 'MarketOutput',
    passageName: 'MarketOutput',
    buildingType: 'market',
    wordNoun: ['market', 'bazaar', 'agora', 'emporium', 'plaza', 'piazza'].random(),
    needsWordNoun: false,
    location: setup.market.location.random(),
    size: setup.market.size.random(),
    cleanliness: setup.market.cleanliness.random(),
    draw: setup.market.draw.random(),
    organisation: setup.market.organisation.random(),
    crowd: setup.market.crowd.random()
  })

  market.name = [
    'The Markets',
    `The Markets of ${town.name}`,
    `The ${[town.name, market.road].random()} ${market.wordNoun}`
  ].random()
  market.notableFeature = market.draw
  market.tippyDescription = `${setup.articles.output(market.size || market._size).toUpperFirst()} ${market.wordNoun} that's ${market.cleanliness || market._cleanliness}, and is known for ${market.notableFeature}.`
  return market
}
