setup.fetchProfessionChance = function (town) {
  console.log('Fetching profession...')
  town = town || State.variables.town
  var professions = Object.keys(town.professions)
  // console.log('list of professions:')
  // console.log(professions)
  // console.log('list of percentages:')
  // console.log(town.professions)
  // Calculate the sum of the raw demographic values.

  // console.log('professionRoll is: ' + professionRoll)
  var sum = professions
    .map(function (profession) {
      return town.professions[profession].population
    }, town)
  // console.log('sum is: ')
  // console.log(sum)
  var totalWeight = 0
  sum.forEach(function (single) {
    totalWeight += single
  })
  var random = Math.floor(randomFloat(1) * totalWeight)
  // console.log(random)
  for (var i = 0; i < sum.length; i++) {
    random -= sum[i]
    if (random < 0) {
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
