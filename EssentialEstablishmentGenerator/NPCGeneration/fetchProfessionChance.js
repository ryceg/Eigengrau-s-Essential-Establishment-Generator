setup.fetchProfessionChance = function (town, npc) {
  console.log('Fetching profession...')
  town = town || State.variables.town
  var professions = Object.keys(town.professions)

  if (npc.socialClass) {
    console.log('Social class for ' + npc.name + ' was defined, so filtering to the available professions!')
    professions.filter(function (profession) {
      return town.professions[profession].socialClass === npc.socialClass
    })
  }

  var sum = professions
    .map(function (profession) {
      return town.professions[profession].population
    }, town)

  var totalWeight = 0
  sum.forEach(function (single) {
    totalWeight += single
  })
  var random = Math.floor(randomFloat(1) * totalWeight)
  for (var i = 0; i < sum.length; i++) {
    random -= sum[i]
    if (random < 0) {
      var index = i
      break
    }
  }

  return professions[index]
}
