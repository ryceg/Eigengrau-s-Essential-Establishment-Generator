setup.weightedRandomFetcher = function (town, args, npc, fn) {
  // console.log(args)
  var pool = []
  var totalWeight = 0
  fn = fn || true
  // console.log('function: ')
  // console.log(fn)
  // function addWeight (totalWeight, value) {
  //   totalWeight += value
  // }
  for (var arg in args) {
    // console.log(args[arg])
    if (typeof (args[arg].exclusions) === 'function') {
      var isValid = args[arg].exclusions(town, npc)
    } else {
      isValid = true
    }
    // console.log('fnValid: ')
    // console.log(args[arg])
    if (typeof (fn) === 'function') {
      var fnValid = fn(town, args[arg])
    } else {
      fnValid = true
    }

    // console.log(fnValid)
    if (isValid === true && fnValid === true) {
      pool.push(args[arg])
      // console.log('probability: ' + args[arg].probability)
      // addWeight.apply(totalWeight, [args[arg].probability])
      totalWeight += args[arg].probability || 5
    }
    // isValid = {}
  }
  // console.log('Starting the search.')
  var random = Math.floor(Math.random() * totalWeight)
  console.log(random)
  for (var i = 0; i < pool.length; i++) {
    random -= pool[i].probability || 5
    if (random < 0) {
      // console.log('Less than zero! Found one.')
      // console.log(pool[i])
      var selected = pool[i]
      break
    }
  }
  console.log(selected.function(town, npc))
  return selected.function(town, npc)
}
