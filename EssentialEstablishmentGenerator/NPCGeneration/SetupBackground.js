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
  //
  // npc.knownLanguages.push(
  //   setup.npcData.backgroundTraits[npc.background].knownLanguages(npc) || getLanguages(npc))
  //
  // setup.getBackgroundOrigin = function (npc) {
  //   if (Object.keys(setup.npcData.backgroundTraits).includes(npc.background)) {
  //     npc.backgroundOrigin = setup.npcData.backgroundTraits[npc.background].backgroundOrigin.random()
  //   } else {
  //     npc.backgroundOrigin = setup.npcData.backgroundTraits['commoner'].backgroundOrigin.random()
  //   }
  //   return npc
  // }
  //
  // setup.getBond = function (npc) {
  //   if (Object.keys(setup.npcData.backgroundTraits).includes(npc.background)) {
  //     npc.bond = setup.npcData.backgroundTraits[npc.background].bond.random()
  //   } else {
  //     npc.bond = setup.npcData.backgroundTraits['commoner'].bond.random()
  //   }
  //   return npc
  // }
  //
  // var newLanguage = function (npc) {
  //   var allLanguages = setup.npcData.standardLanguages.concatUnique(setup.npcData.exoticLanguages)
  //   var availableLanguages = allLanguages.delete(npc.knownLanguages)
  //   return availableLanguages.pluck()
  // }
  //
  // npc.backgroundOrigin = npc.backgroundOrigin || setup.getBackgroundOrigin(npc)
  // npc.bond = npc.bond || setup.getBond(npc)
  // // npc.wealth += setup.npcData.backgroundTraits[npc.background].wealth || dice(4, 60)
  // if (setup.npcData.backgroundTraits[npc.background].extraLanguage === true) {
  //   npc.knownLanguages.push(setup.npcData.exoticLanguages.random())
  //   console.log('New language!')
  // } else if (random(1, 100) > 95) {
  //   // npc.knownLanguages.push(newLanguage(npc))
  //   npc.knownLanguages.push(setup.npcData.exoticLanguages.random())
  //   console.log('New language!')
  // }
  return npc
}
