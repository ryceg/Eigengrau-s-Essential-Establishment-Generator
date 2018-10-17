setup.createGeneralStoreName = function (shopkeep) {
  var name
  var roll = dice(1, 5)
  var adjective = ['Dependable', 'Reliable', 'Expendable', 'Indispensible', 'Incomparable', 'Incredible', 'Excellent', 'Important', 'Cheap', 'Affordable', 'Affable', 'Discount', 'Low-Cost'].random()
  var noun = ['Mount', 'Saddle', 'Guild', 'Fangs', 'Man', 'Pardon', 'Pleasure', 'Belt', 'Staff', 'Shield', 'Prince', 'Master', 'Servant', 'Meal', 'Prince', 'Favor', 'Love', 'Word', 'Scribe', 'Apprentice', 'Acolyte', 'Dress', 'Goddess', 'God', 'Gold', 'Purse', 'Trap', 'King', 'Son', 'Sister', 'Mother', 'Daughter', 'Cry', 'Shout', 'Cupboard', 'Pantry', 'Queen', 'Wealth', 'Star', 'Void', 'Woman', 'Man', 'Whore', 'Butcher', 'Anvil', 'Tome', 'Sacrifice', 'Armor', 'Cup', 'Pot', 'Stove', 'Stool', 'Princess', 'Chain', 'Sword', 'Pork', 'Grain', 'Tooth', 'Lance', 'Axe', 'Scabbard', 'Knife', 'Dagger', 'Spear', 'Bow', 'Crossbow', 'Quarterstaff', 'Staff', 'Fire', 'Ice', 'Wind', 'Earth', 'Water', 'Stone', 'Ladle', 'Monastery', 'Chalice', 'Goblet', 'Dungeon', 'Lust', 'Lantern', 'Bone', 'Life', 'Stone', 'Mistress', 'Mind', 'Treasure', 'Barter', 'Armorer', 'Butler', 'Page', 'Tome', 'Feather', 'Shadow', 'Friend', 'Labyrinth', 'Mountain', 'Hope', 'Boot', 'Gauntlet'].random()
  var family = ['Son', 'Daughter', 'Brother', 'Sister', 'Uncle', 'Aunt', 'Father', 'Friends', 'Family', 'Fool'].random()
  var rider = ['Shop', 'Bazaar', 'Convenience Store', 'Trading Post', 'Warehouse', 'Antiquerie', 'Adventure Supplier', 'Supplier', 'Goods', 'Goods and Bads', 'Stock Shop', 'Wares'].random()

  switch (roll) {
    case 1:
      name = 'The ' + adjective + ' ' + noun
      break
    case 2:
      name = shopkeep.firstName + ' and ' + family
      break
    case 3:
      name = noun + ' and ' + family
      break
    case 4:
      name = 'The ' + adjective + ' ' + rider
      break
    case 5:
      name = adjective + ' ' + noun
      break
    default:
      name = 'The ' + adjective + " Adventurer's Store"
      break
  }
  return name
}
