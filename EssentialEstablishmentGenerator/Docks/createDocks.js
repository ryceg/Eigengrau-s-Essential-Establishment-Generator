setup.createDocks = function (town, opts) {
  opts = opts || {}
  const docks = (opts['newBuilding'] || setup.createBuilding)(town, 'docks')
  Object.assign(docks, {
    notableFeature: setup.docks.notableFeature.seededrandom(),
    notice: setup.docks.notice.seededrandom(),
    passageName: 'DocksOutput',
    initPassage: 'DocksOutput',
    buildingType: 'docks',
    needsWordNoun: false,
    dockName: setup.createNPC(town, {
      isShallow: true
    }),
    wordNoun: ['docks', 'pier', 'wharf', 'dockyard', 'shipyard', 'quay', 'staithe', 'marina', 'jetty', 'harbor', 'berth', 'port', 'seaport', 'dockyard'].seededrandom(),
    ships: {},
    typePool: setup.docks.ships.typePool
  })

  docks.name = ['The' + [' Old ', ' New ', ' ', ' '].seededrandom() + [town.name + ' ', town.name + ' ', ' ', ' ', ' '].seededrandom() + docks.wordNoun.toUpperFirst(), [docks.dockName.lastName + ' ', docks.dockName.firstName + "'s ", [docks.dockName.firstName, docks.dockName.lastName].seededrandom() + ' Beach '].seededrandom() + docks.wordNoun.toUpperFirst()].seededrandom()

  // docks.wealth = ''
  docks.activity = ''
  docks.size = ''
  docks.cleanliness = ''

  const rollDataVariables = ['size', 'cleanliness', 'activity']
  for (const propName of rollDataVariables) {
    setup.defineRollDataGetter(docks, setup.docks.rollData, propName)
  }

  docks.sizeDescriptive = ''
  docks.cleanlinessDescriptive = ''
  docks.activityDescriptive = ''

  setup.defineRollDataGetter(docks, setup.docks.rollData, 'sizeDescriptive', 'size', 2)
  setup.defineRollDataGetter(docks, setup.docks.rollData, 'cleanlinessDescriptive', 'cleanliness', 2)
  setup.defineRollDataGetter(docks, setup.docks.rollData, 'activityDescriptive', 'activity')

  setup.docks.ships.create(town, docks)

  return docks
}
