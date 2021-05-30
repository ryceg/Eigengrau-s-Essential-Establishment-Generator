import { findInArray } from '../../lib/src/findInArray'
import { Town } from '../../lib/town/_common'
import { compileWeightToPercentile, getFallbackPantheon, getTownDeityWeightings } from './createTownReligion'
import { Deity, Pantheon, religion } from './religion'

export const getDeity = (town: Town, deity: string, customPantheon?: Pantheon) => {
  console.log(`Getting ${deity}...`)
  return findInArray(
    getPantheonDeities(town, customPantheon), 'name', deity)
}

export const getPantheon = (town: Town, customPantheon?: Pantheon): Pantheon => {
  townHasPantheon(town)
  console.log(`Getting pantheon that matched ${town.religion.pantheon}`)
  if (isUsingCustomPantheon(town, customPantheon)) {
    console.log('Using a custom pantheon!')
    return getCustomPantheon(town, customPantheon)
  }
  return religion.pantheon[town.religion.pantheon]
}

export const getPantheonDeities = (town: Town, customPantheon?: Pantheon): Deity[] => {
  console.log('Getting pantheon deities...')
  return getPantheon(town, customPantheon).gods
}

export const getPantheonNames = (town: Town, customPantheon?: Pantheon) => {
  console.log('Getting pantheon names...')
  return Object.keys(getAllPantheons(town, customPantheon))
}

export const getAllPantheons = (town: Town, customPantheon?: Pantheon) => {
  console.log('Getting all pantheons...')
  const pantheons: Record<string, Pantheon> = Object.assign({}, religion.pantheon)
  if (seeIfCustomPantheonExists(town, customPantheon)) pantheons[getCustomPantheon(town, customPantheon).name] = getCustomPantheon(town, customPantheon)
  return pantheons
}

/** If the pantheon being used doesn't exist in the data, it's obviously custom. */
export const isUsingCustomPantheon = (town: Town, customPantheon = getFallbackPantheon(town)) => {
  console.log('Checking to see if you are using a custom pantheon...')
  // if (!town.religion.pantheon) return false
  if (!town.religion._customPantheon) return false
  if (religion.pantheon[town.religion.pantheon]) return false
  if (customPantheon?.name === 'greek') return false
  console.log('Looks like you are using a custom pantheon!')
  if (town.religion.pantheon === customPantheon.name) return true
  return true
}

export const seeIfCustomPantheonExists = (town: Town, customPantheon?: Pantheon): boolean => {
  console.log('Checking to see if a custom pantheon exists...')
  if (customPantheon) return true
  if (town.religion._customPantheon) return true
  console.log('Looks like the custom pantheon does not exist!')
  return false
}

export const getCustomPantheon = (town: Town, customPantheon?: Pantheon): Pantheon => {
  console.log('Getting the custom pantheon...')
  if (customPantheon) return customPantheon
  if (town.religion._customPantheon) return town.religion._customPantheon
  throw new Error('Custom pantheon not defined!')
}

/** For getting ALL deities, including 0% ones. */
export const getAllPantheonPercentages = (town: Town, customPantheon?: Pantheon) => {
  console.log('Getting all pantheon percentages...')
  return Object.fromEntries(
    Object.entries(
      compileWeightToPercentile(
        getTownDeityWeightings(town, getPantheonDeities(town, customPantheon))
      ))
      .sort(
        ([, a], [, b]) => a - b)
      .reverse()
  )
}

export const getPantheonPercentages = (town: Town, customPantheon?: Pantheon) => {
  console.log('Getting pantheon percentages...')
  const temp = compileWeightToPercentile(
    getTownDeityWeightings(town, getPantheonDeities(town, customPantheon))
  )

  return Object.fromEntries(
    Object.entries(temp)
      .filter(
        ([, value]) => value > 1)
      .sort(
        ([, a], [, b]) => a - b)
      .reverse()
  )
}

const townHasPantheon = (town: Town) => {
  switch (typeof town.religion.pantheon) {
    case 'undefined':
      town.religion.pantheon = 'greek'
      break
    case 'string':
  }
}
