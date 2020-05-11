
setup.townBinder = function (town, building, buildingType) {
  console.log('binding ' + building.name + ' to ' + town.name)
  if (typeof town.buildings[buildingType] === 'undefined') {
    console.log('making an empty array for ' + buildingType + 's.')
    town.buildings[buildingType] = []
  }
  town.buildings[buildingType].push(building)
  console.log(town.buildings[buildingType])
}
