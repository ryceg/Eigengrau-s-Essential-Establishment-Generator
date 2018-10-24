setup.createGuard = function (townName) {
  // console.log(townName + ' is the townName passed to the guard.')
  var guard = {
    captain: setup.createNPC({
      dndClass: 'fighter',
      background: 'soldier'
    }),
    passageName: 'GuardOutput',
    livery: setup.guardData.primaryColours.random() + ' and ' + setup.guardData.secondaryColours.random() + ' livery adorned with an image of ' + setup.guardData.insignia.random()
  }

  var nameRoll = random(1, 6)
  // console.log('nameRoll is ' + nameRoll)
  if (nameRoll === 1) {
    guard.name = 'The ' + setup.guardData.group.random() + ' of ' + townName
  } else if (nameRoll === 2) {
    guard.name = 'The ' + townName + ' ' + setup.guardData.group.random()
  } else if (nameRoll === 3) {
    guard.name = 'The ' + setup.guardData.group.random() + ' of ' + [setup.guardData.alternateAdjective.random(), setup.guardData.alternateAdjective.random(), setup.guardData.alternateAdjective.random(), townName].random()
  } else if (nameRoll === 4) {
    guard.name = 'The ' + setup.guardData.adjective.random() + ' ' + setup.guardData.group.random()
  } else if (nameRoll === 5) {
    guard.name = 'The ' + setup.guardData.adjective.random() + ' ' + setup.guardData.noun.random()
  } else {
    guard.name = 'The ' + setup.guardData.adjective.random() + ' ' + setup.guardData.noun.random() + ' of ' + [setup.guardData.alternateAdjective.random(), setup.guardData.alternateAdjective.random(), setup.guardData.alternateAdjective.random(), townName].random()
  }
  return guard
}
