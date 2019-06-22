
setup.createAlchemist = function (town, opts) {
  opts = opts || {}
  const alchemist = (opts['newBuilding'] || setup.createBuilding)(town, 'alchemist')
  console.groupCollapsed('Alchemist loading...')
  Object.assign(alchemist, {
    chemist: (opts['newChemist'] || setup.createChemist)(town),
    wordNoun: ['alchemist', 'potion shop', 'apothecary', 'alchemist'].seededrandom(),
    associatedTown: town.name,
    passageName: 'AlchemistOutput',
    initPassage: 'InitAlchemist',
    buildingType: 'alchemist',
    notableFeature: ['its love potions', 'its herbal remedies', 'its magical potions', 'its wonderful tonics', 'its fantastic ointments'].seededrandom()
  })

  alchemist.name = setup.createAlchemistName(alchemist.chemist.firstName)
  alchemist.size = ''
  alchemist.cleanliness = ''
  alchemist.wealth = ''
  alchemist.expertise = ''
  setup.structure.create(town, alchemist)
  alchemist.structure.alchemistDescriptor = alchemist.structure.material.wealth + ' ' + alchemist.structure.material.noun + ' ' + alchemist.wordNoun + ' with a ' + alchemist.structure.roof.verb + ' roof'
  const rollDataVariables = ['wealth', 'size', 'cleanliness', 'expertise']
  for (const propName of rollDataVariables) {
    setup.defineRollDataGetter(alchemist, setup.alchemist.rollData, propName)
  }
  setup.alchemistModifiers(alchemist)

  // setup.townBinder(town, alchemist, 'alchemist')
  console.groupEnd()
  return alchemist
}
