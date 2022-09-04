// TODO: finish fixing TypeScript issues
import { logger } from '../logger'
import { weightedRandomFetcher } from '../src/weightedRandomFetcher'
import { RaceName } from '../npc-generation/raceTraits'
import { calcPercentage } from '../src/calcPercentage'
import { keys } from '../src/utils'
import { Town, TownBasics } from './_common'
import { townData } from './townData'

export function townDemographics (town: TownBasics) {
  logger.info(`Creating ${town.type} demographics.`)
  const townType = townData.type[town.type]
  town.baseDemographics = weightedRandomFetcher(town as Town, townType.demographics(), undefined, undefined, 'popPercentages') as Record<RaceName, number>
}

/**
 * Returns the percentags of all races, humanized to add up to 100.
 */
export function getRacesPercentile (baseDemographics: Record<RaceName, number>): Record<RaceName, number> {
  logger.info('Getting races percentile...')
  const races = keys(baseDemographics)
  const sum = getDemographicsSum(races, baseDemographics)
  const racePercentage = {} as Record<RaceName, number>
  for (const race of races) {
    racePercentage[race] = baseDemographics[race] / sum * 100
  }
  return racePercentage
}

/**
 * Returns the population for all races.
 */
export function getRacesPopulation (baseDemographics: Record<RaceName, number>, population: number): Record<RaceName, number> {
  logger.info('Getting races population...')
  const racePercentage = getRacesPercentile(baseDemographics)
  const racePopulation = {} as Record<RaceName, number>
  for (const race of keys(racePercentage)) {
    racePopulation[race] = getRacePopulation(race, baseDemographics, population)
  }
  return racePopulation
}

/**
 * Calculate the sum of the raw demographic values.
 */
export function getDemographicsSum (races: RaceName[], baseDemographics: Record<RaceName, number>) {
  logger.info('Getting demographics sum...')
  return races.reduce((sum, race) => sum + baseDemographics[race], 0)
}

/**
 * Returns the population of a single race.
 */
function getRacePopulation (race: RaceName, baseDemographics: Record<RaceName, number>, population: number) {
  logger.info('Getting race population...')
  return calcPercentage(getRacePercentile(race, baseDemographics), population)
}

/**
 * Returns the percentage of a single race, humanized to add up to part of 100.
 * @example return 68.87
 */
function getRacePercentile (race: RaceName, baseDemographics: Record<RaceName, number>) {
  logger.info('Getting race percentile...')
  const races = keys(baseDemographics)
  const sum = getDemographicsSum(races, baseDemographics)
  return baseDemographics[race] / sum * 100
}
