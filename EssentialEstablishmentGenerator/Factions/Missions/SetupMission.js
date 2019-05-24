setup.createMission = function (town, base) {
  var difficulty = ['easy', 'easy', 'easy', 'medium', 'medium', 'hard']
  var details
  var readout
  var targetNPC
  var targetLocation
  var mission = Object.assign({
    category: ['thieves', 'alchemist'].seededrandom(),
    difficulty: difficulty.seededrandom(),
    readout: readout,
    details: details,
    targetNPC: targetNPC,
    targetLocation: targetLocation
  }, base)

  switch (mission.category) {
    case 'thieves':
      setup.thievesMission(mission)
      break
    case 'alchemist':
      setup.alchemistMission(mission)
      break
    case 'bartender':
      setup.bartenderMission(mission)
      break
    case 'merchant':
      setup.merchantMission(mission)
      break
  }

  return mission
}
