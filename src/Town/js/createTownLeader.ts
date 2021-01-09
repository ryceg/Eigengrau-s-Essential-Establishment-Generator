/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Town } from '@lib'

export const createTownLeader = (town: Town) => {
  console.log('Creating town leader')
  const politicalIdeology = lib.townData.politicalIdeology[town.politicalIdeology]
  town.leaderType = politicalIdeology.data.leaderType || 'commoners'

  if (typeof politicalIdeology.leaderTraits === 'function') {
    // @ts-ignore
    town.leader = setup.createNPC(town, politicalIdeology.leaderTraits())
  } else {
    console.log(`Invalid political ideology of ${town.politicalIdeology}. Leader defaulting to random NPC...`)
    // @ts-ignore
    town.leader = setup.createNPC(town, {
      profession: 'politician'
    })
  }

  console.log('Town leader:', town.leader)
}
