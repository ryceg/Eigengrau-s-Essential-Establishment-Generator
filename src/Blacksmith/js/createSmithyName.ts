import { AgeName, GenderName, ProfessionName, RaceName, Smithy, Town } from '@lib'

const familyTypes = ['son', 'daughter', 'brother', 'sister', 'uncle', 'aunt', 'father', 'friend', 'family', 'employee'] as const

type Assistant = typeof familyTypes[number]

// uses setup.createNPC, setup.createRelationship
export const createSmithyName = (town: Town, smithy: Smithy) => {
  const adjective = lib.random(lib.smithyData.name.adjective)
  const noun = lib.random(lib.smithyData.name.noun)
  const family = lib.random(familyTypes)
  const rider = lib.random(lib.smithyData.name.rider)

  const fam: Record<Assistant, {
    relationships: Record<string, string>
    gender?: GenderName
    race?: RaceName
    lastName?: string
    ageStage?: AgeName
    profession: ProfessionName
  }> = {
    son: {
      relationships: {
        [smithy.associatedNPC.key]: smithy.associatedNPC.parentNoun
      },
      gender: 'man',
      race: smithy.associatedNPC.race,
      lastName: smithy.associatedNPC.lastName,
      ageStage: 'young adult',
      profession: lib.random(['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"])
    },
    daughter: {
      relationships: {
        [smithy.associatedNPC.key]: smithy.associatedNPC.parentNoun
      },
      gender: 'woman',
      race: smithy.associatedNPC.race,
      lastName: smithy.associatedNPC.lastName,
      ageStage: 'young adult',
      profession: lib.random(['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"])
    },
    brother: {
      relationships: {
        [smithy.associatedNPC.key]: smithy.associatedNPC.siblingNoun
      },
      gender: 'man',
      race: smithy.associatedNPC.race,
      lastName: smithy.associatedNPC.lastName,
      ageStage: smithy.associatedNPC.ageStage,
      profession: lib.random(['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"])
    },
    sister: {
      relationships: {
        [smithy.associatedNPC.key]: smithy.associatedNPC.siblingNoun
      },
      gender: 'woman',
      race: smithy.associatedNPC.race,
      lastName: smithy.associatedNPC.lastName,
      ageStage: smithy.associatedNPC.ageStage,
      profession: lib.random(['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"])
    },
    uncle: {
      relationships: {
        [smithy.associatedNPC.key]: smithy.associatedNPC.niblingNoun
      },
      gender: 'man',
      race: smithy.associatedNPC.race,
      lastName: smithy.associatedNPC.lastName,
      ageStage: 'settled adult',
      profession: lib.random(['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"])
    },
    aunt: {
      relationships: {
        [smithy.associatedNPC.key]: smithy.associatedNPC.niblingNoun
      },
      gender: 'woman',
      race: smithy.associatedNPC.race,
      lastName: smithy.associatedNPC.lastName,
      ageStage: 'settled adult',
      profession: lib.random(['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"])
    },
    father: {
      relationships: {
        [smithy.associatedNPC.key]: smithy.associatedNPC.childNoun
      },
      gender: 'man',
      race: smithy.associatedNPC.race,
      lastName: smithy.associatedNPC.lastName,
      ageStage: 'settled adult',
      profession: lib.random(['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"])
    },
    friend: {
      relationships: {
        [smithy.associatedNPC.key]: 'friend'
      },
      ageStage: 'settled adult',
      profession: lib.random(['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"])
    },
    family: {
      relationships: {
        [smithy.associatedNPC.key]: 'relative'
      },
      lastName: smithy.associatedNPC.lastName,
      race: smithy.associatedNPC.race,
      ageStage: 'settled adult',
      profession: lib.random(['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"])
    },
    employee: {
      relationships: {
        [smithy.associatedNPC.key]: 'employer'
      },
      gender: 'man',
      profession: lib.random(['blacksmith', "blacksmith's assistant", "blacksmith's assistant", "blacksmith's assistant"])
    }
  }

  switch (random(1, 5)) {
    case 1:
      smithy.name = `The ${adjective} ${noun}`
      break
    case 2:
      smithy.name = `${smithy.associatedNPC.firstName} and ${family.toUpperFirst()}`
      smithy.assistant = setup.createNPC(town, fam[family])
      setup.createRelationship(town, smithy.associatedNPC, smithy.assistant, {
        relationship: family,
        reciprocalRelationship: town.npcRelations[smithy.assistant.key].filter(r => r.targetNpcKey === smithy.associatedNPC.key)[0]?.relation
      })
      break
    case 3:
      smithy.name = `The ${noun} and ${family.toUpperFirst()}`
      smithy.assistant = setup.createNPC(town, fam[family])
      setup.createRelationship(town, smithy.associatedNPC, smithy.assistant, {
        relationship: family,
        reciprocalRelationship: town.npcRelations[smithy.assistant.key].filter(r => r.targetNpcKey === smithy.associatedNPC.key)[0]?.relation
      })

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
