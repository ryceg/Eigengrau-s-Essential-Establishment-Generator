/* global setup */
setup.fetchRace = function (town) {
  console.log('Fetching race...')
  var args = town.baseDemographics
  console.log(args)
  var pool = []
  var namePool = Object.keys(args)
  var totalWeight = 0
  for (var arg in args) {
    pool.push(args[arg])
    totalWeight += args[arg]
  }

  var random = Math.floor(randomFloat(1) * totalWeight)
  // console.log(random)
  for (var i = 0; i < pool.length; i++) {
    random -= pool[i]
    if (random < 0) {
      var index = i
      break
    }
  }
  // console.log(pool)
  // console.log(namePool)
  // console.log(selected)
  // console.log(namePool[index])
  return namePool[index]
}
