setup.createAlchemist = function () {
  var alchemist = setup.createBuilding()
  alchemist.chemist = setup.createChemist()
  var chemist = alchemist.chemist

  alchemist.passageName = 'AlchemistOutput'
  alchemist.name = 'Test Alchemist'
  // setup.alchemistModifiers(alchemist)
  // setup.alchemistRenders(alchemist)

  return alchemist
}
