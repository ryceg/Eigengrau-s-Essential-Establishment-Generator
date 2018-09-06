setup.createRace = function (npc) {
  var baseHeight
  var baseWeight
  var heightModifier
  var weightModifier

  switch (npc.race) {
    case 'human':
      switch (npc.gender) {
        case 'woman':
          baseHeight = 53
          baseWeight = 85
          heightModifier = dice(2, 10)
          weightModifier = dice(2, 4)
          break
        default:
          baseHeight = 58
          baseWeight = 120
          heightModifier = dice(2, 10)
          weightModifier = dice(2, 4)
      }
      break
    case 'elf':
      switch (npc.gender) {
        case 'woman':
          baseHeight = 61
          baseWeight = 90
          heightModifier = dice(2, 10)
          weightModifier = dice(1, 4)
          break
        default:
          baseHeight = 62
          baseWeight = 100
          heightModifier = dice(2, 10)
          weightModifier = dice(1, 4)
      }
      break
    case 'dwarf':
      switch (npc.gender) {
        case 'woman':
          baseHeight = 43
          baseWeight = 120
          heightModifier = dice(2, 4)
          weightModifier = dice(2, 6)
          break
        default:
          baseHeight = 45
          baseWeight = 150
          heightModifier = dice(2, 4)
          weightModifier = dice(2, 6)
      }
      break
    case 'halfling':
      switch (npc.gender) {
        case 'woman':
          baseHeight = 30
          baseWeight = 25
          heightModifier = dice(2, 4)
          weightModifier = 1
          break
        default:
          baseHeight = 32
          baseWeight = 30
          heightModifier = dice(2, 4)
          weightModifier = 1
      }
      break
    case 'half-orc':
      switch (npc.gender) {
        case 'woman':
          baseHeight = 53
          baseWeight = 150
          heightModifier = dice(2, 10)
          weightModifier = dice(2, 6)
          break
        default:
          baseHeight = 58
          baseWeight = 110
          heightModifier =
          weightModifier = dice(2, 6)
      }
      break
    case 'dragonborn':
      switch (npc.gender) {
        case 'woman':
          baseHeight = 60
          baseWeight = 130
          heightModifier = dice(2, 8)
          weightModifier = dice(2, 6)
          break
        default:
          baseHeight = 62
          baseWeight = 160
          heightModifier = dice(2, 8)
          weightModifier = dice(2, 6)
      }
      break
    case 'tiefling':
      switch (npc.gender) {
        case 'woman':
          baseHeight = 54
          baseWeight = 85
          heightModifier = dice(2, 8)
          weightModifier = dice(2, 4)
          break
        default:
          baseHeight = 58
          baseWeight = 120
          heightModifier = dice(2, 8)
          weightModifier = dice(2, 4)
      }
      break
    case 'gnome':
      switch (npc.gender) {
        case 'woman':
          baseHeight = 35
          baseWeight = 30
          heightModifier = dice(2, 4)
          weightModifier = 1
          break
        default:
          baseHeight = 36
          baseWeight = 35
          heightModifier = dice(2, 4)
          weightModifier = 1
      }
      break
    case 'half-elf':
      switch (npc.gender) {
        case 'woman':
          baseHeight = 61
          baseWeight = 90
          heightModifier = dice(2, 8)
          weightModifier = dice(2, 4)
          break
        default:
          baseHeight = 62
          baseWeight = 110
          heightModifier = dice(2, 8)
          weightModifier = dice(2, 4)
      }
      break
    default:
      switch (npc.gender) {
        case 'woman':
          baseHeight = 56
          baseWeight = 110
          heightModifier = dice(2, 10)
          weightModifier = dice(2, 4)
          break
        default:
          baseHeight = 58
          baseWeight = 90
          heightModifier = dice(2, 8)
          weightModifier = dice(2, 4)
      }
  }

  Object.assign(npc, {
    heightRoll: baseHeight + heightModifier,
    weightRoll: baseWeight + (heightModifier * weightModifier)
  })

  // bmiReadout will eventually replace 'weight'. So, when all that stuff is done, plus athleticism is coded in, I'll do a big ol' Cmd + F on 'bmiReadout' and replace it. For now, it's just bug-testing.
  npc.bmi = (Math.trunc((npc.weightRoll / (npc.heightRoll * npc.heightRoll)) * 703))
  if (npc.bmi > 40) {
    npc.weight = 'morbidly obese'
  } else if (npc.bmi >= 35) {
    npc.weight = 'extremely obese'
  } else if (npc.bmi >= 28) {
    npc.weight = 'beer-bellied'
  } else if (npc.bmi >= 32) {
    npc.weight = 'round'
  } else if (npc.bmi >= 30) {
    npc.weight = 'obese'
  } else if (npc.bmi >= 29) {
    npc.weight = 'chubby'
  } else if (npc.bmi >= 28) {
    npc.weight = 'fat'
  } else if (npc.bmi >= 27) {
    npc.weight = 'overweight'
  } else if (npc.bmi >= 26) {
    npc.weight = 'thick'
  } else if (npc.bmi >= 25) {
    npc.weight = 'chunky'
  } else if (npc.bmi >= 24) {
    npc.weight = 'broad'
  } else if (npc.bmi >= 23) {
    npc.weight = 'healthy'
  } else if (npc.bmi >= 22) {
    npc.weight = 'lean'
  } else if (npc.bmi >= 21) {
    npc.weight = 'thin'
  } else if (npc.bmi >= 20) {
    npc.weight = 'rather thin'
  } else if (npc.bmi >= 19) {
    npc.weight = 'skinny'
  } else if (npc.bmi >= 18) {
    npc.weight = 'lithe'
  } else if (npc.bmi >= 17) {
    npc.weight = 'scrawny'
  } else if (npc.bmi >= 16) {
    npc.weight = 'weedy'
  } else if (npc.bmi >= 15) {
    npc.weight = 'gaunt'
  } else if (npc.bmi < 15) {
    npc.weight = 'bony'
  }

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
      npc.racenote = npc.height + ' ' + npc.gender
      if (npc.gender === 'man') {
        npc.racesingular = 'man'
        if (npc.beardRoll >= 27) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      } else {
        npc.racesingular = 'woman'
      }
      break
    case 'elf':
      npc.racenote = npc.race
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 87) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
      break
    case 'dwarf':
      npc.racenote = npc.race
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 2) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'well-groomed beard going down to his chest', 'goatee', 'goatee that seems to be trying to level up into a beard', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
      break
    case 'halfling':
      npc.racenote = npc.race
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 92) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
      break
    case 'half-orc':
      npc.racenote = npc.race
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 75) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
      break
    case 'dragonborn':
      npc.racenote = npc.race
      break
    case 'tiefling':
      npc.racenote = npc.race
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 70) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
      break
    case 'half-elf':
      npc.racenote = npc.race
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 57) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
      break
    case 'gnome':
      npc.racenote = npc.race
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 37) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
      break
    default:
      npc.racenote = npc.height + ' ' + npc.gender
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 27) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
  }

  return npc
}
