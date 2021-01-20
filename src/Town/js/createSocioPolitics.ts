/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { FactionType, Town } from '@lib'
import { createNPC } from '../../NPCGeneration/createNPC'

/**
 * @warn Uses setup.createFaction
 * @warn Uses setup.createNPC
 * @warn Uses setup.createTownLeader
 */
export const createSocioPolitics = (town: Town) => {
  console.groupCollapsed('Creating sociopolitics!')

  // Give those ideologies some descriptions
  lib.assign(town, lib.townData.economicIdeology[town.economicIdeology].descriptors)
  lib.assign(town, lib.townData.politicalIdeology[town.politicalIdeology].data)

  console.log(`Loaded ${lib.articles.output(town.politicalIdeologyIC)} ${town.politicalSource}`)

  switch (town.politicalSource) {
    case 'absolute monarchy':
      switch (town.politicalIdeology) {
        case 'autocracy':
          town.leader = createNPC(town, { background: 'noble', profession: 'noble' })
          break
        default:
          createTownLeader(town)
          town.ruler = createNPC(town, { title: 'Royal Highness', background: 'noble', profession: 'noble' })
      }
      break
    case 'constitutional monarchy':
      switch (town.politicalIdeology) {
        case 'autocracy':
          town.ruler = createNPC(town, { title: 'Royal Highness', background: 'noble', profession: 'noble' })
          town.leader = createNPC(town, { title: 'Lord', background: 'noble', profession: 'politician' })
          break
        default:
          town.ruler = createNPC(town, { title: 'Royal Highness', background: 'noble', profession: 'noble' })
          createTownLeader(town)
      }
      break
    default:
      createTownLeader(town)
  }

  console.log('Town faction leadership...')
  const politicalIdeology = lib.townData.politicalIdeology[town.politicalIdeology]
  const { isFaction, governmentType } = politicalIdeology.data

  if (isFaction === true) {
    console.log('Loading ruling faction...')
    delete State.variables.npcs[town.leader.key]
    town.factions.leader = createRulingFaction(town, governmentType)
    // @ts-ignore
    town.leader = town.factions.leader.leader
    town.leaderType = '<<profile $town.factions["leader"]>>'
    console.log('Town factions:', town.factions)
  } else if (isFaction === false && town.factions.leader) {
    delete State.variables.npcs[town.leader.key]
    // @ts-ignore
    delete town.leader
    delete town.factions.leader
  }

  console.groupEnd()
}

function createTownLeader (town: Town) {
  console.log('Creating town leader')
  const politicalIdeology = lib.townData.politicalIdeology[town.politicalIdeology]
  town.leaderType = politicalIdeology.data.leaderType || 'commoners'

  if (typeof politicalIdeology.leaderTraits === 'function') {
    town.leader = createNPC(town, politicalIdeology.leaderTraits())
  } else {
    console.log(`Invalid political ideology of ${town.politicalIdeology}. Leader defaulting to random NPC...`)
    town.leader = createNPC(town, {
      profession: 'politician'
    })
  }

  console.log('Town leader:', town.leader)
}

function createRulingFaction (town: Town, governmentType: FactionType) {
  if (typeof lib.factionData.types[governmentType] === 'undefined') {
    console.log(`No faction that matches ${governmentType}. Creating random faction instead...`)

    // @ts-ignore
    return setup.createFaction(town, {
      leadershipType: 'individual',
      isPoliticalPower: true,
      key: 'leader'
    })
  }

  // @ts-ignore
  return setup.createFaction(town, {
    leadershipType: 'individual',
    isPoliticalPower: true,
    type: governmentType,
    key: 'leader'
  })
}
