setup.createGeneralStore = function (town, opts) {
  opts = opts || {}
  var GeneralStore = (opts['newBuilding'] || setup.createBuilding)(town, 'GeneralStore')
  console.groupCollapsed('General Store loading...')
  var shopkeep = (opts['newShopkeep'] || setup.createNPC)({
    profession: 'merchant',
    mundane: ['pliers', 'tins', 'twine', 'cups', 'spoons', 'pans', 'chairs', 'cushions'],
    greeting: ['nods at you', 'welcomes you warmly', 'smiles and greets you', 'raises a hand with a wave', 'checks you out for just a moment before smiling at you'],
    owner: ['owner', 'caretaker', 'proud owner', 'proprietor', 'current owner', 'manager', 'assistant manager', 'acting manager'].random()
  })
  GeneralStore.shopkeep = shopkeep
  // var GeneralStore = setup.createBuilding()
  GeneralStore.passageName = 'GeneralStoreOutput'
  GeneralStore.associatedTown = town || ''
  GeneralStore.note = setup.getGeneralStoreNote(GeneralStore)
  GeneralStore.crud = setup.GeneralStoreCrud
  GeneralStore.name = setup.createGeneralStoreName(shopkeep)
  setup.GeneralStoreModifiers(town, GeneralStore)
  setup.GeneralStoreRenders(GeneralStore)
  console.groupEnd()
  return GeneralStore
}
