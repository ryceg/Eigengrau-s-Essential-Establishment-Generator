setup.findExistingNpc = function (town, npcs, npc, param, createNew) {
  console.log(`Searching for an existing NPC`)
  console.log({ param })
  for (const obj in npcs) {
    if (param(town, npc, obj) === true) {
      console.log(obj)
      return obj
    }
  }
  if (createNew) {
    return setup.createNPC(town, createNew)
  }
}
