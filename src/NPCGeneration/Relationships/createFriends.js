// uses setup.createRelationship, setup.createNPC
// has a .d.ts
setup.createFriends = (town, npc) => {
  console.groupCollapsed(`${npc.name} is making some friends...`)
  let friendsNumber = Math.round((npc.roll.gregariousness / 3) + 1)
  const professionData = lib.professions[npc.profession]

  if (professionData.type === 'business') friendsNumber += 2
  /**
 * @type {Record<string, import("./createFriends").FriendsType>}
 */
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
      reciprocalRelationship: ['friend', 'friend', 'friend', 'just a friend', 'creepy stalker', 'secret crush'].random(),
      base: {
        gender: npc.partnerGenderProbability(npc),
        ageStage: npc.ageStage,
        socialClass: npc.socialClass || 'commoner'
      }
    },
    'mentor': {
      relationship: 'mentor',
      reciprocalRelationship: 'student',
      base: {
        profession: npc.profession,
        ageStage: 'settled adult'
      }
    },
    'neighbour': {
      relationship: 'neighbour',
      base: {
        socialClass: npc.socialClass || 'commoner'
      }
    },
    'dealer': {
      relationship: 'dealer',
      reciprocalRelationship: 'drug buyer',
      probability: 1,
      exclusions (town, npc) { if (town.roll.sin < 10) return false },
      base: {
        socialClass: npc.socialClass || 'commoner',
        profession: 'drug dealer'
      }
    },
    'friendly acquaintance': {
      relationship: 'acquaintance',
      base: {
        socialClass: npc.socialClass || 'commoner'
      }
    },
    'pastor': {
      relationship: 'pastor',
      reciprocalRelationship: 'goes to church',
      probability: 2,
      exclusions (town, npc) { if (town.roll.religiosity < 20 || npc.roll.religiosity < 20 || npc.profession === 'pastor') return false },
      base: {
        socialClass: npc.socialClass || 'commoner',
        profession: 'pastor'
      }
    },
    'customer': {
      relationship: 'customer',
      reciprocalRelationship: npc.profession,
      probability: 20,
      exclusions (town, npc) { if (professionData.type !== 'business') return false },
      base: {
        canBeCustom: true,
        isShallow: true
      }
    },
    'servant': {
      relationship: 'employee',
      reciprocalRelationship: 'employer',
      exclusions (town, npc) { if (!['wealthy', 'aristocratic'].includes(lib.npcLifestyleStandard(town, npc).lifestyleStandard) && !(lib.npcProfit(town, npc) > -5 || lib.npcProfit(town, npc) < -100)) { return false } },
      base: {
        profession: 'servant'
      }
    }
  }

  if (professionData.type === 'profession' && professionData.sector === 'arts') {
    const patron = {
      relationship: 'patron',
      reciprocalRelationship: npc.profession,
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

  /**
   *
   * @param {Town} town
   * @param {import("../../../lib/npc-generation/_common").NPC} npc
   * @param {Record<string, import("./createFriends").FriendsType>} friendsTypes
   */
  const createNewFriend = (town, npc, friendsTypes) => {
    console.log('Creating a new friend!')
    /**
    * @type {import("./createFriends").FriendsType}
    */
    const friendObj = lib.weightedRandomFetcher(town, friendsTypes, npc, null, 'object')
    const friend = setup.createNPC(town, friendObj.base)
    setup.createRelationship(town, npc, friend, friendObj.relationship, friendObj.reciprocalRelationship || friendObj.relationship)
  }

  for (let step = 0; step < friendsNumber; step++) {
    if (random(100) >= town.reuseNpcProbability) {
      town.reuseNpcProbability += lib.fm(town.reuseNpcProbability, 1)
      town.reuseNpcProbability = Math.clamp(town.reuseNpcProbability, 1, 90)
      createNewFriend(town, npc, friendsTypes)
      continue
    }

    console.log('Finding an already existing NPC for a friend!')
    let friend = sameSocialClass(town, State.variables.npcs, npc)
    if (typeof friend === 'undefined') {
      console.log(`Nobody was in the same caste as ${npc.name}`)
      friend = sameProfessionSector(town, State.variables.npcs, npc)
    }
    if (typeof friend === 'undefined') {
      console.log(`Nobody was in the same profession sector as ${npc.name}`)
      createNewFriend(town, npc, friendsTypes)
      continue
    }
  }

  console.groupEnd()
}

/**
 * @param {import("../../../lib/town/_common").Town} town
 * @param {import("../../../lib/npc-generation/_common").NPC} npc
 * @param {import("../../../lib/npc-generation/_common").NPC} otherNpc
 */
function basicFilterNpc (town, npc, otherNpc) {
  return !town.npcRelations[otherNpc.key].map(r => r.targetNpcKey).includes(npc.key) && otherNpc.key !== npc.key
}

/**
 * @param {import("../../../lib/town/_common").Town} town
 * @param {Record<string, import("../../../lib/npc-generation/_common").NPC>} npcs
 * @param {import("../../../lib/npc-generation/_common").NPC} npc
 */
function sameSocialClass (town, npcs, npc) {
  console.log('Looking for a friend of the same social class...')
  const friend = Object.values(npcs).find(otherNpc => {
    return basicFilterNpc(town, npc, otherNpc) && otherNpc.socialClass === npc.socialClass
  })
  console.log('friend:')
  console.log(friend)
  if (typeof friend === 'object') {
    const relObj = lib.weightedRandomFetcher(town, lib.socialClass[npc.socialClass].relationships(npc, friend), npc, null, 'object')
    setup.createRelationship(town, npc, friend, relObj.relationship, relObj.reciprocalRelationship || relObj.relationship)
  }
  return friend
}

/**
 * @param {import("../../../lib/town/_common").Town} town
 * @param {Record<string, import("../../../lib/npc-generation/_common").NPC>} npcs
 * @param {import("../../../lib/npc-generation/_common").NPC} npc
 */
function sameProfessionSector (town, npcs, npc) {
  console.log('Looking for a friend of the same profession sector...')
  const friend = Object.values(npcs).find(otherNpc => {
    return basicFilterNpc(town, npc, otherNpc) && otherNpc.professionSector === npc.professionSector
  })
  if (friend) {
    if (npc.profession === friend.profession) {
      setup.createRelationship(town, npc, friend, 'peer', 'peer')
    } else {
      setup.createRelationship(town, npc, friend, 'industry peer', 'industry peer')
    }
  }
  return friend
}
