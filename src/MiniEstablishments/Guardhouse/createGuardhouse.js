/**
 * Creates the guardhouse.
 * @param {import("../../../lib/town/_common").Town} town
 * @param {Partial<import("../../../lib/buildings/_common").Building>} opts
 */
setup.createGuardhouse = (town, opts) => {
  const guardhouse = (opts.newBuilding || lib.createBuilding)(town, 'guardhouse')

  lib.assign(guardhouse, {
    initPassage: 'GuardhouseOutput',
    passageName: 'GuardhouseOutput',
    buildingType: 'guardhouse',
    wordNoun: lib.guardhouseData.name.wordNoun.random(),
    needsWordNoun: false,
    associatedNPC: setup.createNPC(town, { profession: 'guard', ...opts.associatedNPC })
  })
  lib.createBuildingRelationship(town, guardhouse, guardhouse.associatedNPC, { relationship: 'worker', reciprocalRelationship: 'place of employment' })
  guardhouse.notableFeature = lib.weightedRandomFetcher(town, lib.guardhouseData.notableFeature, guardhouse, undefined, 'function')
  guardhouse.name = setup.createGuardhouseName(town)
  lib.createStructure(town, guardhouse)
  const props = ['cleanliness', 'expertise']
  for (const propName of props) {
    lib.defineRollDataGetter(guardhouse, lib.guardhouseData.rollData[propName].rolls, propName)
  }
  return guardhouse
}

/**
 * Returns a guardhouse name.
 * @param {import("../../../lib/town/_common").Town} town
 */
setup.createGuardhouseName = (town) => {
  const potentialUniqueNames = [
    'Emberhead Garrison',
    'Nightwatch',
    'Bulwark',
    'The Compass',
    'The Watchtower',
    'The Veil',
    'Watch Headquarters',
    'Bastion',
    'Hillside Watchtower'
  ]
  if (lib.findInArray(town.buildings, 'buildingType', 'docks')) potentialUniqueNames.push('The Dockside Guardhouse')
  if (random(3) > 2) {
    return lib.toTitleCase(potentialUniqueNames.random())
  } else {
    return lib.toTitleCase([
      `The ${town.type} ${lib.guardhouseData.name.wordNoun.random()}`,
      `The ${lib.guardhouseData.name.adjective.random()} ${lib.guardhouseData.name.wordNoun.random()}`,
      `The ${lib.guardhouseData.name.adjective.random()} ${town.type} ${lib.guardhouseData.name.wordNoun.random()}`
    ].random())
  }
}
