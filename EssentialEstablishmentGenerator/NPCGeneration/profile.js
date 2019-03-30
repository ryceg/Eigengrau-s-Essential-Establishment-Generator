setup.profile = function (npc, base) {
  base = base || npc.name || npc.race
  return '<<profile `$npcs[' + JSON.stringify(npc.key) + '] `' + JSON.stringify(base) + '>>'
}
