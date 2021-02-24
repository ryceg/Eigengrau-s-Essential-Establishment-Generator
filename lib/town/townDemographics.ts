// TODO: finish fixing TypeScript issues
import { Town, TownBasics } from './_common'
import { townData } from './townData'
import { weightedRandomFetcher } from '../src/weightedRandomFetcher'
import { RaceName } from '../npc-generation/raceTraits'
import { keys } from '../src/utils'

export function townDemographics (town: TownBasics) {
  console.log(`Creating ${town.type} demographics.`)
  const townType = townData.type[town.type]
  town._baseDemographics = weightedRandomFetcher(town as Town, townType.demographics(), undefined, undefined, 'popPercentages') as Record<RaceName, number>
}

export function updateDemographics (town: Town, newDemographics: Record<RaceName, number>) {
  console.log('Updating demographics.')
  console.log('New:')
  console.log(newDemographics)
  for (const byRace of keys(newDemographics)) {
    town._baseDemographics[byRace] = newDemographics[byRace]
  }

  // Get an array of the demographic keys (race names).
  const races = Object.keys(town.baseDemographics) as RaceName[]
  // Calculate the sum of the raw demographic values.
  const sum = races
    .map(byRace => town._baseDemographics[byRace])
    .reduce((acc, cur) => acc + cur, 0)
  // Calculate the demographic percentages.
  races.forEach(byRace => {
    town._demographicPercentile[byRace] = town._baseDemographics[byRace] / sum * 100
  })
}
