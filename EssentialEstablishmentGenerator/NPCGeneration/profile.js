setup.profile = function (npc, base) {
  base = base || npc.name
  return '<<profile `$npcs[' + JSON.stringify(npc.key) + '] `' + JSON.stringify(base) + '>>'
}
