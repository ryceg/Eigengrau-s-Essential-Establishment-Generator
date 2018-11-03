/* global setup */
setup.createAlchemist = function (town, opts) {
  opts = opts || {}
  var alchemist = (opts['newBuilding'] || setup.createBuilding)(town, 'alchemist')
  console.groupCollapsed('Alchemist loading...')
  alchemist.chemist = (opts['newBartender'] || setup.createChemist)(town.name)
  alchemist.associatedTown = town
  alchemist.passageName = 'AlchemistOutput'
  alchemist.initPassage = 'InitAlchemist'
  alchemist.name = setup.createAlchemistName(alchemist.chemist.firstName)
  Object.defineProperty(alchemist, 'wordNoun', {
    get: function () {
      return ['alchemist', 'potion shop', 'apothecary', 'alchemist'].random()
    }
  })
  setup.alchemistModifiers(alchemist)
  setup.alchemistRenders(alchemist)
  console.log(alchemist)
  console.groupEnd()
  return alchemist
}
