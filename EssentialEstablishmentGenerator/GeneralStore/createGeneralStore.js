setup.createGeneralStore = function () {
  var GeneralStore = setup.createBuilding()
  GeneralStore.passageName = 'GeneralStoreOutput'
  GeneralStore.shopkeep = setup.createNPC({
    profession: 'merchant',
    mundane: ['pliers', 'tins', 'twine', 'cups', 'spoons', 'pans', 'chairs', 'cushions'],
    greeting: ['nods at you', 'welcomes you warmly', 'smiles and greets you', 'raises a hand with a wave', 'checks you out for just a moment before smiling at you'],
    owner: ['owner', 'caretaker', 'proud owner', 'proprietor', 'current owner', 'manager', 'assistant manager', 'acting manager'].random()
  })
  var shopkeep = GeneralStore.shopkeep

  GeneralStore.note = setup.getGeneralStoreNote()

  GeneralStore.crud = setup.GeneralStoreCrud

  var GeneralStoreNameRoll = dice(1, 5)

  GeneralStore.adjective = ['Dependable', 'Reliable', 'Expendable', 'Indispensible', 'Incomparable', 'Incredible', 'Excellent', 'Important', 'Cheap', 'Affordable', 'Affable', 'Discount', 'Low-Cost'].random()

  GeneralStore.noun = ['Mount', 'Saddle', 'Guild', 'Fangs', 'Man', 'Pardon', 'Pleasure', 'Belt', 'Staff', 'Shield', 'Prince', 'Master', 'Servant', 'Meal', 'Prince', 'Favor', 'Love', 'Word', 'Scribe', 'Apprentice', 'Acolyte', 'Dress', 'Goddess', 'God', 'Gold', 'Purse', 'Trap', 'King', 'Son', 'Sister', 'Mother', 'Daughter', 'Cry', 'Shout', 'Cupboard', 'Pantry', 'Queen', 'Wealth', 'Star', 'Void', 'Woman', 'Man', 'Whore', 'Butcher', 'Anvil', 'Tome', 'Sacrifice', 'Armor', 'Cup', 'Pot', 'Stove', 'Stool', 'Princess', 'Chain', 'Sword', 'Pork', 'Grain', 'Tooth', 'Lance', 'Axe', 'Scabbard', 'Knife', 'Dagger', 'Spear', 'Bow', 'Crossbow', 'Quarterstaff', 'Staff', 'Fire', 'Ice', 'Wind', 'Earth', 'Water', 'Stone', 'Ladle', 'Monastery', 'Chalice', 'Goblet', 'Dungeon', 'Lust', 'Lantern', 'Bone', 'Life', 'Stone', 'Mistress', 'Mind', 'Treasure', 'Barter', 'Armorer', 'Butler', 'Page', 'Tome', 'Feather', 'Shadow', 'Friend', 'Labyrinth', 'Mountain', 'Hope', 'Boot', 'Gauntlet'].random()

  GeneralStore.family = ['Son', 'Daughter', 'Brother', 'Sister', 'Uncle', 'Aunt', 'Father', 'Friends', 'Family', 'Fool'].random()

  GeneralStore.rider = ['Shop', 'Bazaar', 'Convenience Store', 'Trading Post', 'Warehouse', 'Antiquerie', 'Adventure Supplier', 'Supplier', 'Goods', 'Goods and Bads', 'Stock Shop', 'Wares'].random()

  switch (GeneralStoreNameRoll) {
    case 1:
      GeneralStore.name = 'The ' + GeneralStore.adjective + ' ' + GeneralStore.noun
      break
    case 2:
      GeneralStore.name = shopkeep.firstName + ' and ' + GeneralStore.family
      break
    case 3:
      GeneralStore.name = GeneralStore.noun + ' and ' + GeneralStore.family
      break
    case 4:
      GeneralStore.name = 'The ' + GeneralStore.adjective + ' ' + GeneralStore.rider
      break
    case 5:
      GeneralStore.name = GeneralStore.adjective + ' ' + GeneralStore.noun
      break
    default:
      GeneralStore.name = 'The ' + GeneralStore.adjective + " Adventurer's Store"
      break
  }
  return GeneralStore
}
