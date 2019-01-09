setup.toggleThrowaway = function (npc, isThrowaway) {
  if (!isThrowaway) {
    npc.isThrowaway = false
    npc.profile = function (npc, base) {
      base = npc.name || base
      return '<<profile `$npcs[' + JSON.stringify(npc.key) + '] `' + JSON.stringify(base) + '>>'
    }
    State.variables.npcs[npc.key] = npc
    delete State.variables.throwawayNpcs[npc.key]
  } else {
    npc.isThrowaway = true
    npc.profile = function (npc, base) {
      base = npc.name || base
      return '<<profile `$throwawayNpcs[' + JSON.stringify(npc.key) + '] `' + JSON.stringify(base) + '>>'
    }
    State.variables.throwawayNpcs[npc.key] = npc
    delete State.variables.npcs[npc.key]
  }
  return npc
}
