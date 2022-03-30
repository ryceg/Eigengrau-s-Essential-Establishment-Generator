import { RaceName, Town } from '@lib'
import { keys } from '../src/utils'

export function getDemographicPercentile (town: Town): Record<RaceName, number> {
  const raceNames = keys(town.baseDemographics)

  // Calculate the number of individuals per race
  const sum = raceNames
    .map((byRace) => town.baseDemographics[byRace])
    .reduce((acc, cur) => acc + cur, 0)

  // Calculate the demographic percentages.
  return raceNames.reduce((demographics, raceName) => {
    const percentage = (town.baseDemographics[raceName] / sum) * 100
    demographics[raceName] = percentage
    return demographics
  }, {} as Record<RaceName, number>)
}
