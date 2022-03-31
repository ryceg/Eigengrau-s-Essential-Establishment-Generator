import { keys } from '../src/utils'
import { Town } from '../town/_common'
import { RaceName } from './raceTraits'
import { getWeightedIndex } from '../src/math'

export function fetchRace (town: Town): RaceName {
  const races = keys(town.baseDemographics)
  const populations = Object.values(town.baseDemographics)

  const raceIdx = getWeightedIndex(populations)
  return races[raceIdx]
}
