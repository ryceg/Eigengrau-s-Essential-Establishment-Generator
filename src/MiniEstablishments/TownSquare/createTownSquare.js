setup.createTownSquare = (town, opts = {}) => {
  console.groupCollapsed('Creating townSquare function')
  const townSquare = (opts.newBuilding || lib.createBuilding)(town, 'townSquare', opts)

  lib.assign(townSquare, {
    initPassage: 'TownSquareOutput',
    passageName: 'TownSquareOutput',
    name: 'The Town Square',
    buildingType: 'townSquare',
    objectType: 'building',
    wordNoun: 'town square',
    needsWordNoun: false,
    feature: setup.townSquare.feature().random()
  })

  const rollDataVariables = ['size', 'cleanliness']
  for (const propName of rollDataVariables) {
    lib.defineRollDataGetter(townSquare, setup.townSquare.rollData[propName].rolls, propName)
  }
  townSquare.tippyDescription = `The town square, which is ${townSquare.size} and ${townSquare.cleanliness}`
  console.groupEnd()
  return townSquare
}
