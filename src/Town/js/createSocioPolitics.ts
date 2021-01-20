/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Town } from '@lib'
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

  switch (town.politicalSource) {
    case 'absolute monarchy':
      switch (town.politicalIdeology) {
        case 'autocracy':
          town.dualLeaders = false
          console.log('Loaded autocratic absolute monarchy')
          town.leader = createNPC(town, { background: 'noble', profession: 'noble' })
          break
        default:
          console.log(`Loaded ${lib.articles.output(town.politicalIdeologyIC)} absolute monarchy`)
          // @ts-ignore
          setup.createTownLeader(town)
          town.dualLeaders = true
          town.ruler = createNPC(town, { title: 'Royal Highness', background: 'noble', profession: 'noble' })
      }
      break
    case 'constitutional monarchy':
      switch (town.politicalIdeology) {
        case 'autocracy':
          town.dualLeaders = true
          console.log('Loaded autocratic constitutional monarchy')
          town.ruler = createNPC(town, { title: 'Royal Highness', background: 'noble', profession: 'noble' })
          town.leader = createNPC(town, { title: 'Lord', background: 'noble', profession: 'politician' })
          break
        default:
          console.log(`Loaded ${lib.articles.output(town.politicalIdeologyIC)} constitutional monarchy`)
          town.ruler = createNPC(town, { title: 'Royal Highness', background: 'noble', profession: 'noble' })
          // @ts-ignore
          setup.createTownLeader(town)
      }
      break
    default:
      console.log(`Loaded ${lib.articles.output(town.politicalIdeologyIC)} ${town.politicalSource}`)
      // @ts-ignore
      setup.createTownLeader(town)
      town.dualLeaders = false
  }

  console.log('Town faction leadership...')
  const politicalIdeology = lib.townData.politicalIdeology[town.politicalIdeology]

  if (politicalIdeology.data.isFaction === true) {
    console.log('Loading ruling faction...')
    delete State.variables.npcs[town.leader.key]
    // @ts-ignore
    delete town.leader
    const { governmentType } = politicalIdeology.data
    if (typeof lib.factionData.types[governmentType] === 'undefined') {
      console.log(`No faction that matches ${governmentType}. Creating random faction instead...`)
      // @ts-ignore
      town.factions.leader = setup.createFaction(town, {
        leadershipType: 'individual',
        isPoliticalPower: true,
        key: 'leader'
      })
    } else {
      // @ts-ignore
      town.factions.leader = setup.createFaction(town, {
        leadershipType: 'individual',
        isPoliticalPower: true,
        type: governmentType,
        key: 'leader'
      })
    }
    console.log('Town factions:', town.factions)
    // @ts-ignore
    town.leader = town.factions.leader.leader
    town.leaderType = '<<profile $town.factions["leader"]>>'
    console.log('Town factions:', town.factions)
  } else if (politicalIdeology.data.isFaction === false && town.factions.leader) {
    delete State.variables.npcs[town.leader.key]
    // @ts-ignore
    delete town.leader
    delete town.factions.leader
  }

  console.groupEnd()
}
