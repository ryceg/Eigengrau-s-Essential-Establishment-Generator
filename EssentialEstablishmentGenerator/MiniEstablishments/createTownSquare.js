setup.createTownSquare = function (town, opts) {
  console.groupCollapsed('Creating townSquare function')
  opts = opts || {}
  const townSquare = (opts['newBuilding'] || setup.createBuilding)(town, 'townSquare')
  Object.assign(townSquare, {
    associatedTown: town.name,
    initPassage: 'TownSquareOutput',
    passageName: 'TownSquareOutput',
    name: 'The Town Square',
    buildingType: 'townSquare',
    wordNoun: 'town square',
    needsWordNoun: false,
    feature: setup.townSquare.feature.seededrandom()
  })

  townSquare.size = ''
  townSquare.cleanliness = ''

  const rollDataVariables = ['size', 'cleanliness']
  rollDataVariables.forEach(function (propName) {
    setup.defineRollDataGetter(townSquare, setup.townSquare.rollData, propName)
  })
  townSquare.tippyDescription = 'The town square, which is ' + townSquare.size + ' and ' + townSquare.cleanliness
  console.groupEnd()
  return townSquare
}
