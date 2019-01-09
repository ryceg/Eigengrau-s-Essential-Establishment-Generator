setup.profile = function (npc, base) {
  base = base || npc.name
  if (!npc.isThrowaway) {
    return '<<profile `$npcs[' + JSON.stringify(npc.key) + '] `' + JSON.stringify(base) + '>>'
  } else {
    return '<<profile `$throwawayNpcs[' + JSON.stringify(npc.key) + '] `' + JSON.stringify(base) + '>>'
  }
}
