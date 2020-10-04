setup.createReligiosity = (town, npc) => {
  console.log(`Creating religion strength for ${npc.name}`)
  npc.roll.religiosity = lib.fm(lib.dice(2, 40) + 10, town.roll.religiosity - 50)
  npc.roll.religiosity = Math.clamp(npc.roll.religiosity, 1, 100)

  console.log(`Creating religion strength for ${npc.name}`)
  console.log(npc)
  // TODO: transfer religiosity to the religion object; for some reason the defineRollDataGetter isn't playing nicely with it.
  // lib.defineRollDataGetter(npc, setup.npcData.religion, 'religiosity', 'religiosity')
  if (!npc.religion.strength) {
    const temp = setup.npcData.religion.strength.find(desc => {
      return desc[0] <= npc.roll.religiosity
    })
    npc.religion.strength = temp[1]
    if (typeof npc.religion.strength === 'undefined') {
      npc.religion.strength = 'quiet true believer'
    }
  } else {
    const temp = setup.npcData.religion.strength.find(desc => {
      return desc[1] === npc.religion.strength
    })
    npc.roll.religiosity = temp[0] + random(1, 5)
  }
}
