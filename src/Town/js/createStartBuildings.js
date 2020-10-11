setup.createStartBuildings = town => {
  console.log('Creating starting buildings...', town)

  const buildingTypes = [
    'Town Square',
    // 'Tavern',
    // 'General Store',
    // 'Smithy',
    'Market'
    // 'Temple'
  ]

  if (town.location === 'seashore' || town.location === 'river coast') {
    buildingTypes.push('Docks')
  }
  if (town.population > 500 || town.roll.wealth > 60) {
    buildingTypes.push('Graveyard')
  }
  if (town.hasBrothel) {
    buildingTypes.push('Brothel')
  }

  const professions = {
    'Tavern': ['bartender'],
    'Alchemist': ['alchemist', 'wizard'],
    'Bakery': ['pastry chef', 'baker'],
    'General Store': ['shopkeep'],
    'Dungeon': ['jailer'],
    'Castle': ['castellan', 'king'],
    'Smithy': ['goldsmith', 'weaponsmith', 'silversmith', 'blacksmith', 'farrier', 'armorer'],
    'Florist': ['florist', 'botanist'],
    'Tailor': ['tailor'],
    'Butcher': ['butcher'],
    'Cobbler': ['cobbler'],
    'Brothel': ['pimp'],
    'Barber': ['barber', 'surgeon'],
    'Temple': ['high priest', 'archbishop', 'cardinal', 'bishop', 'priest', 'deacon']
  }

  for (const buildingType of lib.keys(professions)) {
    console.log(buildingType)

    for (const profession of professions[buildingType]) {
      console.log(professions[buildingType])

      if (town.professions[profession] && town.professions[profession].population > 0) {
        console.log(profession, 'exists')

        buildingTypes.push(buildingType)
      }
    }
  }

  for (const type of buildingTypes) {
    console.log(`Creating ${lib.articles.output(type)}...`)
    setup.createNewBuilding(town, type)
  }
}
