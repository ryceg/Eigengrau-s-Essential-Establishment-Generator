setup.createAlchemist = (town, opts = {}) => {
  const createBuilding = opts.newBuilding || setup.createBuilding
  const createChemist = opts.newChemist || setup.createChemist

  console.groupCollapsed('Alchemist loading...')

  const alchemist = createBuilding(town, 'alchemist')
  const associatedNPC = createChemist(town)
  setup.createBuildingRelationship(town, alchemist, associatedNPC, 'owner')

  Object.assign(alchemist, {
    associatedNPC,
    wordNoun: ['alchemist', 'potion shop', 'apothecary', 'alchemist'].random(),
    associatedTown: town.name,
    passageName: 'AlchemistOutput',
    initPassage: 'InitAlchemist',
    buildingType: 'alchemist',
    notableFeature: ['its love potions', 'its herbal remedies', 'its magical potions', 'its wonderful tonics', 'its fantastic ointments'].random(),
    name: lib.createAlchemistName(associatedNPC.firstName),
    size: '',
    cleanliness: '',
    wealth: '',
    expertise: ''
  })

  setup.createStructure(town, alchemist)
  alchemist.structure.alchemistDescriptor = `${alchemist.structure.material.wealth} ${alchemist.structure.material.noun} ${alchemist.wordNoun} with ${lib.articles.output(alchemist.structure.roof.verb)} roof`

  const rollDataVariables = ['wealth', 'size', 'cleanliness', 'expertise']
  for (const propName of rollDataVariables) {
    lib.defineRollDataGetter(alchemist, lib.alchemistData.rollData, propName)
  }
  lib.alchemistModifiers(alchemist)

  console.groupEnd()
  return alchemist
}
