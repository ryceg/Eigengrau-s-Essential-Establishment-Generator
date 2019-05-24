
setup.createBackground = function (npc) {
  console.log('assigning background traits to ' + npc.name + '...')
  var backgroundOrigin
  var bond
  var ideal
  if (typeof setup.npcData.backgroundTraits[npc.background] !== 'undefined') {
    backgroundOrigin = Array.isArray(setup.npcData.backgroundTraits[npc.background].backgroundOrigin)
      ? setup.npcData.backgroundTraits[npc.background].backgroundOrigin.seededrandom()
      : setup.npcData.backgroundTraits['commoner'].backgroundOrigin.seededrandom()
    bond = Array.isArray(setup.npcData.backgroundTraits[npc.background].bond)
      ? setup.npcData.backgroundTraits[npc.background].bond.seededrandom()
      : setup.npcData.backgroundTraits['commoner'].bond.seededrandom()
    ideal = Array.isArray(setup.npcData.backgroundTraits[npc.background].ideal)
      ? setup.npcData.backgroundTraits[npc.background].ideal.seededrandom()
      : setup.npcData.backgroundTraits['commoner'].ideal.seededrandom()
  } else {
    console.log(npc.name + "'s background of " + npc.background + ' was not valid.')
    backgroundOrigin = setup.npcData.backgroundTraits['commoner'].backgroundOrigin.seededrandom()
    bond = setup.npcData.backgroundTraits['commoner'].bond.seededrandom()
  }
  npc.backgroundOrigin = npc.backgroundOrigin || backgroundOrigin
  npc.bond = npc.bond || bond
  npc.ideal = npc.ideal || ideal

  return npc
}
