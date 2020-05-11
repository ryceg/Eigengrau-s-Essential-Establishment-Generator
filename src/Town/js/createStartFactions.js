
setup.createStartFactions = function (town) {
  console.log('Creating starting factions...')
  const factions = ['merchants', 'merchants', 'merchants', 'thieves', 'nobles', 'wizards']
  let factionsNumber = setup.townData.type[town.type].startFactionsNumber()

  if (town.roll.wealth > 90) {
    factionsNumber += 2
  } else if (town.roll.wealth > 70) {
    factionsNumber += 1
  }

  for (let i = 0; i <= factionsNumber; i++) {
    const tempFactionType = factions.pluck()
    const tempFaction = setup.createFaction(town, {
      type: tempFactionType
    })
    town.factions[tempFaction.key] = tempFaction
    // console.log(tempFaction)
    // if (!town.factions[tempFaction]) {
    //   town.factions[tempFaction] = []
    // }
    // town.factions[tempFaction].push(setup.createFaction(town, {
    //   type: tempFaction
    // }))
  }
  console.log('Finished creating start factions!')
  return town
}
