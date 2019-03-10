setup.weightedRandomFetcher = function (town, args, npc) {
  // console.log(args)
  var pool = []
  var totalWeight = 0
  // function addWeight (totalWeight, value) {
  //   totalWeight += value
  // }
  for (var arg in args) {
    // console.log(args[arg])
    var isValid = args[arg].exclusions(town, npc)
    if (isValid === true) {
      pool.push(args[arg])
      // console.log('probability: ' + args[arg].probability)
      // addWeight.apply(totalWeight, [args[arg].probability])
      totalWeight += args[arg].probability
    }
    // isValid = {}
  }
  // console.log('Starting the search.')
  var random = Math.floor(Math.random() * totalWeight)
  console.log(random)
  for (var i = 0; i < pool.length; i++) {
    random -= pool[i].probability
    if (random < 0) {
      // console.log('Less than zero! Found one.')
      // console.log(pool[i])
      var selected = pool[i]
      break
    }
  }
  return selected.function(town, npc)
}
