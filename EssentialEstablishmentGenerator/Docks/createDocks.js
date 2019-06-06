setup.createDocks = function (town, opts) {
  opts = opts || {}
  const docks = (opts['newBuilding'] || setup.createBuilding)(town, 'docks')
  Object.assign(docks, {
    notableFeature: setup.docks.notableFeature.seededrandom(),
    notice: setup.docks.notice.seededrandom(),
    passageName: 'DocksOutput',
    initPassage: 'DocksOutput',
    BuildingType: 'docks',
    needsWordNoun: false,
    wordNoun: ['docks', 'pier', 'wharf', 'dockyard', 'shipyard', 'quay', 'staithe', 'marina'].seededrandom(),
    ships: {},
    typePool: setup.docks.ships.typePool
  })

  docks.name = ['the' + [' Old ', ' New ', ' ', ' ', ' '].seededrandom() + [town.name + ' ', town.name + ' ', ' ', ' ', ' '].seededrandom() + docks.wordNoun.toUpperFirst()].seededrandom()

  // docks.wealth = ''
  docks.activity = ''
  docks.size = ''
  docks.cleanliness = ''

  const rollDataVariables = ['size', 'cleanliness', 'activity']
  rollDataVariables.forEach(function (propName) {
    setup.defineRollDataGetter(docks, setup.docks.rollData, propName)
  })

  docks.sizeDescriptive = ''
  docks.cleanlinessDescriptive = ''
  docks.activityDescriptive = ''

  setup.defineRollDataGetter(docks, setup.docks.rollData, 'sizeDescriptive', 'size', 2)
  setup.defineRollDataGetter(docks, setup.docks.rollData, 'cleanlinessDescriptive', 'cleanliness', 2)
  setup.defineRollDataGetter(docks, setup.docks.rollData, 'activityDescriptive', 'activity', 2)

  setup.docks.ships.create(town, docks)

  return docks
}
