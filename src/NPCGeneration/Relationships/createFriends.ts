/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { NPC, Relationship, Town } from '@lib'
import { createNPC } from '../createNPC'
import { createRelationship } from './createRelationship'
import { getPartnerGender } from './createSexuality'

interface Friend {
  probability?: number
  exclusions?(town: Town, npc: NPC): boolean
  relationship: string
  reciprocalRelationship?: string
  base: Partial<NPC>
}

export const createFriends = (town: Town, npc: NPC) => {
  lib.logger.openGroup(`${npc.name} is making some friends...`)
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
        gender: getPartnerGender(npc),
        ageStage: npc.ageStage
      }
    },
    'ex': {
      relationship: 'ex',
      base: {
        gender: getPartnerGender(npc),
        ageStage: npc.ageStage
      }
    },
    'secret crush': {
      relationship: 'secret crush',
      reciprocalRelationship: ['friend', 'friend', 'friend', 'just a friend', 'creepy stalker', 'secret crush'].random(),
      base: {
        gender: getPartnerGender(npc),
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
        professionSector: 'religion'
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
    lib.logger.info('Merging relationship sources! Before:', friendsTypes)
    const moreRelationships = professionData.relationships(town, npc)
    Object.assign(friendsTypes, moreRelationships)
    lib.logger.info('After:', friendsTypes)
  }

  const createNewFriend = (town: Town, npc: NPC, friendsTypes: Record<string, Friend>) => {
    lib.logger.info('Creating a new friend!')

    const friendObj = lib.weightedRandomFetcher(town, friendsTypes, npc, undefined, 'object') as Friend
    const friend = createNPC(town, friendObj.base)
    createRelationship(town, npc, friend, { relationship: friendObj.relationship, reciprocalRelationship: friendObj.reciprocalRelationship })
  }

  for (let step = 0; step < friendsNumber; step++) {
    if (random(100) >= town.reuseNpcProbability) {
      town.reuseNpcProbability += lib.fm(town.reuseNpcProbability, 1)
      town.reuseNpcProbability = Math.clamp(town.reuseNpcProbability, 1, 90)
      createNewFriend(town, npc, friendsTypes)
      continue
    }

    lib.logger.info('Finding an already existing NPC for a friend!')
    let friend = findFriendOfSameSocialClass(town, State.variables.npcs, npc)
    if (typeof friend === 'undefined') {
      lib.logger.info(`Nobody was in the same caste as ${npc.name}`)
      friend = findFriendInSameProfessionSector(town, State.variables.npcs, npc)
    }
    if (typeof friend === 'undefined') {
      lib.logger.info(`Nobody was in the same profession sector as ${npc.name}`)
      createNewFriend(town, npc, friendsTypes)
      continue
    }
  }

  lib.logger.closeGroup()
}

function basicFilterNpc (town: Town, npc: NPC, otherNpc: NPC) {
  const related = town.npcRelations[otherNpc.key].map(r => r.targetNpcKey)
  return !related.includes(npc.key) && otherNpc.key !== npc.key
}

function findFriendOfSameSocialClass (town: Town, npcs: Record<string, NPC>, npc: NPC) {
  lib.logger.info('Looking for a friend of the same social class...')
  const friend = Object.values(npcs).find(otherNpc => {
    return basicFilterNpc(town, npc, otherNpc) && otherNpc.socialClass === npc.socialClass
  })
  lib.logger.info('Friend:', friend)
  if (typeof friend === 'object') {
    const relationships = lib.socialClass[npc.socialClass].relationships(npc, friend)
    // @ts-ignore
    // FIXME: weightedRandomFetcher expects a record, while relationships is an array.
    const relObj = lib.weightedRandomFetcher(town, relationships, npc, null, 'object') as Relationship
    createRelationship(town, npc, friend, { relationship: relObj.relationship, reciprocalRelationship: relObj.reciprocalRelationship })
  }
  return friend
}

function findFriendInSameProfessionSector (town: Town, npcs: Record<string, NPC>, npc: NPC) {
  lib.logger.info('Looking for a friend of the same profession sector...')
  const friend = Object.values(npcs).find(otherNpc => {
    return basicFilterNpc(town, npc, otherNpc) && otherNpc.professionSector === npc.professionSector
  })
  if (friend) {
    if (npc.profession === friend.profession) {
      createRelationship(town, npc, friend, { relationship: 'peer' })
    } else {
      createRelationship(town, npc, friend, { relationship: 'industry peer' })
    }
  }
  return friend
}
