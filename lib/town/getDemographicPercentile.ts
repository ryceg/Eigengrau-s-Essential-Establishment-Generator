import { RaceName, Town } from '@lib'

export const getDemographicPercentile = (town: Town) => {
  console.log('Getting demographic percent.')
  // Get an array of the demographic keys (race names).
  const races = Object.keys(town.baseDemographics) as RaceName[]
  // Calculate the sum of the raw demographic values.
  const sum = races
    .map((byRace) => town.baseDemographics[byRace])
    .reduce((acc, cur) => acc + cur, 0)
  // Calculate the demographic percentages.
  races.forEach((byRace) => {
    const race: RaceName = byRace
    town._demographicPercentile[race] =
            (town.baseDemographics[race] / sum) * 100
  })
  return town._demographicPercentile
}
