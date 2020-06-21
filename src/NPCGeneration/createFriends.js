setup.createFriends = (town, npc) => {
  console.groupCollapsed(`${npc.name} is making some friends...`)
  let friendsNumber = Math.round((npc.roll.gregariousness / 3) + 1)
  const professionData = lib.professions[npc.profession]

  if (professionData.type === 'business') friendsNumber += 2
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
    },
    'customer': {
      relationship: 'customer',
      reciprocal: npc.profession,
      probability: 20,
      exclusions (town, npc) { if (professionData.type !== 'business') return false },
      base: {
        canBeCustom: true,
        isShallow: true
      }
    },
    'servant': {
      relationship: 'employee',
      reciprocal: 'employer',
      exclusions (town, npc) { if (!['wealthy', 'aristocratic'].includes(npc.finances.lifestyleStandard(town, npc)[1]) && !(npc.finances.profit(town, npc) > -5 || npc.finances.profit(town, npc) < -100)) { return false } },
      base: {
        profession: 'servant'
      }
    }
  }

  if (professionData.type === 'profession' && professionData.sector === 'arts') {
    const patron = {
      relationship: 'patron',
      reciprocal: npc.profession,
      probability: 20,
      base: {
        canBeCustom: true,
        socialClass: 'nobility',
        isShallow: true
      }
    }
    Object.assign(friendsTypes, patron)
  }

  if (professionData.relationships) {
    console.log('Merging relationship sources! Before:')
    console.log(friendsTypes)
    const moreRelationships = professionData.relationships(town, npc)
    Object.assign(friendsTypes, moreRelationships)
    console.log('After:')
    console.log(friendsTypes)
  }

  const createNewFriend = (town, npc) => {
    console.log('Creating a new friend!')
    const friendObj = lib.weightedRandomFetcher(town, friendsTypes, npc, null, 'object')
    const friend = setup.createNPC(town, friendObj.base)
    setup.createRelationship(town, npc, friend, friendObj.relationship, friendObj.reciprocal || friendObj.relationship)
  }

  for (let step = 0; step < friendsNumber; step++) {
    let friend
    if (random(100) < 50) {
      console.log('Finding an already existing NPC for a friend!')
      friend = Object.values(State.variables.npcs).find(({ socialClass, relationships, key }) => {
        return socialClass === npc.socialClass && !relationships[npc.key] && key !== npc.key
      })
      if (friend === undefined) {
        console.log(`Nobody was in the same caste as ${npc.name}`)
        createNewFriend(town, npc)
      } else {
        console.log('Found this person as a friend:')
        console.log(friend)
        setup.createRelationship(town, npc, friend, 'friend', 'friend')
      }
    } else {
      createNewFriend(town, npc)
    }
  }
  console.groupEnd()
}
