import { Town } from '../town/_common'
import { Deity, PantheonTypes } from './religion'
import { getPredominantRace } from '../town/getPredominantRace'
import { calcPercentage } from '../src/calcPercentage'
import { weightedRandomFetcher } from '../src/weightedRandomFetcher'

export const createTownReligion = (town: Town, pantheon: PantheonTypes, deity: string) => {
  if (!pantheon) town.religion.pantheon = 'greek'
  if (!deity) town.religion.deity = fetchDeity(town)
}

export const fetchDeity = (town: Town, deities = getFallbackDeities(town)): string => {
  const predominantRace = getPredominantRace(town._demographicPercentile)
  const temp: {
    probability: number,
    name: string
  }[] = []
  for (const deity of deities) {
    temp.push({
      probability: calcPercentage(deity.probabilityWeightings?.npc.race[predominantRace.primaryRace] || 10, predominantRace.percentile),
      name: deity.name
    })
  }

  // TODO: Can we create a new function to avoid using `weightedRandomFetcher`?
  const pickedDeity = weightedRandomFetcher(town, temp, undefined, undefined, 'object') as { probability: number, name: string }
  return pickedDeity.name
}

const getFallbackDeities = (town: Town): Deity[] => {
  const pantheonName = town.religion.pantheon || 'greek'
  const pantheon = lib.religion.pantheon[pantheonName]
  return pantheon.gods
}
