setup.createGuard = town => {
  console.groupCollapsed('Creating the guard...')

  const guard = {
    name: lib.createGuardName(town.name),
    livery: createGuardLivery(),
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

/**
 * @returns {string}
 */
function createGuardLivery () {
  const insignia = lib.random(lib.guardData.insignia)
  const primaryColour = lib.random(lib.guardData.primaryColours)
  const secondaryColour = lib.random(lib.guardData.secondaryColours)
  return `${primaryColour} and ${secondaryColour} livery adorned with an image of ${insignia}`
}
