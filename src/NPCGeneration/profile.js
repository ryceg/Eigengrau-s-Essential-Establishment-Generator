/**
 * This is a function that returns the profile widget for the provided object.
 * @param obj - The object. It is mandatory.
 * @param type - The type of object it is- it points towards npcs as a default.
 * For buildings, point towards town.buildings.tavern
 * TODO: update documentation here.
 * For factions, point towards `town.factions`
 */
setup.profile = (obj, base, type = 'npcs') => {
  if (typeof obj === 'string') {
    console.error(`Profile function for ${obj} called with a string.`)
    obj = State.variables[type][obj]
  }

  // the user-facing text
  const text = JSON.stringify(base || obj.name || obj.race)

  const key = JSON.stringify(obj.key)

  return `<<profile \`$${type}[${key}] \`${text}>>`
}
