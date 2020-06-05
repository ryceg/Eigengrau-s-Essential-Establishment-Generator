setup.createFriends = (town, npc) => {
  console.log(`${npc.name} is making some friends...`)
  const friendsNumber = Math.round((npc.roll.gregariousness / 3) + 1)
  const friendsTypes = {
    'drinking buddy': {
      relationship: 'drinking buddy',
      base: {
        gender: npc.gender,
        ageStage: npc.ageStage
      }
    },
    'old flame': {
      relationship: 'old flame',
      base: {
        gender: npc.partnerGenderProbability(npc),
        ageStage: npc.ageStage
      }
    },
    'ex': {
      relationship: 'ex',
      base: {
        gender: npc.partnerGenderProbability(npc),
        ageStage: npc.ageStage
      }
    },
    'secret crush': {
      relationship: 'secret crush',
      reciprocal: ['friend', 'friend', 'friend', 'just a friend', 'creepy stalker', 'secret crush'].random(),
      base: {
        gender: npc.partnerGenderProbability(npc),
        ageStage: npc.ageStage,
        socialClass: npc.socialClass
      }
    },
    'mentor': {
      relationship: 'mentor',
      reciprocal: 'student',
      base: {
        profession: npc.profession,
        ageStage: 'settled adult'
      }
    },
    'neighbour': {
      relationship: 'neighbour',
      base: {
        socialClass: npc.socialClass
      }
    },
    'dealer': {
      relationship: 'dealer',
      reciprocal: 'drug buyer',
      probability: 1,
      exclusions (town, npc) { if (town.roll.sin < 10) return false },
      base: {
        socialClass: npc.socialClass,
        profession: 'drug dealer'
      }
    },
    'friendly acquaintance': {
      relationship: 'acquaintance',
      base: {
        socialClass: npc.socialClass
      }
    },
    'pastor': {
      relationship: 'pastor',
      reciprocal: 'goes to church',
      probability: 2,
      exclusions (town, npc) { if (town.roll.religiosity < 20 || npc.roll.religiosity < 20 || npc.profession === 'pastor') return false },
      base: {
        socialClass: npc.socialClass,
        profession: 'pastor'
      }
    }

  }

  for (let step = 0; step < friendsNumber; step++) {
    let friend
    if (random(100) < 75) {
      console.log('Finding an already existing NPC for a friend!')
      friend = Object.values(State.variables.npcs).find(({ socialClass, relationships }) => {
        return socialClass === npc.socialClass && !relationships[npc.key]
      })
      if (friend === undefined) {
        console.log(`Nobody was in the same caste as ${npc.name}`)
        const friendObj = setup.weightedRandomFetcher(town, friendsTypes, npc, null, 'object')
        friend = setup.createNPC(town, friendObj.base)
        setup.createRelationship(town, npc, friend, friendObj.relationship, friendObj.reciprocal || friendObj.relationship)
      }
    } else {
      const friendObj = setup.weightedRandomFetcher(town, friendsTypes, npc, null, 'object')
      friend = setup.createNPC(town, friendObj.base)
      setup.createRelationship(town, npc, friend, friendObj.relationship, friendObj.reciprocal || friendObj.relationship)
    }
  }
}
