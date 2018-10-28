/* global setup random */
setup.createRace = function (npc) {
  console.log('assigning racial traits to ' + npc.name + '...')
  if (random(1, 100) >= setup.npcData.raceTraits[npc.race].genderTraits[npc.gender].beardProbability) {
    npc.beard = setup.npcData.raceTraits[npc.race].beard.random()
  }

  npc.heightRoll = setup.npcData.raceTraits[npc.race].genderTraits[npc.gender].baseHeight += setup.npcData.raceTraits[npc.race].genderTraits[npc.gender].heightModifier()
  npc.weightRoll = setup.npcData.raceTraits[npc.race].genderTraits[npc.gender].baseWeight += (setup.npcData.raceTraits[npc.race].genderTraits[npc.gender].heightModifier() * setup.npcData.raceTraits[npc.race].genderTraits[npc.gender].weightModifier())
  npc.bmi = (Math.trunc((npc.weightRoll / (npc.heightRoll * npc.heightRoll)) * setup.npcData.raceTraits[npc.race].bmiModifier))
  // npc.bmi = (Math.trunc((npc.weightRoll / (npc.heightRoll * npc.heightRoll)) * 703))
  npc.weight = npc.weight || setup.closestMatch(setup.bmiDescriptions, 'weight', 'bmi', 'muscleMass', npc.bmi, npc.muscleMass)

  if (npc.heightRoll > 78) {
    npc.height = 'giraffe-like'
  } else if (npc.heightRoll > 77) {
    npc.height = 'extremely tall'
  } else if (npc.heightRoll > 76) {
    npc.height = 'very tall'
  } else if (npc.heightRoll > 75) {
    npc.height = 'rather tall'
  } else if (npc.heightRoll > 74) {
    npc.height = 'quite tall'
  } else if (npc.heightRoll > 73) {
    npc.height = 'reasonably tall'
  } else if (npc.heightRoll > 72) {
    npc.height = 'tall'
  } else if (npc.heightRoll > 71) {
    npc.height = 'taller than average'
  } else if (npc.heightRoll > 70) {
    npc.height = 'average sized'
  } else if (npc.heightRoll > 69) {
    npc.height = 'average sized'
  } else if (npc.heightRoll > 68) {
    npc.height = 'on the short side'
  } else if (npc.heightRoll > 67) {
    npc.height = 'somewhat short'
  } else if (npc.heightRoll > 66) {
    npc.height = 'relatively short'
  } else if (npc.heightRoll > 65) {
    npc.height = 'short-ish'
  } else if (npc.heightRoll > 64) {
    npc.height = 'short'
  } else if (npc.heightRoll > 63) {
    npc.height = 'short'
  } else if (npc.heightRoll > 62) {
    npc.height = 'rather short'
  } else if (npc.heightRoll > 61) {
    npc.height = 'barely five foot'
  } else if (npc.heightRoll > 60) {
    npc.height = 'short'
  } else if (npc.heightRoll > 59) {
    npc.height = 'quite short'
  } else if (npc.heightRoll > 58) {
    npc.height = 'rather short'
  } else if (npc.heightRoll > 57) {
    npc.height = 'pint sized'
  } else if (npc.heightRoll > 56) {
    npc.height = 'quite small'
  } else if (npc.heightRoll > 55) {
    npc.height = 'small'
  } else if (npc.heightRoll > 54) {
    npc.height = 'squat'
  } else if (npc.heightRoll > 52) {
    npc.height = 'quite squat'
  } else if (npc.heightRoll > 50) {
    npc.height = 'rather squat'
  } else if (npc.heightRoll > 48) {
    npc.height = 'somewhat tiny'
  } else if (npc.heightRoll > 46) {
    npc.height = 'tiny'
  } else if (npc.heightRoll > 44) {
    npc.height = 'rather tall (compared to a halfling)'
  } else if (npc.heightRoll > 42) {
    npc.height = 'tall (for a halfling)'
  } else if (npc.heightRoll > 40) {
    npc.height = 'barely a metre'
  } else if (npc.heightRoll > 38) {
    npc.height = 'diminuitive'
  } else if (npc.heightRoll > 36) {
    npc.height = 'quite diminuitive'
  } else if (npc.heightRoll > 34) {
    npc.height = 'adorably short'
  } else if (npc.heightRoll > 32) {
    npc.height = 'tiny'
  } else if (npc.heightRoll > 30) {
    npc.height = 'so so tiny'
  }

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
