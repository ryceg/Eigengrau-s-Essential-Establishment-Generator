setup.createReligiosity = function (town, npc) {
  console.log(`Creating religion strength for ${npc.name}`)
  npc.roll.religiosity = Math.fairmath(dice(2, 40) + 10, town.roll.religiosity - 50)
  Math.clamp(npc.roll.religiosity, 1, 100)

  console.log(`Creating religion strength for ${npc.name}`)
  console.log(npc)
  // TODO: transfer religiosity to the religion object; for some reason the defineRollDataGetter isn't playing nicely with it.
  npc.religion.strength = ''
  setup.defineRollDataGetter(npc, setup.npcData.religion, 'religiosity', 'religiosity')
}
