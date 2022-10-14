import { logger } from '../logger'
import { Town, TownRolls } from '../town/_common'
import { Deity, DeityRank, Pantheon, PantheonTypes, religion } from './religion'
import { calcPercentage } from '../src/calcPercentage'
import { random } from '../src/random'

export const createTownReligion = (town: Town, pantheon?: Pantheon) => {
  if (!pantheon) pantheon = religion.pantheon.greek
  town.religion.pantheon = pantheon.name
  const tempWeights = getTownDeityWeightings(town, pantheon.gods)
  town.religionProbabilities = gradeDeityWeightings(tempWeights)
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
  logger.info(`Getting the weight for ${deity.name}`)
  let probability = rankProbabilities[deity.rank] || 10
  for (const race of lib.keys(town.baseDemographics)) {
    if (deity?.probabilityWeightings?.race?.[race]) {
      const raceWeight = deity.probabilityWeightings.race[race]
      if (raceWeight) probability += calcPercentage(raceWeight, lib.getDemographicPercentile(town)[race])
    }
  }
  return probability
}

/** Gets everything static- i.e. no user-intervention specific modifiers. */
export const getUnalteredTownDeityWeightings = (town: Town, deities = getFallbackDeities(town)) => {
  logger.info('Getting unaltered town deity weightings...')
  const weightings: Record<string, number> = {}

  for (const deity of deities) {
    if (town?.ignoreRace) {
      weightings[deity.name] = rankProbabilities[deity.rank] || 7
    } else {
      weightings[deity.name] = getDeityWeightFromRace(town, deity) || 7
    }

    weightings[deity.name] = addIfDefined(deity?.probabilityWeightings?.economicIdeology?.[town.economicIdeology], weightings[deity.name])
    weightings[deity.name] = addIfDefined(deity?.probabilityWeightings?.politicalIdeology?.[town.politicalIdeology], weightings[deity.name])
    weightings[deity.name] = addIfDefined(deity?.probabilityWeightings?.politicalSource?.[town.politicalSource], weightings[deity.name])
    for (const roll in deity?.probabilityWeightings?.rolls) {
      if (!roll) continue
      const townRoll = roll as TownRolls
      weightings[deity.name] = addIfDefined(
        compareRollToTarget(
          deity.probabilityWeightings?.rolls[townRoll],
          town.roll[townRoll]),
        weightings[deity.name])
    }
  }
  return weightings
}

/** Modifies the town religion weights based on the user defined weights. */
export const modifyTownWeights = (town: Town, weights: Record<string, number>, deities = getFallbackDeities(town)) => {
  logger.info('Modifying town weights...')
  if (!town.religion._modifiers) town.religion._modifiers = {}
  for (const deity of deities) {
    if (!weights[deity.name]) {
      weights[deity.name] = 0
    }
    if (!town.religion._modifiers[deity.name]) town.religion._modifiers[deity.name] = 0
    weights[deity.name] = addIfDefined(town.religion._modifiers[deity.name], weights[deity.name])
  }
  return weights
}
/** The generic, user-facing one that gets _everything_; applies modifiers, runoffs, etc. */
export const getTownDeityWeightings = (town: Town, deities = getFallbackDeities(town)) => {
  logger.openGroup('Getting town deity weightings...')
  let weights = getUnalteredTownDeityWeightings(town, deities)
  logger.info('Got unaltered weights:', weights)
  weights = modifyTownWeights(town, weights, deities)
  logger.info('Clamping...')
  for (const entry in weights) {
    weights[entry] = weights[entry].clamp(0, 999999)
  }
  logger.info('Finished')
  logger.closeGroup()
  return weights
}

/** Returns the weightings, modified with the multipliers and runoff position.
 * Only runs on startup!
*/
export const gradeDeityWeightings = (temp: Record<string, number>) => {
  const firstPlaceMultiplier = 10
  const secondPlaceMultiplier = 2
  const randomPlaceMultiplier = 20
  const lowestQualifyingPosition = 10

  // sort high to low
  const output = Object.fromEntries(
    Object.entries(temp).sort(([, a], [, b]) => a - b)
  )
  const deityArray = Object.keys(output)

  // clamp
  for (const entry in output) {
    output[entry] = output[entry].clamp(0, 999999)
  }
  // apply bonuses
  output[deityArray[0]] *= firstPlaceMultiplier
  output[deityArray[1]] *= secondPlaceMultiplier
  output[deityArray[random(lowestQualifyingPosition)]] *= randomPlaceMultiplier

  // remove lowest probabilities
  for (let i = lowestQualifyingPosition; i < deityArray.length - 1; i++) {
    output[deityArray[i]] = 0
  }

  // curve remainder lowest five
  for (let i = 1; i < 5; i++) {
    output[deityArray[lowestQualifyingPosition - i]] /= 5 / i
  }
  return output
}

/** Compiles weight to a percentile */
export const compileWeightToPercentile = (weights: Record<string, number>) => {
  logger.info('Compiling weights to percentile...')
  // Get an array of the demographic keys (race names).
  const deities = Object.keys(weights)

  // Calculate the sum of the raw demographic values.
  const sum = deities
    .map(deity => weights[deity])
    .reduce((acc, cur) => acc + cur, 0)

  const percentages: Record<string, number> = {}

  for (const deity of deities) {
    percentages[deity] = weights[deity] / sum * 100
  }
  return percentages
}

// export const getRandomDeity = (town: Town, deities = getFallbackDeities(town)): string => {
//   const weights = getTownDeityWeightings(town, deities)

//   // TODO: Can we create a new function to avoid using `weightedRandomFetcher`?
//   const pickedDeity = weightedRandomFetcher(town, weights, undefined, undefined, 'object')
//   return pickedDeity
// }

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

export const getFallbackPantheon = (town: Town): Pantheon => {
  const pantheonName = town.religion.pantheon
  const pantheon = religion.pantheon[pantheonName as PantheonTypes] || town.religion._customPantheon || religion.pantheon.greek
  return pantheon
}

export const getFallbackDeities = (town: Town): Deity[] => {
  return getFallbackPantheon(town).gods
}
