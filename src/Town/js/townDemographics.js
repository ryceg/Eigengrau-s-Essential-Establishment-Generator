setup.townDemographics = town => {
  console.log('Creating town demographics...')
  town._baseDemographics = clone(setup.weightedRandomFetcher(town, setup.townData.type[town.type].demographics, null, null, 'popPercentages'))
  console.log({ town })
  return town
}
