setup.fetchProfessionChance = function (town, npc) {
  // This gets the starting profession.
  console.log('Fetching profession...')
  town = town || State.variables.town
  const professions = Object.keys(town.professions)

  if (npc.socialClass) {
    console.log('Social class was defined, so filtering to the available professions!')
    professions.filter(function (profession) {
      return town.professions[profession].socialClass === npc.socialClass
    })
  }
  const sum = professions
    .map(function (profession) {
      return town.professions[profession].population
    }, town)
  let totalWeight = 0
  sum.forEach(function (single) {
    totalWeight += single
  })
  let random = Math.floor(randomFloat(1) * totalWeight)
  let index
  for (let i = 0; i < sum.length; i++) {
    random -= sum[i]
    if (random < 0) {
      index = i
      break
    }
  }
  return professions[index]
}
