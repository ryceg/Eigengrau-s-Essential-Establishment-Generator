setup.createTownLeader = town => {
  console.log('Creating town leader')
  const politicalIdeology = lib.townData.politicalIdeology[town.politicalIdeology]
  town.leaderType = politicalIdeology.data.leaderType || 'commoners'

  if (typeof politicalIdeology.leaderTraits === 'function') {
    town.leader = setup.createNPC(town, politicalIdeology.leaderTraits())
  } else {
    console.log(`Invalid political ideology of ${town.politicalIdeology}. Leader defaulting to random NPC...`)
    town.leader = setup.createNPC(town, {
      profession: 'politician'
    })
  }

  console.log('Town leader:', town.leader)
}
