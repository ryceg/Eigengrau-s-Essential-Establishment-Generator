import { logger } from '../logger'
import { Town } from '../town/_common'

export function findBuilding (town: Town, key: string) {
  logger.info('Finding a building;', key)
  return town.buildings.find(building => building.key === key)
}
