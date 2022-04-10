/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Faction, NPC, Town } from '@lib'
import { deleteNPC } from '../NPCGeneration/deleteNPC'
import { createNPC } from '../NPCGeneration/createNPC'

export const leaderFaction = (town: Town, faction: Faction) => {
  lib.logger.info('Determining leaders...')

  faction.leaderQualification = getLeaderQualification(faction)

  faction.leaderBribes = lib.matchFirst.largerThan(faction.roll.leaderBribes, {
    95: 'will never, under any circumstances be accepted',
    90: 'will never be accepted, and will be met with instant excommunication',
    80: 'are treated as insults',
    70: 'will be met with laughter',
    60: 'are scorned',
    55: 'are uncommon, and frowned upon',
    50: 'will usually be rejected',
    45: 'depend on circumstances',
    40: 'are sometimes accepted',
    30: 'will be bargained about',
    20: 'will usually be accepted',
    10: 'are a regular part of business',
    5: 'depend on circumstances'
  }, 'are expected') as string

  faction.leaderCompetence = lib.matchFirst.largerThan(faction.roll.leaderCompetence, {
    95: 'ruthlessly efficient',
    90: 'extremely efficient',
    80: 'very competent',
    70: 'quite competent',
    60: 'reasonably competent',
    55: 'usually competent',
    50: 'of mild competence',
    45: 'of mild incompetence',
    40: 'somewhat incompetent',
    30: 'quite incompetent',
    20: 'very incompetent',
    10: 'unbelievably incompetent',
    5: 'of mild competence'
  }, 'incompetent to the point of being unable to pour water out of a boot with the instructions written on the heel') as string

  switch (faction.leadershipType) {
    case 'individual': {
      const leaderTraits = flattenObject(lib.factionData.types[faction.type].leader.base)
      // @ts-ignore (Should probably ask about this issue on the TS discord.)
      faction.leader = faction.leader || createNPC(town, leaderTraits)
      // @ts-ignore
      lib.createReciprocalRelationship(town, faction, faction.leader, {
        relationship: 'head of faction',
        reciprocalRelationship: 'controlled faction',
        description: `${faction.leader} is the leader of ${faction.name}, and is ${faction.leaderCompetence}.`
      })
      if (faction.isPoliticalPower === true) {
        town.leader = faction.leader as NPC
      }
      break
    }
    case 'group': {
      if (faction.leader) {
        deleteNPC(faction.leader)
        delete faction.leader
      }
      lib.createLeaderGroup(faction)
    }
  }

  faction.stabilityCause = getStabilityCause(faction)

  return faction
}

function getLeaderQualification (faction: Faction) {
  if (faction.age === 'brand new' || faction.age === 'very new') {
    if (faction.leadershipType === 'group') {
      return lib.random(['the original founders', 'the original founders', 'the first appointed leaders'])
    }
    return lib.random(['the original founder', 'the original founder', 'the first appointed leader'])
  }
  return lib.weightRandom(lib.factionData.types[faction.type].leader.qualification)
}

function getStabilityCause (faction: Faction): string {
  if (faction.roll.stability <= 30) {
    return lib.random(['internal power struggles', 'conflicts with rivaling factions'])
  }
  if (faction.roll.stability >= 70 && faction.leadershipType === 'individual') {
    return lib.random(['the lack of infighting for the leadership role'])
  }
  if (faction.roll.stability >= 70 && faction.leadershipType === 'group') {
    return lib.random([`their much-loved ${faction.leaderGroupTitle}`, 'the lack of infighting for the leadership roles'])
  }
  return 'internal power struggles'
}

// This allows us to resolve array values to their singular values.
type FlatObject<T> = {
  [K in keyof T]: T[K] extends Array<infer A> | undefined ? A : T[K]
}

function flattenObject <T> (obj: T) {
  const flat = { ...obj }
  for (const key of lib.keys(obj)) {
    const value = obj[key]
    if (Array.isArray(value)) {
      flat[key] = lib.random(value)
    }
  }

  return flat as FlatObject<T>
}
