setup.fetchProfessionChance = function (town) {
  town = town || State.variables.town
  var professions = Object.keys(town.professions)
  // console.log('list of professions:')
  // console.log(professions)
  // console.log('list of percentages:')
  // console.log(town.professions)
  // Calculate the sum of the raw demographic values.
  var professionRoll = randomFloat(0, 100)
  // console.log('professionRoll is: ' + professionRoll)
  var sum = professions
    .map(function (profession) {
      return town.professions[profession].population
    }, town)
  // console.log('sum is: ')
  console.log(sum)
  var cumulativeSum = 0

  for (let percent of sum) {
    if (professionRoll <= cumulativeSum) {
      var selectedProfession = sum.indexOf(percent)
      console.log('selected profession is: ' + professions[selectedProfession])
      return professions[selectedProfession]
    } else {
      // console.log('Add ' + percent)
      cumulativeSum += percent
      // console.log(cumulativeSum)
    }
  }
}
