
setup.createStartFactions = town => {
  console.log('Creating starting factions...')
  // const factions = ['merchants', 'merchants', 'merchants', 'thieves', 'nobles', 'wizards']
  const factionsNumber = getFactionsNumber(town)

  for (let i = 0; i <= factionsNumber; i++) {
    const tempFaction = setup.createFaction(town)
    town.factions[tempFaction.key] = tempFaction
  }

  console.log('Finished creating start factions!')
  return town
}

function getFactionsNumber (town) {
  const factionsNumber = lib.townData.type[town.type].startFactionsNumber()
  return factionsNumber + getFactionNumberWealthModifier(town.roll.wealth)
}

/**
 * @param {number} wealthRoll
 */
function getFactionNumberWealthModifier (wealthRoll) {
  if (wealthRoll > 90) return 2
  if (wealthRoll > 70) return 1
  return 0
}
