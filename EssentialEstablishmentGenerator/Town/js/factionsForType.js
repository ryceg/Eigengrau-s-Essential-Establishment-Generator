/* Returns an Array of factions for a leadership type. */
setup.factionsForType = function (town, leadershipType) {
  var found = []
  Object.keys(town.factions).forEach(function (group) {
    town.factions[group].forEach(function (faction) {
      if (faction.leadershipType === leadershipType) {
        found.push(clone(faction))
      }
    })
  })
  return found
}
