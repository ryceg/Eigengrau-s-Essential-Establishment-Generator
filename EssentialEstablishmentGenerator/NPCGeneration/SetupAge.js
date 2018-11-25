/* global setup */
setup.createAge = function (npc) {
  console.log('ageing ' + npc.name + '...')
  if (typeof setup.npcData.raceTraits[npc.race].ageTraits.ageDescriptors !== 'undefined') {
    npc.age = setup.npcData.raceTraits[npc.race].ageTraits.ageDescriptors.find(function (descriptor) {
      return descriptor[0] <= npc.ageYears;
    })[1];
  } else {
    console.log('Called age descriptor without a valid array.')
  }
  return npc;
}
