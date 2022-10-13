import { logger } from '../logger'
import { sortArray } from '../src/sortArray'
import { PredominantInfo } from '../town/getPredominantRace'
import { Town } from '../town/_common'

interface WorshipMakeup extends PredominantInfo {
  primaryDeity: string
  secondaryDeity: string
  /** @usage `town.name` _____ */
  amountDescriptive: string
}

export const getPredominantReligion = (town: Town, percentages: Record<string, number>): WorshipMakeup => {
  logger.info('Getting the predominant deity...')
  // Pick out the primary & secondary Race name percentages.
  const sortedArray = sortArray(percentages).reverse()
  const [primary, secondary] = sortedArray
  const [primaryDeity, percentile] = primary

  const [secondaryDeity, secondaryPercentile] = secondary

  if (percentile > 99) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'completely',
      amountDescriptive: `entirely, without fail, worships ${primaryDeity}`,
      primaryDeity,
      secondaryDeity
    }
  }

  if (percentile > 90) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'completely',
      amountDescriptive: `almost uniformly worships ${primaryDeity}`,
      primaryDeity,
      secondaryDeity
    }
  }
  if (percentile > 80) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'overwhelmingly',
      amountDescriptive: `overwhelmingly worships ${primaryDeity}`,
      primaryDeity,
      secondaryDeity
    }
  }
  if (percentile > 70) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'predominantly',
      amountDescriptive: `predominantly worships ${primaryDeity}`,
      primaryDeity,
      secondaryDeity
    }
  }
  if (percentile > 65) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'largely',
      amountDescriptive: `largely worships ${primaryDeity}`,
      primaryDeity,
      secondaryDeity
    }
  }
  if (percentile > 60) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'mostly',
      amountDescriptive: `mostly worships ${primaryDeity}`,
      primaryDeity,
      secondaryDeity
    }
  }
  if (percentile > 55) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'mostly',
      amountDescriptive: `mostly worships ${primaryDeity}, with some followers of ${secondaryDeity}`,
      primaryDeity,
      secondaryDeity
    }
  }
  if (percentile > 50) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'mostly',
      amountDescriptive: `worships ${primaryDeity}, with a slim majority, along with some following ${secondaryDeity}`,
      primaryDeity,
      secondaryDeity
    }
  }
  if (percentile > 40) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'fairly diverse',
      amountDescriptive: `worships many deities, the most common being ${primaryDeity}`,
      primaryDeity,
      secondaryDeity
    }
  }
  if (percentile > 35) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'rather diverse',
      amountDescriptive: `worships many deities, the most common being ${primaryDeity}, whose worshipers make up slightly over a third of the population`,
      primaryDeity,
      secondaryDeity
    }
  }
  if (percentile > 30) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'incredibly diverse',
      amountDescriptive: `worships many deities, the most common being ${primaryDeity}, whose worshipers make up just under a third of the population`,
      primaryDeity,
      secondaryDeity
    }
  }
  if (percentile > 20) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'melting pot of races',
      amountDescriptive: 'worships many deities, with no clear majority',
      primaryDeity,
      secondaryDeity
    }
  }
  return {
    percentile,
    secondaryPercentile,
    amount: 'diverse melting pot of races',
    amountDescriptive: 'worships many deities, none having a clear majority at all',
    primaryDeity,
    secondaryDeity
  }
}
