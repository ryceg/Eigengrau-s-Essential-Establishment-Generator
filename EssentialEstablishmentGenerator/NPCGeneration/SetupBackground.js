setup.createBackground = function (npc) {
  var backgroundOrigin = Array.isArray(setup.npcData.backgroundTraits[npc.background].backgroundOrigin)
    ? setup.npcData.backgroundTraits[npc.background].backgroundOrigin.random()
    : setup.npcData.backgroundTraits['commoner'].backgroundOrigin.random()
  var bond = Array.isArray(setup.npcData.backgroundTraits[npc.background].bond)
    ? setup.npcData.backgroundTraits[npc.background].bond.random()
    : setup.npcData.backgroundTraits['commoner'].bond.random()

  npc.backgroundOrigin = npc.backgroundOrigin || backgroundOrigin
  npc.bond = npc.bond || bond
  npc.wealth += dice(2, 50)
  // npc.wealth += typeof setup.npcData.classTraits[npc.background].wealth === 'function'
  //   ? setup.npcData.backgroundTraits[npc.background].wealth()
  //   : dice(2, 50)

  // npc.knownLanguages += typeof setup.npcData.classTraits[npc.background].knownLanguages === 'function'
  //   ? setup.npcData.backgroundTraits[npc.background].knownLanguages()
  //   : dice(2, 50)

  // var getLanguages = function (npc) {
  //   if (random(1, 100) > 95) {
  //     return [(setup.npcData.standardLanguages + setup.npcData.exoticLanguages) - npc.knownLanguages].pluck()
  //   }
  // }

  return npc
}
