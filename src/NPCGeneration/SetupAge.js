
setup.createAge = function (npc) {
  console.log(`ageing ${npc.name}...`)

  const ageDescriptors = lib.raceTraits[npc.race].ageTraits.ageDescriptors

  if (typeof ageDescriptors !== 'undefined') {
    npc.age = ageDescriptors.find(descriptor => {
      return descriptor[0] <= npc.ageYears
    })[1]
  } else {
    console.log('Called age descriptor without a valid array.')
  }

  if (npc.ageStage === 'child') {
    npc.hasClass = false
    npc.profession = npc.age
    // npc.dndClass = npc.age
    npc.background = 'child'
  }
  return npc
}

setup.isOfAge = (ageStage, race, ageYears) => {
  return ageYears >= lib.raceTraits[race].ageTraits[ageStage].baseAge
}
