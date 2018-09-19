setup.createName = function (npc) {
  switch (npc.gender) {
    case 'woman':
      Object.assign(npc, {
        firstName: setup.npcData.raceTraits[npc.race].femaleFirstName.random()
      })
      break
    default:
      Object.assign(npc, {
        firstName: setup.npcData.raceTraits[npc.race].maleFirstName.random()
      })
      break
  }
  npc.lastName = npc.lastName || setup.npcData.raceTraits[npc.race].lastName.random()
  npc.name = npc.firstName + ' ' + npc.lastName
  npc.formalName = npc.title + ' ' + npc.lastName
  return npc
}
