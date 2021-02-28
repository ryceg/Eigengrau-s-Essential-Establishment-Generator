import { Town, TownRolls } from '../town/_common'
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
  const temp: Record<string, {
    probability: number,
    name: string
  }> = {}
  for (const deity of deities) {
    temp[deity.name] = {
      probability: calcPercentage(deity.probabilityWeightings?.race[predominantRace.primaryRace] || 10, predominantRace.percentile),
      name: deity.name
    }
    if (deity.probabilityWeightings) {
      modifyDeityProbability(deity.probabilityWeightings.economicIdeology[town.economicIdeology], temp[deity.name].probability)
      modifyDeityProbability(deity.probabilityWeightings.politicalIdeology[town.politicalIdeology], temp[deity.name].probability)
      modifyDeityProbability(deity.probabilityWeightings.politicalSource[town.politicalSource], temp[deity.name].probability)
      for (const roll in deity.probabilityWeightings.rolls) {
        modifyDeityProbability(
          compareRollToTarget(
            deity.probabilityWeightings?.rolls[roll],
            town.roll[roll as TownRolls]),
          temp[deity.name].probability)
      }
    }
  }

  // TODO: Can we create a new function to avoid using `weightedRandomFetcher`?
  const pickedDeity = weightedRandomFetcher(town, temp, undefined, undefined, 'object') as { probability: number, name: string }
  return pickedDeity.name
}

const compareRollToTarget = (roll: number, target: number, bonus = 30) => {
  if (!roll || !target) return
  const distance = Math.abs(target - roll)
  if (distance < bonus) {
    const percentage = (100 - distance) / 100
    return bonus * percentage
  }
}

const modifyDeityProbability = (arg: number | undefined, target: number) => {
  if (!arg) return
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  target = target + arg
}

const getFallbackDeities = (town: Town): Deity[] => {
  const pantheonName = town.religion.pantheon || 'greek'
  const pantheon = lib.religion.pantheon[pantheonName]
  return pantheon.gods
}
