
setup.createAlchemist = function (town, opts) {
  opts = opts || {}
  var alchemist = (opts['newBuilding'] || setup.createBuilding)(town, 'alchemist')
  console.groupCollapsed('Alchemist loading...')
  Object.assign(alchemist, {
    chemist: (opts['newChemist'] || setup.createChemist)(town),
    wordNoun: ['alchemist', 'potion shop', 'apothecary', 'alchemist'].seededrandom(),
    associatedTown: town.name,
    passageName: 'AlchemistOutput',
    initPassage: 'InitAlchemist',
    BuildingType: 'alchemist',
    notableFeature: ['its love potions', 'its herbal remedies', 'its magical potions', 'its wonderful tonics', 'its fantastic ointments'].seededrandom()
  })

  alchemist.name = setup.createAlchemistName(alchemist.chemist.firstName)
  alchemist.size = ''
  alchemist.cleanliness = ''
  alchemist.wealth = ''
  alchemist.expertise = ''
  var rollDataVariables = ['wealth', 'size', 'cleanliness', 'expertise']
  rollDataVariables.forEach(function (propName) {
    setup.defineRollDataGetter(alchemist, setup.alchemist.rollData, propName)
  })
  setup.alchemistModifiers(alchemist)

  console.groupEnd()
  return alchemist
}
