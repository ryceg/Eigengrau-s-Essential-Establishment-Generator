import { findInArray } from '../../lib/src/findInArray'
import { Town } from '../../lib/town/_common'
import { compileWeightToPercentile, getDeityPercentagesList, getTownDeityWeightings } from './createTownReligion'
import { Pantheon, religion } from './religion'

export const getDeity = (town: Town, deity: string) => {
  return findInArray(
    getPantheon(town).gods, 'name', deity)
}

export const getPantheon = (town: Town): Pantheon => {
  if (isUsingCustomPantheon(town)) return getCustomPantheon(town)
  return religion.pantheon[town.religion.pantheon]
}

export const getPantheonNames = (town: Town) => {
  return Object.keys(getAllPantheons(town))
}

export const getAllPantheons = (town: Town) => {
  const pantheons: Record<string, Pantheon> = Object.assign({}, religion.pantheon)
  if (seeIfCustomPantheonExists(town)) pantheons[getCustomPantheon(town).name] = getCustomPantheon(town)
  return pantheons
}

export const isUsingCustomPantheon = (town: Town) => {
  if (religion.pantheon[town.religion.pantheon]) return false
  return true
}

export const seeIfCustomPantheonExists = (town: Town): boolean => {
  if (town.religion.customPantheon) return true
  return false
}

export const getCustomPantheon = (town: Town): Pantheon => {
  if (town.religion.customPantheon) return town.religion.customPantheon
  throw new Error('Custom panthon not defined!')
}

export const getPantheonPercentages = (town: Town) => {
  console.log('Getting pantheon percentages...')
  return compileWeightToPercentile(
    getTownDeityWeightings(town, getPantheon(town).gods)
  )
}

export const getCulledPantheonPercentages = (town: Town) => {
  console.log('Getting pantheon percentages...')
  const temp = compileWeightToPercentile(
    getTownDeityWeightings(town, getPantheon(town).gods)
  )
  return Object.fromEntries(
    Object.entries(temp).filter(([, value]) => value > 0))
}

export const getPantheonPercentagesReadout = (town: Town) => {
  const deities: [string, number][] = getDeityPercentagesList(getPantheonPercentages(town))
  let text = ''
  for (const [deity, percentage] of deities) {
    if (percentage > 0) {
      text += ` ${deity}: ${percentage.toFixed(2)}%`
    }
  }
  return text
}
