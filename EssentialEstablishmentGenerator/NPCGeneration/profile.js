setup.profile = function (obj, base, type) {
  // obj is the object. It is mandatory.

  // base is the user-facing text
  base = base || obj.name || obj.race

  // type is the type of object it is- it points towards npcs as a default.
  // For buildings, point towards town.buildings.tavern
  // For factions, point towards town.factions
  type = type || 'npcs'
  return '<<profile `$' + type + '[' + JSON.stringify(obj.key) + '] `' + JSON.stringify(base) + '>>'
}
