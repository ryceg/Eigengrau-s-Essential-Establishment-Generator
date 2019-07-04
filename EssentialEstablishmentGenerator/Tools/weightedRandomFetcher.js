/**
 * @param town Needed because everything needs town to evaluate
 *
 * @param args The object containing the objects that you're drawing from
 *
 * @param obj The optional npc, building, or whatever that is needed for functions.
 *
 * @param exclusionFunction The optional global exclusion testing function;
 * this is for things like pulling just the paper type objects from plothooks.
 * Saves on LoC. Leave exclusionFunction blank if everyting in your object is
 * always going to be allowed.
 *
 * @param output What should be outputted at the end. Set to 'object' to return the whole object.
 * defaultProbability is the optional default unit. You won't usually need to supply this.
 */
setup.weightedRandomFetcher = function (town, args, obj, exclusionFunction, output, defaultProbability) {
  // console.log(args)
  console.groupCollapsed('Running a weighted random search...')
  console.log({
    args,
    obj,
    exclusionFunction,
    output,
    defaultProbability
  })

  if (!output) {
    output = 'function'
  }
  if (!defaultProbability) {
    defaultProbability = 10
  }

  const pool = []
  let totalWeight = 0
  exclusionFunction = exclusionFunction || true

  for (const arg in args) {
    let isValid
    let fnValid
    // console.log(args[arg])
    if (args[arg].exclusions && typeof (args[arg].exclusions) === 'function') {
      isValid = args[arg].exclusions(town, obj)
    } else {
      isValid = true
    }
    if (args[arg].probability <= 0) {
      isValid = false
    }

    // console.log('fnValid: ')
    // console.log(args[arg])
    if (typeof (exclusionFunction) === 'function') {
      fnValid = exclusionFunction(town, args[arg])
    } else {
      fnValid = true
    }

    // console.log(fnValid)
    if (isValid === true && fnValid === true) {
      pool.push(args[arg])
      totalWeight += args[arg].probability || defaultProbability
    }
  }
  // console.log('Starting the search.')
  let random = Math.floor(randomFloat(1) * totalWeight)
  let selected
  for (let i = 0; i < pool.length; i++) {
    random -= pool[i].probability || defaultProbability
    if (random < 0) {
      // console.log('Less than zero! Found one.')
      // console.log(pool[i])
      selected = pool[i]
      break
    }
  }

  console.log(selected)
  if (!selected[output] && output !== 'object') {
    console.error('The randomly fetched object does not have the attribute ' + output + '.')
    console.log({ selected })
  }
  console.groupEnd()
  if (output === 'object') {
    // if the string 'object' is passed, then it returns the object itself.
    console.log(selected)
    return selected
  } else if (typeof (selected[output]) === 'function') {
    console.log(selected[output](town, obj))
    return selected[output](town, obj)
  } else {
    console.log(selected[output])
    return selected[output]
  }
}
