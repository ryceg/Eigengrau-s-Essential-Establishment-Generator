/* global setup random */
setup.createRace = function (npc) {
  console.log('assigning racial traits to ' + npc.name + '...')
  if (random(1, 100) >= setup.npcData.raceTraits[npc.race].genderTraits[npc.gender].beardProbability) {
    npc.beard = setup.npcData.raceTraits[npc.race].beard.random()
  }

  npc.heightRoll = setup.npcData.raceTraits[npc.race].genderTraits[npc.gender].baseHeight += setup.npcData.raceTraits[npc.race].genderTraits[npc.gender].heightModifier()
  npc.weightRoll = setup.npcData.raceTraits[npc.race].genderTraits[npc.gender].baseWeight += (setup.npcData.raceTraits[npc.race].genderTraits[npc.gender].heightModifier() * setup.npcData.raceTraits[npc.race].genderTraits[npc.gender].weightModifier())
  npc.bmi = (Math.trunc((npc.weightRoll / (npc.heightRoll * npc.heightRoll)) * setup.npcData.raceTraits[npc.race].bmiModifier))
  npc.weight = npc.weight || setup.closestMatch(setup.bmiDescriptions, 'weight', 'bmi', 'muscleMass', npc.bmi, npc.muscleMass)
  var heightChart = [
    [78, 'giraffe-like'],
    [77, 'extremely tall'],
    [76, 'very tall'],
    [75, 'rather tall'],
    [74, 'quite tall'],
    [73, 'reasonably tall'],
    [72, 'tall'],
    [71, 'taller than average'],
    [70, 'average sized'],
    [69, 'medium sized'],
    [68, 'on the short side'],
    [67, 'somewhat short'],
    [66, 'relatively short'],
    [65, 'short-ish'],
    [64, 'short'],
    [63, 'short'],
    [62, 'rather short'],
    [61, 'barely five foot'],
    [60, 'quite short'],
    [59, 'rather small'],
    [58, 'really short'],
    [57, 'pint sized'],
    [56, 'quite small'],
    [55, 'small'],
    [54, 'squat'],
    [53, 'somewhat squat'],
    [52, 'squite squat'],
    [50, 'rather squat'],
    [48, 'somewhat tiny'],
    [46, 'rather small'],
    [44, 'rather tall (compared to a halfling)'],
    [42, 'tall (for a halfling)'],
    [40, 'barely a metre'],
    [38, 'diminuitive'],
    [36, 'quite diminuitive'],
    [34, 'adorably short'],
    [32, 'tiny'],
    [30, 'so so tiny']
  ]
  npc.height = heightChart.find(function (descriptor) {
    return descriptor[0] <= npc.heightRoll;
  })[1];

  switch (npc.race) {
    case 'human':
      npc.raceNote = npc.height + ' ' + npc.gender
      if (npc.gender === 'man') {
        npc.raceSingular = 'man'
      } else {
        npc.raceSingular = 'woman'
      }
      break
    default:
      npc.raceNote = npc.race
  }

  return npc
}
