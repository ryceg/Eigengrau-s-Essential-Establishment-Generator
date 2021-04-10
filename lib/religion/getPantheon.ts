import { findInArray } from '../../lib/src/findInArray'
import { Town } from '../../lib/town/_common'
import { compileWeightToPercentile, getDeityPercentagesList, getTownDeityWeightings } from './createTownReligion'
import { Pantheon, religion } from './religion'

export const getDeity = (town: Town, deity: string, customPantheon?: Pantheon) => {
  return findInArray(
    getPantheon(town, customPantheon).gods, 'name', deity)
}

export const getPantheon = (town: Town, customPantheon?: Pantheon): Pantheon => {
  if (isUsingCustomPantheon(town)) return getCustomPantheon(town, customPantheon)
  return religion.pantheon[town.religion.pantheon]
}

export const getPantheonNames = (town: Town, customPantheon?: Pantheon) => {
  return Object.keys(getAllPantheons(town, customPantheon))
}

export const getAllPantheons = (town: Town, customPantheon?: Pantheon) => {
  const pantheons: Record<string, Pantheon> = Object.assign({}, religion.pantheon)
  if (seeIfCustomPantheonExists(town, customPantheon)) pantheons[getCustomPantheon(town, customPantheon).name] = getCustomPantheon(town, customPantheon)
  return pantheons
}

/** If the pantheon being used doesn't exist in the data, it's obviously custom. */
export const isUsingCustomPantheon = (town: Town) => {
  if (religion.pantheon[town.religion.pantheon]) return false
  return true
}

export const seeIfCustomPantheonExists = (town: Town, customPantheon?: Pantheon): boolean => {
  if (customPantheon) return true
  if (town.religion.customPantheon) return true
  return false
}

export const getCustomPantheon = (town: Town, customPantheon?: Pantheon): Pantheon => {
  if (town.religion.customPantheon) return town.religion.customPantheon
  if (customPantheon) return customPantheon
  throw new Error('Custom panthon not defined!')
}

export const getPantheonPercentages = (town: Town, customPantheon?: Pantheon) => {
  console.log('Getting pantheon percentages...')
  return compileWeightToPercentile(
    getTownDeityWeightings(town, getPantheon(town, customPantheon).gods)
  )
}

export const getCulledPantheonPercentages = (town: Town, customPantheon?: Pantheon) => {
  console.log('Getting pantheon percentages...')
  const temp = compileWeightToPercentile(
    getTownDeityWeightings(town, getPantheon(town, customPantheon).gods)
  )
  return Object.fromEntries(
    Object.entries(temp).filter(([, value]) => value > 0))
}

export const getPantheonPercentagesReadout = (town: Town, customPantheon?: Pantheon) => {
  const deities: [string, number][] = getDeityPercentagesList(getPantheonPercentages(town, customPantheon))
  let text = ''
  for (const [deity, percentage] of deities) {
    if (percentage > 0) {
      text += ` ${deity}: ${percentage.toFixed(2)}%`
    }
  }
  return text
}
