setup.createDocks = (town, opts = {}) => {
  const createBuilding = opts.newBuilding || setup.createBuilding

  const docks = createBuilding(town, 'docks')
  Object.assign(docks, {
    notableFeature: setup.docks.notableFeature.random(),
    notice: setup.docks.notice.random(),
    passageName: 'DocksOutput',
    initPassage: 'DocksOutput',
    buildingType: 'docks',
    needsWordNoun: false,
    dockName: setup.createNPC(town, {
      isShallow: true,
      profession: 'stevedore'
    }),
    wordNoun: ['docks', 'pier', 'wharf', 'dockyard', 'shipyard', 'quay', 'staithe', 'marina', 'jetty', 'harbor', 'berth', 'port', 'seaport', 'dockyard'].random(),
    ships: {},
    typePool: setup.docks.ships.typePool
  })

  docks.name = [`The ${['Old ', 'New ', '', ''].random()}${[`${town.name} `, `${town.name} `, ' ', ' ', ' '].random()}${docks.wordNoun.toUpperFirst()}`, [`${docks.dockName.lastName} `, `${docks.dockName.firstName}'s `, `${[docks.dockName.firstName, docks.dockName.lastName].random()} Beach `].random() + docks.wordNoun.toUpperFirst()].random()

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
