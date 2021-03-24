/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Town, TownRolls } from '../town/_common'
import { Deity, DeityRank, PantheonTypes } from './religion'
import { getPredominantRace } from '../town/getPredominantRace'
import { calcPercentage } from '../src/calcPercentage'
import { weightedRandomFetcher } from '../src/weightedRandomFetcher'

export const createTownReligion = (town: Town, pantheon: PantheonTypes, deity: string) => {
  if (!pantheon) town.religion.pantheon = 'greek'
  if (!deity) town.religion.deity = fetchDeity(town)
}

/**
 * The probabilities that replace the default 10.
 */
const rankProbabilities: Record<DeityRank, number> = {
  'leader': 20,
  'greater deity': 15,
  'intermediate deity': 10,
  'lesser deity': 8,
  'immortal': 6,
  'demigod': 5,
  'saint': 5
}

export const fetchDeity = (town: Town, deities = getFallbackDeities(town)): string => {
  const predominantRace = getPredominantRace(town._demographicPercentile)
  const temp: Record<string, {
    probability: number,
    name: string
  }> = {}
  for (const deity of deities) {
    temp[deity.name] = {
      probability: calcPercentage(deity?.probabilityWeightings?.race?.[predominantRace.primaryRace] || rankProbabilities[deity.rank] || 10, predominantRace.percentile),
      name: deity.name
    }

    modifyDeityProbability(deity?.probabilityWeightings?.economicIdeology?.[town.economicIdeology], temp[deity.name].probability)

    modifyDeityProbability(deity?.probabilityWeightings?.politicalIdeology?.[town.politicalIdeology], temp[deity.name].probability)

    if (deity?.probabilityWeightings?.politicalSource?.[town.politicalSource]) modifyDeityProbability(deity?.probabilityWeightings?.politicalSource?.[town.politicalSource], temp[deity.name].probability)

    for (const roll in deity?.probabilityWeightings?.rolls) {
      if (!roll) break
      const townRoll = roll as TownRolls
      modifyDeityProbability(
        compareRollToTarget(
          deity.probabilityWeightings?.rolls[townRoll],
          town.roll[townRoll]),
        temp[deity.name].probability)
    }
  }

  // TODO: Can we create a new function to avoid using `weightedRandomFetcher`?
  const pickedDeity = weightedRandomFetcher(town, temp, undefined, undefined, 'object') as { probability: number, name: string }
  return pickedDeity.name
}

interface ComparisonOptions {
  bonus: number
  /** Tolerance dictates whether a higher/lower roll will be counted.
   * "Over" means if the 'target' is 70, with a 10
   */
  tolerance: 'over' | 'under' | 'both'
  maxDistance: number
}

/**
 * @param roll This is the variable.
 * @param target This is the target for the roll- think of it as the DC.
 * @param opts Optional object.
 * @returns The probability bonus
 */
export const compareRollToTarget = (roll: number | undefined, target: number, opts?: ComparisonOptions) => {
  if (!roll) return 0
  opts = Object.assign({
    bonus: 30,
    maxDistance: 30,
    tolerance: 'both'
  }, opts) as ComparisonOptions
  const distance = Math.abs(target - roll)
  switch (opts.tolerance) {
    case 'over':
      if (target < roll) return getSimilarity(opts.bonus, distance)
      break
    case 'under':
      if (target > roll) return getSimilarity(opts.bonus, distance)
  }
  if (distance < opts.maxDistance) {
    return getSimilarity(opts.bonus, distance)
  }
  return 0
}
/** This can be thought of as 'similarity' to the target, with 1 being identical. */
const getSimilarity = (base: number, distance: number) => {
  const similarity = (100 - distance) / 100
  return base * similarity
}

const modifyDeityProbability = (arg: number | undefined, target: number) => {
  if (!arg) return
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  target = target + arg
}

const getFallbackDeities = (town: Town): Deity[] => {
  const pantheonName = town.religion.pantheon || 'greek'
  const pantheon = lib.religion.pantheon[pantheonName as PantheonTypes]
  return pantheon.gods
}
