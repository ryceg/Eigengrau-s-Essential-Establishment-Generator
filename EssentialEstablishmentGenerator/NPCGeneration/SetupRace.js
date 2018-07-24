setup.createRace = function (npc) {
  var baseHeight
  var baseWeight
  var heightModifier
  var weightModifier
  var heightRoll
  var weightRoll

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
    npc.bmiReadout = 'morbidly obese'
  } else if (npc.bmi >= 35) {
    npc.bmiReadout = 'extremely obese'
  } else if (npc.bmi >= 28) {
    npc.bmiReadout = 'beer-bellied'
  } else if (npc.bmi >= 32) {
    npc.bmiReadout = 'round'
  } else if (npc.bmi >= 30) {
    npc.bmiReadout = 'obese'
  } else if (npc.bmi >= 29) {
    npc.bmiReadout = 'chubby'
  } else if (npc.bmi >= 28) {
    npc.bmiReadout = 'fat'
  } else if (npc.bmi >= 27) {
    npc.bmiReadout = 'overweight'
  } else if (npc.bmi >= 26) {
    npc.bmiReadout = 'thick'
  } else if (npc.bmi >= 25) {
    npc.bmiReadout = 'chunky'
  } else if (npc.bmi >= 24) {
    npc.bmiReadout = 'broad'
  } else if (npc.bmi >= 23) {
    npc.bmiReadout = 'healthy'
  } else if (npc.bmi >= 22) {
    npc.bmiReadout = 'lean'
  } else if (npc.bmi >= 21) {
    npc.bmiReadout = 'thin'
  } else if (npc.bmi >= 20) {
    npc.bmiReadout = 'rather thin'
  } else if (npc.bmi >= 19) {
    npc.bmiReadout = 'skinny'
  } else if (npc.bmi >= 18) {
    npc.bmiReadout = 'lithe'
  } else if (npc.bmi >= 17) {
    npc.bmiReadout = 'scrawny'
  } else if (npc.bmi >= 16) {
    npc.bmiReadout = 'weedy'
  } else if (npc.bmi >= 15) {
    npc.bmiReadout = 'gaunt'
  } else if (npc.bmi < 15) {
    npc.bmiReadout = 'bony'
  }

  switch (npc.race) {
    case 'human':
      Object.assign(npc, {
        eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'].random(),
        raceplural: 'humans',
        raceadjective: 'human',
        racelanguage: 'Common',
        knownLanguages: ['Common'],
        height: ['tiny', 'short', 'short', 'slightly below average height', 'rather average height', 'slightly above average height', 'tall', 'tall', 'tall', 'giraffe-like'].random(),
        weight: ['waif-like', 'thin', 'skinny', 'skinny', 'wiry', 'thin', 'stocky', 'beefy', 'muscular', 'slightly underweight', 'slightly overweight', 'slightly overweight', 'round', 'tubby', 'portly'].random()
      })
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
      Object.assign(npc, {
        eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'].random(),
        racesingular: 'elf',
        raceplural: 'elves',
        raceadjective: 'elfish',
        racelanguage: 'Elvish',
        knownLanguages: ['Common', 'Elvish'],
        height: ['rather average height', 'slightly above average height', 'tall', 'tall', 'tall'].random(),
        weight: ['waif-like', 'thin', 'skinny', 'skinny', 'wiry', 'thin', 'stocky', 'slightly underweight'].random()
      })
      npc.racenote = npc.race
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 87) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
      break
    case 'dwarf':
      Object.assign(npc, {
        eyes: ['yellow', 'amber', 'brown', 'dark brown', 'hazel', 'green', 'blue', 'gray', 'brown', 'dark brown', 'hazel', 'green', 'blue', 'gray', 'aqua'].random(),
        racesingular: 'dwarf',
        raceplural: 'dwarves',
        raceadjective: 'dwarven',
        racelanguage: 'Dwarven',
        knownLanguages: ['Common', 'Dwarvish'],
        height: ['short', 'squat'].random(),
        weight: ['stocky', 'beefy', 'muscular', 'slightly underweight', 'slightly overweight', 'slightly overweight', 'round', 'tubby', 'portly'].random()
      })
      npc.racenote = npc.race
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 2) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'well-groomed beard going down to his chest', 'goatee', 'goatee that seems to be trying to level up into a beard', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
      break
    case 'halfling':
      Object.assign(npc, {
        eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'red', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'].random(),
        racesingular: 'halfling',
        raceplural: 'hobbits',
        raceadjective: 'halfling',
        racelanguage: 'Halfling',
        knownLanguages: ['Common', 'Halfling'],
        height: ['short', 'tiny', 'diminuitive', 'little'].random(),
        weight: ['waif-like', 'thin', 'skinny', 'skinny', 'wiry', 'thin', 'stocky', 'beefy', 'muscular', 'slightly underweight'].random()
      })
      npc.racenote = npc.race
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 92) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
      break
    case 'half-orc':
      Object.assign(npc, {
        eyes: ['yellow', 'amber', 'orange', 'brown', 'hazel', 'yellow', 'amber', 'orange', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'red'].random(),
        racesingular: 'half-orc',
        raceplural: 'half-orcs',
        raceadjective: 'half-orcish',
        racelanguage: 'Orcish',
        knownLanguages: ['Common', 'Orc'],
        height: ['rather average height', 'slightly above average height', 'tall', 'tall', 'intimidatingly tall'].random(),
        weight: ['slightly underweight', 'stocky', 'beefy', 'muscular', 'extremely muscular', 'slightly overweight'].random()
      })
      npc.racenote = npc.race
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 75) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
      break
    case 'dragonborn':
      Object.assign(npc, {
        eyes: ['yellow', 'amber', 'yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'red', 'purple', 'aqua', 'red', 'purple', 'gold', 'gold'].random(),
        racesingular: 'drake',
        raceplural: 'drakes',
        raceadjective: 'draconian',
        racelanguage: 'Draconic',
        knownLanguages: ['Common', 'Draconic'],
        height: ['rather average height', 'slightly above average height', 'tall', 'tall', 'tall'].random(),
        weight: ['stocky', 'beefy', 'muscular', 'slightly underweight', 'extremely muscular', 'slightly overweight'].random()
      })
      npc.racenote = npc.race

      Object.assign(npc, {
        note: [[npc.firstname + ' is covered in glimmering red scales, which seem to turn a slight orange color in the sunlight.',
          npc.firstname + ' has several scales missing and a long gash running along ' + npc.hisher + ' face.',
          npc.firstname + ' has two long, spined and membranous ears.',
          npc.firstname + ' has a slightly off-center snout, akin to a poorly-reset broken nose.',
          npc.firstname + ' has two small bony nubs at ' + npc.hisher + ' shoulder blades- vestigial wings.',
          npc.firstname + ' has poor control over ' + npc.hisher + ' breath weapon, and when ' + npc.sheshe + ' is agitated, ' + npc.hisher + ' nostrils and mouth crackle with lightning/exude a green gas/smoke like chimneys drip green acid/breath puffs of frosty white air.',
          npc.firstname + ' has highly acidic saliva.',
          npc.firstname + ' has long overly curled horns.',
          npc.firstname + ' has a heart that glows bright enough to be seen beneath the scales.',
          npc.firstname + ' has spines that stick out from every joint.',
          'Smoke is always slowly rising from ' + npc.firstname + '’s nose and mouth.',
          npc.firstname + "'s scales are prismatic.",
          npc.firstname + ' has a tiny pair of unusable wings.',
          npc.firstname + ' has 2 inch retractable nail/talons on ' + npc.hisher + ' fingers and toes.',
          npc.firstname + ' has eyes that change color depending on ' + npc.hisher + ' emotions.',
          npc.firstname + ' appears to have had ' + npc.hisher + ' claws torn off, so a leather bound brace of daggers serves as their replacement.',
          npc.firstname + ' has random different colored scales glistening blue and white.',
          npc.firstname + ' has a crest of multicolored feathers atop ' + npc.hisher + ' head, resembling a hairdo.',
          npc.firstname + ' is branded on ' + npc.hisher + ' forehead with a strange, unknown symbol.',
          npc.firstname + ' only refers to themselves by a number emblazoned on ' + npc.hisher + ' gear (necklace, scabbard, belt, etc.).',
          npc.firstname + "'s acid breath clearly went wrong, as the flesh on the right side of " + npc.hisher + ' face, from the middle of ' + npc.hisher + ' neck to the top of ' + npc.hisher + ' mouth is burned off.',
          npc.firstname + ' is missing all of ' + npc.hisher + ' scales, revealing the pale skin beneath. The colour is only identified by a small patch of scales on ' + npc.hisher + ' cheek.',
          npc.firstname + ' has one or more hidden paths on ' + npc.hisher + ' skin where scales never developed.',
          npc.firstname + ' has traces of another colour (for example, little splotches of black scales on a green dragonborn).',
          npc.firstname + '‘s voice seems to come from within, rather than from ' + npc.hisher + ' lips and mouth moving when ' + npc.sheshe + ' talks.',
          npc.firstname + "'s eyes gleam red while in combat.",
          npc.firstname + ' is constantly drawn to live as a dragon and hoard all the loot.. for safe keeping of course.',
          npc.firstname + "'s fangs grow in the presents of injured enemies.",
          npc.firstname + ' has a cracked or broken snout horn.',
          npc.firstname + ' has a fake, steel nose horn.',
          npc.firstname + ' has transluscent or transparent patches of scales.',
          npc.firstname + ' has a frill running down the chin and neck.',
          npc.firstname + ' has a frill running up the snout, head, and the back of the neck.',
          npc.firstname + ' has 3 eyelids: 2 normal ones, and a thin, almost transparent one underneath that moves in a perpendicular direction to the other two.',
          npc.firstname + ' tends to hiss when speaking.',
          npc.firstname + ' has shiny blue scales. The darkness of the color is determined by the temperature.',
          npc.firstname + "'s breath weapon is always accompanied by a horrific, sickly sweet stench.",
          npc.firstname + ' has two large (possibly colorful) frills instead of horns.',
          npc.firstname + ' has albinism, making it hard to tell what exact kind of dragonborn ' + npc.sheshe + ' is.',
          npc.firstname + ' has a small patch of scales etched with scratches. It’s become a nervous habit to trace over them or scratch even more.',
          npc.firstname + "'s breath weapon is unusually colored (blue fire, red acid, green lightning, etc).",
          npc.firstname + "'s horns originate in the back of " + npc.hisher + ' head and curl around to face forward.',
          npc.firstname + ' has ears. They look elven in nature.',
          npc.firstname + "'s eyes have two pupils, with different colored irises.",
          npc.firstname + ' has a habit of chewing on gemstones, jewelry, and precious metals.',
          npc.firstname + ' has pits in ' + npc.hisher + ' face instead of an actual nose, similar to a snake’s.',
          npc.firstname + "'s scales are a dull, matte color.",
          npc.firstname + ' has 5 fingers and 5 toes, as opposed to the standard 3.',
          npc.firstname + ' has a long, serpentine tongue.',
          npc.firstname + "'s scales are bumpy, thick, and loose on " + npc.hisher + ' skin (think a gila monster).',
          npc.firstname + "'s scales are sleek and uniform, like a snake.",
          npc.firstname + "'s scales are incredibly uneven. Some are huge, others are tiny. This isn’t uncomfortable, just making interesting patterns on " + npc.hisher + ' skin.',
          npc.firstname + ' has a third eye. Doesn’t actually see but can distinguish changing levels of light above them.',
          npc.firstname + "'s mouth is brimming with bacteria that can kill in 5-7 days without treatment from a bite.",
          npc.firstname + ' has tail spikes like a stegosaurus.',
          npc.firstname + "'s scales are a dull faded red color, but glow bright red when " + npc.sheshe + ' is aroused or in love.',
          npc.firstname + ' has the power to make ' + npc.hisher + ' scales shine with bright neon colors on command.',
          npc.firstname + "'s singing voice is the exact opposite tone of " + npc.hisher + ' speaking voice (for example, if ' + npc.firstname + ' is female and has a higher voice, ' + npc.sheshe + ' will sing in a deep bass-baritone). It’s always a beautiful voice regardless, making them better performers.',
          npc.firstname + "'s scales are incredibly flexible, allowing " + npc.himher + ' to bend in near impossible positions (think contortionist).',
          npc.firstname + "'s hiccups are powerful bursts of freezing air.",
          npc.firstname + "'s scales shimmer like a rainbow in moonlight.",
          npc.firstname + ' has flaps of skin under ' + npc.hisher + ' armpits, almost like wings but they don’t do anything.',
          npc.firstname + ' has two frills on top of his head. Keeps ' + npc.himher + ' cool in hot temperatures.',
          npc.firstname + ' has scaly human-like ears.',
          npc.firstname + "'s breath weapon is incredibly uncomfortable, even painful, like puking. A few dry heaves beforehand, with a bit of tears and snot afterwards.",
          npc.firstname + "'s form was not made for the human world. Clawed fingers get in the way of delicate tasks; a head bumped on a low doorway will take some effort in order to pull the horns out. ",
          npc.firstname + ' has an above average sized tail to compensate for ' + npc.hisher + ' vestigial legs.',
          npc.firstname + ' has shorn horn stubs on the side of ' + npc.hisher + ' head- the horns were stolen by alchemists.',
          npc.firstname + ' has an odd scale discoloration that looks eerily similar to the crest of a very well known Elven god.',
          npc.firstname + ' can clean ' + npc.hisher + ' eyelids with ' + npc.hisher + ' forked tongue, but only does this as a party trick.',
          npc.firstname + ' can gallop quadrupedally by using ' + npc.hisher + ' tail for balance, and are also an effective climber.',
          npc.firstname + ' has impressive face whiskers like a carp.',
          npc.firstname + ' hates sweets, but is fond of anything that makes a satisfying loud crunch. Bananas are only tolerated with the peel still on.',
          npc.firstname + ' is patient to a fault and sometimes forgets that children and grandchildren cannot be judged by the actions of their parents.',
          npc.firstname + ' has a colorful dewlap on ' + npc.hisher + ' chin and neck.',
          npc.firstname + ' can move ' + npc.hisher + ' eyes independently of one another.',
          npc.firstname + "'s scales are of a much lighter tone than the skin, making them stand out even more.",
          npc.firstname + ' is overly formal and insists you call ' + npc.himher + ' by ' + npc.hisher + ' full name and title at all times.',
          npc.firstname + ' is covered in a sparkly paint that magically changes colour every few minutes, making it impossible to tell what ' + npc.hisher + ' natural colour is. ' + npc.firstname + ' is not particularly clever and has covered ' + npc.himherself + ' in glitter thinking it will make ' + npc.himher + ' look metallic.',
          npc.firstname + ' only speaks draconic, but has a pet talking lizard that sits on ' + npc.hisher + ' shoulder and translates for them.',
          npc.firstname + ' treats all other species like biological specimens that should be studied and are taking extensive notes on ' + npc.hisher + ' observations.',
          npc.firstname + ' is overly vain about ' + npc.hisher + ' scales and teeth and spend a long time every morning polishing and shining them.',
          npc.firstname + ' takes great pride in ' + npc.hisher + ' claws, and has intricate designs painted on them.',
          npc.firstname + ' is very elitist in terms of colour and classify other races into the dragon colour categories by hair colour, treating them accordingly.',
          npc.firstname + ' has a cold and keeps accidentally setting off a mild version of ' + npc.hisher + ' breath weapon every time ' + npc.sheshe + ' sneezes, which is often.',
          'Whenever ' + npc.sheshe + ' uses ' + npc.hisher + ' breath attack, ' + npc.hisher + ' eyes shine bright white.',
          npc.firstname + ' has weak and useless vestigial wings coming out of ' + npc.hisher + ' shoulders that ' + npc.sheshe + ' tries to keep hidden.',
          'When sleeping, ' + npc.sheshe + ' exhale harmless clouds of smoke from ' + npc.hisher + ' nostrils.',
          npc.firstname + ' refuses to eat any meat that isn’t cooked past well done.',
          npc.firstname + ' likes to cover themselves in mud constantly ‘to fight parasites’.',
          npc.firstname + ' has a bifurcated nose horn.',
          npc.firstname + ' has tiny useless T-Rex arms on ' + npc.hisher + ' shoulder blades.'
        ].random()]
      })
      break
    case 'tiefling':
      Object.assign(npc, {
        eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'aqua', 'red', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray', 'violet red', 'aquamarine', 'deep blue', 'spring green', 'sea green', 'emerald green'].random(),
        racesingular: 'tiefling',
        raceplural: 'tieflings',
        raceadjective: 'devilish',
        racelanguage: 'Infernal',
        knownLanguages: ['Common', 'Infernal'],
        height: ['tiny', 'short', 'slightly below average height', 'rather average height', 'slightly above average height', 'tall', 'tall', 'tall', 'giraffe-like'].random(),
        weight: ['waif-like', 'thin', 'skinny', 'skinny', 'wiry', 'thin', 'stocky', 'beefy', 'muscular', 'slightly underweight'].random()
      })
      npc.racenote = npc.race
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 70) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
      break
    case 'half-elf':
      Object.assign(npc, {
        eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'red', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'].random(),
        racesingular: 'half-elf',
        raceplural: 'half-elves',
        raceadjective: 'elfish',
        racelanguage: 'Elven',
        knownLanguages: ['Common', 'Elvish'],
        height: ['rather average height', 'slightly above average height', 'tall', 'tall', 'tall'].random(),
        weight: ['waif-like', 'thin', 'skinny', 'skinny', 'wiry', 'thin', 'stocky', 'beefy', 'muscular', 'slightly underweight'].random()
      })
      npc.racenote = npc.race
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 57) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
      break
    case 'gnome':
      Object.assign(npc, {
        eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'red', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'].random(),
        racesingular: 'gnome',
        raceplural: 'gnomes',
        raceadjective: 'gnomish',
        racelanguage: 'Gnomish',
        knownLanguages: ['Common', 'Gnomish'],
        height: ['short', 'tiny'].random(),
        weight: ['slightly underweight', 'stocky', 'beefy', 'slightly overweight', 'slightly overweight', 'round', 'tubby'].random()
      })
      npc.racenote = npc.race
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 37) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
      break
    default:
      Object.assign(npc, {
        eyes: ['yellow', 'amber', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'brown', 'hazel', 'green', 'blue', 'gray', 'aqua', 'purple', 'pale brown', 'pale blue', 'pale green', 'ash gray'].random(),
        racesingular: 'person',
        raceplural: 'people',
        raceadjective: 'man',
        racelanguage: 'Common',
        height: ['tiny', 'short', 'slightly below average height', 'rather average height', 'slightly above average height', 'tall', 'tall', 'tall', 'giraffe-like'].random(),
        weight: ['waif-like', 'thin', 'skinny', 'skinny', 'wiry', 'thin', 'stocky', 'beefy', 'muscular', 'slightly underweight', 'slightly overweight', 'slightly overweight', 'round', 'tubby', 'portly'].random()
      })
      npc.racenote = npc.height + ' ' + npc.gender
      if (npc.gender === 'man') {
        if (npc.beardRoll >= 27) {
          npc.beard = ['scraggly beard', 'long, flowing beard', 'five o clock shadow', 'neckbeard', 'well-groomed moustache', 'goatee', 'well-loved beard, with ornamental beads woven into it', 'sideburns', 'smattering of hairs on his face', 'bit of peach fuzz on his chin', 'long, luxurious beard', 'long, well-kempt beard', 'rather wild, unkempt beard', 'dreadful beard'].random()
        }
      }
  }

  return npc
}
