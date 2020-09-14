setup.createStartBuildings = function (town) {
  const buildingType = [
    'Town Square',
    // 'Tavern',
    // 'General Store',
    // 'Smithy',
    'Market'
    // 'Temple'
  ]
  console.log('Creating starting buildings...')
  console.log(town)
  if (town.location === 'seashore' || town.location === 'river coast') { buildingType.push('Docks') }
  if (town.population > 500 || town.roll.wealth > 60) { buildingType.push('Graveyard') }
  if (town.hasBrothel) { buildingType.push('Brothel') }

  const professions = {
    'Tavern': 'bartender',
    'Alchemist': ['alchemist', 'wizard'],
    'Bakery': ['pastry chef', 'baker'],
    'General Store': ['shopkeep'],
    'Smithy': ['goldsmith', 'weaponsmith', 'silversmith', 'blacksmith', 'farrier', 'armorer'],
    'Florist': ['florist', 'botanist'],
    'Tailor': 'tailor',
    'Butcher': 'butcher',
    'Cobbler': 'cobbler',
    'Brothel': 'pimp',
    'Barber': ['barber', 'surgeon'],
    'Temple': ['high priest', 'archbishop', 'cardinal', 'bishop', 'priest', 'deacon']
  }
  for (const building in professions) {
    console.log(building)
    if (Array.isArray(professions[building])) {
      for (const profession in professions[building]) {
        console.log(professions[building])
        if (town.professions[profession] && town.professions[profession].population > 0) {
          console.log(profession, 'exists')
          buildingType.push(building)
        }
      }
    } else {
      if (town.professions[professions[building]] && town.professions[professions[building]].population > 0) {
        console.log(professions[building], 'exists')
        buildingType.push(building)
      }
    }
  }

  for (const type of buildingType) {
    console.log(`Creating ${lib.articles.output(type)}...`)
    setup.createNewBuilding(town, type)
  }

  return town
}
