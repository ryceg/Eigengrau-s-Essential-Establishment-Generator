import { Town, TownType } from '@lib'

export const getTownType = (town: Town): TownType => {
  if (town.population > 6000) return 'city'
  if (town.population > 3000) return 'town'
  if (town.population > 1000) return 'village'
  if (town.population > 30) return 'hamlet'

  // TODO: Remove unexpected side effect are bad.
  if (town.population <= 30) {
    console.log('Population is less than 30. Setting to 30.')
    town.population = 30
    return 'hamlet'
  }
  return 'village'
}
