setup.findExistingNpc = function (town, npcs, npc, param, createNew) {
  console.log('Searching for an existing NPC')
  console.log({ param })
  const npcArray = Object.keys(npcs)
  for (const obj of Object.keys(npcArray)) {
    if (param(town, npc, obj) === true) {
      console.log(obj)
      return npcs[obj]
    }
  }
  if (createNew) {
    return setup.createNPC(town, createNew)
  }
}

setup.filterNpcByProfession = function (npcs, profession) {
  const array = []
  const npcArray = Object.keys(npcs)
  for (const obj of npcArray) {
    if (npcs[obj].profession === profession) {
      array.push(npcs[obj])
    }
  }
  return array
}
