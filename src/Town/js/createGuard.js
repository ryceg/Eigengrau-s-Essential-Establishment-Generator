
setup.createGuard = function (town) {
  console.groupCollapsed('creating the guard...')
  // console.log(townName + ' is the townName passed to the guard.')
  const guard = {
    associatedTown: town.name,
    objectType: 'guard',
    captain: setup.createNPC(town, {
      profession: 'guard',
      background: 'soldier'
    }),
    passageName: 'GuardOutput',
    livery: `${setup.guardData.primaryColours.random()} and ${setup.guardData.secondaryColours.random()} livery adorned with an image of ${setup.guardData.insignia.random()}`
  }

  const guardData = setup.guardData.name
  guard.name = [
    `The ${guardData.group.random()} of ${town.name}`,
    `The ${town.name} ${guardData.group.random()}`,
    `The ${guardData.group.random()} of ${guardData.alternateAdjective.random()}`,
    `The ${guardData.adjective.random()} ${guardData.group.random()}`,
    `The ${guardData.adjective.random()} ${guardData.noun.random()}`,
    `The ${guardData.adjective.random()} ${guardData.noun.random()} of ${guardData.alternateAdjective.random()}`,
    `The ${guardData.adjective.random()} ${guardData.noun.random()} of ${town.name}`,
    `The ${guardData.group.random()} ${guardData.noun.random()} of ${town.name}`
  ].random()

  console.log(`${guard.name} is the name of the guard.`)
  console.groupEnd()
  return guard
}
