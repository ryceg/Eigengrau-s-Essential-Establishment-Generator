/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Faction, FactionType, NPC, Town } from '@lib'
import { createNPC } from '../../NPCGeneration/createNPC'

/**
 * @warn Uses setup.createFaction
 * @warn Uses setup.createNPC
 * @warn Uses setup.createTownLeader
 */
export const createSocioPolitics = (town: Town) => {
  lib.logger.openGroup('Creating sociopolitics!')

  // Give those ideologies some descriptions
  lib.assign(town, lib.townData.economicIdeology[town.economicIdeology].descriptors)
  lib.assign(town, lib.townData.politicalIdeology[town.politicalIdeology].data)

  lib.logger.info(`Loaded ${lib.articles.output(town.politicalIdeologyIC)} ${town.politicalSource}`)

  lib.assign(town, createTownPoliticalLeadership(town))

  lib.logger.info('Town faction leadership...')
  const politicalIdeology = lib.townData.politicalIdeology[town.politicalIdeology]
  const { isFaction, governmentType } = politicalIdeology.data

  if (isFaction === true) {
    lib.logger.info('Loading ruling faction...')
    delete State.variables.npcs[town.leader.key]
    town.factions.leader = createRulingFaction(town, governmentType)
    // @ts-ignore
    town.leader = town.factions.leader.leader
    town.leaderType = '<<profile $town.factions["leader"]>>'
    lib.logger.info('Town factions:', town.factions)
  } else if (isFaction === false && town.factions.leader) {
    delete State.variables.npcs[town.leader.key]
    // @ts-ignore
    delete town.leader
    delete town.factions.leader
  }

  lib.logger.closeGroup()
}

interface TownLeaderhip {
  ruler?: NPC
  leader: NPC
  leaderType?: string
}

function createTownPoliticalLeadership (town: Town): TownLeaderhip {
  switch (town.politicalSource) {
    case 'absolute monarchy':
      switch (town.politicalIdeology) {
        case 'autocracy':
          return {
            leader: createNPC(town, { background: 'noble', profession: 'noble' })
          }
        default:
          return {
            ...createTownLeader(town),
            ruler: createNPC(town, { title: 'Royal Highness', background: 'noble', profession: 'noble' })
          }
      }
    case 'constitutional monarchy':
      switch (town.politicalIdeology) {
        case 'autocracy':
          return {
            ruler: createNPC(town, { title: 'Royal Highness', background: 'noble', profession: 'noble' }),
            leader: createNPC(town, { title: 'Lord', background: 'noble', profession: 'politician' })
          }
        default:
          return {
            ruler: createNPC(town, { title: 'Royal Highness', background: 'noble', profession: 'noble' }),
            ...createTownLeader(town)
          }
      }
  }
  return createTownLeader(town)
}

function createTownLeader (town: Town): TownLeaderhip {
  lib.logger.info('Creating town leader')

  const { politicalIdeology } = town
  const { data, leaderTraits } = lib.townData.politicalIdeology[politicalIdeology]
  const { leaderType = 'commoners' } = data

  if (typeof leaderTraits === 'function') {
    const leader = createNPC(town, leaderTraits())
    return { leaderType, leader }
  }

  lib.logger.error(`Invalid political ideology of ${politicalIdeology}. Leader defaulting to random NPC...`)
  const leader = createNPC(town, { profession: 'politician' })
  return { leaderType, leader }
}

function createRulingFaction (town: Town, governmentType: FactionType): Faction {
  if (typeof lib.factionData.types[governmentType] === 'undefined') {
    lib.logger.info(`No faction that matches ${governmentType}. Creating random faction instead...`)

    return setup.createFaction(town, {
      leadershipType: 'individual',
      isPoliticalPower: true,
      key: 'leader'
    })
  }

  return setup.createFaction(town, {
    leadershipType: 'individual',
    isPoliticalPower: true,
    type: governmentType,
    key: 'leader'
  })
}
