setup.createName = function (npc) {
  npc.formalName = npc.formalName || npc.title + ' ' + npc.lastName
  return npc
}
