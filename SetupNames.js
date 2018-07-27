setup.createName = function (npc) {
  switch (npc.gender) {
    case 'man':
      Object.assign(npc, {
        firstname: npcJSON.raceTraits[npc.race].maleFirstName.random()
      })
      break
    case 'woman':
      Object.assign(npc, {
        firstname: npcJSON.raceTraits[npc.race].femaleLastName.random()
      })
      break
  }
  npc.lastname = npc.lastname || npcJSON.raceTraits[npc.race].lastName.random()
  npc.name = npc.firstname + ' ' + npc.lastname
  npc.formalName = npc.title + ' ' + npc.lastname
  return npc
}
