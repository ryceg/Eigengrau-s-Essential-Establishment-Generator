setup.createGuard = town => {
  console.groupCollapsed('Creating the guard...')

  const guard = {
    name: lib.createGuardName(town.name),
    livery: lib.createGuardLivery(),
    objectType: 'guard',
    captain: setup.createNPC(town, {
      profession: 'guard',
      background: 'soldier'
    }),
    passageName: 'GuardOutput'
  }

  console.log(`${guard.name} is the name of the guard.`)
  console.groupEnd()
  return guard
}
