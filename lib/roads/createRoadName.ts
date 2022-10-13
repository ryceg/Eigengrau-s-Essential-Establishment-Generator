import { logger } from '../logger'
import { createNamesake } from '../npc-generation/createNamesake'
import { assign } from '../src/utils'
import { weightedRandomFetcher } from '../src/weightedRandomFetcher'
import { weightRandom } from '../src/weightRandom'
import { Town } from '../town/_common'
import { WeightRecord } from '../types'
import { roadNameProperNouns } from './roadNameProperNouns'
import { ProperNoun, roads } from './roads'

interface RoadOwnership extends ProperNoun {
  // we're not using 'name' because road.name is already being used
  prefix: string
  roadNameType: RoadNameType
  canBePossessive: boolean
  isUnique: boolean
  isBuilding: string | false
}

type RoadNameType = 'properNoun' | 'firstName' | 'lastName'

export function createRoadName (town: Town): RoadOwnership {
  logger.info('Creating a road name...')
  const probabilities = {
    properNoun: 5,
    firstName: 2,
    lastName: 2
  } as WeightRecord<RoadNameType>
  const selected = weightRandom(probabilities)
  const namesake = createNamesake(town)
  logger.info('selected ', selected)
  let road: ProperNoun
  switch (selected) {
    case 'firstName':
      road = {
        prefix: lib.random(1, 100) > 60 ? `${namesake.firstName}'s` : namesake.firstName,
        canBePossessive: true,
        isUnique: false,
        namesake
      }
      break
    case 'lastName':
      road = {
        prefix: lib.random(1, 100) > 90 ? `${namesake.lastName}'s` : namesake.lastName,
        canBePossessive: true,
        isUnique: false,
        namesake
      }
      break
    default:
      road = weightedRandomFetcher(town, roadNameProperNouns, undefined, undefined, 'object') as ProperNoun
  }
  assign(road, {
    roadNameType: selected
  })
  if (road.namesake && !road.namesake.reason) {
    road.namesake.reason = roads.namesakes.reason(town, road.namesake)
  }
  return road as RoadOwnership
}
