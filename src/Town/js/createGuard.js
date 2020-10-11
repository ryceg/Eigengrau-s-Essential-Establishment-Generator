setup.createGuard = town => {
  console.groupCollapsed('Creating the guard...')

  const guard = {
    name: createGuardName(town),
    livery: createGuardLivery(),
    associatedTown: town.name,
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
 * @param {Town} town
 * @returns {string}
 */
function createGuardName (town) {
  const { name } = lib.guardData

  return lib.random([
    `The ${name.group.random()} of ${town.name}`,
    `The ${town.name} ${name.group.random()}`,
    `The ${name.group.random()} of ${name.alternateAdjective.random()}`,
    `The ${name.adjective.random()} ${name.group.random()}`,
    `The ${name.adjective.random()} ${name.noun.random()}`,
    `The ${name.adjective.random()} ${name.noun.random()} of ${name.alternateAdjective.random()}`,
    `The ${name.adjective.random()} ${name.noun.random()} of ${town.name}`,
    `The ${name.group.random()} ${name.noun.random()} of ${town.name}`
  ])
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
