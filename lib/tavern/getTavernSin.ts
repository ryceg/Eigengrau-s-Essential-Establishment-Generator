import { logger } from '../logger'
import { Tavern } from './_common'

export function getTavernSin (tavern: Tavern) {
  logger.info(`Fetching ${tavern.name} sin.`)

  if (tavern.roll.sin > 80) {
    return 'corrupt'
  }
  if (tavern.roll.sin > 70) {
    return 'venal'
  }
  if (tavern.roll.sin > 60) {
    return 'sleazy'
  }
  if (tavern.roll.sin > 50) {
    return 'seedy'
  }
  if (tavern.roll.sin > 40 && tavern.roll.reputation > 60) {
    return 'surprisingly trustworthy'
  }
  if (tavern.roll.sin > 40) {
    return 'trustworthy'
  }
  if (tavern.roll.sin > 30 && tavern.roll.reputation > 60) {
    return 'surprisingly reliable'
  }
  if (tavern.roll.sin > 30) {
    return 'reliable'
  }
  if (tavern.roll.sin <= 20 && tavern.roll.reputation > 60) {
    return 'surprisingly honest'
  }
  return 'honest'
}
