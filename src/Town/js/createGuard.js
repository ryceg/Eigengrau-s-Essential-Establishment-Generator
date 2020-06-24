
setup.createGuard = function (town) {
  console.groupCollapsed('creating the guard...')

  const guard = {
    associatedTown: town.name,
    objectType: 'guard',
    captain: setup.createNPC(town, {
      profession: 'guard',
      background: 'soldier'
    }),
    passageName: 'GuardOutput',
    livery: `${lib.guardData.primaryColours.random()} and ${lib.guardData.secondaryColours.random()} livery adorned with an image of ${lib.guardData.insignia.random()}`
  }

  const nameData = lib.guardData.name
  guard.name = [
    `The ${nameData.group.random()} of ${town.name}`,
    `The ${town.name} ${nameData.group.random()}`,
    `The ${nameData.group.random()} of ${nameData.alternateAdjective.random()}`,
    `The ${nameData.adjective.random()} ${nameData.group.random()}`,
    `The ${nameData.adjective.random()} ${nameData.noun.random()}`,
    `The ${nameData.adjective.random()} ${nameData.noun.random()} of ${nameData.alternateAdjective.random()}`,
    `The ${nameData.adjective.random()} ${nameData.noun.random()} of ${town.name}`,
    `The ${nameData.group.random()} ${nameData.noun.random()} of ${town.name}`
  ].random()

  console.log(`${guard.name} is the name of the guard.`)
  console.groupEnd()
  return guard
}
