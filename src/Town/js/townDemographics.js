// TODO: convert
setup.townDemographics = town => {
  console.log('Creating town demographics...')
  town._baseDemographics = town._baseDemographics || clone(lib.weightedRandomFetcher(town, lib.townData.type[town.type].demographics(), null, null, 'popPercentages'))
}

setup.updateDemographics = (town, newDemographics) => {
  console.log('Updating demographics.')
  console.log('New:')
  console.log(newDemographics)
  if (!town._baseDemographics) town._baseDemographics = {}
  Object.keys(newDemographics).forEach(byRace => {
    town._baseDemographics[byRace] = newDemographics[byRace]
  })
  // Get an array of the demographic keys (race names).
  const races = Object.keys(town.baseDemographics)
  // Calculate the sum of the raw demographic values.
  const sum = races
    .map(byRace => town._baseDemographics[byRace])
    .reduce((acc, cur) => acc + cur, 0)
  // Calculate the demographic percentages.
  races.forEach(byRace => {
    town._demographicPercentile[byRace] = town._baseDemographics[byRace] / sum * 100
  })
}
