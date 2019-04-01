/* global setup */
setup.createStartBuildings = function (town) {
  var building = ['townSquare', 'tavern', 'alchemist', 'GeneralStore', 'smithy', 'market', 'temple', 'docks']

  if (town.hasBrothel) {
    building.push('brothel')
  }

  building.forEach(function (building) {
    if (!town.buildings[building]) {
      town.buildings[building] = []
    }
    town.buildings[building].push(setup['create' + building.toUpperFirst()](town))
  })
  return town
}
