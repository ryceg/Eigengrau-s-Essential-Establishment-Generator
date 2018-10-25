setup.createAlchemist = function (town, opts) {
  opts = opts || {};
  var alchemist = (opts['newBuilding'] || setup.createBuilding)(town.name, 'alchemist')
  console.groupCollapsed('Alchemist loading...')
  alchemist.chemist = (opts['newBartender'] || setup.createChemist)(town.name)
  alchemist.associatedTown = town
  alchemist.passageName = 'AlchemistOutput'
  alchemist.name = setup.createAlchemistName(alchemist.chemist.firstName)
  setup.alchemistModifiers(alchemist)
  setup.alchemistRenders(alchemist)
  console.groupEnd()
  return alchemist
};
