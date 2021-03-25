/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Town, TownRolls } from '../town/_common'
import { Deity, DeityRank, PantheonTypes } from './religion'
import { calcPercentage } from '../src/calcPercentage'
import { weightedRandomFetcher } from '../src/weightedRandomFetcher'
import { RaceName } from '@lib'

export const createTownReligion = (town: Town, pantheon: PantheonTypes, deity: string) => {
  if (!pantheon) town.religion.pantheon = 'greek'
  if (!deity) town.religion.deity = fetchDeity(town)
}

/**
 * The probabilities that replace the default 10.
 */
export const rankProbabilities: Record<DeityRank, number> = {
  'leader': 10,
  'greater deity': 9,
  'intermediate deity': 7,
  'lesser deity': 5,
  'immortal': 3,
  'demigod': 2,
  'saint': 1
}

const getDeityWeightFromRace = (town: Town, deity: Deity) => {
  let probability = rankProbabilities[deity.rank] || 10
  Object.keys(town._demographicPercentile).forEach(function (key) {
    const race = key as RaceName
    if (deity?.probabilityWeightings?.race?.[race]) {
      const raceWeight = deity.probabilityWeightings.race[race]
      if (raceWeight) probability += calcPercentage(raceWeight, town._demographicPercentile[race])
    }
  })
  console.log(deity.name, probability)
  return probability
}

export const getTownDeityWeightings = (town: Town, deities = getFallbackDeities(town)) => {
  console.log('Getting town deity weightings...')
  const temp: Record<string, {
    probability: number,
    name: string
  }> = {}
  const firstPlaceBonus = 4
  const secondPlaceBonus = 2
  const lowestQualifyingPosition = 10
  for (const deity of deities) {
    if (town.ignoreRace) {
      temp[deity.name] = {
        probability: rankProbabilities[deity.rank],
        name: deity.name
      }
    } else {
      temp[deity.name] = {
        probability: getDeityWeightFromRace(town, deity),
        name: deity.name
      }
    }
    console.log('before', temp[deity.name].probability)
    temp[deity.name].probability = addIfDefined(deity?.probabilityWeightings?.economicIdeology?.[town.economicIdeology], temp[deity.name].probability)

    temp[deity.name].probability = addIfDefined(deity?.probabilityWeightings?.politicalIdeology?.[town.politicalIdeology], temp[deity.name].probability)

    temp[deity.name].probability = addIfDefined(deity?.probabilityWeightings?.politicalSource?.[town.politicalSource], temp[deity.name].probability)

    console.log('after', temp[deity.name].probability)
    for (const roll in deity?.probabilityWeightings?.rolls) {
      if (!roll) break
      const townRoll = roll as TownRolls
      temp[deity.name].probability = addIfDefined(
        compareRollToTarget(
          deity.probabilityWeightings?.rolls[townRoll],
          town.roll[townRoll]),
        temp[deity.name].probability)
    }
    console.log(deity.name, temp[deity.name].probability)
  }

  // sort high to low
  const output = Object.fromEntries(
    Object.entries(temp).sort(([, a], [, b]) => a.probability - b.probability)
  )
  console.log('output')
  console.log(output)

  // apply bonuses
  output[Object.keys(output)[0]].probability *= firstPlaceBonus
  output[Object.keys(output)[1]].probability *= secondPlaceBonus

  // remove lowest probabilities
  for (let i = lowestQualifyingPosition; i < Object.keys(output).length - 1; i++) {
    output[Object.keys(output)[i]].probability = 0
  }

  // curve remainder lowest five
  for (let i = 1; i < 5; i++) {
    output[Object.keys(output)[lowestQualifyingPosition - i]].probability /= 5 / i
  }

  return output
  // return temp
}

export const compileWeightToPercentile = (weights: Record<string, {
  probability: number,
  name: string
}>) => {
  console.log('Compiling weights to percentile...')
  console.log(weights)
  // Get an array of the demographic keys (race names).
  const deities = Object.keys(weights)
  // Calculate the sum of the raw demographic values.
  const sum = deities
    .map(deity => weights[deity])
    .reduce((acc, cur) => acc + cur.probability, 0)
  // Calculate the demographic percentages.
  const percentages: Record<string, number> = {}
  for (const deity of deities) {
    percentages[deity] = weights[deity].probability / sum * 100
  }
  return percentages
}

export const fetchDeity = (town: Town, deities = getFallbackDeities(town)): string => {
  const weights = getTownDeityWeightings(town, deities)

  // TODO: Can we create a new function to avoid using `weightedRandomFetcher`?
  const pickedDeity = weightedRandomFetcher(town, weights, undefined, undefined, 'object') as { probability: number, name: string }
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

export const addIfDefined = (arg: number | undefined, target: number) => {
  if (!arg) return target
  return target + arg
}

export const getFallbackDeities = (town: Town): Deity[] => {
  const pantheonName = town.religion.pantheon || 'greek'
  const pantheon = lib.religion.pantheon[pantheonName as PantheonTypes]
  return pantheon.gods
}

export const getDeityPercentagesList = (weights: Record<string, number>): [string, number][] => {
  console.log('Formatting deity percentages into a list...')
  console.log(weights)
  const output = []
  for (const deity in weights) {
    const temp: [string, number] = [deity, weights[deity]]
    output.push(temp)
  }
  return output
}
