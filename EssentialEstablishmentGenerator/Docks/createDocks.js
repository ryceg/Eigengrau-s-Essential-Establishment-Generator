setup.createDocks = function (town, opts) {
  opts = opts || {}
  var docks = (opts['newBuilding'] || setup.createBuilding)(town, 'docks')
  Object.assign(docks, {
    notableFeature: setup.docks.notableFeature.random(),
    notice: setup.docks.notice.random(),
    passageName: 'DocksOutput',
    initPassage: 'DocksOutput',
    BuildingType: 'docks',
    needsWordNoun: false,
    wordNoun: ['docks', 'pier', 'wharf', 'dockyard', 'shipyard', 'quay', 'staithe', 'marina'].random(),
    ships: {},
    typePool: setup.docks.ships.typePool
  })

  docks.name = ['the' + [' Old ', ' New ', ' ', ' ' , ' '].random() + [town.name + ' ', town.name + ' ', ' ', ' ', ' '].random() + docks.wordNoun.toUpperFirst()].random()

  // docks.wealth = ''
  docks.activity = ''
  docks.size = ''
  docks.cleanliness = ''

  var rollDataVariables = ['size', 'cleanliness', 'activity']
  rollDataVariables.forEach(function (propName) {
    setup.defineRollDataGetter(docks, setup.docks.rollData, propName)
  })

  setup.docks.ships.create(town, docks)

  return docks
}
