
setup.createRace = function (npc) {
  console.log('assigning racial traits to ' + npc.name + '...')
  if (random(1, 100) >= setup.npcData.raceTraits[npc.race].genderTraits[npc.gender].beardProbability) {
    npc.beard = setup.npcData.raceTraits[npc.race].beard.seededrandom()
  }
  console.log('base height: ' + setup.npcData.raceTraits[npc.race].genderTraits[npc.gender].baseHeight)
  npc.heightRoll = setup.npcData.raceTraits[npc.race].genderTraits[npc.gender].baseHeight + setup.npcData.raceTraits[npc.race].genderTraits[npc.gender].heightModifier()
  npc.weightRoll = setup.npcData.raceTraits[npc.race].genderTraits[npc.gender].baseWeight + (setup.npcData.raceTraits[npc.race].genderTraits[npc.gender].heightModifier() * setup.npcData.raceTraits[npc.race].genderTraits[npc.gender].weightModifier())
  npc.bmi = (Math.trunc((npc.weightRoll / (npc.heightRoll * npc.heightRoll)) * setup.npcData.raceTraits[npc.race].bmiModifier))
  npc.weight = npc.weight || setup.closestMatch(setup.bmiDescriptions, 'weight', 'bmi', 'muscleMass', npc.bmi, npc.muscleMass)

  npc.height = setup.npcData.heightChart.find(function (descriptor) {
    return descriptor[0] <= npc.heightRoll
  })[1]

  return npc
}
