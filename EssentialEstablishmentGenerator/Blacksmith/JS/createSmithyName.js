
setup.createSmithyName = function (town, smithy) {
  const smithyNameRoll = random(1, 5)
  const adjective = ['Hard', 'Sharp', 'Pointy', 'Well-worn', 'Rusted', 'Shiny', 'Cold', 'Glowing', 'Heated', 'Golden', 'Silvered', 'Bronzed', 'Polished', 'Engraved', 'Jeweled', 'Plated', 'Eternal', 'Long-Lasting', 'Famed'].seededrandom()
  const noun = ['Iron', 'Metal', 'Gold', 'Silver', 'Bronze', 'Copper', 'Platinum', 'Electrum', 'Ingot', 'Tongs', 'Pliers', 'Anvil', 'Hammer', 'Forge', 'Bellows', 'Bucket', 'Steam', 'Smoke', 'Chimney', 'Flame', 'Fire', 'Magma', 'Coal', 'Crucible'].seededrandom()
  const family = ['son', 'daughter', 'brother', 'sister', 'uncle', 'aunt', 'father', 'friend', 'family', 'employee'].seededrandom()
  const rider = ['Shop', 'Blacksmith', 'Fabricator', 'Smith', 'Smithy', 'Farrier', 'Metalsmith', 'Swordsmith'].seededrandom()

  const fam = {
    son: {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.parentNoun
      },
      gender: 'man',
      race: smithy.blacksmith.race,
      lastName: smithy.blacksmith.lastName,
      ageStage: 'young adult',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].seededrandom()
    },
    daughter: {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.parentNoun
      },
      gender: 'woman',
      race: smithy.blacksmith.race,
      lastName: smithy.blacksmith.lastName,
      ageStage: 'young adult',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].seededrandom()
    },
    brother: {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.siblingNoun
      },
      gender: 'man',
      race: smithy.blacksmith.race,
      lastName: smithy.blacksmith.lastName,
      ageStage: smithy.blacksmith.ageStage,
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].seededrandom()
    },
    sister: {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.siblingNoun
      },
      gender: 'woman',
      race: smithy.blacksmith.race,
      lastName: smithy.blacksmith.lastName,
      ageStage: smithy.blacksmith.ageStage,
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].seededrandom()
    },
    uncle: {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.niblingNoun
      },
      gender: 'man',
      race: smithy.blacksmith.race,
      lastName: smithy.blacksmith.lastName,
      ageStage: 'settled adult',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].seededrandom()
    },
    aunt: {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.niblingNoun
      },
      gender: 'woman',
      race: smithy.blacksmith.race,
      lastName: smithy.blacksmith.lastName,
      ageStage: 'settled adult',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].seededrandom()
    },
    father: {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.childNoun
      },
      gender: 'man',
      race: smithy.blacksmith.race,
      lastName: smithy.blacksmith.lastName,
      ageStage: 'settled adult',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].seededrandom()
    },
    friend: {
      relationships: {
        [smithy.blacksmith.key]: 'friend'
      },
      ageStage: 'settled adult',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].seededrandom()
    },
    family: {
      relationships: {
        [smithy.blacksmith.key]: 'relative'
      },
      lastName: smithy.blacksmith.lastName,
      race: smithy.blacksmith.race,
      ageStage: 'settled adult',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].seededrandom()
    },
    employee: {
      relationships: {
        [smithy.blacksmith.key]: 'employer'
      },
      gender: 'man',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].seededrandom()
    }
  }

  switch (smithyNameRoll) {
    case 1:
      smithy.name = 'The ' + adjective + ' ' + noun
      break
    case 2:
      smithy.name = smithy.blacksmith.firstName + ' and ' + family.toUpperFirst()
      smithy.assistant = setup.createNPC(town, fam[family])
      setup.createRelationship(town, smithy.blacksmith, smithy.assistant, family, smithy.assistant.relationships[smithy.blacksmith.key])
      break
    case 3:
      smithy.name = 'The ' + noun + ' and ' + family.toUpperFirst()
      smithy.assistant = setup.createNPC(town, fam[family])
      setup.createRelationship(town, smithy.blacksmith, smithy.assistant, family, smithy.assistant.relationships[smithy.blacksmith.key])
      break
    case 4:
      smithy.name = 'The ' + adjective + ' ' + rider
      break
    case 5:
      smithy.name = adjective + ' ' + noun
      break
    default:
      smithy.name = 'The ' + adjective + ' Smithy'
  }
  return smithy
}
