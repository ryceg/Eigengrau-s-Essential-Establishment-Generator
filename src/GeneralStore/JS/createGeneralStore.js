// uses setup.createNPC, setup.createGeneralStoreName
setup.createGeneralStore = (town, opts = {}) => {
  const createBuilding = opts.newBuilding || lib.createBuilding
  const createShopkeep = opts.newShopkeep || setup.createNPC

  const generalStore = createBuilding(town, 'generalStore', opts)
  lib.logger.openGroup('General Store loading...')
  generalStore.associatedNPC = createShopkeep(town, Object.assign({
    profession: 'merchant',
    mundane: ['pliers', 'tins', 'twine', 'cups', 'spoons', 'pans', 'chairs', 'cushions'],
    greeting: ['nods at you', 'welcomes you warmly', 'smiles and greets you', 'raises a hand with a wave', 'checks you out for just a moment before smiling at you'],
    owner: ['owner', 'caretaker', 'proud owner', 'proprietor', 'current owner', 'manager', 'assistant manager', 'acting manager'].random()
  }, opts.npc))
  lib.createReciprocalRelationship(town, generalStore, generalStore.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
  Object.assign(generalStore, {
    note: lib.generalStore.get.note(generalStore),
    shopkeepNote: lib.generalStore.get.shopkeepNote(generalStore),
    say: lib.generalStore.get.say(generalStore),
    wordNoun: ['general store', 'shop'].random(),
    crud: lib.generalStore.crud.random(),
    idle: lib.generalStore.idle.random(),
    notableFeature: 'wide range of goods on sale',
    passageName: 'generalStoreOutput',
    initPassage: 'InitgeneralStore',
    buildingType: 'generalStore',
    objectType: 'building',
    localImage: 'general-store-illustration'
  })
  lib.createStructure(town, generalStore)
  generalStore.structure.descriptor = `${lib.articles.output(generalStore.structure.material.wealth)} ${generalStore.structure.material.noun} ${generalStore.wordNoun} with ${lib.articles.output(generalStore.structure.roof.verb)} roof`
  setup.createGeneralStoreName(town, generalStore)
  lib.generalStoreModifiers(town, generalStore)

  const props = ['wealth', 'cleanliness', 'size', 'expertise']
  for (const propName of props) {
    lib.defineRollDataGetter(generalStore, lib.generalStoreRollData[propName].rolls, propName)
  }

  lib.generalStoreRenders(generalStore)
  lib.logger.info(generalStore)
  lib.logger.closeGroup()
  return generalStore
}
