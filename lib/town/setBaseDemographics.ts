import { RaceName, Town } from '@lib'

export const setBaseDemographics = (town: Town, newDemographics: Record<RaceName, number>) => {
  console.log('Setting base demographics.')
  Object.keys(newDemographics).forEach((byRace) => {
    const race = byRace as RaceName
    town._baseDemographics[race] = newDemographics[race]
  })
}
