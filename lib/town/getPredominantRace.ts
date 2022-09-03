import { logger } from '../logger'
import { keys } from '../src/utils'
import { sortArray } from '../src/sortArray'
import { toTitleCase } from '../src/toTitleCase'
import { raceTraits, RaceName } from '../npc-generation/raceTraits'
import { getRacesPercentile } from './townDemographics'
import { isPercentile } from './isPercentile'

export interface PredominantInfo {
  /** Percentage of most populous race */
  percentile: number
  /** Percentage of second most populous race */
  secondaryPercentile: number
  /** @usage `${town.name} is ______` */
  amount: string
  /** @usage `${town.name} is comprised ______` */
  amountDescriptive: string
}

interface PredominantRace extends PredominantInfo {
  primaryRace: RaceName;
  secondaryRace: RaceName;
}

export function getPredominantRaceFromBase (baseDemographics: Record<RaceName, number>): PredominantRace {
  lib.logger.info('Getting predominant race from base...')
  const percentages = getRacesPercentile(baseDemographics)
  return getPredominantRace(percentages)
}

export function getPredominantRace (percentages: Record<RaceName, number>): PredominantRace {
  logger.info('Getting the predominant race...')
  if (!isPercentile(percentages)) {
    percentages = getRacesPercentile(percentages)
  }

  // Pick out the primary & secondary Race name percentages.
  const [primary, secondary] = sortArray(percentages).reverse()

  const [primaryRace, percentile] = primary
  const majorRaceWords = raceTraits[primaryRace].raceWords

  const [secondaryRace, secondaryPercentile] = secondary
  const secondaryRaceWords = raceTraits[secondaryRace].raceWords

  if (percentile > 99) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'completely',
      amountDescriptive: `entirely, without fail, of ${majorRaceWords.racePlural}`,
      primaryRace,
      secondaryRace
    }
  }

  if (percentile > 90) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'completely',
      amountDescriptive: `almost uniformly of ${majorRaceWords.racePlural}`,
      primaryRace,
      secondaryRace
    }
  }
  if (percentile > 80) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'overwhelmingly',
      amountDescriptive: `overwhelmingly of ${majorRaceWords.racePlural}`,
      primaryRace,
      secondaryRace
    }
  }
  if (percentile > 70) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'predominantly',
      amountDescriptive: `predominantly of ${majorRaceWords.racePlural}`,
      primaryRace,
      secondaryRace
    }
  }
  if (percentile > 65) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'largely',
      amountDescriptive: `largely of ${majorRaceWords.racePlural}`,
      primaryRace,
      secondaryRace
    }
  }
  if (percentile > 60) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'mostly',
      amountDescriptive: `mostly of ${majorRaceWords.racePlural}`,
      primaryRace,
      secondaryRace
    }
  }
  if (percentile > 55) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'mostly',
      amountDescriptive: `mostly of ${majorRaceWords.racePlural}, with some ${secondaryRaceWords.racePlural}`,
      primaryRace,
      secondaryRace
    }
  }
  if (percentile > 50) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'mostly',
      amountDescriptive: `of ${majorRaceWords.racePlural}, with a slim majority, along with some ${secondaryRaceWords.racePlural}`,
      primaryRace,
      secondaryRace
    }
  }
  if (percentile > 40) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'fairly diverse',
      amountDescriptive: `of many different races, with the most common race being ${majorRaceWords.raceAdjective}`,
      primaryRace,
      secondaryRace
    }
  }
  if (percentile > 35) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'rather diverse',
      amountDescriptive: `of many different races, with the most common race of ${majorRaceWords.raceAdjective} just barely making up slightly over a third of the population`,
      primaryRace,
      secondaryRace
    }
  }
  if (percentile > 30) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'incredibly diverse',
      amountDescriptive: 'of almost every race, no one race being the clear majority',
      primaryRace,
      secondaryRace
    }
  }
  if (percentile > 20) {
    return {
      percentile,
      secondaryPercentile,
      amount: 'melting pot of races',
      amountDescriptive: 'of a melting pot of all different races',
      primaryRace,
      secondaryRace
    }
  }
  return {
    percentile,
    secondaryPercentile,
    amount: 'diverse melting pot of races',
    amountDescriptive: 'of a melting pot of all different races',
    primaryRace,
    secondaryRace
  }
}

export function formatPercentile (percentages: [string, number][]): string[] {
  const sortedCopy = percentages.slice().sort((a, b) => b[1] - a[1])

  return sortedCopy.map(([name, percentile]) => {
    return ` ${toTitleCase(name)}: ${percentile.toFixed(2)}%`
  })
}

export function formatAsList (text: Record<string, number>) {
  return createListFromArray(keys(text), key => {
    return `${key}: ${text[key].toFixed(2)}%`
  })
}

export function formatArrayAsList (text: string[]) {
  return createListFromArray(text, item => {
    return item
  })
}

function createListFromArray <T> (array: T[], getItemTextContent: (item: T) => string) {
  const list = document.createElement('ol')
  for (const item of array) {
    const li = document.createElement('li')
    li.textContent = getItemTextContent(item)
    list.append(li)
  }
  return list
}
