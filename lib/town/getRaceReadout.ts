import { articles } from '../src/articles'
import { Town } from './_common'
import { getTownType } from './getTownType'
import { getPredominantRaceFromBase } from './getPredominantRace'

export const getRaceReadout = (town: Town) => {
  const townType = getTownType(town)
  const predominantRace = getPredominantRaceFromBase(town.baseDemographics)
  return `${town.name} is ${articles.output(townType)} comprised ${predominantRace.amountDescriptive}.`
}
