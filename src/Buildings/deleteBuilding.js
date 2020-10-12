setup.deleteBuilding = (town, building) => {
  if (building.associatedNPC) {
    setup.deleteNPC(building.associatedNPC)
  }

  const index = town.buildings.findIndex(({ key }) => key === building.key)
  town.buildings.splice(index, 1)
}
