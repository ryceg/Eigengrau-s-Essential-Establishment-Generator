/* Returns a random of factions for a leadership type. */
setup.factionsForType = function (town, variable, value) {
  // town is the town object. Like most times it's passed as an argument, it's mandatory here.
  // variable is the thing that we're searching for. This can be leadershipType, type, etc.
  // value is the value that is expected for variable.
  // if it doesn't find any, it creates a matching faction. This is for plot hooks that require a wizard's college, etc.
  const found = []
  for (const faction in town.factions) {
    if (faction[variable] === value) {
      found.push(clone(faction))
    }
  }
  if (found.length === 0) {
    const tempFaction = setup.createFaction(town, {
      [variable]: value,
      isThrowaway: true
    })
    town.factions[tempFaction.key] = tempFaction
    found.push(tempFaction)
  }
  console.log(found)
  return found.seededrandom()
}
