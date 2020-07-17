setup.createDocks = (town, opts = {}) => {
  const createBuilding = opts.newBuilding || setup.createBuilding

  const docks = createBuilding(town, 'docks', opts)
  Object.assign(docks, {
    notableFeature: setup.docks.notableFeature.random(),
    notice: setup.docks.notice.random(),
    passageName: 'DocksOutput',
    initPassage: 'DocksOutput',
    buildingType: 'docks',
    needsWordNoun: false,
    associatedNPC: setup.createNPC(town, {
      isShallow: true,
      profession: 'stevedore'
    }),
    wordNoun: ['docks', 'pier', 'wharf', 'dockyard', 'shipyard', 'quay', 'staithe', 'marina', 'jetty', 'harbor', 'berth', 'port', 'seaport', 'dockyard'].random(),
    ships: {},
    typePool: setup.docks.ships.typePool
  })

  docks.name = [
    `The ${['Old', 'New', '', ''].random()} ${[`${town.name}`, `${town.name}`, '', '', ''].random()} ${docks.wordNoun.toUpperFirst()}`,
    `${[
      docks.associatedNPC.lastName,
      `${docks.associatedNPC.firstName}'s`,
      `${[
        docks.associatedNPC.firstName,
        docks.associatedNPC.lastName
      ].random()} Beach`
    ].random()} ${docks.wordNoun.toUpperFirst()}`
  ].random()

  docks.activity = ''
  docks.size = ''
  docks.cleanliness = ''

  const rollDataVariables = ['size', 'cleanliness', 'activity']
  for (const propName of rollDataVariables) {
    lib.defineRollDataGetter(docks, setup.docks.rollData, propName)
  }

  docks.sizeDescriptive = ''
  docks.cleanlinessDescriptive = ''
  docks.activityDescriptive = ''

  lib.defineRollDataGetter(docks, setup.docks.rollData, 'sizeDescriptive', 'size', 2)
  lib.defineRollDataGetter(docks, setup.docks.rollData, 'cleanlinessDescriptive', 'cleanliness', 2)
  lib.defineRollDataGetter(docks, setup.docks.rollData, 'activityDescriptive', 'activity')
  docks.tippyDescription = `${lib.articles.output(docks.wordNoun).toUpperFirst()} that's ${docks.size || docks._size}. It is ${docks.cleanliness || docks._cleanliness}, and is known for ${docks.notableFeature}.`
  setup.docks.ships.create(town, docks)

  return docks
}
