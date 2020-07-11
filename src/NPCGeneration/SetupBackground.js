
setup.createBackground = npc => {
  console.log(`assigning background traits to ${npc.name}...`)

  let backgroundOrigin
  let bond
  let ideal

  const currentBackgroundTraits = setup.npcData.backgroundTraits[npc.background]
  const defaultBackgroundTraits = setup.npcData.backgroundTraits.commoner

  if (typeof currentBackgroundTraits !== 'undefined') {
    backgroundOrigin = Array.isArray(currentBackgroundTraits.backgroundOrigin)
      ? currentBackgroundTraits.backgroundOrigin.random()
      : defaultBackgroundTraits.backgroundOrigin.random()

    bond = Array.isArray(currentBackgroundTraits.bond)
      ? currentBackgroundTraits.bond.random()
      : defaultBackgroundTraits.bond.random()

    ideal = Array.isArray(currentBackgroundTraits.ideal)
      ? currentBackgroundTraits.ideal.random()
      : defaultBackgroundTraits.ideal.random()
  } else {
    console.log(`${npc.name}'s background of ${npc.background} was not valid.`)
    backgroundOrigin = setup.npcData.backgroundTraits.commoner.backgroundOrigin.random()
    bond = setup.npcData.backgroundTraits.commoner.bond.random()
  }

  npc.backgroundOrigin = npc.backgroundOrigin || backgroundOrigin
  npc.bond = npc.bond || bond
  npc.ideal = npc.ideal || ideal
}
