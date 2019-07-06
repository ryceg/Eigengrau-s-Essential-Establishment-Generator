setup.createStartBuildings = function (town) {
  const buildingType = ['Town Square', 'Tavern', 'Alchemist', 'General Store', 'Smithy', 'Market', 'Temple']

  if (town.location === 'seashore' || town.location === 'river coast') { buildingType.push('Docks') }

  if (town.hasBrothel) { buildingType.push('Brothel') }

  if (town.population > 100 || town.roll.wealth > 40) { buildingType.push('Bakery') }

  if (town.population > 1000 || town.roll.wealth > 70) { buildingType.push('Florist') }

  if (town.population > 600 || town.roll.wealth > 60) { buildingType.push('Tailor') }

  if (town.population > 400 || town.roll.wealth > 40) { buildingType.push('Butcher') }

  if (town.population > 500 || town.roll.wealth > 60) { buildingType.push('Graveyard') }

  if (town.population > 700 || town.roll.wealth > 60) { buildingType.push('Cobbler') }

  if (town.population > 350 & town.roll.wealth > 40 || town.roll.wealth > 60) { buildingType.push('Barber') }

  for (const type of buildingType) {
    console.log(`Creating a ${type}...`)
    setup.createNewBuilding(town, type)
  }

  return town
}
