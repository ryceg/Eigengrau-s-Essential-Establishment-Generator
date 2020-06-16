/**
 * Initializes the data structures.
 *
 * Since some objects depends on others,
 * the order is very important.
 */
setup.init = (setup => () => {
  lib.setRandom(random)
  lib.setRandomFloat(randomFloat)

  setup.initMisc()
  setup.initMiscEncounters()
  setup.initMiscLocations()
  setup.initNpcData()
  setup.initTavernData()
  setup.initTownData()
  setup.initTownDataProfessions()
  setup.initGoodsAndServices()
  setup.initDocks()
  setup.initBuildingTypes()
})(setup)
