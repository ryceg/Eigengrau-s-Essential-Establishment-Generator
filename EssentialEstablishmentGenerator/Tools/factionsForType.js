/* global setup clone */
/* Returns a random of factions for a leadership type. */
setup.factionsForType = function (town, variable, value) {
  // town is the town object. Like most times it's passed as an argument, it's mandatory here.
  // variable is the thing that we're searching for. This can be leadershipType, type, etc.
  // value is the value that is expected for variable.
  var found = []
  for (var faction in town.factions) {
    if (faction[variable] === value) {
      found.push(clone(faction))
    }
  }
  if (found.length === 0) {
    var tempFaction = setup.createFaction(town, {
      [variable]: value,
      isThrowaway: true
    })
    town.factions[tempFaction.key] = tempFaction
    found.push(tempFaction)
  }
  console.log(found)
  return found.seededrandom()
}
