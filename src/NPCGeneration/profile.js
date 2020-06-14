/**
 * This is a function that returns the profile widget for the provided object.
 * @param obj - The object. It is mandatory.
 * @param type - The type of object it is- it points towards npcs as a default.
 * For buildings, point towards town.buildings.tavern
 * TODO: update documentation here.
 * For factions, point towards `town.factions`
 */
setup.profile = (obj, readout, type = 'npcs') => {
  let targetObj
  switch (type) {
    case 'npcs':
      targetObj = State.variables.npcs
      break
    case 'buildings':
      targetObj = State.variables.town.buildings
      break
    case 'town.buildings':
      targetObj = State.variables.town.buildings
      break
    case 'town.factions':
      targetObj = State.variables.town.factions
      break
    case 'factions':
      targetObj = State.variables.town.factions
      break
    default:
      // TODO: add a function to find the correct object.
      console.error(`setup.profile called with the type of ${type}!`)
      targetObj = State.variables.npcs
  }
  if (typeof obj === 'string') {
    console.error(`Profile function for ${obj} called with a string.`)
    obj = targetObj[type][obj]
  }

  // the user-facing text
  const text = JSON.stringify(readout || obj.name || obj.descriptor)

  const key = JSON.stringify(obj.key)

  return `<<profile \`$${type}[${key}] \`${text}>>`
}
