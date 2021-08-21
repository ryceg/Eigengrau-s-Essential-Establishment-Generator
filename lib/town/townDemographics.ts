// TODO: finish fixing TypeScript issues
import { Town, TownBasics } from './_common'
import { townData } from './townData'
import { weightedRandomFetcher } from '../src/weightedRandomFetcher'
import { RaceName } from '../npc-generation/raceTraits'
import { calcPercentage } from '../src/calcPercentage'

export function townDemographics (town: TownBasics) {
  console.log(`Creating ${town.type} demographics.`)
  const townType = townData.type[town.type]
  town._baseDemographics = weightedRandomFetcher(town as Town, townType.demographics(), undefined, undefined, 'popPercentages') as Record<RaceName, number>
}

export function updateDemographics (town: TownBasics, newDemographics: Record<RaceName, number>) {
  console.log('Updating demographics.')
  console.log('New:')
  console.log(newDemographics)

  const races = Object.keys(town._baseDemographics) as RaceName[]
  for (const byRace of races) {
    town._baseDemographics[byRace] = newDemographics[byRace]
  }
  updateDemographicPercentages(town)
}

const updateDemographicPercentages = (town: TownBasics) => {
  // Get an array of the demographic keys (race names).
  const races = Object.keys(town._baseDemographics) as RaceName[]
  // Calculate the sum of the raw demographic values.
  const sum = races
    .map(byRace => town._baseDemographics[byRace])
    .reduce((acc, cur) => acc + cur, 0)
    // Calculate the demographic percentages.
  races.forEach(byRace => {
    town._demographicPercentile[byRace] = town._baseDemographics[byRace] / sum * 100
  })
}

/** Returns the percentage of a single race, humanized to add up to part of 100.
 * @example return 68.87
 */
export const getRacePercentile = (race: RaceName, baseDemographics: Record<RaceName, number>) => {
  // Get an array of the demographic keys (race names).
  alert(race)
  const races = Object.keys(baseDemographics) as RaceName[]
  // Calculate the sum of the raw demographic values.
  const sum = races
    .map(byRace => baseDemographics[byRace])
    .reduce((acc, cur) => acc + cur, 0)
  return baseDemographics[race] / sum * 100
}

/** Returns the population of a single race */
export const getRacePopulation = (race: RaceName, baseDemographics: Record<RaceName, number>, population: number) => {
  return calcPercentage(getRacePercentile(race, baseDemographics), population)
}
