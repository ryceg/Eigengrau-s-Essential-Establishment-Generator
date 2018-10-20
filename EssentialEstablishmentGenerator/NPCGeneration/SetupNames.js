setup.createName = function (npc) {
  if (!npc) {
    return setup.npcData.raceTraits['human'].genderTraits['man'].firstName.random().toUpperFirst()
  }
  npc.formalName = npc.formalName || npc.title + ' ' + npc.lastName || npc.name
  return npc
}
