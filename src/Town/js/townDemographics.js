setup.townDemographics = function (town) {
  console.log(`Creating town demographics...`)
  town._baseDemographics = clone(setup.weightedRandomFetcher(town, setup.townData.type[town.type].demographics, '', '', 'popPercentages'))
  console.log({ town })
  return town
}
