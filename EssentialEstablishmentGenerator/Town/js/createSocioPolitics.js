setup.createSocioPolitics = function (town) {
  // assign economic ideology and political source
  town.economicIdeology = setup.townData.type[town.type].economicIdeology.random()
  town.politicalSource = setup.townData.type[town.type].politicalSource.random()
  town.politicalIdeology = setup.townData.politicalSource[town.politicalSource].politicalIdeology.random()
  // give those ideologies some descriptions
  Object.assign(town, setup.townData.economicIdeology[town.economicIdeology].descriptors)
  // data
  Object.assign(town, setup.townData.politicalIdeology[town.politicalIdeology].data)
  // economic ideology attribute modifiers
  Object.assign(town, setup.townData.economicIdeology[town.economicIdeology].modifiers)
  // political ideology modifiers
  Object.assign(town, setup.townData.politicalIdeology[town.politicalIdeology].modifiers)

  var leaderTraits = setup.townData.politicalIdeology[town.politicalIdeology].leaderTraits
  // setup.leaderTraits = {
  //   'grunts': {
  //     'dndClass': 'barbarian',
  //     'firstName': 'Bruce'
  //   },
  //   'smarts': {
  //     'dndClass': 'wizard',
  //     'firstName': 'Chester'
  //   }
  // }
  // var test = ['grunts', 'smarts'].random()
  // var leaderTraits = setup.leaderTraits[test]
  console.log('these are the leaderTraits:')
  console.log(leaderTraits)
  town.leader = setup.createNPC()

  console.log('town got up here 2')

  console.log('Town leader is ')
  // console.log(town.leader)
  var description
  console.log('political source is ' + town.politicalSource + ', and the ideology is ' + town.politicalIdeology)

  // if (typeof setup.townData.politicalSource[town.politicalSource].autocracy.politicalSourceDescription === 'string') {
  //   description = setup.townData.politicalSource[town.politicalSource].autocracy.politicalSourceDescription
  // } else if (typeof setup.townData.politicalSource[town.politicalSource].default.politicalSourceDescription === 'string') {
  //   description = setup.townData.politicalSource[town.politicalSource].default.politicalSourceDescription
  // } else {
  //   description = setup.townData.politicalSource[town.politicalSource].politicalSourceDescription
  // }
  //
  // console.log(description)
  // town.politicalSourceDescription = description
  // political source description: tries to access autocratic in case it's a monarchy, then access the default source, then the rest.
  // town.politicalSourceDescription = setup.townData.politicalSource[town.politicalSource].autocracy.politicalSourceDescription ||
  // setup.townData.politicalSource[town.politicalSource].default.politicalSourceDescription ||
  // setup.townData.politicalSource[town.politicalSource].politicalSourceDescription ||
  // setup.townData.politicalSource['republic'].politicalSourceDescription

  // switch (town.politicalIdeology) {
  //   case 'autocracy':
  //     switch (town.politicalSource) {
  //       case 'absolute monarchy':
  //         town.dualLeaders = false
  //         town.ruler = setup.createNPC({title: 'Royal Highness', background: 'noble'})
  //         town.leader = town.ruler
  //         town.politicalSourceDescription = '<<print _town.ruler.title.toUpperFirst()>> <<profile _town.ruler>> is technically the head of state, but affairs are handled by the prime minister, <<profile _town.leader>>, who controls all executive decisions.'
  //         switch (town.ruler.gender) {
  //           case 'woman':
  //             town.rulerType = 'Queen'
  //             break
  //           default:
  //             town.rulerType = 'King'
  //             break
  //         }
  //         break
  //       case 'constitutional monarchy':
  //         town.dualLeaders = true
  //         town.ruler = setup.createNPC({title: 'Royal Highness', background: 'noble'})
  //         town.leader = setup.createNPC({title: 'Lord', background: 'noble'})
  //         town.politicalSourceDescription = "<<print _town.leader.title.toUpperFirst()>> <<profile _town.leader>> is the supreme ruler, and all laws and affairs are governed by the crowns' will."
  //         switch (town.ruler.gender) {
  //           case 'man':
  //             town.rulerType = 'King'
  //             break
  //           case 'woman':
  //             town.rulerType = 'Queen'
  //             break
  //           default:
  //             town.rulerType = 'the supreme leader'
  //         }
  //
  //         break
  //       default:
  //         town.leaderType = 'the supreme leader'
  //         town.dualLeaders = false
  //         town.leader = setup.createNPC({title: 'Lord', background: 'noble'})
  //     }
  //     break
  //   default:
  //     town.dualLeaders = false
  //     town.leaderType = setup.townData.politicalIdeology[town.politicalIdeology].leaderType
  //     town.leader = setup.createNPC(setup.townData.politicalIdeology[town.politicalIdeology].leaderTraits)
  // }
  // console.log('town got up here 3')
  // if (setup.townData.politicalIdeology[town.politicalIdeology].isFaction === true) {
  //   town.leaderFaction = setup.createFaction(town, {
  //     leadershipType: 'individual',
  //     isPoliticalPower: true,
  //     type: setup.townData.politicalIdeology[town.politicalIdeology].type
  //   })
  //   town.leaderType = "<<link '_town.leaderFaction.name'>><<set $currentFaction to _town.leaderFaction>><<goto 'FactionProfile'>><</link>>"
  // }
  // console.log('town got up here 4')

  console.log('town got up here 5')
  return town
}
