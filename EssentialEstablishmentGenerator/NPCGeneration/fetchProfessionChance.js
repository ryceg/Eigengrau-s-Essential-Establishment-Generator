setup.fetchProfessionChance = function (town, npc) {
  console.log('Fetching profession...')
  town = town || State.variables.town
  const professions = Object.keys(town.professions)

  if (npc.socialClass) {
    console.log('Social class was defined, so filtering to the available professions!')
    professions.filter(function (profession) {
      return town.professions[profession].socialClass === npc.socialClass
    })
  }
  // console.log('list of professions:')
  // console.log(professions)
  // console.log('list of percentages:')
  // console.log(town.professions)
  // Calculate the sum of the raw demographic values.

  // console.log('professionRoll is: ' + professionRoll)
  const sum = professions
    .map(function (profession) {
      return town.professions[profession].population
    }, town)
  // console.log('sum is: ')
  // console.log(sum)
  let totalWeight = 0
  sum.forEach(function (single) {
    totalWeight += single
  })
  let random = Math.floor(randomFloat(1) * totalWeight)
  // console.log(random)
  for (let i = 0; i < sum.length; i++) {
    random -= sum[i]
    if (random < 0) {
      // eslint-disable-next-line no-var
      var index = i
      break
    }
  }
  // console.log(pool)
  // console.log(namePool)
  // console.log(selected)
  // console.log(namePool[index])
  return professions[index]
  //
  // for (let percent of sum) {
  //   if (professionRoll <= cumulativeSum) {
  //     var selectedProfession = sum.indexOf(percent)
  //     // console.log('selected profession is: ' + professions[selectedProfession])
  //     return professions[selectedProfession]
  //   } else if (professionRoll === 100) {
  //     selectedProfession = sum.length - 1
  //     console.log('Hit 100! selected profession is: ' + professions[selectedProfession])
  //     return professions[selectedProfession]
  //   } else if (professionRoll > cumulativeSum) {
  //     cumulativeSum += percent
  //     if (cumulativeSum === 100) {
  //       selectedProfession = sum.length - 1
  //       console.log('Hit 100! selected profession is: ' + professions[selectedProfession])
  //       return professions[selectedProfession]
  //     }
  //     // console.log(cumulativeSum)
  //   }
  // }
}
