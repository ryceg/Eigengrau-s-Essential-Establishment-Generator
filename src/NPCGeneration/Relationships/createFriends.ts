/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { NPC, Relationship, Town } from '@lib'
import { createRelationship } from './createRelationship'

interface Friend {
  probability?: number
  exclusions?(town: Town, npc: NPC): boolean
  relationship: string
  reciprocalRelationship?: string
  base: Partial<NPC>
}

/**
 * Uses setup.createRelationship, setup.createNPC
 */
export const createFriends = (town: Town, npc: NPC) => {
  console.groupCollapsed(`${npc.name} is making some friends...`)
  let friendsNumber = Math.round((npc.roll.gregariousness / 3) + 1)
  const professionData = lib.professions[npc.profession]

  if (professionData.type === 'business') {
    friendsNumber += 2
  }

  const friendsTypes: Record<string, Friend> = {
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
      exclusions (town) {
        return town.roll.sin >= 10
      },
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
      exclusions (town, npc) {
        return !(town.roll.religiosity < 20 || npc.roll.religiosity < 20 || npc.profession === 'pastor')
      },
      base: {
        socialClass: npc.socialClass || 'commoner',
        profession: 'pastor'
      }
    },
    'customer': {
      relationship: 'customer',
      reciprocalRelationship: npc.profession,
      probability: 20,
      exclusions () {
        return professionData.type === 'business'
      },
      base: {
        canBeCustom: true,
        isShallow: true
      }
    },
    'servant': {
      relationship: 'employee',
      reciprocalRelationship: 'employer',
      exclusions (town, npc) {
        // FIXME: Make more readable. Perhaps split into multiple if conditions.
        return !(!['wealthy', 'aristocratic'].includes(lib.npcLifestyleStandard(town, npc).lifestyleStandard) && !(lib.npcProfit(town, npc) > -5 || lib.npcProfit(town, npc) < -100))
      },
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

  const createNewFriend = (town: Town, npc: NPC, friendsTypes: Record<string, Friend>) => {
    console.log('Creating a new friend!')

    const friendObj = lib.weightedRandomFetcher(town, friendsTypes, npc, undefined, 'object') as Friend
    // @ts-ignore
    const friend = setup.createNPC(town, friendObj.base)
    createRelationship(town, npc, friend, friendObj.relationship, friendObj.reciprocalRelationship || friendObj.relationship)
  }

  for (let step = 0; step < friendsNumber; step++) {
    if (random(100) >= town.reuseNpcProbability) {
      town.reuseNpcProbability += lib.fm(town.reuseNpcProbability, 1)
      town.reuseNpcProbability = Math.clamp(town.reuseNpcProbability, 1, 90)
      createNewFriend(town, npc, friendsTypes)
      continue
    }

    console.log('Finding an already existing NPC for a friend!')
    let friend = findFriendOfSameSocialClass(town, State.variables.npcs, npc)
    if (typeof friend === 'undefined') {
      console.log(`Nobody was in the same caste as ${npc.name}`)
      friend = findFriendInSameProfessionSector(town, State.variables.npcs, npc)
    }
    if (typeof friend === 'undefined') {
      console.log(`Nobody was in the same profession sector as ${npc.name}`)
      createNewFriend(town, npc, friendsTypes)
      continue
    }
  }

  console.groupEnd()
}

function basicFilterNpc (town: Town, npc: NPC, otherNpc: NPC) {
  const related = town.npcRelations[otherNpc.key].map(r => r.targetNpcKey)
  return !related.includes(npc.key) && otherNpc.key !== npc.key
}

function findFriendOfSameSocialClass (town: Town, npcs: Record<string, NPC>, npc: NPC) {
  console.log('Looking for a friend of the same social class...')
  const friend = Object.values(npcs).find(otherNpc => {
    return basicFilterNpc(town, npc, otherNpc) && otherNpc.socialClass === npc.socialClass
  })
  console.log('friend:', friend)
  if (typeof friend === 'object') {
    const relationships = lib.socialClass[npc.socialClass].relationships(npc, friend)
    // @ts-ignore
    // FIXME: weightedRandomFetcher expects a record, while relationships is an array.
    const relObj = lib.weightedRandomFetcher(town, relationships, npc, null, 'object') as Relationship
    // @ts-ignore
    setup.createRelationship(town, npc, friend, relObj.relationship, relObj.reciprocalRelationship || relObj.relationship)
  }
  return friend
}

function findFriendInSameProfessionSector (town: Town, npcs: Record<string, NPC>, npc: NPC) {
  console.log('Looking for a friend of the same profession sector...')
  const friend = Object.values(npcs).find(otherNpc => {
    return basicFilterNpc(town, npc, otherNpc) && otherNpc.professionSector === npc.professionSector
  })
  if (friend) {
    if (npc.profession === friend.profession) {
      // @ts-ignore
      setup.createRelationship(town, npc, friend, 'peer', 'peer')
    } else {
      // @ts-ignore
      setup.createRelationship(town, npc, friend, 'industry peer', 'industry peer')
    }
  }
  return friend
}
