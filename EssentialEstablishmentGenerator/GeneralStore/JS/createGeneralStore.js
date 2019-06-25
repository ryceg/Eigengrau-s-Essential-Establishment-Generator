
setup.createGeneralStore = function (town, opts) {
  opts = opts || {}
  const generalStore = (opts['newBuilding'] || setup.createBuilding)(town, 'generalStore')
  console.groupCollapsed('General Store loading...')
  generalStore.shopkeep = (opts['newShopkeep'] || setup.createNPC)(town, {
    profession: 'merchant',
    mundane: ['pliers', 'tins', 'twine', 'cups', 'spoons', 'pans', 'chairs', 'cushions'],
    greeting: ['nods at you', 'welcomes you warmly', 'smiles and greets you', 'raises a hand with a wave', 'checks you out for just a moment before smiling at you'],
    owner: ['owner', 'caretaker', 'proud owner', 'proprietor', 'current owner', 'manager', 'assistant manager', 'acting manager'].seededrandom()
  })
  Object.assign(generalStore, {
    note: setup.generalStore.get.note(generalStore),
    shopkeepNote: setup.generalStore.get.shopkeepNote(generalStore),
    say: setup.generalStore.get.say(generalStore),
    wordNoun: ['general store', 'shop'].seededrandom(),
    crud: setup.generalStore.crud.seededrandom(),
    idle: setup.generalStore.idle.seededrandom(),
    notableFeature: 'wide range of goods on sale',
    passageName: 'generalStoreOutput',
    initPassage: 'InitgeneralStore',
    buildingType: 'generalStore'
  })
  setup.structure.create(town, generalStore)
  generalStore.structure.generalStoreDescriptor = 'a ' + generalStore.structure.material.wealth + ' ' + generalStore.structure.material.noun + ' ' + generalStore.wordNoun + ' with a ' + generalStore.structure.roof.verb + ' roof'
  setup.createGeneralStoreName(town, generalStore)
  generalStore.wealth = ''
  generalStore.size = ''
  generalStore.cleanliness = ''
  generalStore.expertise = ''
  generalStore.clutter = ''
  setup.generalStoreModifiers(town, generalStore)

  const rollDataVariables = ['wealth', 'size', 'cleanliness', 'expertise']
  for (const propName of rollDataVariables) {
    setup.defineRollDataGetter(generalStore, setup.generalStore.rollData, propName)
  }
  if (generalStore.roll.cleanliness <= 40) {
    generalStore.clutter = ['The store has a lot of ' + generalStore.crud + ' laying about.', 'The front counter is cluttered with ' + generalStore.crud + '.', 'In one corner of the store there is a large pile of ' + generalStore.crud + '.', 'Several bins seemed to be cluttered with ' + generalStore.crud + '.'].seededrandom()
  }
  // setup.generalStoreRenders(generalStore)
  console.log(generalStore)
  // setup.townBinder(town, generalStore, 'generalStore')
  console.groupEnd()
  return generalStore
}
