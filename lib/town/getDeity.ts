import { Deity } from '../religion/religion'
import { Town } from './_common'

export const getTownDeity = (town: Town, deities: Deity[]) => {
  const deitiesProbabilities = deities.map(deity => {
    const temp = 10
    getDeityTownIdeologyProbability(temp, town, deity)
    // getDeityTownRollProbability(temp, town, deity)
    return { deity: deity.name, probability: temp }
  })
  return deitiesProbabilities
}

const getDeityTownIdeologyProbability = (probability: number, town: Town, deity: Deity) => {
  if (deity.probabilityWeightings) {
    if (deity.probabilityWeightings.economicIdeology === town.economicIdeology) probability += deity.probabilityWeightings.economicIdeology[town.economicIdeology] as number
    if (deity.probabilityWeightings.politicalIdeology === town.politicalIdeology) probability += deity.probabilityWeightings.politicalIdeology[town.politicalIdeology] as number
    if (deity.probabilityWeightings.politicalSource === town.politicalSource) probability += deity.probabilityWeightings.politicalSource[town.politicalSource] as number
  }
  return probability
}

// const getDeityTownRollProbability = (probability: number, town: Town, deity: Deity) => {
//   return probability
// }
