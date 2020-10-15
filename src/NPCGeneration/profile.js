/**
 * This is a function that returns the profile widget for the provided object.
 * @param obj - The object. It is mandatory.
 * @param type - The type of object it is- it points towards npcs as a default.
 * For buildings, point towards town.buildings.tavern
 * TODO: update documentation here.
 * For factions, point towards `town.factions`
 */
setup.profile = (obj, readout, type = 'npcs') => {
  if (typeof obj === 'string') {
    console.warn(`Profile function for ${obj} called with a string.`)
    const targetObj = getTarget(type)
    obj = targetObj[type][obj]
  }

  // the user-facing text
  const text = JSON.stringify(readout || obj.name || obj.descriptor)

  const key = JSON.stringify(obj.key)

  return `<<profile \`$${type}[${key}] \`${text}>>`
}

/**
 * @param {string} type
 * @returns {Record<string,unknown>}
 */
function getTarget (type) {
  switch (type) {
    case 'npcs':
    case 'npc':
      return State.variables.npcs
    case 'buildings':
    case 'building':
    case 'town.buildings':
      return State.variables.town.buildings
    case 'factions':
    case 'faction':
    case 'town.factions':
      return State.variables.town.factions
  }

  // TODO: add a function to find the correct object.
  console.error(`setup.profile called with the type of ${type}!`)
  return State.variables.npcs
}
