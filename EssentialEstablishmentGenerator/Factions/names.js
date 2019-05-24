setup.nameFaction = function (town, type) {
  var factionData = setup.factionData.type[type]

  var name = [
    'The ' + factionData.group.seededrandom() + ' of ' + factionData.adjective.seededrandom() + ' ' + factionData.main.seededrandom(),
    'The ' + factionData.group.seededrandom() + ' of ' + factionData.main.seededrandom(),
    'The ' + factionData.adjective.seededrandom() + ' ' + factionData.group.seededrandom(),
    'The ' + factionData.main.seededrandom() + ' of ' + town,
    'The ' + town + ' ' + factionData.main.seededrandom(),
    factionData.unique.seededrandom()
  ].seededrandom()
  console.log(name + ' loaded')
  return name
}
