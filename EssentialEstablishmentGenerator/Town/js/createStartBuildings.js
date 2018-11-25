/* global setup */
setup.createStartBuildings = function (town) {
  var building = ['tavern', 'alchemist', 'GeneralStore', 'smithy', 'market']

  if (town.hasBrothel) {
    building.push('brothel')
  }
  building.forEach(function (building) {
    town.buildings[building].push(setup['create' + building.toUpperFirst()](town))
  })
  return town
}
