import { Town } from '@lib'

export const getRaceReadout = (town: Town) => {
  return `${town.name} is ${lib.articles.output(lib.getTownType(town))} comprised ${lib.getPredominantRaceFromBase(town.baseDemographics).amountDescriptive}.`
}
