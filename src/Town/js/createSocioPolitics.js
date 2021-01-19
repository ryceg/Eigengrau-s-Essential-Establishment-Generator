// uses setup.createFaction, setup.createNPC, setup.createTownLeader
setup.createSocioPolitics = town => {
  console.groupCollapsed('Creating sociopolitics!')
  // ecoIde and polSource are now set in the createTown.js function

  // give those ideologies some descriptions
  lib.assign(town, lib.townData.economicIdeology[town.economicIdeology].descriptors)
  lib.assign(town, lib.townData.politicalIdeology[town.politicalIdeology].data)

  // deletes town leaders if they are defined. Commented out because I'd prefer to leave ex-prime ministers in than delete somebody's valuable NPC.
  // if (town.leader) {
  //   delete State.variables.npcs[town.leader.key]
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
          town.leader = setup.createNPC(town, { background: 'noble', profession: 'noble' })
          break
        default:
          console.log(`Loaded ${lib.articles.output(town.politicalIdeologyIC)} absolute monarchy`)
          setup.createTownLeader(town)
          town.dualLeaders = true
          town.ruler = setup.createNPC(town, { title: 'Royal Highness', background: 'noble', profession: 'noble' })
      }
      break
    case 'constitutional monarchy':
      switch (town.politicalIdeology) {
        case 'autocracy':
          town.dualLeaders = true
          console.log('Loaded autocratic constitutional monarchy')
          town.ruler = setup.createNPC(town, { title: 'Royal Highness', background: 'noble', profession: 'noble' })
          town.leader = setup.createNPC(town, { title: 'Lord', background: 'noble', profession: 'politician' })
          break
        default:
          console.log(`Loaded ${lib.articles.output(town.politicalIdeologyIC)} constitutional monarchy`)
          town.ruler = setup.createNPC(town, { title: 'Royal Highness', background: 'noble', profession: 'noble' })
          setup.createTownLeader(town)
      }
      break
    default:
      console.log(`Loaded ${lib.articles.output(town.politicalIdeologyIC)} ${town.politicalSource}`)
      setup.createTownLeader(town)
      town.dualLeaders = false
  }

  console.log('Town faction leadership...')
  const politicalIdeology = lib.townData.politicalIdeology[town.politicalIdeology]

  if (politicalIdeology.data.isFaction === true) {
    console.log('Loading ruling faction...')
    delete State.variables.npcs[town.leader.key]
    delete town.leader
    const type = politicalIdeology.data.governmentType
    if (politicalIdeology.data.governmentType !== lib.factionData.types[type]) {
      console.log(`No faction that matches ${politicalIdeology.data.governmentType}. Creating random faction instead...`)
      town.factions.leader = setup.createFaction(town, {
        leadershipType: 'individual',
        isPoliticalPower: true
      })
    } else {
      town.factions.leader = setup.createFaction(town, {
        leadershipType: 'individual',
        isPoliticalPower: true,
        type: politicalIdeology.data.governmentType
      })
    }
    console.log('Town factions:', town.factions)
    town.leader = town.factions.leader.leader
    town.leaderType = '<<profile $town.factions["leader"]>>'
    console.log('Town factions:', town.factions)
  } else if (politicalIdeology.data.isFaction === false && town.factions.leader) {
    delete State.variables.npcs[town.leader.key]
    delete town.leader
    delete town.factions.leader
  }

  console.groupEnd()
}
