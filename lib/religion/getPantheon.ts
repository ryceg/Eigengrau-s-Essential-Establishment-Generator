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
  if (isUsingCustomPantheon(town)) {
    const customPantheon = getCustomPantheon(town)
    pantheons[customPantheon.name] = customPantheon
  }
  return pantheons
}

export const isUsingCustomPantheon = (town: Town) => {
  if (religion.pantheon[town.religion.pantheon]) return false
  return true
}

export const getCustomPantheon = (town: Town): Pantheon => {
  if (town.religion.customPantheon) return town.religion.customPantheon
  throw new Error('Custom panthon not defined!')
}

export const getPantheonPercentages = (town: Town) => {
  return compileWeightToPercentile(
    getTownDeityWeightings(town, getPantheon(town).gods)
  )
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
