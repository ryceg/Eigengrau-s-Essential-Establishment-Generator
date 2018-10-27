/* global setup */
setup.createAge = function (npc) {
  // npc.ageYears = setup.npcData.ageTraits[npc.ageStage].baseAge + setup.npcData.ageTraits[npc.ageStage].ageModifier()
  console.log('ageing ' + npc.name + '...')
  // npc.age = 'test'
  // setup.getAge = function (npc) {
  //   if (npc.ageYears >= setup.npcData.raceTraits[npc.race].ageTraits.ageDescriptors[0]) {
  //     return setup.npcData.raceTraits[npc.race].ageTraits.ageDescriptors[1]
  //   }
  // }
  //
  // if (typeof setup.npcData.raceTraits[npc.race].ageTraits.ageDescriptors !== 'undefined') {
  //   var descriptors = setup.npcData.raceTraits[npc.race].ageTraits.ageDescriptors
  //   descriptors.forEach(setup.getAge(npc))
  // } else {
  //   console.log('Called age descriptor without a valid array.')
  // }

  switch (npc.race) {
    case 'human':
      if (npc.ageYears >= 80) {
        npc.age = 'vulnerably elderly'
      } else if (npc.ageYears >= 75) {
        npc.age = 'withered'
      } else if (npc.ageYears >= 70) {
        npc.age = 'elderly'
      } else if (npc.ageYears >= 65) {
        npc.age = 'weathered'
      } else if (npc.ageYears >= 60) {
        npc.age = 'aged'
      } else if (npc.ageYears >= 55) {
        npc.age = 'old'
      } else if (npc.ageYears >= 50) {
        npc.age = 'middle aged'
      } else if (npc.ageYears >= 45) {
        npc.age = 'middle aged'
      } else if (npc.ageYears >= 40) {
        npc.age = 'early middle aged'
      } else if (npc.ageYears >= 37) {
        npc.age = 'adult'
      } else if (npc.ageYears >= 35) {
        npc.age = 'mid thirties'
      } else if (npc.ageYears >= 32) {
        npc.age = 'earlyish thirties'
      } else if (npc.ageYears >= 30) {
        npc.age = 'early thirties'
      } else if (npc.ageYears >= 28) {
        npc.age = 'prime adult aged'
      } else if (npc.ageYears >= 26) {
        npc.age = 'young adult'
      } else if (npc.ageYears >= 24) {
        npc.age = 'bright and spry adult'
      } else if (npc.ageYears >= 22) {
        npc.age = 'relatively young'
      } else if (npc.ageYears >= 20) {
        npc.age = 'surprisingly young'
      } else if (npc.ageYears >= 19) {
        npc.age = 'nineteen year old'
      } else if (npc.ageYears >= 18) {
        npc.age = 'barely adult aged'
      } else if (npc.ageYears >= 17) {
        npc.age = 'late teenager'
      } else if (npc.ageYears >= 16) {
        npc.age = 'young teenager'
      } else if (npc.ageYears >= 14) {
        npc.age = 'adolescent'
      } else if (npc.ageYears >= 12) {
        npc.age = 'barely teenaged'
      } else if (npc.ageYears >= 10) {
        npc.age = 'child'
      } else if (npc.ageYears >= 8) {
        npc.age = 'young child'
      } else if (npc.ageYears < 8) {
        npc.age = 'kid'
      }
      break
    case 'dwarf':
      if (npc.ageYears >= 200) {
        npc.age = 'vulnerably elderly'
      } else if (npc.ageYears >= 190) {
        npc.age = 'withered'
      } else if (npc.ageYears >= 180) {
        npc.age = 'elderly'
      } else if (npc.ageYears >= 160) {
        npc.age = 'weathered'
      } else if (npc.ageYears >= 150) {
        npc.age = 'aged'
      } else if (npc.ageYears >= 140) {
        npc.age = 'old'
      } else if (npc.ageYears >= 130) {
        npc.age = 'middle aged'
      } else if (npc.ageYears >= 80) {
        npc.age = 'middle aged'
      } else if (npc.ageYears >= 50) {
        npc.age = 'early middle aged'
      } else if (npc.ageYears >= 40) {
        npc.age = 'adult'
      } else if (npc.ageYears >= 35) {
        npc.age = 'mid thirties'
      } else if (npc.ageYears >= 32) {
        npc.age = 'earlyish thirties'
      } else if (npc.ageYears >= 30) {
        npc.age = 'early thirties'
      } else if (npc.ageYears >= 26) {
        npc.age = 'young adult'
      } else if (npc.ageYears >= 24) {
        npc.age = 'bright and spry adult'
      } else if (npc.ageYears >= 22) {
        npc.age = 'relatively young'
      } else if (npc.ageYears >= 20) {
        npc.age = 'surprisingly young'
      } else if (npc.ageYears >= 19) {
        npc.age = 'nineteen year old'
      } else if (npc.ageYears >= 18) {
        npc.age = 'barely adult aged'
      } else if (npc.ageYears >= 17) {
        npc.age = 'late teenager'
      } else if (npc.ageYears >= 16) {
        npc.age = 'young teenager'
      } else if (npc.ageYears >= 14) {
        npc.age = 'adolescent'
      } else if (npc.ageYears >= 12) {
        npc.age = 'barely teenaged'
      } else if (npc.ageYears >= 10) {
        npc.age = 'child'
      } else if (npc.ageYears >= 8) {
        npc.age = 'young child'
      } else if (npc.ageYears < 8) {
        npc.age = 'kid'
      }
      break
    case 'elf':
      if (npc.ageYears >= 800) {
        npc.age = 'vulnerably elderly'
      } else if (npc.ageYears >= 750) {
        npc.age = 'withered'
      } else if (npc.ageYears >= 700) {
        npc.age = 'elderly'
      } else if (npc.ageYears >= 650) {
        npc.age = 'weathered'
      } else if (npc.ageYears >= 600) {
        npc.age = 'aged'
      } else if (npc.ageYears >= 550) {
        npc.age = 'old'
      } else if (npc.ageYears >= 500) {
        npc.age = 'middle aged'
      } else if (npc.ageYears >= 450) {
        npc.age = 'middle aged'
      } else if (npc.ageYears >= 400) {
        npc.age = 'early middle aged'
      } else if (npc.ageYears >= 370) {
        npc.age = 'adult'
      } else if (npc.ageYears >= 350) {
        npc.age = 'mid three-hundreds'
      } else if (npc.ageYears >= 320) {
        npc.age = 'earlyish three-hundreds'
      } else if (npc.ageYears >= 300) {
        npc.age = 'early three hundreds'
      } else if (npc.ageYears >= 250) {
        npc.age = 'young adult'
      } else if (npc.ageYears >= 200) {
        npc.age = 'bright and spry adult'
      } else if (npc.ageYears >= 180) {
        npc.age = 'relatively young'
      } else if (npc.ageYears >= 150) {
        npc.age = 'surprisingly young'
      } else if (npc.ageYears >= 120) {
        npc.age = 'barely ten dozen years old'
      } else if (npc.ageYears >= 100) {
        npc.age = 'barely adult aged'
      } else if (npc.ageYears >= 70) {
        npc.age = 'young'
      } else if (npc.ageYears >= 60) {
        npc.age = 'young'
      } else if (npc.ageYears >= 40) {
        npc.age = 'adolescent'
      } else if (npc.ageYears >= 30) {
        npc.age = 'barely teenaged'
      } else if (npc.ageYears >= 20) {
        npc.age = 'child-like'
      } else if (npc.ageYears >= 15) {
        npc.age = 'young child'
      } else if (npc.ageYears < 15) {
        npc.age = 'kid'
      }
      break
    case 'half-elf':
      if (npc.ageYears >= 180) {
        npc.age = 'vulnerably elderly'
      } else if (npc.ageYears >= 170) {
        npc.age = 'withered'
      } else if (npc.ageYears >= 150) {
        npc.age = 'elderly'
      } else if (npc.ageYears >= 130) {
        npc.age = 'weathered'
      } else if (npc.ageYears >= 110) {
        npc.age = 'aged'
      } else if (npc.ageYears >= 90) {
        npc.age = 'old'
      } else if (npc.ageYears >= 70) {
        npc.age = 'middle aged'
      } else if (npc.ageYears >= 60) {
        npc.age = 'middle aged'
      } else if (npc.ageYears >= 50) {
        npc.age = 'early middle aged'
      } else if (npc.ageYears >= 40) {
        npc.age = 'adult'
      } else if (npc.ageYears >= 35) {
        npc.age = 'mid thirties'
      } else if (npc.ageYears >= 32) {
        npc.age = 'earlyish thirties'
      } else if (npc.ageYears >= 30) {
        npc.age = 'early thirties'
      } else if (npc.ageYears >= 28) {
        npc.age = 'prime adult aged'
      } else if (npc.ageYears >= 26) {
        npc.age = 'young adult'
      } else if (npc.ageYears >= 24) {
        npc.age = 'bright and spry adult'
      } else if (npc.ageYears >= 22) {
        npc.age = 'relatively young'
      } else if (npc.ageYears >= 20) {
        npc.age = 'surprisingly young'
      } else if (npc.ageYears >= 19) {
        npc.age = 'nineteen year old'
      } else if (npc.ageYears >= 18) {
        npc.age = 'barely adult aged'
      } else if (npc.ageYears >= 17) {
        npc.age = 'late teenager'
      } else if (npc.ageYears >= 16) {
        npc.age = 'young teenager'
      } else if (npc.ageYears >= 14) {
        npc.age = 'adolescent'
      } else if (npc.ageYears >= 12) {
        npc.age = 'barely teenaged'
      } else if (npc.ageYears >= 10) {
        npc.age = 'child'
      } else if (npc.ageYears >= 8) {
        npc.age = 'young child'
      } else if (npc.ageYears < 8) {
        npc.age = 'kid'
      }
      break
    case 'half-orc':
      if (npc.ageYears >= 80) {
        npc.age = 'ancient'
      } else if (npc.ageYears >= 75) {
        npc.age = 'withered'
      } else if (npc.ageYears >= 70) {
        npc.age = 'elderly'
      } else if (npc.ageYears >= 65) {
        npc.age = 'weathered'
      } else if (npc.ageYears >= 60) {
        npc.age = 'aged'
      } else if (npc.ageYears >= 55) {
        npc.age = 'old'
      } else if (npc.ageYears >= 50) {
        npc.age = 'middle aged'
      } else if (npc.ageYears >= 45) {
        npc.age = 'middle aged'
      } else if (npc.ageYears >= 40) {
        npc.age = 'early middle aged'
      } else if (npc.ageYears >= 37) {
        npc.age = 'adult'
      } else if (npc.ageYears >= 35) {
        npc.age = 'mid thirties'
      } else if (npc.ageYears >= 32) {
        npc.age = 'earlyish thirties'
      } else if (npc.ageYears >= 30) {
        npc.age = 'early thirties'
      } else if (npc.ageYears >= 28) {
        npc.age = 'prime adult aged'
      } else if (npc.ageYears >= 26) {
        npc.age = 'young adult'
      } else if (npc.ageYears >= 24) {
        npc.age = 'bright and spry adult'
      } else if (npc.ageYears >= 22) {
        npc.age = 'relatively young'
      } else if (npc.ageYears >= 20) {
        npc.age = 'surprisingly young'
      } else if (npc.ageYears >= 19) {
        npc.age = 'nineteen year old'
      } else if (npc.ageYears >= 18) {
        npc.age = 'barely adult aged'
      } else if (npc.ageYears >= 17) {
        npc.age = 'late teenager'
      } else if (npc.ageYears >= 16) {
        npc.age = 'young teenager'
      } else if (npc.ageYears >= 14) {
        npc.age = 'adolescent'
      } else if (npc.ageYears >= 12) {
        npc.age = 'barely teenaged'
      } else if (npc.ageYears >= 10) {
        npc.age = 'child'
      } else if (npc.ageYears >= 8) {
        npc.age = 'young child'
      } else if (npc.ageYears < 8) {
        npc.age = 'kid'
      }
      break
    case 'tiefling':
      if (npc.ageYears >= 80) {
        npc.age = 'vulnerably elderly'
      } else if (npc.ageYears >= 75) {
        npc.age = 'withered'
      } else if (npc.ageYears >= 70) {
        npc.age = 'elderly'
      } else if (npc.ageYears >= 65) {
        npc.age = 'weathered'
      } else if (npc.ageYears >= 60) {
        npc.age = 'aged'
      } else if (npc.ageYears >= 55) {
        npc.age = 'old'
      } else if (npc.ageYears >= 50) {
        npc.age = 'middle aged'
      } else if (npc.ageYears >= 45) {
        npc.age = 'middle aged'
      } else if (npc.ageYears >= 40) {
        npc.age = 'early middle aged'
      } else if (npc.ageYears >= 37) {
        npc.age = 'adult'
      } else if (npc.ageYears >= 35) {
        npc.age = 'mid thirties'
      } else if (npc.ageYears >= 32) {
        npc.age = 'earlyish thirties'
      } else if (npc.ageYears >= 30) {
        npc.age = 'early thirties'
      } else if (npc.ageYears >= 28) {
        npc.age = 'prime adult aged'
      } else if (npc.ageYears >= 26) {
        npc.age = 'young adult'
      } else if (npc.ageYears >= 24) {
        npc.age = 'bright and spry adult'
      } else if (npc.ageYears >= 22) {
        npc.age = 'relatively young'
      } else if (npc.ageYears >= 20) {
        npc.age = 'surprisingly young'
      } else if (npc.ageYears >= 19) {
        npc.age = 'nineteen year old'
      } else if (npc.ageYears >= 18) {
        npc.age = 'barely adult aged'
      } else if (npc.ageYears >= 17) {
        npc.age = 'late teenager'
      } else if (npc.ageYears >= 16) {
        npc.age = 'young teenager'
      } else if (npc.ageYears >= 14) {
        npc.age = 'adolescent'
      } else if (npc.ageYears >= 12) {
        npc.age = 'barely teenaged'
      } else if (npc.ageYears >= 10) {
        npc.age = 'child'
      } else if (npc.ageYears >= 8) {
        npc.age = 'young child'
      } else if (npc.ageYears < 8) {
        npc.age = 'kid'
      }
      break
    case 'dragonborn':
      if (npc.ageYears >= 80) {
        npc.age = 'vulnerably elderly'
      } else if (npc.ageYears >= 75) {
        npc.age = 'withered'
      } else if (npc.ageYears >= 70) {
        npc.age = 'elderly'
      } else if (npc.ageYears >= 65) {
        npc.age = 'weathered'
      } else if (npc.ageYears >= 60) {
        npc.age = 'aged'
      } else if (npc.ageYears >= 55) {
        npc.age = 'old'
      } else if (npc.ageYears >= 50) {
        npc.age = 'middle aged'
      } else if (npc.ageYears >= 45) {
        npc.age = 'middle aged'
      } else if (npc.ageYears >= 40) {
        npc.age = 'early middle aged'
      } else if (npc.ageYears >= 37) {
        npc.age = 'adult'
      } else if (npc.ageYears >= 35) {
        npc.age = 'mid thirties'
      } else if (npc.ageYears >= 32) {
        npc.age = 'earlyish thirties'
      } else if (npc.ageYears >= 30) {
        npc.age = 'early thirties'
      } else if (npc.ageYears >= 28) {
        npc.age = 'prime adult aged'
      } else if (npc.ageYears >= 26) {
        npc.age = 'young adult'
      } else if (npc.ageYears >= 24) {
        npc.age = 'bright and spry adult'
      } else if (npc.ageYears >= 22) {
        npc.age = 'relatively young'
      } else if (npc.ageYears >= 20) {
        npc.age = 'surprisingly young'
      } else if (npc.ageYears >= 19) {
        npc.age = 'nineteen year old'
      } else if (npc.ageYears >= 18) {
        npc.age = 'barely adult aged'
      } else if (npc.ageYears >= 17) {
        npc.age = 'late teenager'
      } else if (npc.ageYears >= 16) {
        npc.age = 'young teenager'
      } else if (npc.ageYears >= 14) {
        npc.age = 'adolescent'
      } else if (npc.ageYears >= 12) {
        npc.age = 'barely teenaged'
      } else if (npc.ageYears >= 10) {
        npc.age = 'child'
      } else if (npc.ageYears >= 8) {
        npc.age = 'young child'
      } else if (npc.ageYears < 8) {
        npc.age = 'kid'
      }
      break
    case 'gnome':
      if (npc.ageYears >= 400) {
        npc.age = 'vulnerably elderly'
      } else if (npc.ageYears >= 360) {
        npc.age = 'withered'
      } else if (npc.ageYears >= 320) {
        npc.age = 'elderly'
      } else if (npc.ageYears >= 280) {
        npc.age = 'weathered'
      } else if (npc.ageYears >= 230) {
        npc.age = 'aged'
      } else if (npc.ageYears >= 180) {
        npc.age = 'old'
      } else if (npc.ageYears >= 130) {
        npc.age = 'late middle aged'
      } else if (npc.ageYears >= 80) {
        npc.age = 'middle aged'
      } else if (npc.ageYears >= 50) {
        npc.age = 'early middle aged'
      } else if (npc.ageYears >= 40) {
        npc.age = 'adult'
      } else if (npc.ageYears >= 35) {
        npc.age = 'mid thirties'
      } else if (npc.ageYears >= 32) {
        npc.age = 'earlyish thirties'
      } else if (npc.ageYears >= 30) {
        npc.age = 'early thirties'
      } else if (npc.ageYears >= 26) {
        npc.age = 'young adult'
      } else if (npc.ageYears >= 24) {
        npc.age = 'bright and spry adult'
      } else if (npc.ageYears >= 22) {
        npc.age = 'relatively young'
      } else if (npc.ageYears >= 20) {
        npc.age = 'surprisingly young'
      } else if (npc.ageYears >= 19) {
        npc.age = 'nineteen year old'
      } else if (npc.ageYears >= 18) {
        npc.age = 'barely adult aged'
      } else if (npc.ageYears >= 17) {
        npc.age = 'late teenager'
      } else if (npc.ageYears >= 16) {
        npc.age = 'young teenager'
      } else if (npc.ageYears >= 14) {
        npc.age = 'adolescent'
      } else if (npc.ageYears >= 12) {
        npc.age = 'barely teenaged'
      } else if (npc.ageYears >= 10) {
        npc.age = 'child'
      } else if (npc.ageYears >= 8) {
        npc.age = 'young child'
      } else if (npc.ageYears < 8) {
        npc.age = 'kid'
      }
      break
    default:
      if (npc.ageYears >= 80) {
        npc.age = 'vulnerably elderly'
      } else if (npc.ageYears >= 75) {
        npc.age = 'withered'
      } else if (npc.ageYears >= 70) {
        npc.age = 'elderly'
      } else if (npc.ageYears >= 65) {
        npc.age = 'weathered'
      } else if (npc.ageYears >= 60) {
        npc.age = 'aged'
      } else if (npc.ageYears >= 55) {
        npc.age = 'old'
      } else if (npc.ageYears >= 50) {
        npc.age = 'middle aged'
      } else if (npc.ageYears >= 45) {
        npc.age = 'middle aged'
      } else if (npc.ageYears >= 40) {
        npc.age = 'early middle aged'
      } else if (npc.ageYears >= 37) {
        npc.age = 'adult'
      } else if (npc.ageYears >= 35) {
        npc.age = 'mid thirties'
      } else if (npc.ageYears >= 32) {
        npc.age = 'earlyish thirties'
      } else if (npc.ageYears >= 30) {
        npc.age = 'early thirties'
      } else if (npc.ageYears >= 28) {
        npc.age = 'prime adult aged'
      } else if (npc.ageYears >= 26) {
        npc.age = 'young adult'
      } else if (npc.ageYears >= 24) {
        npc.age = 'bright and spry adult'
      } else if (npc.ageYears >= 22) {
        npc.age = 'relatively young'
      } else if (npc.ageYears >= 20) {
        npc.age = 'surprisingly young'
      } else if (npc.ageYears >= 19) {
        npc.age = 'nineteen year old'
      } else if (npc.ageYears >= 18) {
        npc.age = 'barely adult aged'
      } else if (npc.ageYears >= 17) {
        npc.age = 'late teenager'
      } else if (npc.ageYears >= 16) {
        npc.age = 'young teenager'
      } else if (npc.ageYears >= 14) {
        npc.age = 'adolescent'
      } else if (npc.ageYears >= 12) {
        npc.age = 'barely teenaged'
      } else if (npc.ageYears >= 10) {
        npc.age = 'child'
      } else if (npc.ageYears >= 8) {
        npc.age = 'young child'
      } else if (npc.ageYears < 8) {
        npc.age = 'kid'
      }
      break
  }
  // To Do: create a descriptor for each age category for each race

  return npc
}
