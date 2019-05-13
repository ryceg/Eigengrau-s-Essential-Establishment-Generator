setup.createRolls = function (object, propNamesArray) {
  console.groupCollapsed('Creating rolls...')
  console.log({ object })
  // propNamesArray is expected to be an array.
  // propNamesArray = propNamesArray || ['wealth', 'reputation', 'sin', 'diversity', 'magic', 'size', 'population', 'roughness', 'cleanliness', 'expertise', 'activity']

  // for (var i = 0; i < propNamesArray.length; i++) {
  if (typeof propNamesArray === 'string' && !object[propNamesArray]) {
    object[propNamesArray] = random(1, 100)
  } else if (Array.isArray(propNamesArray)) {
    propNamesArray.forEach(function (propName) {
    // var propName = propNamesArray[i]
      if (!Object.keys(object).includes(propName)) {
        console.log('No ' + propName + ' roll value! Creating one...')
        console.log({ object })
        object[propName] = random(1, 100)
      }
      // }
    })
  } else if (typeof propNamesArray === 'object') {
    Object.keys(propNamesArray).forEach(function (propName) {
      if (!Object.keys(object).includes(propName)) {
        console.log('No ' + propName + ' roll value! Creating one...')
        console.log({ object })
        object[propName] = random(1, 100)
      }
    })
  } else {
    console.error('Expected a string, object, or array!')
    console.log({ object })
    console.log({ propNamesArray })
  }
  // object[rollLocation] = {
  //   magic: (Math.floor(randomFloat(1) * 80) + 20),
  //   size: (Math.floor(randomFloat(1) * 80) + 20),
  //   diversity: (Math.floor(randomFloat(1) * 80) + 20),
  //   wealth: random(1, 100),
  //   population: random(1, 100),
  //   reputation: random(1, 100),
  //   sin: random(1, 100),
  //   roughness: random(1, 100),
  //   cleanliness: random(1, 100),
  //   expertise: random(1, 100),
  //   activity: random(1, 100)
  // }
  // return object
  console.groupEnd()
}
