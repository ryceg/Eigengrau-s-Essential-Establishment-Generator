import { logger } from '../logger'
import { keys } from '../src/utils'
import { getWeightedIndex } from '../src/math'
import { Town } from '../town/_common'
import { isDominantGender, breakGenderNorms } from './breakGenderNorms'
import { NPC } from './_common'

/**
 * Grabs a list of available professions by town, and filters them by:
 * 1. NPC Social Class (e.g., nobility)
 * 2. NPC Profession Type (e.g., hobby or recreation or profession)
 * 3. NPC Sector (e.g., arts, magic, and so on)
 * 4. If the town adheres to gender norms, then profession by gender
 */
function getAvailableProfessions (town: Town, npc: NPC): string[] {
  const allAvailableProfessions = keys(town.professions)
  let availableProfessions = allAvailableProfessions

  // Properties which can affect which profession you choose, e.g., if your social class
  // is 'aristocratic' why you'd never be a barber!
  const professionProperties = {
    professionSector: 'sector',
    professionType: 'type',
    socialClass: 'socialClass'
  } as const

  for (const key of keys(professionProperties)) {
    if (npc[key]) {
      const prop = professionProperties[key]
      const filteredProfessions = allAvailableProfessions.filter(professionName => {
        return town.professions[professionName][prop] === npc[key]
      })

      // sometimes the filtered professions by key returns nothing, in that case
      // that'll be an error (but data probably should get more clean), since this can
      // cause weird issues (e.g., nobile social class as peasant)
      if (filteredProfessions.length > 0) {
        availableProfessions = filteredProfessions
      }
      logger.info(`npc ${key} was defined as ${npc[key]}, filtering professions to`, availableProfessions)
    }
  }

  return filterProfessionsByGenderNorms(town, npc, availableProfessions)
}

function filterProfessionsByGenderNorms (town: Town, npc: NPC, availableProfessions: string[]): string[] {
  // if we break gender norms, then all professions are available to all genders
  if (breakGenderNorms(town)) return availableProfessions

  // If we do _not_ break gender norms, some professions are off-limits to
  // the dominant gender and vice versa
  const controllingGender = isDominantGender(town, npc)
    ? 'dom'
    : 'sub'
  return availableProfessions.filter(profession => {
    const { domSub } = town.professions[profession]
    return domSub == null
      ? true // some professions do not have a dominant gender
      : domSub === controllingGender
  })
}

function setDnDClass (town: Town, npc: NPC, profession: string) {
  const hasDnDClass = town.professions[profession]?.type === 'dndClass' ?? false
  npc.hasClass = hasDnDClass
  if (hasDnDClass) {
    logger.info(`${npc.name} is a ${profession} and therefore has a dndClass`)
  }
}

/**
 * This gets the starting profession when a profession has not been defined.
 */
export function fetchProfessionChance (town: Town, npc: NPC) {
  const availableProfessions = getAvailableProfessions(town, npc)
  logger.info('Available professions:', availableProfessions)

  const professionIdxByPopulation = availableProfessions.map(profession => {
    return town.professions[profession].population
  })

  // @TODO: This probably needs to get weighted more better. Currently chooses
  // a profession based on population of that profession amongst the town.
  let resultantProfession = availableProfessions[getWeightedIndex(professionIdxByPopulation)]
  if (!resultantProfession) {
    logger.error('Failed to fetch a profession.')
    logger.info({ npc })
    resultantProfession = 'noble'
  }

  const exclusionFn = town.professions[resultantProfession]?.exclusions
  if (typeof exclusionFn === 'function' && !exclusionFn(town, npc)) {
    logger.warn(`${npc.name} is unable to be a ${resultantProfession} due to an exclusion. Rerolling...`)
    resultantProfession = fetchProfessionChance(town, npc)
  }

  setDnDClass(town, npc, resultantProfession)

  logger.info(`Profession is: ${resultantProfession}`)
  return resultantProfession
}
