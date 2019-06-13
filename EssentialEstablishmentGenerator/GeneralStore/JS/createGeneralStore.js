
setup.createGeneralStore = function (town, opts) {
  opts = opts || {}
  const GeneralStore = (opts['newBuilding'] || setup.createBuilding)(town, 'GeneralStore')
  console.groupCollapsed('General Store loading...')
  GeneralStore.shopkeep = (opts['newShopkeep'] || setup.createNPC)(town, {
    profession: 'merchant',
    mundane: ['pliers', 'tins', 'twine', 'cups', 'spoons', 'pans', 'chairs', 'cushions'],
    greeting: ['nods at you', 'welcomes you warmly', 'smiles and greets you', 'raises a hand with a wave', 'checks you out for just a moment before smiling at you'],
    owner: ['owner', 'caretaker', 'proud owner', 'proprietor', 'current owner', 'manager', 'assistant manager', 'acting manager'].seededrandom()
  })
  Object.assign(GeneralStore, {
    note: setup.generalStore.get.note(GeneralStore),
    wordNoun: ['general store', 'shop'].seededrandom(),
    crud: setup.generalStore.crud,
    notableFeature: 'wide range of goods on sale',
    passageName: 'GeneralStoreOutput',
    initPassage: 'InitGeneralStore',
    buildingType: 'GeneralStore'
  })

  setup.createGeneralStoreName(town, GeneralStore)
  GeneralStore.wealth = ''
  GeneralStore.size = ''
  GeneralStore.cleanliness = ''
  GeneralStore.expertise = ''
  setup.generalStoreModifiers(town, GeneralStore)

  const rollDataVariables = ['wealth', 'size', 'cleanliness', 'expertise']
  for (const propName of rollDataVariables) {
    setup.defineRollDataGetter(GeneralStore, setup.generalStore.rollData, propName)
  }
  // setup.generalStoreRenders(GeneralStore)
  console.log(GeneralStore)
  // setup.townBinder(town, GeneralStore, 'GeneralStore')
  console.groupEnd()
  return GeneralStore
}
