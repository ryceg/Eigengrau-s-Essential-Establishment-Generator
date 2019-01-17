/* global setup clone */
/* Returns an Array of factions for a leadership type. */
setup.factionsForType = function (town, leadershipType) {
  var found = []
  for (var faction in town.factions) {
    if (faction.leadershipType === leadershipType) {
      found.push(clone(faction))
    }
  }
  if (found.length === 0) {
    var tempFaction = setup.createFaction(town, {
      leadershipType: 'individual',
      isThrowaway: true
    })
    town.factions[tempFaction.key] = tempFaction
    found.push(tempFaction)
  }
  console.log(found)
  return found
}
