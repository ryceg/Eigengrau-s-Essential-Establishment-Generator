setup.findExistingNpc = function (town, npcs, npc, param, createNew) {
  console.log('Searching for an existing NPC')
  console.log({ param })
  for (const obj in npcs) {
    if (param(town, npc, obj) === true) {
      console.log(obj)
      return npcs[obj]
    }
  }
  if (createNew) {
    return setup.createNPC(town, createNew)
  }
}

setup.findNpcByProfession = function (npcs, profession) {
  const array = []
  for (const obj in npcs) {
    if (npcs[obj].profession === profession) {
      array.push(npcs[obj])
    }
  }
  return array
}
