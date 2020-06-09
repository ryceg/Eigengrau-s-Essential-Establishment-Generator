setup.createGeneralStoreName = (town, generalStore) => {
  const roll = random(1, 7)
  const adjective = ['Dependable', 'Reliable', 'Expendable', 'Indispensible', 'Incomparable', 'Incredible', 'Excellent', 'Important', 'Cheap', 'Affordable', 'Affable', 'Discount', 'Low-Cost', 'Fancy'].random()
  const noun = ['Mount', 'Saddle', 'Guild', 'Fangs', 'Man', 'Pardon', 'Pleasure', 'Belt', 'Staff', 'Shield', 'Prince', 'Master', 'Servant', 'Meal', 'Prince', 'Favor', 'Love', 'Word', 'Scribe', 'Apprentice', 'Acolyte', 'Dress', 'Goddess', 'God', 'Gold', 'Purse', 'Trap', 'King', 'Son', 'Sister', 'Mother', 'Daughter', 'Cry', 'Shout', 'Cupboard', 'Pantry', 'Queen', 'Wealth', 'Star', 'Void', 'Woman', 'Man', 'Whore', 'Butcher', 'Anvil', 'Tome', 'Sacrifice', 'Armor', 'Cup', 'Pot', 'Stove', 'Stool', 'Princess', 'Chain', 'Sword', 'Pork', 'Grain', 'Tooth', 'Lance', 'Axe', 'Scabbard', 'Knife', 'Dagger', 'Spear', 'Bow', 'Crossbow', 'Quarterstaff', 'Staff', 'Fire', 'Ice', 'Wind', 'Earth', 'Water', 'Stone', 'Ladle', 'Monastery', 'Chalice', 'Goblet', 'Dungeon', 'Lust', 'Lantern', 'Bone', 'Life', 'Stone', 'Mistress', 'Mind', 'Treasure', 'Barter', 'Armorer', 'Butler', 'Page', 'Tome', 'Feather', 'Shadow', 'Friend', 'Labyrinth', 'Mountain', 'Hope', 'Boot', 'Gauntlet'].random()
  const family = ['son', 'daughter', 'brother', 'sister', 'uncle', 'aunt', 'father', 'friend', 'family', 'employee'].random()
  const rider = ['Shop', 'Bazaar', 'Convenience Store', 'Trading Post', 'Warehouse', 'Antiquerie', 'Adventure Supplier', 'Supplier', 'Goods', 'Goods and Bads', 'Stock Shop', 'Wares'].random()
  const fam = {
    son: {
      relationships: {
        [generalStore.associatedNPC.key]: generalStore.associatedNPC.parentNoun
      },
      gender: 'man',
      race: generalStore.associatedNPC.race,
      lastName: generalStore.associatedNPC.lastName,
      ageStage: 'young adult',
      profession: ['shopkeep', "shopkeep's assistant", "shopkeep's assistant", "shopkeep's assistant"].random()
    },
    daughter: {
      relationships: {
        [generalStore.associatedNPC.key]: generalStore.associatedNPC.parentNoun
      },
      gender: 'woman',
      race: generalStore.associatedNPC.race,
      lastName: generalStore.associatedNPC.lastName,
      ageStage: 'young adult',
      profession: ['shopkeep', "shopkeep's assistant", "shopkeep's assistant", "shopkeep's assistant"].random()
    },
    brother: {
      relationships: {
        [generalStore.associatedNPC.key]: generalStore.associatedNPC.siblingNoun
      },
      gender: 'man',
      race: generalStore.associatedNPC.race,
      lastName: generalStore.associatedNPC.lastName,
      ageStage: generalStore.associatedNPC.ageStage,
      profession: ['shopkeep', "shopkeep's assistant", "shopkeep's assistant", "shopkeep's assistant"].random()
    },
    sister: {
      relationships: {
        [generalStore.associatedNPC.key]: generalStore.associatedNPC.siblingNoun
      },
      gender: 'woman',
      race: generalStore.associatedNPC.race,
      lastName: generalStore.associatedNPC.lastName,
      ageStage: generalStore.associatedNPC.ageStage,
      profession: ['shopkeep', "shopkeep's assistant", "shopkeep's assistant", "shopkeep's assistant"].random()
    },
    uncle: {
      relationships: {
        [generalStore.associatedNPC.key]: generalStore.associatedNPC.niblingNoun
      },
      gender: 'man',
      race: generalStore.associatedNPC.race,
      lastName: generalStore.associatedNPC.lastName,
      ageStage: 'settled adult',
      profession: ['shopkeep', "shopkeep's assistant", "shopkeep's assistant", "shopkeep's assistant"].random()
    },
    aunt: {
      relationships: {
        [generalStore.associatedNPC.key]: generalStore.associatedNPC.niblingNoun
      },
      gender: 'woman',
      race: generalStore.associatedNPC.race,
      lastName: generalStore.associatedNPC.lastName,
      ageStage: 'settled adult',
      profession: ['shopkeep', "shopkeep's assistant", "shopkeep's assistant", "shopkeep's assistant"].random()
    },
    father: {
      relationships: {
        [generalStore.associatedNPC.key]: generalStore.associatedNPC.childNoun
      },
      gender: 'man',
      race: generalStore.associatedNPC.race,
      lastName: generalStore.associatedNPC.lastName,
      ageStage: 'settled adult',
      profession: ['shopkeep', "shopkeep's assistant", "shopkeep's assistant", "shopkeep's assistant"].random()
    },
    friend: {
      relationships: {
        [generalStore.associatedNPC.key]: 'friend'
      },
      ageStage: 'settled adult',
      profession: ['shopkeep', "shopkeep's assistant", "shopkeep's assistant", "shopkeep's assistant"].random()
    },
    family: {
      relationships: {
        [generalStore.associatedNPC.key]: 'relative'
      },
      race: generalStore.associatedNPC.race,
      lastName: generalStore.associatedNPC.lastName,
      ageStage: 'settled adult',
      profession: ['shopkeep', "shopkeep's assistant", "shopkeep's assistant", "shopkeep's assistant"].random()
    },
    employee: {
      relationships: {
        [generalStore.associatedNPC.key]: 'employer'
      },
      gender: 'man',
      profession: ['shopkeep', "shopkeep's assistant", "shopkeep's assistant", "shopkeep's assistant"].random()
    }
  }

  switch (roll) {
    case 1:
      generalStore.name = `The ${adjective} ${noun}`
      break
    case 2:
      generalStore.name = `${generalStore.associatedNPC.firstName} and ${family.toUpperFirst()}`
      generalStore.assistant = setup.createNPC(town, fam[family])
      setup.createRelationship(town, generalStore.associatedNPC, generalStore.assistant, family, generalStore.assistant.relationships[generalStore.associatedNPC.key])
      break
    case 3:
      generalStore.name = `The ${noun} and ${family.toUpperFirst()}`
      generalStore.assistant = setup.createNPC(town, fam[family])
      setup.createRelationship(town, generalStore.associatedNPC, generalStore.assistant, family, generalStore.assistant.relationships[generalStore.associatedNPC.key])
      break
    case 4:
      generalStore.name = `The ${adjective} ${rider}`
      break
    case 5:
      generalStore.name = `The ${adjective} ${noun}`
      break
    case 6:
      generalStore.name = generalStore.associatedNPC.firstName + ["'s General Goods", "'s Bric-a-Brac", "'s Trading Goods", "'s Shopping Place", `'s ${rider}`].random()
      break
    case 7:
      generalStore.name = `${generalStore.associatedNPC.firstName}'s ${adjective} ${rider}`
      break
    default:
      generalStore.name = `The ${adjective} Adventurer's Store`
      break
  }
  return generalStore
}
