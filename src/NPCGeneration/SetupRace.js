
setup.createRace = npc => {
  const raceTraits = lib.raceTraits[npc.race]
  const genderTraits = raceTraits.genderTraits[npc.gender]

  console.log(`assigning racial traits to ${npc.name}...`)
  if (random(1, 100) >= genderTraits.beardProbability) {
    npc.beard = raceTraits.beard.random()
  }

  console.log(`base height: ${genderTraits.baseHeight}`)
  npc.heightRoll = genderTraits.baseHeight + genderTraits.heightModifier()
  npc.weightRoll = genderTraits.baseWeight + (genderTraits.heightModifier() * genderTraits.weightModifier())
  npc.bmi = Math.trunc((npc.weightRoll / (npc.heightRoll * npc.heightRoll)) * raceTraits.bmiModifier)
  npc.weight = npc.weight || lib.closestMatch(lib.bmiDescriptions, 'weight', 'bmi', 'muscleMass', npc.bmi, npc.muscleMass)

  npc.height = setup.npcData.heightChart.find(descriptor => {
    return descriptor[0] <= npc.heightRoll
  })[1]

  return npc
}
