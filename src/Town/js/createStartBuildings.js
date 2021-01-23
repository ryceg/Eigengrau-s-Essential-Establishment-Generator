// uses setup.createNewBuilding
setup.createStartBuildings = town => {
  console.log('Creating starting buildings...', town)

  const buildingsToCreate = [
    { buildingType: 'Town Square' },
    { buildingType: 'Market' },
    { buildingType: 'Tavern' }
  ]

  if (town.location === 'seashore' || town.location === 'river coast') {
    buildingsToCreate.push({ buildingType: 'Docks' })
  }

  const professions = {
    'Tavern': ['bartender'],
    'Alchemist': ['alchemist', 'wizard'],
    'Bakery': ['pastry chef', 'baker'],
    'General Store': ['shopkeep'],
    'Graveyard': ['gravedigger', 'sexton'],
    'Dungeon': ['jailer', 'bailiff'],
    'Castle': ['castellan', 'king'],
    'Guardhouse': ['city watch', 'captain', 'bailiff', 'guard'],
    'Smithy': ['weaponsmith', 'blacksmith', 'farrier', 'armorer'],
    'Florist': ['florist', 'botanist'],
    'Jeweller': ['lapidary', 'goldsmith', 'silversmith', 'jeweller'],
    'Tailor': ['tailor', 'seamstress', 'fashion designer'],
    'Butcher': ['butcher'],
    'Cobbler': ['cobbler', 'shoemaker'],
    'Brothel': ['pimp'],
    'Barber': ['barber', 'surgeon'],
    'Temple': ['high priest', 'archbishop', 'cardinal', 'bishop', 'priest', 'deacon']
    // TODO
    // 'Carpentry Shop': ['carpenter'],
    // 'Apiary': ['beekeeper'],
    // 'Glassblower': ['glazier'],
    // 'Library': ['librarian'],
    // 'Book Shop': ['book seller'],
    // 'Lumber Mill': ['wood seller', 'forester', 'lumberjack'],
    // 'Masonry': ['mason', 'brick mason', 'construction worker', 'plasterer'],
    // 'Nursery': ['gardener'],
    // 'Stable': ['animal Handler'],
    // 'Theatre': ['actor'],
    // 'Printing Press': ['printer', 'copyist'],
    // 'Farmhouse': ['farmer'],
    // 'Haberdashery': ['hatter']
  }

  for (const buildingType of lib.keys(professions)) {
    console.log(buildingType)
    for (const profession of professions[buildingType]) {
      console.log(professions[buildingType])
      if (town.professions[profession] && town.professions[profession].population > 0) {
        buildingsToCreate.push({ buildingType, opts: { npc: { profession } } })
        if (town.professions[profession].population > 5) {
          // there's a LOT of this profession = a second
          buildingsToCreate.push({ buildingType, opts: { npc: { profession } } })
        }
      }
    }
  }

  for (const building of lib.cullBuildings(buildingsToCreate)) {
    console.log(`Creating ${lib.articles.output(building.buildingType)}...`)
    setup.createNewBuilding(town, building.buildingType, building.opts)
  }
}
