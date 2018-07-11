setup.createHistory = function(npc) {
  var parentalLineageRoll = random(1, 8);
  var birthplaceRoll = random(1, 100);
  var parentRoll = random(1, 100);
  var siblingRoll = random(1, 5);
  var familyLifestyleRoll = random(1, 6) + random(1, 6) + random(1, 6);
  var familyLifestyle;
  var familyHomeRoll = random(1, 100);
  var familyHome;
  var childhoodMemoriesRoll = random(1, 6) + random(1, 6) + random(1, 6);
  var childhoodMemories;
  var wealthmodifier;
  var adventureRoll = random(1, 100);

  if (random(1, 100) > 95){
    npc.knewParents = false;
  } else {
    npc.knewParents = true;
  }

  switch (npc.race){
    case "half-orc":
      if (parentalLineageRoll == 8){
        npc.parentalLineage = "Both parents were half-orcs";
      } else if (parentalLineageRoll >= 6){
        npc.parentalLineage = "One parent was a human, the other was a half orc";
      } else if (parentalLineageRoll >= 4){
        npc.parentalLineage = "One parent was a half-orc, the other was an orc";
      } else if (parentalLineageRoll < 4){
        npc.parentalLineage = "One parent was a human, the other was an orc";
      }
      break;
    case "half-elf":
      if (parentalLineageRoll == 8){
        npc.parentalLineage = "Both parents were half-elves";
      } else if (parentalLineageRoll == 7){
        npc.parentalLineage = "One parent was a human, the other was a half elf";
      } else if (parentalLineageRoll == 6){
        npc.parentalLineage = "One parent was a half-elf, the other was an elf";
      } else if (parentalLineageRoll < 6){
        npc.parentalLineage = "One parent was a human, the other was an elf";
      }
      break;
    case "tiefling":
      if (parentalLineageRoll == 8){
        npc.parentalLineage = "One parent was a human, the other was a devil";
      } else if (parentalLineageRoll == 7){
        npc.parentalLineage = "One parent was a tiefling, the other was a devil";
      } else if (parentalLineageRoll >= 4){
        npc.parentalLineage = "One parent was a human, the other was a tiefling";
      } else if (parentalLineageRoll < 4){
        npc.parentalLineage = "Both parents were human, with their infernal ancestry manifesting in " + npc.firstname + " later in life";
      }
      break;
  }

  if (birthplaceRoll == 100){
    npc.birthplace = "an Outer Plane";
  } else if (birthplaceRoll == 99){
    npc.birthplace = "an Inner Plane";
  } else if (birthplaceRoll == 98){
    npc.birthplace = "on the Astral Plane";
  } else if (birthplaceRoll == 97){
    npc.birthplace = "in the Shadowfell";
  } else if (birthplaceRoll == 96){
    npc.birthplace = "in the Feywild";
  } else if (birthplaceRoll == 95){
    npc.birthplace = "on the Ethereal Plane";
  } else if (birthplaceRoll == 94){
    npc.birthplace = "in a sage's laboratory";
  } else if (birthplaceRoll == 93){
    npc.birthplace = "in the headquarters of a secret organisation";
  } else if (birthplaceRoll == 92){
    npc.birthplace = "in a prison";
  } else if (birthplaceRoll == 91){
    npc.birthplace = "on a ship";
  } else if (birthplaceRoll >= 89){
    npc.birthplace = "on a boat";
  } else if (birthplaceRoll >= 86){
    npc.birthplace = "among people of a different race";
  } else if (birthplaceRoll == 85){
    npc.birthplace = "in a rubbish heap";
  } else if (birthplaceRoll == 84){
    npc.birthplace = "in a castle";
  } else if (birthplaceRoll == 83){
    npc.birthplace = "in a tower";
  } else if (birthplaceRoll == 82){
    npc.birthplace = "in a brothel";
  } else if (birthplaceRoll == 81){
    npc.birthplace = "in a tavern";
  } else if (birthplaceRoll == 80){
    npc.birthplace = "in an alley";
  } else if (birthplaceRoll == 79){
    npc.birthplace = "in a street";
  } else if (birthplaceRoll == 78){
    npc.birthplace = "on a battlefield";
  } else if (birthplaceRoll >= 75){
    npc.birthplace = "in a temple";
  } else if (birthplaceRoll >= 73){
    npc.birthplace = "in a forest";
  } else if (birthplaceRoll >= 71){
    npc.birthplace = "in a field";
  } else if (birthplaceRoll >= 69){
    npc.birthplace = "in a cave";
  } else if (birthplaceRoll == 68){
    npc.birthplace = "in a barn";
  } else if (birthplaceRoll == 67){
    npc.birthplace = "in a shed";
  } else if (birthplaceRoll == 66){
    npc.birthplace = "in a cart";
  } else if (birthplaceRoll == 65){
    npc.birthplace = "on a wagon";
  } else if (birthplaceRoll >= 56){
    npc.birthplace = "in the home of a midwife";
  } else if (birthplaceRoll >= 51){
    npc.birthplace = "in the home of a friend";
  } else if (birthplaceRoll <= 50){
    npc.birthplace = "at home";
  } else {
    npc.birthplace  = "at home";
  }

  switch (siblingRoll){
    case 1:
      npc.siblingNumber = 0;
      break;
    case 2:
      npc.siblingNumber = random(1, 3);
      break;
    case 3:
      npc.siblingNumber = random(2, 5);
      break;
    case 4:
      npc.siblingNumber = random(3, 8);
      break;
    case 5:
      npc.siblingNumber = random(4, 11);
      break;
  }
  // for npc.siblingNumber
  //   if (random(1, 6) + random(1, 6) == 2){
  //     npc.siblingTwin += 1;
  //   } else if (random(1, 6) + random(1, 6) < 8){
  //     npc.siblingOlder += 1;
  //   } else if (random(1, 6) + random(1, 6) >= 8){
  //     npc.siblingYounger += 1;

    if (parentRoll >= 76){
      npc.familyUnit = "mother and father";
    } else if (parentRoll >= 70){
      npc.familyUnit = "single stepmother";
    } else if (parentRoll >= 56){
      npc.familyUnit = "single mother";
    } else if (parentRoll >= 50){
      npc.familyUnit = "single stepfather";
    } else if (parentRoll >= 36){
      npc.familyUnit = "single father";
    } else if (parentRoll >= 26){
      npc.familyUnit = "adoptive family";
    } else if (parentRoll >= 20){
      npc.familyUnit = "maternal grandparents";
    } else if (parentRoll >= 16){
      npc.familyUnit = "paternal grandparents";
    } else if (parentRoll >= 8){
      npc.familyUnit = "extended family";
    } else if (parentRoll >= 6){
      npc.familyUnit = "guardian";
    } else if (parentRoll >= 4){
      npc.familyUnit = "orphanage";
    } else if (parentRoll >= 3){
      npc.familyUnit = "temple";
    } else if (parentRoll >= 2){
      npc.familyUnit = "institution";
    } else if (parentRoll < 2){
      npc.familyUnit = "none";
    }

    if (familyLifestyleRoll == 18){
        npc.familyLifestyle = "aristocratic";
        wealthmodifier = 40;
      } else if (familyLifestyleRoll >= 16){
        npc.familyLifestyle = "wealthy";
        wealthmodifier = 20;
      } else if (familyLifestyleRoll >= 13){
        npc.familyLifestyle = "comfortable";
        wealthmodifier = 10;
      } else if (familyLifestyleRoll >= 9){
        npc.familyLifestyle = "modest";
      } else if (familyLifestyleRoll >= 6){
        npc.familyLifestyle = "poor";
        wealthmodifier = -10;
      } else if (familyLifestyleRoll >= 4){
        npc.familyLifestyle = "squalid";
        wealthmodifier = -20;
      } else if (familyLifestyleRoll < 4){
        npc.familyLifestyle = "wretched";
        wealthmodifier = -40;
      }

      familyHomeRoll = familyHomeRoll += wealthmodifier;
      if (familyHomeRoll >= 111){
        npc.familyHome = "a palace";
      } else if (familyHomeRoll >= 91){
        npc.familyHome = "a mansion";
      } else if (familyHomeRoll >= 71){
        npc.familyHome = "a large house";
      } else if (familyHomeRoll >= 51){
        npc.familyHome = "a small house";
      } else if (familyHomeRoll >= 41){
        npc.familyHome = "an apartment in a rundown neighborhood";
      } else if (familyHomeRoll >= 36){
        npc.familyHome = "an encampment";
      } else if (familyHomeRoll >= 31){
        npc.familyHome = "a village in the middle of the wilderness";
      } else if (familyHomeRoll >= 21){
        npc.familyHome = "no real permanent address";
      } else if (familyHomeRoll >= 1){
        npc.familyHome = "a rundown shack";
      } else if (familyHomeRoll > 1){
        npc.familyHome = "on the streets";
      }

      if (childhoodMemoriesRoll >= 18){
        npc.childhoodMemories = "Everyone knew who I was, and I had friends everywhere I went";
      } else if (childhoodMemoriesRoll >= 16){
        npc.childhoodMemories = "I always found it easy to make friends, and I loved being around people";
      } else if (childhoodMemoriesRoll >= 13){
        npc.childhoodMemories = "I had several friends, and my childhood was generally a happy one";
      } else if (childhoodMemoriesRoll >= 9){
        npc.childhoodMemories = "I had a few close friends, and my childhood was a relatively normal one";
      } else if (childhoodMemoriesRoll >= 6){
        npc.childhoodMemories = "Others saw me as different, or strange, and so I had few companions";
      } else if (childhoodMemoriesRoll >= 4){
        npc.childhoodMemories = "I spent most of my childhood alone, and had no close friends";
      } else if (childhoodMemoriesRoll < 4){
        npc.childhoodMemories = "I am still haunted by my childhood, where I was treated badly by my peers";
      }

      if (adventureRoll == 100){
        npc.adventureResults = "came across a magical item";
      } else if (adventureRoll >= 91){
        npc.adventureResults = "found a considerable amount of treasure";
      } else if (adventureRoll >= 91){
        npc.adventureResults = "found a considerable amount of treasure";
        npc.wealth += random(5100, 7150);
      } else if (adventureRoll >= 91){
        npc.adventureResults = "found some treasure";
        npc.wealth += random(0, 600);
        npc.wealth += random(0, 600);
      } else if (adventureRoll >= 71){
        npc.adventureResults = "learnt a great deal about myself";
      } else if (adventureRoll >= 61){
        npc.adventureResults = "came across something terrifying that still stalks the lands";
      } else if (adventureRoll >= 51){
        npc.adventureResults = "lost something of sentimental value to me";
      } else if (adventureRoll >= 41){
        npc.adventureResults = "was poisoned by a " + ("monster", "trap", "monster").random() + ", but recovered in due time";
      } else if (adventureRoll >= 31){
        npc.adventureResults = "contracted a disease while exploring a filthy warren. I recovered, but I'm still not quite right";
        npc.physicaltrait = ("pockmarked face", "grey hair").random();
      } else if (adventureRoll >= 21){
        npc.adventureResults = "was wounded, but recovered in time";
      } else if (adventureRoll >= 11){
        npc.adventureResults = "was greivously wounded, but recovered in time. It still hurts, from time to time";
      } else if (adventureRoll >= 91){
        npc.adventureResults = "nearly died- that's how I got the scars.";
        npc.physicaltrait = ("a missing ear", "a missing finger", "two missing fingers").random();
      }

  return npc;
};
