setup.createGeneralStoreName = function (town, GeneralStore) {
  // var name
  const roll = dice(1, 5)
  const adjective = ['Dependable', 'Reliable', 'Expendable', 'Indispensible', 'Incomparable', 'Incredible', 'Excellent', 'Important', 'Cheap', 'Affordable', 'Affable', 'Discount', 'Low-Cost'].seededrandom()
  const noun = ['Mount', 'Saddle', 'Guild', 'Fangs', 'Man', 'Pardon', 'Pleasure', 'Belt', 'Staff', 'Shield', 'Prince', 'Master', 'Servant', 'Meal', 'Prince', 'Favor', 'Love', 'Word', 'Scribe', 'Apprentice', 'Acolyte', 'Dress', 'Goddess', 'God', 'Gold', 'Purse', 'Trap', 'King', 'Son', 'Sister', 'Mother', 'Daughter', 'Cry', 'Shout', 'Cupboard', 'Pantry', 'Queen', 'Wealth', 'Star', 'Void', 'Woman', 'Man', 'Whore', 'Butcher', 'Anvil', 'Tome', 'Sacrifice', 'Armor', 'Cup', 'Pot', 'Stove', 'Stool', 'Princess', 'Chain', 'Sword', 'Pork', 'Grain', 'Tooth', 'Lance', 'Axe', 'Scabbard', 'Knife', 'Dagger', 'Spear', 'Bow', 'Crossbow', 'Quarterstaff', 'Staff', 'Fire', 'Ice', 'Wind', 'Earth', 'Water', 'Stone', 'Ladle', 'Monastery', 'Chalice', 'Goblet', 'Dungeon', 'Lust', 'Lantern', 'Bone', 'Life', 'Stone', 'Mistress', 'Mind', 'Treasure', 'Barter', 'Armorer', 'Butler', 'Page', 'Tome', 'Feather', 'Shadow', 'Friend', 'Labyrinth', 'Mountain', 'Hope', 'Boot', 'Gauntlet'].seededrandom()
  const family = ['son', 'daughter', 'brother', 'sister', 'uncle', 'aunt', 'father', 'friend', 'family', 'employee'].seededrandom()
  const rider = ['Shop', 'Bazaar', 'Convenience Store', 'Trading Post', 'Warehouse', 'Antiquerie', 'Adventure Supplier', 'Supplier', 'Goods', 'Goods and Bads', 'Stock Shop', 'Wares'].seededrandom()
  const fam = {
    son: {
      relationships: {
        [GeneralStore.shopkeep.key]: GeneralStore.shopkeep.parentNoun
      },
      gender: 'man',
      race: GeneralStore.shopkeep.race,
      lastName: GeneralStore.shopkeep.lastName,
      ageStage: 'young adult',
      profession: ['shopkeep', "shopkeep's assistant", "shopkeep's assistant", "shopkeep's assistant"].seededrandom()
    },
    daughter: {
      relationships: {
        [GeneralStore.shopkeep.key]: GeneralStore.shopkeep.parentNoun
      },
      gender: 'woman',
      race: GeneralStore.shopkeep.race,
      lastName: GeneralStore.shopkeep.lastName,
      ageStage: 'young adult',
      profession: ['shopkeep', "shopkeep's assistant", "shopkeep's assistant", "shopkeep's assistant"].seededrandom()
    },
    brother: {
      relationships: {
        [GeneralStore.shopkeep.key]: GeneralStore.shopkeep.siblingNoun
      },
      gender: 'man',
      race: GeneralStore.shopkeep.race,
      lastName: GeneralStore.shopkeep.lastName,
      ageStage: GeneralStore.shopkeep.ageStage,
      profession: ['shopkeep', "shopkeep's assistant", "shopkeep's assistant", "shopkeep's assistant"].seededrandom()
    },
    sister: {
      relationships: {
        [GeneralStore.shopkeep.key]: GeneralStore.shopkeep.siblingNoun
      },
      gender: 'woman',
      race: GeneralStore.shopkeep.race,
      lastName: GeneralStore.shopkeep.lastName,
      ageStage: GeneralStore.shopkeep.ageStage,
      profession: ['shopkeep', "shopkeep's assistant", "shopkeep's assistant", "shopkeep's assistant"].seededrandom()
    },
    uncle: {
      relationships: {
        [GeneralStore.shopkeep.key]: GeneralStore.shopkeep.niblingNoun
      },
      gender: 'man',
      race: GeneralStore.shopkeep.race,
      lastName: GeneralStore.shopkeep.lastName,
      ageStage: 'settled adult',
      profession: ['shopkeep', "shopkeep's assistant", "shopkeep's assistant", "shopkeep's assistant"].seededrandom()
    },
    aunt: {
      relationships: {
        [GeneralStore.shopkeep.key]: GeneralStore.shopkeep.niblingNoun
      },
      gender: 'woman',
      race: GeneralStore.shopkeep.race,
      lastName: GeneralStore.shopkeep.lastName,
      ageStage: 'settled adult',
      profession: ['shopkeep', "shopkeep's assistant", "shopkeep's assistant", "shopkeep's assistant"].seededrandom()
    },
    father: {
      relationships: {
        [GeneralStore.shopkeep.key]: GeneralStore.shopkeep.childNoun
      },
      gender: 'man',
      race: GeneralStore.shopkeep.race,
      lastName: GeneralStore.shopkeep.lastName,
      ageStage: 'settled adult',
      profession: ['shopkeep', "shopkeep's assistant", "shopkeep's assistant", "shopkeep's assistant"].seededrandom()
    },
    friend: {
      relationships: {
        [GeneralStore.shopkeep.key]: 'friend'
      },
      ageStage: 'settled adult',
      profession: ['shopkeep', "shopkeep's assistant", "shopkeep's assistant", "shopkeep's assistant"].seededrandom()
    },
    family: {
      relationships: {
        [GeneralStore.shopkeep.key]: 'relative'
      },
      race: GeneralStore.shopkeep.race,
      lastName: GeneralStore.shopkeep.lastName,
      ageStage: 'settled adult',
      profession: ['shopkeep', "shopkeep's assistant", "shopkeep's assistant", "shopkeep's assistant"].seededrandom()
    },
    employee: {
      relationships: {
        [GeneralStore.shopkeep.key]: 'employer'
      },
      gender: 'man',
      profession: ['shopkeep', "shopkeep's assistant", "shopkeep's assistant", "shopkeep's assistant"].seededrandom()
    }
  }

  switch (roll) {
    case 1:
      GeneralStore.name = 'The ' + adjective + ' ' + noun
      break
    case 2:
      GeneralStore.name = GeneralStore.shopkeep.firstName + ' and ' + family.toUpperFirst()
      GeneralStore.assistant = setup.createNPC(town, fam[family])
      setup.createRelationship(town, GeneralStore.shopkeep, GeneralStore.assistant, family, GeneralStore.assistant.relationships[GeneralStore.shopkeep.key])
      break
    case 3:
      GeneralStore.name = 'The ' + noun + ' and ' + family.toUpperFirst()
      GeneralStore.assistant = setup.createNPC(town, fam[family])
      setup.createRelationship(town, GeneralStore.shopkeep, GeneralStore.assistant, family, GeneralStore.assistant.relationships[GeneralStore.shopkeep.key])
      break
    case 4:
      GeneralStore.name = 'The ' + adjective + ' ' + rider
      break
    case 5:
      GeneralStore.name = adjective + ' ' + noun
      break
    default:
      GeneralStore.name = 'The ' + adjective + " Adventurer's Store"
      break
  }
  return GeneralStore
}
