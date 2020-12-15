// uses setup.createNPC, setup.createRelationship
setup.createSmithyName = (town, smithy) => {
  const adjective = ['Hard', 'Sharp', 'Pointy', 'Well-worn', 'Rusted', 'Shiny', 'Cold', 'Glowing', 'Heated', 'Golden', 'Silvered', 'Bronzed', 'Polished', 'Engraved', 'Jeweled', 'Plated', 'Eternal', 'Long-Lasting', 'Famed'].random()
  const noun = ['Iron', 'Metal', 'Gold', 'Silver', 'Bronze', 'Copper', 'Platinum', 'Electrum', 'Ingot', 'Tongs', 'Pliers', 'Anvil', 'Hammer', 'Forge', 'Bellows', 'Bucket', 'Steam', 'Smoke', 'Chimney', 'Flame', 'Fire', 'Magma', 'Coal', 'Crucible'].random()
  const family = ['son', 'daughter', 'brother', 'sister', 'uncle', 'aunt', 'father', 'friend', 'family', 'employee'].random()
  const rider = ['Shop', 'Blacksmith', 'Fabricator', 'Smith', 'Smithy', 'Farrier', 'Metalsmith', 'Swordsmith'].random()

  const fam = {
    son: {
      relationships: {
        [smithy.associatedNPC.key]: smithy.associatedNPC.parentNoun
      },
      gender: 'man',
      race: smithy.associatedNPC.race,
      lastName: smithy.associatedNPC.lastName,
      ageStage: 'young adult',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].random()
    },
    daughter: {
      relationships: {
        [smithy.associatedNPC.key]: smithy.associatedNPC.parentNoun
      },
      gender: 'woman',
      race: smithy.associatedNPC.race,
      lastName: smithy.associatedNPC.lastName,
      ageStage: 'young adult',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].random()
    },
    brother: {
      relationships: {
        [smithy.associatedNPC.key]: smithy.associatedNPC.siblingNoun
      },
      gender: 'man',
      race: smithy.associatedNPC.race,
      lastName: smithy.associatedNPC.lastName,
      ageStage: smithy.associatedNPC.ageStage,
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].random()
    },
    sister: {
      relationships: {
        [smithy.associatedNPC.key]: smithy.associatedNPC.siblingNoun
      },
      gender: 'woman',
      race: smithy.associatedNPC.race,
      lastName: smithy.associatedNPC.lastName,
      ageStage: smithy.associatedNPC.ageStage,
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].random()
    },
    uncle: {
      relationships: {
        [smithy.associatedNPC.key]: smithy.associatedNPC.niblingNoun
      },
      gender: 'man',
      race: smithy.associatedNPC.race,
      lastName: smithy.associatedNPC.lastName,
      ageStage: 'settled adult',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].random()
    },
    aunt: {
      relationships: {
        [smithy.associatedNPC.key]: smithy.associatedNPC.niblingNoun
      },
      gender: 'woman',
      race: smithy.associatedNPC.race,
      lastName: smithy.associatedNPC.lastName,
      ageStage: 'settled adult',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].random()
    },
    father: {
      relationships: {
        [smithy.associatedNPC.key]: smithy.associatedNPC.childNoun
      },
      gender: 'man',
      race: smithy.associatedNPC.race,
      lastName: smithy.associatedNPC.lastName,
      ageStage: 'settled adult',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].random()
    },
    friend: {
      relationships: {
        [smithy.associatedNPC.key]: 'friend'
      },
      ageStage: 'settled adult',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].random()
    },
    family: {
      relationships: {
        [smithy.associatedNPC.key]: 'relative'
      },
      lastName: smithy.associatedNPC.lastName,
      race: smithy.associatedNPC.race,
      ageStage: 'settled adult',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].random()
    },
    employee: {
      relationships: {
        [smithy.associatedNPC.key]: 'employer'
      },
      gender: 'man',
      profession: ['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"].random()
    }
  }

  switch (random(1, 5)) {
    case 1:
      smithy.name = `The ${adjective} ${noun}`
      break
    case 2:
      smithy.name = `${smithy.associatedNPC.firstName} and ${family.toUpperFirst()}`
      smithy.assistant = setup.createNPC(town, fam[family])
      setup.createRelationship(town, smithy.associatedNPC, smithy.assistant, family,
        town.npcRelations[smithy.assistant.key].filter(r => r.targetNpcKey === smithy.associatedNPC.key)[0]?.relation)
      break
    case 3:
      smithy.name = `The ${noun} and ${family.toUpperFirst()}`
      smithy.assistant = setup.createNPC(town, fam[family])
      setup.createRelationship(town, smithy.associatedNPC, smithy.assistant, family,
        town.npcRelations[smithy.assistant.key].filter(r => r.targetNpcKey === smithy.associatedNPC.key)[0]?.relation)

      break
    case 4:
      smithy.name = `The ${adjective} ${rider}`
      break
    case 5:
      smithy.name = `${adjective} ${noun}`
      break
    default:
      smithy.name = `The ${adjective} Smithy`
  }
  smithy.name = lib.toTitleCase(smithy.name)
}
