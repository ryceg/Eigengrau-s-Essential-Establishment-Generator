/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Town, TownRolls } from '../town/_common'
import { Deity, DeityRank, PantheonTypes, religion } from './religion'
import { calcPercentage } from '../src/calcPercentage'
import { weightedRandomFetcher } from '../src/weightedRandomFetcher'
import { RaceName } from '@lib'
import { random } from '../src/random'

export const createTownReligion = (town: Town, pantheon?: PantheonTypes, deity?: string) => {
  if (!pantheon) pantheon = 'greek'
  town.religion.pantheon = pantheon
  // town.religionProbabilities = compileWeightToRecord(getTownDeityWeightings(town))
  if (!deity) deity = getRandomDeity(town)
  town.religion.deity = deity
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
  return probability
}

/** Gets everything static- i.e. no user-intervention specific modifiers. */
export const getUnalteredTownDeityWeightings = (town: Town, deities = getFallbackDeities(town)) => {
  console.log('Getting unaltered town deity weightings...')
  const weightings: Record<string, {
    probability: number,
    name: string
  }> = {}

  for (const deity of deities) {
    if (town.ignoreRace) {
      weightings[deity.name] = {
        probability: rankProbabilities[deity.rank],
        name: deity.name
      }
    } else {
      weightings[deity.name] = {
        probability: getDeityWeightFromRace(town, deity),
        name: deity.name
      }
    }

    weightings[deity.name].probability = addIfDefined(deity?.probabilityWeightings?.economicIdeology?.[town.economicIdeology], weightings[deity.name].probability)
    weightings[deity.name].probability = addIfDefined(deity?.probabilityWeightings?.politicalIdeology?.[town.politicalIdeology], weightings[deity.name].probability)
    weightings[deity.name].probability = addIfDefined(deity?.probabilityWeightings?.politicalSource?.[town.politicalSource], weightings[deity.name].probability)
    for (const roll in deity?.probabilityWeightings?.rolls) {
      if (!roll) continue
      const townRoll = roll as TownRolls
      weightings[deity.name].probability = addIfDefined(
        compareRollToTarget(
          deity.probabilityWeightings?.rolls[townRoll],
          town.roll[townRoll]),
        weightings[deity.name].probability)
    }
  }
  console.log(weightings)
  return weightings
}

/** Modifies the town religion weights based on the user defined weights. */
export const modifyTownWeights = (town: Town, weights: Record<string, {
  probability: number,
  name: string
}>, deities = getFallbackDeities(town)) => {
  console.log('Modifying town weights...')
  console.log(weights)
  if (!town.religion._modifiers) town.religion._modifiers = {}
  for (const deity of deities) {
    if (!weights[deity.name]) {
      weights[deity.name] = {
        name: deity.name,
        probability: 0
      }
    }
    if (!town.religion._modifiers[deity.name]) town.religion._modifiers[deity.name] = 0
    weights[deity.name].probability = addIfDefined(town.religion._modifiers[deity.name], weights[deity.name].probability)
  }
  console.log(weights)
  return weights
}
/** The generic, user-facing one that gets _everything_; applies modifiers, runoffs, etc. */
export const getTownDeityWeightings = (town: Town, deities = getFallbackDeities(town)) => {
  console.groupCollapsed('Getting town deity weightings...')
  let weights = getUnalteredTownDeityWeightings(town, deities)
  console.log('Got unaltered weights.')
  console.log(weights)
  weights = modifyTownWeights(town, weights, deities)
  weights = gradeDeityWeightings(weights)
  console.log('Clamping...')
  for (const entry in weights) {
    weights[entry].probability = weights[entry].probability.clamp(0, 999999)
  }
  console.log('Finished')
  console.groupEnd()
  return weights
}

/** Returns the weightings, modified with the multipliers and runoff position. */
export const gradeDeityWeightings = (temp: Record<string, {
  probability: number;
  name: string;
}>) => {
  const firstPlaceMultiplier = 10
  const secondPlaceMultiplier = 2
  const randomPlaceMultiplier = 20
  const lowestQualifyingPosition = 10

  // sort high to low
  const output = Object.fromEntries(
    Object.entries(temp).sort(([, a], [, b]) => a.probability - b.probability)
  )
  for (const entry in output) {
    output[entry].probability = output[entry].probability.clamp(0, 999999)
  }
  // apply bonuses
  output[Object.keys(output)[0]].probability *= firstPlaceMultiplier
  output[Object.keys(output)[1]].probability *= secondPlaceMultiplier
  output[Object.keys(output)[random(lowestQualifyingPosition)]].probability *= randomPlaceMultiplier

  // remove lowest probabilities
  for (let i = lowestQualifyingPosition; i < Object.keys(output).length - 1; i++) {
    output[Object.keys(output)[i]].probability = 0
  }

  // curve remainder lowest five
  for (let i = 1; i < 5; i++) {
    output[Object.keys(output)[lowestQualifyingPosition - i]].probability /= 5 / i
  }
  return output
}

/** Compiles the weight to a simple record. */
export const compileWeightToRecord = (weights: Record<string, {
  probability: number,
  name: string
}>) => {
  // Get an array of the demographic keys (race names).
  const deities = Object.keys(weights)

  // Calculate the demographic percentages.
  const percentages: Record<string, number> = {}
  for (const deity of deities) {
    percentages[deity] = weights[deity].probability
  }
  return percentages
}

/** Compiles weight to a percentile */
export const compileWeightToPercentile = (weights: Record<string, {
  probability: number,
  name: string
}>) => {
  console.log('Compiling weights to percentile...')
  // Get an array of the demographic keys (race names).
  const deities = Object.keys(weights)

  // Calculate the sum of the raw demographic values.
  const sum = deities
    .map(deity => weights[deity])
    .reduce((acc, cur) => acc + cur.probability, 0)

  const percentages = compileWeightToRecord(weights)

  for (const deity of deities) {
    percentages[deity] = weights[deity].probability / sum * 100
  }
  return percentages
}

export const getRandomDeity = (town: Town, deities = getFallbackDeities(town)): string => {
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

/** Returns them added together if the first argument is defined, otherwise just returns the second argument. */
export const addIfDefined = (arg: number | undefined, target: number) => {
  if (!arg) return target
  return target + arg
}

export const getFallbackDeities = (town: Town): Deity[] => {
  const pantheonName = town.religion.pantheon || 'greek'
  const pantheon = religion.pantheon[pantheonName as PantheonTypes]
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
  console.log(output)
  return output
}
