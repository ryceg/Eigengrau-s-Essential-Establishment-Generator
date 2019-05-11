setup.weightedRandomFetcher = function (town, args, obj, fn, defaultProbability) {
  // console.log(args)
  if (!defaultProbability) {
    defaultProbability = 10
  }
  // town is needed because everything needs town to evaluate
  // args is the object containing the objects that you're drawing from
  // obj is the optional npc, building, or whatever that is needed for functions.
  // fn is the optional exclusion testing function. Leave blank if everyting in your object is always going to be allowed.
  // defaultProbability is the optional default unit. You won't usually need to supply this.
  var pool = []
  var totalWeight = 0
  fn = fn || true

  for (var arg in args) {
    // console.log(args[arg])
    if (typeof (args[arg].exclusions) === 'function') {
      var isValid = args[arg].exclusions(town, obj)
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
      totalWeight += args[arg].probability || defaultProbability
    }
    // isValid = {}
  }
  // console.log('Starting the search.')
  var random = Math.floor(randomFloat(1) * totalWeight)
  console.log(random)
  for (var i = 0; i < pool.length; i++) {
    random -= pool[i].probability || defaultProbability
    if (random < 0) {
      // console.log('Less than zero! Found one.')
      // console.log(pool[i])
      var selected = pool[i]
      break
    }
  }
  console.log(selected.function(town, obj))
  return selected.function(town, obj)
}
