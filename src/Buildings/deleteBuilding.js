setup.deleteBuilding = (town, building) => {
  if (building.associatedNPC) {
    setup.deleteNPC(building.associatedNPC)
  }
  const index = town.buildings.indexOf(building)
  town.buildings.splice(index, 1)
}
