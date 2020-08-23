import { sortArray } from '../src/sortArray'
import { toTitleCase } from '../src/toTitleCase'
import { raceTraits, RaceName } from '../npc-generation/raceTraits'

export function getPredominantRace (percentages: Record<RaceName, number>) {
  console.log('Getting the predominant race...')

  // Pick out the primary & secondary Race name percentages.
  const [primary, secondary] = sortArray(percentages).reverse()

  const [primaryRace, percentile] = primary
  const majorRaceWords = raceTraits[primaryRace].raceWords

  const [secondaryRace] = secondary
  const secondaryRaceWords = raceTraits[secondaryRace].raceWords

  if (percentile > 90) {
    return {
      // $town.name is _____
      amount: 'completely',
      // $town.name is comprised _____
      amountDescriptive: `almost uniformly of ${majorRaceWords.racePlural}`,
      primaryRace,
      secondaryRace
    }
  }
  if (percentile > 80) {
    return {
      amount: 'overwhelmingly',
      amountDescriptive: `overwhelmingly of ${majorRaceWords.racePlural}`,
      primaryRace,
      secondaryRace
    }
  }
  if (percentile > 70) {
    return {
      amount: 'predominantly',
      amountDescriptive: `predominantly of ${majorRaceWords.racePlural}`,
      primaryRace,
      secondaryRace
    }
  }
  if (percentile > 65) {
    return {
      amount: 'largely',
      amountDescriptive: `largely of ${majorRaceWords.racePlural}`,
      primaryRace,
      secondaryRace
    }
  }
  if (percentile > 60) {
    return {
      amount: 'mostly',
      amountDescriptive: `mostly of ${majorRaceWords.racePlural}`,
      primaryRace,
      secondaryRace
    }
  }
  if (percentile > 50) {
    return {
      amount: 'mostly',
      amountDescriptive: `mostly of ${majorRaceWords.racePlural}, with some ${secondaryRaceWords.racePlural}`,
      primaryRace,
      secondaryRace
    }
  }
  if (percentile > 40) {
    return {
      amount: 'fairly diverse',
      amountDescriptive: `of many different races, with the most common race being ${majorRaceWords.raceAdjective}`,
      primaryRace,
      secondaryRace
    }
  }
  if (percentile > 40) {
    return {
      amount: '',
      amountDescriptive: `of many different races, with the most common race just barely being ${majorRaceWords.raceAdjective}`,
      primaryRace,
      secondaryRace
    }
  }
  if (percentile > 30) {
    return {
      amount: 'incredibly diverse',
      amountDescriptive: 'of almost every race, no one race being the clear majority',
      primaryRace,
      secondaryRace
    }
  }
  if (percentile > 20) {
    return {
      amount: 'melting pot of races',
      amountDescriptive: 'of a melting pot of all different races',
      primaryRace,
      secondaryRace
    }
  }
  if (percentile < 20) {
    return {
      amount: 'diverse melting pot of races',
      amountDescriptive: 'of a melting pot of all different races',
      primaryRace,
      secondaryRace
    }
  }
}

export function formatPercentile (percentages: [string, number][]): string[] {
  const sortedCopy = percentages.slice().sort((a, b) => b[1] - a[1])

  return sortedCopy.map(([name, percentile]) => {
    return ` ${toTitleCase(name)}: ${percentile.toFixed(2)}%`
  })
}
