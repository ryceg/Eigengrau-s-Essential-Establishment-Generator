import { Town } from '../town/_common'
import { Deity, PantheonTypes } from './religion'
import { getPredominantRace } from '../town/getPredominantRace'
import { calcPercentage } from '../src/calcPercentage'
import { weightedRandomFetcher } from '../src/weightedRandomFetcher'

export const createTownReligion = (town: Town, pantheon: PantheonTypes, deity: string) => {
  if (!pantheon) town.religion.pantheon = 'greek'
  if (!deity) town.religion.deity = fetchDeity(town)
}

export const fetchDeity = (town: Town, godArray?: Deity[]): string => {
  // if (State.metadata.has('pantheon') === true) {
  //   godArray = State.metadata.get('pantheon')
  // }
  if (!godArray) godArray = lib.religion.pantheon[town.religion.pantheon || 'greek'].gods
  const predominantRace = getPredominantRace(town._demographicPercentile)
  const temp: {
    probability: number,
    god: string
  }[] = []
  for (const god of godArray) {
    temp.push({
      probability: calcPercentage(god.probabilityWeightings?.npc.race[predominantRace.primaryRace] || 10, predominantRace.percentile),
      god: god.name
    })
  }
  const pickedDeity = weightedRandomFetcher(town, temp, undefined, undefined, 'object') as { probability: number, god: string }
  return pickedDeity.god
}
