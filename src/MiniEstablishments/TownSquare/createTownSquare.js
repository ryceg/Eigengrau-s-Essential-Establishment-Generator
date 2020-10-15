setup.createTownSquare = (town, opts = {}) => {
  console.groupCollapsed('Creating townSquare function')
  const townSquare = (opts.newBuilding || setup.createBuilding)(town, 'townSquare', opts)
  Object.assign(townSquare, {
    initPassage: 'TownSquareOutput',
    passageName: 'TownSquareOutput',
    name: 'The Town Square',
    buildingType: 'townSquare',
    wordNoun: 'town square',
    needsWordNoun: false,
    feature: setup.townSquare.feature().random()
  })

  const rollDataVariables = ['size', 'cleanliness']
  for (const propName of rollDataVariables) {
    lib.defineRollDataGetter(townSquare, setup.townSquare.rollData, propName)
  }
  townSquare.tippyDescription = `The town square, which is ${townSquare.size} and ${townSquare.cleanliness}`
  console.groupEnd()
  return townSquare
}
