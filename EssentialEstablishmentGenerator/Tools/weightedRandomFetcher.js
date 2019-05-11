setup.weightedRandomFetcher = function (town, args, obj, exclusionFunction, output, defaultProbability) {
  // console.log(args)
  if (!defaultProbability) {
    defaultProbability = 10
  }

  if (!output) {
    output = 'function'
  }
  // town is needed because everything needs town to evaluate
  // args is the object containing the objects that you're drawing from
  // obj is the optional npc, building, or whatever that is needed for functions.
  // exclusionFunction is the optional global exclusion testing function; this is for things like pulling just the paper type objects from plothooks. Saves on LoC.
  // leave exclusionFunction blank if everyting in your object is always going to be allowed.
  // output is what should be outputted at the end.
  // defaultProbability is the optional default unit. You won't usually need to supply this.
  var pool = []
  var totalWeight = 0
  exclusionFunction = exclusionFunction || true

  for (var arg in args) {
    // console.log(args[arg])
    if (typeof (args[arg].exclusions) === 'function') {
      var isValid = args[arg].exclusions(town, obj)
    } else {
      isValid = true
    }
    // console.log('fnValid: ')
    // console.log(args[arg])
    if (typeof (exclusionFunction) === 'function') {
      var fnValid = exclusionFunction(town, args[arg])
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
  if (typeof (selected[output]) === 'function') {
    console.log(selected[output](town, obj))
    return selected[output](town, obj)
  } else {
    console.log(selected[output])
    return selected[output]
  }
}
