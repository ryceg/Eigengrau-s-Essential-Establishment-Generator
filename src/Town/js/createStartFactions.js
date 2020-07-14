
setup.createStartFactions = function (town) {
  console.log('Creating starting factions...')
  const factions = ['merchants', 'merchants', 'merchants', 'thieves', 'nobles', 'wizards']
  let factionsNumber = lib.townData.type[town.type].startFactionsNumber()

  if (town.roll.wealth > 90) {
    factionsNumber += 2
  } else if (town.roll.wealth > 70) {
    factionsNumber += 1
  }

  for (let i = 0; i <= factionsNumber; i++) {
    const tempFactionType = factions.random()
    factions.delete(tempFactionType)
    const tempFaction = setup.createFaction(town, {
      type: tempFactionType
    })
    town.factions[tempFaction.key] = tempFaction
  }

  console.log('Finished creating start factions!')
  return town
}
