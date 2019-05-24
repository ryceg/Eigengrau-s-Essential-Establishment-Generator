setup.createRolls = function (object, propNamesArray) {
  console.groupCollapsed('Creating rolls...')
  console.log({ object })

  if (typeof propNamesArray === 'string' && !object[propNamesArray]) {
    object[propNamesArray] = random(1, 100)
  } else if (Array.isArray(propNamesArray)) {
    propNamesArray.forEach(function (propName) {
      if (!Object.keys(object).includes(propName)) {
        console.log('No ' + propName + ' roll value! Creating one...')
        console.log({ object })
        object[propName] = random(1, 100)
      }
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

  console.groupEnd()
}
