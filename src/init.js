/**
 * Initializes the data structures.
 *
 * Since some objects depends on others,
 * the order is very important.
 */
setup.init = (setup => () => {
  setup.initMisc()
  setup.initMiscBooks()
  setup.initMiscRiddles()
  setup.initMiscEncounters()
  setup.initMiscLocations()
  setup.initNpcData()
  setup.initTavernData()
  setup.initTownData()
  setup.initTownDataProfessions()
  setup.initGoodsAndServices()
  setup.initDocks()
  setup.initRingData()
  setup.initBuildingTypes()
})(setup)
