setup.deleteBuilding = (town, building) => {
  if (building.associatedNPC) {
    setup.deleteNPC(building.associatedNPC)
  }
  delete town.buildings[building.type][building.key]
}
