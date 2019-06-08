
setup.createHistory = function (town, npc) {
  console.log('creating history for ' + npc.name + '...')
  let wealthModifier

  /* if (!npc.knewParents) {
    if (random(1, 100) > 95) {
      npc.knewParents = false
    } else {
      npc.knewParents = true
    }
  }

  if (!npc.parentalLineage) {
    const parentalLineageRoll = random(1, 8)
    switch (npc.race) {
      case 'half-orc':
        if (parentalLineageRoll === 8) {
          npc.parentalLineage = 'Both parents were half-orcs'
          setup.createRelative(town, npc, 'father', {
            race: 'half-orc'
          })
          setup.createRelative(town, npc, 'mother', {
            race: 'half-orc'
          })
        } else if (parentalLineageRoll >= 6) {
          npc.parentalLineage = 'One parent was a human, the other was a half orc'
          setup.createRelative(town, npc, 'mother', {
            race: 'human'
          })
          setup.createRelative(town, npc, 'father', {
            race: 'half-orc'
          })
        } else if (parentalLineageRoll >= 4) {
          npc.parentalLineage = 'One parent was a half-orc, the other was an orc'
          setup.createRelative(town, npc, 'mother', {
            race: 'half-orc'
          })
        } else if (parentalLineageRoll < 4) {
          npc.parentalLineage = 'One parent was a human, the other was an orc'
          setup.createRelative(town, npc, 'mother', {
            race: 'human'
          })
        }
        break
      case 'half-elf':
        if (parentalLineageRoll === 8) {
          npc.parentalLineage = 'Both parents were half-elves'
          setup.createRelative(town, npc, 'mother', {
            race: 'half-elf'
          })
          setup.createRelative(town, npc, 'father', {
            race: 'half-elf'
          })
        } else if (parentalLineageRoll === 7) {
          npc.parentalLineage = 'One parent was a human, the other was a half elf'
          setup.createRelative(town, npc, 'father', {
            race: 'half-elf'
          })
          setup.createRelative(town, npc, 'mother', {
            race: 'human'
          })
        } else if (parentalLineageRoll === 6) {
          npc.parentalLineage = 'One parent was a half-elf, the other was an elf'
          setup.createRelative(town, npc, 'father', {
            race: 'half-elf'
          })
          setup.createRelative(town, npc, 'mother', {
            race: 'elf'
          })
        } else if (parentalLineageRoll < 6) {
          npc.parentalLineage = 'One parent was a human, the other was an elf'
          setup.createRelative(town, npc, 'father', {
            race: 'elf'
          })
          setup.createRelative(town, npc, 'mother', {
            race: 'human'
          })
        }
        break
      case 'tiefling':
        if (parentalLineageRoll === 8) {
          npc.parentalLineage = 'One parent was a human, the other was a devil'
          setup.createRelative(town, npc, 'mother', {
            race: 'human'
          })
        } else if (parentalLineageRoll === 7) {
          npc.parentalLineage = 'One parent was a tiefling, the other was a devil'
          setup.createRelative(town, npc, 'mother', {
            race: 'tiefling'
          })
        } else if (parentalLineageRoll >= 4) {
          npc.parentalLineage = 'One parent was a human, the other was a tiefling'
          setup.createRelative(town, npc, 'mother', {
            race: 'human'
          })
          setup.createRelative(town, npc, 'father', {
            race: 'tiefling'
          })
        } else if (parentalLineageRoll < 4) {
          npc.parentalLineage = 'Both parents were human, with their infernal ancestry manifesting in me later in life'
          setup.createRelative(town, npc, 'mother', {
            race: 'human'
          })
          setup.createRelative(town, npc, 'father', {
            race: 'human'
          })
        }
        break
    }
  } */

  if (!npc.birthplace) {
    const birthplaceRoll = random(1, 100)
    if (birthplaceRoll === 100) {
      npc.birthplace = 'on an Outer Plane'
    } else if (birthplaceRoll === 99) {
      npc.birthplace = 'on an Inner Plane'
    } else if (birthplaceRoll === 98) {
      npc.birthplace = 'on the Astral Plane'
    } else if (birthplaceRoll === 97) {
      npc.birthplace = 'in the Shadowfell'
    } else if (birthplaceRoll === 96) {
      npc.birthplace = 'in the Feywild'
    } else if (birthplaceRoll === 95) {
      npc.birthplace = 'on the Ethereal Plane'
    } else if (birthplaceRoll === 94) {
      npc.birthplace = "in a sage's laboratory"
    } else if (birthplaceRoll === 93) {
      npc.birthplace = 'in the headquarters of a secret organisation'
    } else if (birthplaceRoll === 92) {
      npc.birthplace = 'in a prison'
    } else if (birthplaceRoll === 91) {
      npc.birthplace = 'on a ship'
    } else if (birthplaceRoll >= 89) {
      npc.birthplace = 'on a boat'
    } else if (birthplaceRoll >= 86) {
      npc.birthplace = 'among people of a different race'
    } else if (birthplaceRoll === 85) {
      npc.birthplace = 'in a rubbish heap'
    } else if (birthplaceRoll === 84) {
      npc.birthplace = 'in a castle'
    } else if (birthplaceRoll === 83) {
      npc.birthplace = 'in a tower'
    } else if (birthplaceRoll === 82) {
      npc.birthplace = 'in a brothel'
    } else if (birthplaceRoll === 81) {
      npc.birthplace = 'in a tavern'
    } else if (birthplaceRoll === 80) {
      npc.birthplace = 'in an alley'
    } else if (birthplaceRoll === 79) {
      npc.birthplace = 'in a street'
    } else if (birthplaceRoll === 78) {
      npc.birthplace = 'on a battlefield'
    } else if (birthplaceRoll >= 75) {
      npc.birthplace = 'in a temple'
    } else if (birthplaceRoll >= 73) {
      npc.birthplace = 'in a forest'
    } else if (birthplaceRoll >= 71) {
      npc.birthplace = 'in a field'
    } else if (birthplaceRoll >= 69) {
      npc.birthplace = 'in a cave'
    } else if (birthplaceRoll === 68) {
      npc.birthplace = 'in a barn'
    } else if (birthplaceRoll === 67) {
      npc.birthplace = 'in a shed'
    } else if (birthplaceRoll === 66) {
      npc.birthplace = 'in a cart'
    } else if (birthplaceRoll === 65) {
      npc.birthplace = 'on a wagon'
    } else if (birthplaceRoll >= 56) {
      npc.birthplace = 'in the home of a midwife'
    } else if (birthplaceRoll >= 51) {
      npc.birthplace = 'in the home of a friend'
    } else {
      npc.birthplace = 'at home'
    }
  }

  const siblingRoll = random(1, 5)
  switch (siblingRoll) {
    case 1:
      npc.siblingNumber = 0
      break
    case 2:
      npc.siblingNumber = random(1, 3)
      break
    case 3:
      npc.siblingNumber = random(2, 5)
      break
    case 4:
      npc.siblingNumber = random(3, 8)
      break
    case 5:
      npc.siblingNumber = random(4, 11)
      break
  }

  // for (var i = npc.siblingNumber; i > 0; i--){
  // var siblingPlaceRoll = random(1, 6) + random(1, 6);
  //     if (siblingPlaceRoll == 2){
  //       npc.siblingTwin += 1;
  //     } else if (siblingPlaceRoll < 8){
  //       npc.siblingOlder += 1;
  //     } else if (siblingPlaceRoll >= 8){
  //       npc.siblingYounger += 1;
  //     }
  // }

  if (!npc.familyUnit) {
    const parentRoll = random(1, 100)
    if (parentRoll >= 76) {
      npc.familyUnit = 'my mother and father'
    } else if (parentRoll >= 70) {
      npc.familyUnit = 'my single stepmother'
    } else if (parentRoll >= 56) {
      npc.familyUnit = 'my single mother'
    } else if (parentRoll >= 50) {
      npc.familyUnit = 'my single stepfather'
    } else if (parentRoll >= 36) {
      npc.familyUnit = 'my single father'
    } else if (parentRoll >= 26) {
      npc.familyUnit = 'my adoptive family'
    } else if (parentRoll >= 20) {
      npc.familyUnit = 'my maternal grandparents'
    } else if (parentRoll >= 16) {
      npc.familyUnit = 'my paternal grandparents'
    } else if (parentRoll >= 8) {
      npc.familyUnit = 'my extended family'
    } else if (parentRoll >= 6) {
      npc.familyUnit = 'my guardian'
    } else if (parentRoll >= 4) {
      npc.familyUnit = 'the orphanage'
    } else if (parentRoll >= 3) {
      npc.familyUnit = 'the temple'
    } else if (parentRoll >= 2) {
      npc.familyUnit = 'the institution'
    } else if (parentRoll < 2) {
      npc.familyUnit = 'the streets'
    }
  }

  if (!npc.familyLifestyle) {
    const familyLifestyleRoll = dice(3, 6)
    if (familyLifestyleRoll === 18) {
      npc.familyLifestyle = 'aristocratic'
      wealthModifier = 40
    } else if (familyLifestyleRoll >= 16) {
      npc.familyLifestyle = 'wealthy'
      wealthModifier = 20
    } else if (familyLifestyleRoll >= 13) {
      npc.familyLifestyle = 'comfortable'
      wealthModifier = 10
    } else if (familyLifestyleRoll >= 9) {
      npc.familyLifestyle = 'modest'
    } else if (familyLifestyleRoll >= 6) {
      npc.familyLifestyle = 'poor'
      wealthModifier = -10
    } else if (familyLifestyleRoll >= 4) {
      npc.familyLifestyle = 'squalid'
      wealthModifier = -20
    } else if (familyLifestyleRoll < 4) {
      npc.familyLifestyle = 'wretched'
      wealthModifier = -40
    }
  }

  let familyHomeRoll = random(1, 100)
  familyHomeRoll += wealthModifier
  if (familyHomeRoll >= 111) {
    npc.familyHome = 'a palace'
  } else if (familyHomeRoll >= 91) {
    npc.familyHome = 'a mansion'
  } else if (familyHomeRoll >= 71) {
    npc.familyHome = 'a large house'
  } else if (familyHomeRoll >= 51) {
    npc.familyHome = 'a small house'
  } else if (familyHomeRoll >= 41) {
    npc.familyHome = 'an apartment in a rundown neighborhood'
  } else if (familyHomeRoll >= 36) {
    npc.familyHome = 'an encampment'
  } else if (familyHomeRoll >= 31) {
    npc.familyHome = 'a village in the middle of the wilderness'
  } else if (familyHomeRoll >= 21) {
    npc.familyHome = 'no real permanent address'
  } else if (familyHomeRoll >= 1) {
    npc.familyHome = 'a rundown shack'
  } else if (familyHomeRoll < 1) {
    npc.familyHome = 'on the streets'
  } else {
    npc.familyHome = 'a small house'
  }

  if (!npc.childhoodMemories) {
    const childhoodMemoriesRoll = dice(3, 6)
    if (childhoodMemoriesRoll >= 18) {
      npc.childhoodMemories = 'Everyone knew who I was, and I had friends everywhere I went'
      // eslint-disable-next-line no-var
      var friend = setup.createNPC(town, {
        isShallow: true,
        ageYears: npc.ageYears += random(-3, 3)
      })
      setup.createRelationship(town, npc, friend, 'friend', 'friend')
      const anotherFriend = setup.createNPC(town, {
        isShallow: true,
        ageYears: npc.ageYears += random(-3, 3)
      })
      setup.createRelationship(town, npc, anotherFriend, 'friend', 'friend')
    } else if (childhoodMemoriesRoll >= 16) {
      npc.childhoodMemories = 'I always found it easy to make friends, and I loved being around people'
      friend = setup.createNPC(town, {
        isShallow: true,
        ageYears: npc.ageYears += random(-3, 3)
      })
      setup.createRelationship(town, npc, friend, 'friend', 'friend')
    } else if (childhoodMemoriesRoll >= 13) {
      npc.childhoodMemories = 'I had several friends, and my childhood was generally a happy one'
      friend = setup.createNPC(town, {
        isShallow: true,
        ageYears: npc.ageYears += random(-3, 3)
      })
      setup.createRelationship(town, npc, friend, 'friend', 'friend')
    } else if (childhoodMemoriesRoll >= 9) {
      npc.childhoodMemories = 'I had a few close friends, and my childhood was a relatively normal one'
    } else if (childhoodMemoriesRoll >= 6) {
      npc.childhoodMemories = 'Others saw me as different, or strange, and so I had few companions'
    } else if (childhoodMemoriesRoll >= 4) {
      npc.childhoodMemories = 'I spent most of my childhood alone, and had no close friends'
    } else if (childhoodMemoriesRoll < 4) {
      npc.childhoodMemories = 'I am still haunted by my childhood, where I was treated badly by my peers'
      friend = setup.createNPC(town, {
        isShallow: true,
        ageYears: npc.ageYears += random(1, 3),
        childhoodMemories: 'I remember that we used to beat the shit out of that annoying ' + npc.boygirl + ', ' + setup.profile(npc, npc.firstName)
      })
      setup.createRelationship(town, npc, friend, 'bully', 'victim of bullying')
    }
  }
  return npc
}
