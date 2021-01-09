/* eslint-disable @typescript-eslint/ban-ts-comment */
import { articles, assign, factionData, Town, townData } from '@lib'
import { createTownLeader } from './createTownLeader'

// @ts-ignore
// @ts-ignore
// uses setup.createFaction, setup.createNPC, createTownLeader
export const createSocioPolitics = (town: Town) => {
  console.groupCollapsed('Creating sociopolitics!')
  // ecoIde and polSource are now set in the createTown.js function

  // give those ideologies some descriptions
  assign(town, townData.economicIdeology[town.economicIdeology].descriptors)
  assign(town, townData.politicalIdeology[town.politicalIdeology].data)

  // deletes town leaders if they are defined. Commented out because I'd prefer to leave ex-prime ministers in than delete somebody's valuable NPC.
  // if (town.leader) {
  //   delete State.variables.npcs[town.leader.key]
  // @ts-ignore
  //   delete town.leader
  // }
  // if (town.ruler) {
  //   delete State.variables.npcs[town.ruler.key]
  //   delete town.ruler
  // }

  switch (town.politicalSource) {
    case 'absolute monarchy':
      switch (town.politicalIdeology) {
        case 'autocracy':
          town.dualLeaders = false
          console.log('Loaded autocratic absolute monarchy')
          // @ts-ignore
          town.leader = setup.createNPC(town, { background: 'noble', profession: 'noble' })
          break
        default:
          console.log(`Loaded ${articles.output(town.politicalIdeologyIC)} absolute monarchy`)
          createTownLeader(town)
          town.dualLeaders = true
          // @ts-ignore
          town.ruler = setup.createNPC(town, { title: 'Royal Highness', background: 'noble', profession: 'noble' })
      }
      break
    case 'constitutional monarchy':
      switch (town.politicalIdeology) {
        case 'autocracy':
          town.dualLeaders = true
          console.log('Loaded autocratic constitutional monarchy')
          // @ts-ignore
          town.ruler = setup.createNPC(town, { title: 'Royal Highness', background: 'noble', profession: 'noble' })
          // @ts-ignore
          town.leader = setup.createNPC(town, { title: 'Lord', background: 'noble', profession: 'politician' })
          break
        default:
          console.log(`Loaded ${articles.output(town.politicalIdeologyIC)} constitutional monarchy`)
          // @ts-ignore
          town.ruler = setup.createNPC(town, { title: 'Royal Highness', background: 'noble', profession: 'noble' })
          createTownLeader(town)
      }
      break
    default:
      console.log(`Loaded ${articles.output(town.politicalIdeologyIC)} ${town.politicalSource}`)
      createTownLeader(town)
      town.dualLeaders = false
  }

  console.log('Town faction leadership...')
  const politicalIdeology = townData.politicalIdeology[town.politicalIdeology]

  if (politicalIdeology.data.isFaction === true) {
    console.log('Loading ruling faction...')
    delete State.variables.npcs[town.leader.key]
    // @ts-ignore
    delete town.leader
    const type = politicalIdeology.data.governmentType
    // @ts-expect-error It *thinks* that there's no overlap, but there actually is.
    if (politicalIdeology.data.governmentType !== factionData.types[type]) {
      console.log(`No faction that matches ${politicalIdeology.data.governmentType}. Creating random faction instead...`)
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
        type: politicalIdeology.data.governmentType,
        key: 'leader'
      })
    }
    console.log('Town factions:', town.factions)
    // town.factions.leader.leader sounds wrong, but leader is the key of the faction that is leading.
    // So it's actually right. For now.
    // TODO: Change the way that the leading faction is grabbed.
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
