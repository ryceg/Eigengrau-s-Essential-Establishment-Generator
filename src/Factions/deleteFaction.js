// uses setup.deleteNPC
setup.deleteFaction = function (town, key) {
  console.log(town, key)
  if (town.factions[key].leader) setup.deleteNPC(town.factions[key].leader.key)
  if (key in town.factions) {
    const deleted = town.factions[key]
    console.log(`Deleting faction ${deleted.name}...`)
    delete town.factions[key]
    return deleted
  }
}
