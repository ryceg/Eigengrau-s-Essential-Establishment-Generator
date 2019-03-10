/* global setup */
setup.createSmithyName = function (town, smithy) {
  var smithyNameRoll = random(1, 5)
  var adjective = ['Hard', 'Sharp', 'Pointy', 'Well-worn', 'Rusted', 'Shiny', 'Cold', 'Glowing', 'Heated', 'Golden', 'Silvered', 'Bronzed', 'Polished', 'Engraved', 'Jeweled', 'Plated', 'Eternal', 'Long-Lasting', 'Famed'].random()
  var noun = ['Iron', 'Metal', 'Gold', 'Silver', 'Bronze', 'Copper', 'Platinum', 'Electrum', 'Ingot', 'Tongs', 'Pliers', 'Anvil', 'Hammer', 'Forge', 'Bellows', 'Bucket', 'Steam', 'Smoke', 'Chimney', 'Flame', 'Fire', 'Magma', 'Coal', 'Crucible'].random()
  var family = ['son', 'daughter', 'brother', 'sister', 'uncle', 'aunt', 'father', 'friend', 'family', 'fool'].random()
  var rider = ['Shop', 'Blacksmith', 'Fabricator', 'Smith', 'Smithy', 'Farrier', 'Metalsmith', 'Swordsmith'].random()

  var fam = {
    'son': {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.parentNoun
      },
      gender: 'man',
      lastName: smithy.blacksmith.lastName,
      ageStage: 'young adult',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].random()
    },
    'daughter': {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.parentNoun
      },
      gender: 'woman',
      lastName: smithy.blacksmith.lastName,
      ageStage: 'young adult',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].random()
    },
    'brother': {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.siblingNoun
      },
      gender: 'man',
      lastName: smithy.blacksmith.lastName,
      ageStage: smithy.blacksmith.ageStage,
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].random()
    },
    'sister': {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.siblingNoun
      },
      gender: 'woman',
      lastName: smithy.blacksmith.lastName,
      ageStage: smithy.blacksmith.ageStage,
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].random()
    },
    'uncle': {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.niblingNoun
      },
      gender: 'man',
      lastName: smithy.blacksmith.lastName,
      ageStage: 'settled adult',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].random()
    },
    'aunt': {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.niblingNoun
      },
      gender: 'woman',
      lastName: smithy.blacksmith.lastName,
      ageStage: 'settled adult',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].random()
    },
    'father': {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.childNoun
      },
      gender: 'man',
      lastName: smithy.blacksmith.lastName,
      ageStage: 'settled adult',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].random()
    },
    'friend': {
      relationships: {
        [smithy.blacksmith.key]: 'friend'
      },
      ageStage: 'settled adult',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].random()
    },
    'family': {
      relationships: {
        [smithy.blacksmith.key]: 'relative'
      },
      lastName: smithy.blacksmith.lastName,
      ageStage: 'settled adult',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].random()
    },
    'fool': {
      relationships: {
        [smithy.blacksmith.key]: 'employer'
      },
      gender: 'man',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].random()
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
