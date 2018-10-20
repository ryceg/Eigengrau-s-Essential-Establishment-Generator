setup.createAlchemist = function (town, opts) {
  opts = opts || {};
  var alchemist = (opts['newBuilding'] || setup.createBuilding)(town.name, 'alchemist')
  alchemist.chemist = (opts['newBartender'] || setup.createChemist)(town.name)
  alchemist.associatedTown = town
  alchemist.passageName = 'AlchemistOutput'
  alchemist.name = setup.createAlchexmistName(alchemist.chemist.firstName)
  setup.alchemistModifiers(alchemist)
  setup.alchemistRenders(alchemist)

  return alchemist
};
