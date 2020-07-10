
setup.createBackground = function (npc) {
  console.log(`assigning background traits to ${npc.name}...`)
  let backgroundOrigin
  let bond
  let ideal
  if (typeof setup.npcData.backgroundTraits[npc.background] !== 'undefined') {
    backgroundOrigin = Array.isArray(setup.npcData.backgroundTraits[npc.background].backgroundOrigin)
      ? setup.npcData.backgroundTraits[npc.background].backgroundOrigin.random()
      : setup.npcData.backgroundTraits.commoner.backgroundOrigin.random()
    bond = Array.isArray(setup.npcData.backgroundTraits[npc.background].bond)
      ? setup.npcData.backgroundTraits[npc.background].bond.random()
      : setup.npcData.backgroundTraits.commoner.bond.random()
    ideal = Array.isArray(setup.npcData.backgroundTraits[npc.background].ideal)
      ? setup.npcData.backgroundTraits[npc.background].ideal.random()
      : setup.npcData.backgroundTraits.commoner.ideal.random()
  } else {
    console.log(`${npc.name}'s background of ${npc.background} was not valid.`)
    backgroundOrigin = setup.npcData.backgroundTraits.commoner.backgroundOrigin.random()
    bond = setup.npcData.backgroundTraits.commoner.bond.random()
  }

  npc.backgroundOrigin = npc.backgroundOrigin || backgroundOrigin
  npc.bond = npc.bond || bond
  npc.ideal = npc.ideal || ideal

  return npc
}
