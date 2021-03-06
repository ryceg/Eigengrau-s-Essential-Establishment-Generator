// uses setup.createNPC
setup.createDocks = (town, opts = {}) => {
  const createBuilding = opts.newBuilding || lib.createBuilding

  const docks = createBuilding(town, 'docks', opts)
  Object.assign(docks, {
    notableFeature: setup.docks.notableFeature.random(),
    notice: setup.docks.notice.random(),
    passageName: 'DocksOutput',
    initPassage: 'DocksOutput',
    buildingType: 'docks',
    objectType: 'building',
    needsWordNoun: false,
    associatedNPC: setup.createNPC(town, Object.assign({
      isShallow: true,
      profession: 'stevedore'
    }, opts.npc)),
    wordNoun: ['docks', 'pier', 'wharf', 'dockyard', 'shipyard', 'quay', 'staithe', 'marina', 'jetty', 'harbor', 'berth', 'port', 'seaport', 'dockyard'].random(),
    ships: {}
  })
  lib.createReciprocalRelationship(town, docks, docks.associatedNPC, { relationship: 'stevedore', reciprocalRelationship: 'place of employment' })

  docks.name = lib.toTitleCase([
    `The ${['Old', 'New', '', ''].random()} ${[`${town.name}`, `${town.name}`, '', '', ''].random()} ${docks.wordNoun.toUpperFirst()}`,
    `${[
      docks.associatedNPC.lastName,
      `${docks.associatedNPC.firstName}'s`,
      `${[
        docks.associatedNPC.firstName,
        docks.associatedNPC.lastName
      ].random()} Beach`
    ].random()} ${docks.wordNoun}`
  ].random())

  const rollDataVariables = ['size', 'cleanliness', 'activity']
  for (const propName of rollDataVariables) {
    lib.defineRollDataGetter(docks, setup.docks.rollData[propName].rolls, propName)
  }

  lib.defineRollDataGetter(docks, setup.docks.rollData.size.rolls, 'sizeDescriptive', 'size', 2)
  lib.defineRollDataGetter(docks, setup.docks.rollData.cleanliness.rolls, 'cleanlinessDescriptive', 'cleanliness', 2)
  lib.defineRollDataGetter(docks, setup.docks.rollData.activity.rolls, 'activityDescriptive', 'activity')
  docks.tippyDescription = `${lib.articles.output(docks.wordNoun).toUpperFirst()} that's ${docks.size || docks._size}. It is ${docks.cleanliness || docks._cleanliness}, and is known for ${docks.notableFeature}.`
  setup.docks.ships.create(town, docks)

  return docks
}
