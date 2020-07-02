setup.townDemographics = town => {
  console.log('Creating town demographics...')
  town._baseDemographics = town._baseDemographics || clone(lib.weightedRandomFetcher(town, lib.townData.type[town.type].demographics(), null, null, 'popPercentages'))
  console.log({ town })
  return town
}
