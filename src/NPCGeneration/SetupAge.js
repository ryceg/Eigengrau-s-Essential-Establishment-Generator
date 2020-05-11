
setup.createAge = function (npc) {
  console.log('ageing ' + npc.name + '...')
  if (typeof setup.npcData.raceTraits[npc.race].ageTraits.ageDescriptors !== 'undefined') {
    npc.age = setup.npcData.raceTraits[npc.race].ageTraits.ageDescriptors.find(function (descriptor) {
      return descriptor[0] <= npc.ageYears
    })[1]
  } else {
    console.log('Called age descriptor without a valid array.')
  }

  if (npc.ageStage === 'child') {
    npc.hasClass = false
    npc.profession = npc.age
    npc.dndClass = npc.age
    npc.background = 'child'
  }
  return npc
}

setup.isOfAge = function (ageStage, race, ageYears) {
  return ageYears >= setup.npcData.raceTraits[race].ageTraits[ageStage].baseAge
}
