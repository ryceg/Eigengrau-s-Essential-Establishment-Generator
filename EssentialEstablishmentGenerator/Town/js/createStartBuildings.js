setup.createStartBuildings = function (town) {
  const buildingType = ['Town Square', 'Tavern', 'Alchemist', 'General Store', 'Smithy', 'Market', 'Temple']

  if (town.location === 'seashore' || town.location === 'river coast') { buildingType.push('Docks') }

  if (town.hasBrothel) { buildingType.push('Brothel') }

  for (const type of buildingType) {
    console.log(`Creating a ${type}...`)
    setup.createNewBuilding(town, type)
  }

  if (town.population > 100 || town.roll.wealth > 40) { setup.createNewBuilding(town, 'Bakery') }

  if (town.population > 1000 || town.roll.wealth > 70) { setup.createNewBuilding(town, 'Florist') }

  if (town.population > 600 || town.roll.wealth > 60) { setup.createNewBuilding(town, 'Tailor') }

  if (town.population > 400 || town.roll.wealth > 40) { setup.createNewBuilding(town, 'Butcher') }

  if (town.population > 700 || town.roll.wealth > 60) { setup.createNewBuilding(town, 'Cobbler') }

  return town
}
