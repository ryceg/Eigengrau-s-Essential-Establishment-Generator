setup.getPredominantRace = (percentages) => {
  console.log('Getting the predominant race...')
  const sortable = lib.sortArray(percentages)

  const length = sortable.length - 1
  const majorRace = sortable[length][0]
  const majorRaceWords = setup.npcData.raceTraits[majorRace].raceWords
  const secondaryRace = sortable[length - 1][0]
  const secondaryRaceWords = setup.npcData.raceTraits[secondaryRace].raceWords
  if (sortable[length][1] > 90) {
    return {
      // $town.name is _____
      amount: 'completely',
      // $town.name is comprised _____
      amountDescriptive: `almost uniformly of ${majorRaceWords.racePlural}`,
      primaryRace: sortable[length][0],
      secondaryRace: sortable[length - 1][0]
    }
  } if (sortable[length][1] > 80) {
    return {
      amount: 'overwhelmingly',
      amountDescriptive: `overwhelmingly of ${majorRaceWords.racePlural}`,
      primaryRace: sortable[length][0],
      secondaryRace: sortable[length - 1][0]
    }
  } if (sortable[length][1] > 70) {
    return {
      amount: 'predominantly',
      amountDescriptive: `predominantly of ${majorRaceWords.racePlural}`,
      primaryRace: sortable[length][0],
      secondaryRace: sortable[length - 1][0]
    }
  } if (sortable[length][1] > 65) {
    return {
      amount: 'largely',
      amountDescriptive: `largely of ${majorRaceWords.racePlural}`,
      primaryRace: sortable[length][0],
      secondaryRace: sortable[length - 1][0]
    }
  } if (sortable[length][1] > 60) {
    return {
      amount: 'mostly',
      amountDescriptive: `mostly of ${majorRaceWords.racePlural}`,
      primaryRace: sortable[length][0],
      secondaryRace: sortable[length - 1][0]
    }
  } if (sortable[length][1] > 50) {
    return {
      amount: 'mostly',
      amountDescriptive: `mostly of ${majorRaceWords.racePlural}, with some ${secondaryRaceWords.racePlural}`,
      primaryRace: sortable[length][0],
      secondaryRace: sortable[length - 1][0]
    }
  } if (sortable[length][1] > 40) {
    return {
      amount: 'fairly diverse',
      amountDescriptive: `of many different races, with the most common race being ${majorRaceWords.raceAdjective}`,
      primaryRace: sortable[length][0],
      secondaryRace: sortable[length - 1][0]
    }
  } if (sortable[length][1] > 40) {
    return {
      amount: '',
      amountDescriptive: `of many different races, with the most common race just barely being ${majorRaceWords.raceAdjective}`,
      primaryRace: sortable[length][0],
      secondaryRace: sortable[length - 1][0]
    }
  } if (sortable[length][1] > 30) {
    return {
      amount: 'incredibly diverse',
      amountDescriptive: 'of almost every race, no one race being the clear majority',
      primaryRace: sortable[length][0],
      secondaryRace: sortable[length - 1][0]
    }
  } if (sortable[length][1] > 20) {
    return {
      amount: 'melting pot of races',
      amountDescriptive: 'of a melting pot of all different races',
      primaryRace: sortable[length][0],
      secondaryRace: sortable[length - 1][0]
    }
  }
}

setup.formatPercentile = (percentages) => {
  percentages.sort(function (a, b) { return b[1] - a[1] })
  const array = []
  percentages.forEach(function (percentile) {
    array.push(` ${lib.toTitleCase(percentile[0])}: ${percentile[1].toFixed(2)}%`)
  })
  return array
}
