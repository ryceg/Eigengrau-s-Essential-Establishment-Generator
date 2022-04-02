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
  const percentages = getRacesPercentile(baseDemographics)
  return getPredominantRace(percentages)
}

export function getPredominantRace (percentages: Record<RaceName, number>): PredominantRace {
  console.log('Getting the predominant race...')
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
  const obj = $('<ol>')
  for (const key in text) {
    $(obj)
      .append(
        $('<li>')
          .text(`${key}: ${text[key].toFixed(2)}%`))
  }
  return obj.get(0)
}

export function formatArrayAsList (text: string[]) {
  const obj = $('<ol>')
  for (const item of text) {
    $(obj)
      .append(
        $('<li>')
          .text(item))
  }
  return obj.get(0)
}

export function returnStringList (text: string[]) {
  let obj = '<ol>'
  for (const item of text) {
    obj += `<li>${item}</li>`
  }
  obj += '</ol>'
  return obj
}
