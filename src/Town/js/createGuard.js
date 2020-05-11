
setup.createGuard = function (town) {
  console.groupCollapsed('creating the guard...')
  // console.log(townName + ' is the townName passed to the guard.')
  const guard = {
    associatedTown: town.name,
    captain: setup.createNPC(town, {
      dndClass: 'fighter',
      profession: 'guard',
      background: 'soldier'
    }),
    passageName: 'GuardOutput',
    livery: setup.guardData.primaryColours.seededrandom() + ' and ' + setup.guardData.secondaryColours.seededrandom() + ' livery adorned with an image of ' + setup.guardData.insignia.seededrandom()
  }

  const nameRoll = random(1, 8)
  console.log('nameRoll is ' + nameRoll)
  if (nameRoll === 1) {
    guard.name = 'The ' + setup.guardData.name.group.seededrandom() + ' of ' + town.name
  } else if (nameRoll === 2) {
    guard.name = 'The ' + town.name + ' ' + setup.guardData.name.group.seededrandom()
  } else if (nameRoll === 3) {
    guard.name = 'The ' + setup.guardData.name.group.seededrandom() + ' of ' + setup.guardData.name.alternateAdjective.seededrandom()
  } else if (nameRoll === 4) {
    guard.name = 'The ' + setup.guardData.name.adjective.seededrandom() + ' ' + setup.guardData.name.group.seededrandom()
  } else if (nameRoll === 5) {
    guard.name = 'The ' + setup.guardData.name.adjective.seededrandom() + ' ' + setup.guardData.name.noun.seededrandom()
  } else if (nameRoll === 6) {
    guard.name = 'The ' + setup.guardData.name.adjective.seededrandom() + ' ' + setup.guardData.name.noun.seededrandom() + ' of ' + setup.guardData.name.alternateAdjective.seededrandom()
  } else if (nameRoll === 7) {
    guard.name = 'The ' + setup.guardData.name.adjective.seededrandom() + ' ' + setup.guardData.name.noun.seededrandom() + ' of ' + town.name
  } else if (nameRoll === 8) {
    guard.name = 'The ' + setup.guardData.name.group.seededrandom() + ' ' + setup.guardData.name.noun.seededrandom() + ' of ' + town.name
  }
  console.log(guard.name + ' is the name of the guard.')
  console.groupEnd()
  return guard
}
