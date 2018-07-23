setup.createAge = function (npc) {
  var ageStageRoll = dice(2, 4)
  var ageModifier
  var baseAge

  if (ageStageRoll === 8) {
    npc.ageStage = 'elderly'
  } else if (ageStageRoll >= 5) {
    npc.ageStage = 'settled adult'
  } else if (ageStageRoll <= 4) {
    npc.ageStage = 'young adult'
  }

  if (npc.ageStage === 'elderly') {
    switch (npc.race) {
      case 'human':
        baseAge = 65
        ageModifier = dice(3, 10)
        break
      case 'dwarf':
        baseAge = 197
        ageModifier = dice(3, 50)
        break
      case 'elf':
        baseAge = 650
        ageModifier = dice(3, 50)
        break
      case 'half-elf':
        baseAge = 150
        ageModifier = dice(3, 10)
        break
      case 'half-orc':
        baseAge = 57
        ageModifier = dice(3, 6)
        break
      case 'tiefling':
        baseAge = 70
        ageModifier = dice(3, 10)
        break
      case 'dragonborn':
        baseAge = 50
        ageModifier = dice(3, 10)
        break
      case 'gnome':
        baseAge = 200
        ageModifier = dice(3, 100)
        break
      default:
        baseAge = 65
        ageModifier = dice(3, 10)
    }
  } else if (npc.ageStage === 'settled adult') {
    switch (npc.race) {
      case 'human':
        baseAge = 30
        ageModifier = dice(3, 15)
        break
      case 'dwarf':
        baseAge = 50
        ageModifier = dice(3, 50)
        break
      case 'elf':
        baseAge = 450
        ageModifier = dice(3, 75)
        break
      case 'half-elf':
        baseAge = 50
        ageModifier = dice(3, 50)
        break
      case 'half-orc':
        baseAge = 45
        ageModifier = dice(3, 6)
        break
      case 'tiefling':
        baseAge = 40
        ageModifier = dice(3, 10)
        break
      case 'dragonborn':
        baseAge = 20
        ageModifier = dice(3, 10)
        break
      case 'gnome':
        baseAge = 40
        ageModifier = dice(3, 75)
        break
      default:
        baseAge = 30
        ageModifier = dice(3, 10)
    }
  } else if (npc.ageStage === 'young adult') {
    switch (npc.race) {
      case 'human':
        baseAge = 15
        ageModifier = dice(3, 6)
        break
      case 'dwarf':
        baseAge = 15
        ageModifier = dice(4, 8)
        break
      case 'elf':
        baseAge = 100
        ageModifier = dice(4, 75)
        break
      case 'half-elf':
        baseAge = 20
        ageModifier = dice(3, 10)
        break
      case 'half-orc':
        baseAge = 15
        ageModifier = dice(3, 12)
        break
      case 'tiefling':
        baseAge = 18
        ageModifier = dice(3, 12)
        break
      case 'dragonborn':
        baseAge = 13
        ageModifier = dice(2, 4)
        break
      case 'gnome':
        baseAge = 18
        ageModifier = dice(2, 10)
        break
      default:
        baseAge = 16
        ageModifier = dice(2, 12)
    }
  } else if (npc.ageStage === 'child') {
    switch (npc.race) {
      case 'human':
        baseAge = 4
        ageModifier = dice(3, 4)
        break
      case 'dwarf':
        baseAge = 4
        ageModifier = dice(3, 6)
        break
      case 'elf':
        baseAge = 10
        ageModifier = dice(4, 20)
        break
      case 'half-elf':
        baseAge = 6
        ageModifier = dice(3, 4)
        break
      case 'half-orc':
        baseAge = 3
        ageModifier = dice(3, 4)
        break
      case 'tiefling':
        baseAge = 4
        ageModifier = dice(3, 4)
        break
      case 'dragonborn':
        baseAge = 4
        ageModifier = dice(3, 4)
        break
      case 'gnome':
        baseAge = 6
        ageModifier = dice(2, 6)
        break
      default:
        baseAge = 4
        ageModifier = dice(2, 6)
    }
  }

  npc.ageRoll = baseAge + ageModifier

  // To Do: create a descriptor for each age category for each race

  return npc
}
