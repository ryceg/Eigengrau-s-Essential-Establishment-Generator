import { logger } from '../logger'
import { TownBasics } from './_common'
import { TownType } from './townData'

export function getTownType (town: TownBasics): TownType {
  if (town.population > 6000) return 'city'
  if (town.population > 3000) return 'town'
  if (town.population > 1000) return 'village'
  if (town.population > 30) return 'hamlet'

  // TODO: Remove unexpected side effect are bad.
  if (town.population <= 30) {
    logger.info('Population is less than 30. Setting to 30.')
    town.population = 30
    return 'hamlet'
  }
  return 'village'
}
