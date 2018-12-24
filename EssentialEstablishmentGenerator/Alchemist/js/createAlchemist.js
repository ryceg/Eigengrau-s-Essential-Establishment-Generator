/* global setup */
setup.createAlchemist = function (town, opts) {
  opts = opts || {}
  var alchemist = (opts['newBuilding'] || setup.createBuilding)(town, 'alchemist')
  console.groupCollapsed('Alchemist loading...')
  Object.assign(alchemist, {
    chemist: (opts['newChemist'] || setup.createChemist)(town.name),
    wordNoun: ['alchemist', 'potion shop', 'apothecary', 'alchemist'].random(),
    associatedTown: town.name,
    passageName: 'AlchemistOutput',
    initPassage: 'InitAlchemist',
    BuildingType: 'alchemist',
    notableFeature: ['its love potions', 'its herbal remedies', 'its magical potions', 'its wonderful tonics', 'its fantastic ointments'].random()
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

  // setup.townBinder(town, alchemist, 'alchemist')
  console.groupEnd()
  return alchemist
}
