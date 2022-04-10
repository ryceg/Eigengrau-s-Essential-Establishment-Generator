import { getWeightedIndex } from '../src/math'
import { keys } from '../src/utils'
import { TownBasics } from '../town/_common'
import { RaceName } from './raceTraits'

export function fetchRace (town: TownBasics): RaceName {
  const races = keys(town.baseDemographics)
  const populations = Object.values(town.baseDemographics)

  const raceIdx = getWeightedIndex(populations)
  return races[raceIdx]
}
