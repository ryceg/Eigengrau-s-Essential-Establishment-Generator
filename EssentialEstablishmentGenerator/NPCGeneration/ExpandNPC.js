setup.ExpandNPC = function (town, npc) {
  console.log(`expanding ${npc.race} ${npc.key}...`)
  npc.hasHistory = true
  npc.isShallow = false

  if (npc.family === undefined) setup.createFamily(town, npc)
  setup.ExpandFamily(town, npc)

  setup.createHistory(town, npc)
  setup.createLifeEvents(town, npc)
}
