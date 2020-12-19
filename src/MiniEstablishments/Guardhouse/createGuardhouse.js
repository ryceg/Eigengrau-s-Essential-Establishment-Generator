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

  lib.assign(guardhouse, lib.weightedRandomFetcher(town, lib.guardhouseData.notableFeature, guardhouse, undefined))
  return guardhouse
}
