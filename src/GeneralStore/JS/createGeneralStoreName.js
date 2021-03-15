// uses setup.createNPC
setup.createGeneralStoreName = (town, generalStore) => {
  const adjective = ['Dependable', 'Reliable', 'Expendable', 'Indispensible', 'Incomparable', 'Incredible', 'Excellent', 'Important', 'Cheap', 'Affordable', 'Affable', 'Discount', 'Low-Cost', 'Fancy'].random()
  const noun = ['Mount', 'Saddle', 'Guild', 'Fangs', 'Man', 'Pardon', 'Pleasure', 'Belt', 'Staff', 'Shield', 'Prince', 'Master', 'Servant', 'Meal', 'Prince', 'Favor', 'Love', 'Word', 'Scribe', 'Apprentice', 'Acolyte', 'Dress', 'Goddess', 'God', 'Gold', 'Purse', 'Trap', 'King', 'Son', 'Sister', 'Mother', 'Daughter', 'Cry', 'Shout', 'Cupboard', 'Pantry', 'Queen', 'Wealth', 'Star', 'Void', 'Woman', 'Man', 'Whore', 'Butcher', 'Anvil', 'Tome', 'Sacrifice', 'Armor', 'Cup', 'Pot', 'Stove', 'Stool', 'Princess', 'Chain', 'Sword', 'Pork', 'Grain', 'Tooth', 'Lance', 'Axe', 'Scabbard', 'Knife', 'Dagger', 'Spear', 'Bow', 'Crossbow', 'Quarterstaff', 'Staff', 'Fire', 'Ice', 'Wind', 'Earth', 'Water', 'Stone', 'Ladle', 'Monastery', 'Chalice', 'Goblet', 'Dungeon', 'Lust', 'Lantern', 'Bone', 'Life', 'Stone', 'Mistress', 'Mind', 'Treasure', 'Barter', 'Armorer', 'Butler', 'Page', 'Tome', 'Feather', 'Shadow', 'Friend', 'Labyrinth', 'Mountain', 'Hope', 'Boot', 'Gauntlet'].random()
  const family = ['son', 'daughter', 'brother', 'sister', 'uncle', 'aunt', 'father', 'friend', 'family', 'employee'].random()
  const rider = ['Shop', 'Bazaar', 'Convenience Store', 'Trading Post', 'Warehouse', 'Antiquerie', 'Adventure Supplier', 'Supplier', 'Goods', 'Goods and Bads', 'Stock Shop', 'Wares'].random()
  const professions = ['shopkeep', "shopkeep's assistant", "shopkeep's assistant", "shopkeep's assistant"]

  const { associatedNPC } = generalStore

  const fam = {
    son: {
      relationships: {
        [associatedNPC.key]: associatedNPC.parentNoun
      },
      gender: 'man',
      race: associatedNPC.race,
      lastName: associatedNPC.lastName,
      ageStage: 'young adult',
      profession: professions.random()
    },
    daughter: {
      relationships: {
        [associatedNPC.key]: associatedNPC.parentNoun
      },
      gender: 'woman',
      race: associatedNPC.race,
      lastName: associatedNPC.lastName,
      ageStage: 'young adult',
      profession: professions.random()
    },
    brother: {
      relationships: {
        [associatedNPC.key]: associatedNPC.siblingNoun
      },
      gender: 'man',
      race: associatedNPC.race,
      lastName: associatedNPC.lastName,
      ageStage: associatedNPC.ageStage,
      profession: professions.random()
    },
    sister: {
      relationships: {
        [associatedNPC.key]: associatedNPC.siblingNoun
      },
      gender: 'woman',
      race: associatedNPC.race,
      lastName: associatedNPC.lastName,
      ageStage: associatedNPC.ageStage,
      profession: professions.random()
    },
    uncle: {
      relationships: {
        [associatedNPC.key]: associatedNPC.niblingNoun
      },
      gender: 'man',
      race: associatedNPC.race,
      lastName: associatedNPC.lastName,
      ageStage: 'settled adult',
      profession: professions.random()
    },
    aunt: {
      relationships: {
        [associatedNPC.key]: associatedNPC.niblingNoun
      },
      gender: 'woman',
      race: associatedNPC.race,
      lastName: associatedNPC.lastName,
      ageStage: 'settled adult',
      profession: professions.random()
    },
    father: {
      relationships: {
        [associatedNPC.key]: associatedNPC.childNoun
      },
      gender: 'man',
      race: associatedNPC.race,
      lastName: associatedNPC.lastName,
      ageStage: 'settled adult',
      profession: professions.random()
    },
    friend: {
      relationships: {
        [associatedNPC.key]: 'friend'
      },
      ageStage: 'settled adult',
      profession: professions.random()
    },
    family: {
      relationships: {
        [associatedNPC.key]: 'relative'
      },
      race: associatedNPC.race,
      lastName: associatedNPC.lastName,
      ageStage: 'settled adult',
      profession: professions.random()
    },
    employee: {
      relationships: {
        [associatedNPC.key]: 'employer'
      },
      gender: 'man',
      profession: professions.random()
    }
  }
  let roll
  if (generalStore) {
    roll = random(1, 7)
  } else {
    roll = random(1, 5)
  }

  switch (roll) {
    case 1:
      generalStore.name = lib.toTitleCase(`The ${adjective} ${noun}`)
      break
    case 2:
      generalStore.name = lib.toTitleCase(`${associatedNPC.firstName}'s ${adjective} ${rider}`)
      break
    case 3:
      generalStore.name = lib.toTitleCase(associatedNPC.firstName + ["'s General Goods", "'s Bric-a-Brac", "'s Trading Goods", "'s Shopping Place", `'s ${rider}`].random())
      break
    case 4:
      generalStore.name = lib.toTitleCase(`The ${adjective} ${rider}`)
      break
    case 5:
      generalStore.name = lib.toTitleCase(`The ${adjective} ${noun}`)
      break
    case 6:
      generalStore.name = lib.toTitleCase(`The ${noun} and ${family.toUpperFirst()}`)
      generalStore.assistant = setup.createNPC(town, fam[family])
      setup.createRelationship(town, associatedNPC, generalStore.assistant, {
        relationship: family,
        reciprocalRelationship: town.npcRelations[generalStore.assistant.key].filter(r => r.targetNpcKey === associatedNPC.key)[0]?.relation
      })
      break
    case 7:
      generalStore.name = lib.toTitleCase(`${associatedNPC.firstName} and ${family.toUpperFirst()}`)
      generalStore.assistant = setup.createNPC(town, fam[family])
      setup.createRelationship(town, associatedNPC, generalStore.assistant, {
        relationship: family,
        reciprocalRelationship: town.npcRelations[generalStore.assistant.key].filter(r => r.targetNpcKey === associatedNPC.key)[0]?.relation
      })
      break
    default:
      generalStore.name = lib.toTitleCase(`The ${adjective} Adventurer's Store`)
  }
}
