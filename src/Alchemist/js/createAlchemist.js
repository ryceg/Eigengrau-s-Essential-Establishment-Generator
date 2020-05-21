setup.createAlchemist = (town, opts = {}) => {
  const createBuilding = opts.newBuilding || setup.createBuilding
  const createChemist = opts.newChemist || setup.createChemist

  console.groupCollapsed('Alchemist loading...')

  const chemist = createChemist(town)

  const alchemist = {
    ...createBuilding(town, 'alchemist'),
    chemist,
    wordNoun: ['alchemist', 'potion shop', 'apothecary', 'alchemist'].seededrandom(),
    associatedTown: town.name,
    passageName: 'AlchemistOutput',
    initPassage: 'InitAlchemist',
    buildingType: 'alchemist',
    notableFeature: ['its love potions', 'its herbal remedies', 'its magical potions', 'its wonderful tonics', 'its fantastic ointments'].seededrandom(),
    name: setup.createAlchemistName(chemist.firstName),
    size: '',
    cleanliness: '',
    wealth: '',
    expertise: ''
  }

  setup.structure.create(town, alchemist)
  alchemist.structure.alchemistDescriptor = `${alchemist.structure.material.wealth} ${alchemist.structure.material.noun} ${alchemist.wordNoun} with ${setup.articles.output(alchemist.structure.roof.verb)} roof`

  const rollDataVariables = ['wealth', 'size', 'cleanliness', 'expertise']
  for (const propName of rollDataVariables) {
    setup.defineRollDataGetter(alchemist, setup.alchemist.rollData, propName)
  }
  setup.alchemistModifiers(alchemist)

  // setup.townBinder(town, alchemist, 'alchemist')
  console.groupEnd()
  return alchemist
}
