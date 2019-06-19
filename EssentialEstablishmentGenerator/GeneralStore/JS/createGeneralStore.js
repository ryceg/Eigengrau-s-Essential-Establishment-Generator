
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
    crud: setup.generalStore.crud.seededrandom(),
    idle: setup.generalStore.idle.seededrandom(),
    notableFeature: 'wide range of goods on sale',
    passageName: 'GeneralStoreOutput',
    initPassage: 'InitGeneralStore',
    buildingType: 'GeneralStore'
  })
  setup.structure.create(town, GeneralStore)
  GeneralStore.structure.generalStoreDescriptor = 'a ' + GeneralStore.structure.material.wealth + ' ' + GeneralStore.structure.material.noun + ' ' + GeneralStore.wordNoun + ' with a ' + GeneralStore.structure.roof.verb + ' roof'
  setup.createGeneralStoreName(town, GeneralStore)
  GeneralStore.wealth = ''
  GeneralStore.size = ''
  GeneralStore.cleanliness = ''
  GeneralStore.expertise = ''
  GeneralStore.clutter = ''
  setup.generalStoreModifiers(town, GeneralStore)

  const rollDataVariables = ['wealth', 'size', 'cleanliness', 'expertise']
  for (const propName of rollDataVariables) {
    setup.defineRollDataGetter(GeneralStore, setup.generalStore.rollData, propName)
  }
  if (GeneralStore.roll.cleanliness <= 40) {
    GeneralStore.clutter = ['The store has a lot of ' + GeneralStore.crud + ' laying about.', 'The front counter is cluttered with ' + GeneralStore.crud + '.', 'In one corner of the store there is a large pile of ' + GeneralStore.crud + '.', 'Several bins seemed to be cluttered with ' + GeneralStore.crud + '.'].seededrandom()
  }
  // setup.generalStoreRenders(GeneralStore)
  console.log(GeneralStore)
  // setup.townBinder(town, GeneralStore, 'GeneralStore')
  console.groupEnd()
  return GeneralStore
}
