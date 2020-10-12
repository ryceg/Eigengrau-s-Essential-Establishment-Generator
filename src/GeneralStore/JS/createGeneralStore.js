setup.createGeneralStore = (town, opts = {}) => {
  const createBuilding = opts.newBuilding || setup.createBuilding
  const createShopkeep = opts.newShopkeep || setup.createNPC

  const generalStore = createBuilding(town, 'generalStore')
  console.groupCollapsed('General Store loading...')
  generalStore.associatedNPC = createShopkeep(town, Object.assign({
    profession: 'merchant',
    mundane: ['pliers', 'tins', 'twine', 'cups', 'spoons', 'pans', 'chairs', 'cushions'],
    greeting: ['nods at you', 'welcomes you warmly', 'smiles and greets you', 'raises a hand with a wave', 'checks you out for just a moment before smiling at you'],
    owner: ['owner', 'caretaker', 'proud owner', 'proprietor', 'current owner', 'manager', 'assistant manager', 'acting manager'].random()
  }, opts.npc))
  lib.createBuildingRelationship(town, generalStore, generalStore.associatedNPC, { relationship: 'owner', reciprocalRelationship: 'business' })
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
    buildingType: 'generalStore'
  })
  setup.createStructure(town, generalStore)
  generalStore.structure.generalStoreDescriptor = `${lib.articles.output(generalStore.structure.material.wealth)} ${generalStore.structure.material.noun} ${generalStore.wordNoun} with ${lib.articles.output(generalStore.structure.roof.verb)} roof`
  setup.createGeneralStoreName(town, generalStore)
  generalStore.wealth = ''
  generalStore.size = ''
  generalStore.cleanliness = ''
  generalStore.expertise = ''
  generalStore.clutter = ''
  lib.generalStoreModifiers(town, generalStore)

  const rollData = lib.generalStore.rollData
  for (const propName of lib.keys(rollData)) {
    lib.defineRollDataGetter(generalStore, rollData, propName)
  }

  if (generalStore.roll.cleanliness <= 40) {
    generalStore.clutter = [
      `The store has a lot of ${generalStore.crud} laying about.`,
      `The front counter is cluttered with ${generalStore.crud}.`,
      `In one corner of the store there is a large pile of ${generalStore.crud}.`,
      `Several bins seemed to be cluttered with ${generalStore.crud}.`].random()
  }
  // lib.generalStoreRenders(generalStore)
  console.log(generalStore)
  console.groupEnd()
  return generalStore
}
