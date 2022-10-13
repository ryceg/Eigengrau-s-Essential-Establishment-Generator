import { logger } from '../logger'
import { Town } from '../town/_common'
import { Road } from './roads'

export function findExistingRoad (town: Town): Road | undefined {
  logger.info('Searching for an existing road...')
  for (const road of Object.values(town.roads)) {
    if (road.currentOccupancy < road.capacity) {
      return road
    }
    logger.info(`${road.name} is at its capacity of ${road.capacity}!`)
  }
}
