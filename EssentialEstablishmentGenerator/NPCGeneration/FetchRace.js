/* global setup randomFloat State */
setup.fetchRace = function (town) {
  console.log('Fetching race...')
  var townDemographic = town.demographic || State.variables.town.demographic
  var races = Object.keys(townDemographic)
  // console.log('list of races:')
  // console.log(races)
  // console.log('list of percentages:')
  // console.log(townDemographic)
  // Calculate the sum of the raw demographic values.
  var raceRoll = randomFloat(0, 100)
  // console.log('raceRoll is: ' + raceRoll)
  var sum = races
    .map(function (race) {
      return town.demographic[race]
    }, town)
  var cumulativeSum = 0
  var selectedRace

  for (let percent of sum) {
    if (raceRoll <= cumulativeSum) {
      selectedRace = sum.indexOf(percent) - 1
      console.log('selected race is: ' + races[selectedRace])
      return races[selectedRace]
    } else if (raceRoll === 100) {
      selectedRace = sum.length - 1
      console.log('Hit 100! selected race is: ' + races[selectedRace])
      return races[selectedRace]
    } else {
      // console.log('Add ' + percent)
      cumulativeSum += percent
      // console.log('Equals ' + cumulativeSum)
    }
  }
}
