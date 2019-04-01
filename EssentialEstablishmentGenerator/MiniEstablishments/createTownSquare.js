setup.createTownSquare = function (town, opts) {
  opts = opts || {}
  let townSquare = (opts['newBuilding'] || setup.createBuilding)(town, 'townSquare')
  Object.assign(townSquare, {
    associatedTown: town.name,
    initPassage: 'TownSquareOutput',
    passageName: 'TownSquareOutput',
    name: 'The Town Square',
    BuildingType: 'townSquare',
    wordNoun: 'town square',
    needsWordNoun: false,
    feature: setup.townSquare.feature.random()
  })

  townSquare.size = ''
  townSquare.cleanliness = ''

  var rollDataVariables = ['size', 'cleanliness']
  rollDataVariables.forEach(function (propName) {
    setup.defineRollDataGetter(townSquare, setup.townSquare.rollData, propName)
  })
  return townSquare
}
