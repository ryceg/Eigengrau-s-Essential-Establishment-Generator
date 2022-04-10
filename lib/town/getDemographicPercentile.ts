import { keys } from '../src/utils'
import { Town } from '../town/_common'
import { RaceName } from '../npc-generation/raceTraits'
import { getDemographicsSum } from './townDemographics'

export function getDemographicPercentile (town: Town): Record<RaceName, number> {
  const races = keys(town.baseDemographics)

  const sum = getDemographicsSum(races, town.baseDemographics)

  // Calculate the demographic percentages.
  return races.reduce((demographics, raceName) => {
    const percentage = (town.baseDemographics[raceName] / sum) * 100
    demographics[raceName] = percentage
    return demographics
  }, {} as Record<RaceName, number>)
}
