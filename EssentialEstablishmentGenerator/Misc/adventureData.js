
setup.adventure = {
  'create': function (town) {
    var adventure = {
      villainType: Object.keys(setup.adventure.villain).seededrandom(),
      villain: {
        name: 'Test',
        firstName: 'Test',
        himher: 'its',
        gender: 'it',
        hisher: 'it'
      },
      allyType: Object.keys(setup.adventure.ally).seededrandom(),
      patronType: Object.keys(setup.adventure.patron).seededrandom(),
      sidequestType: Object.keys(setup.adventure.sidequest).seededrandom()
    }

    adventure.ally = setup.createNPC(town, setup.adventure.ally[adventure.allyType])
    adventure.patron = setup.createNPC(town, setup.adventure.patron[adventure.patronType])

    Object.assign(adventure, {
      climax: setup.adventure.climax.seededrandom(),
      introduction: setup.adventure.introduction.seededrandom(),
      otherGoal: setup.adventure.otherGoal.seededrandom(),
      backdrop: setup.adventure.backdrop.seededrandom(),
      quandary: setup.adventure.quandary.seededrandom(),
      twist: setup.adventure.twist.seededrandom(),
      sidequest: setup.adventure.sidequest[adventure.sidequestType](town, adventure),
      villainActions: setup.adventure.villainActions.seededrandom()
    })

    adventure.location = Object.keys(setup.adventure.location).seededrandom()
    var goal = Object.keys(setup.adventure.location[adventure.location]).seededrandom()
    adventure.goal = setup.adventure.location[adventure.location][goal](town, adventure)
    console.log(adventure)
    return adventure
  },
  'location': {
    'dungeon': {
      "stop the dungeon's monstrous inhabitants from raiding the surface world.": function (town, adventure) {
        return "stop the dungeon's monstrous inhabitants from raiding the surface world."
      },
      "foil a villain's evil scheme.": function (town, adventure) {
        return "foil a villain's evil scheme."
      },
      'destroy a magical threat inside the dungeon.': function (town, adventure) {
        return 'destroy a magical threat inside the dungeon.'
      },
      'acquire treasure.': function (town, adventure) {
        return 'acquire treasure.'
      },
      'find a particular item for a specific purpose.': function (town, adventure) {
        return 'find a particular item for a specific purpose.'
      },
      'retrieve a stolen item hidden in the dungeon.': function (town, adventure) {
        return 'retrieve a stolen item hidden in the dungeon.'
      },
      'find information needed for a special purpose.': function (town, adventure) {
        return 'find information needed for a special purpose.'
      },
      'rescue a captive.': function (town, adventure) {
        var npc = setup.createNPC(town, {
          background: ['urchin', 'urchin', 'urchin', 'commoner', 'commoner', 'commoner', 'commoner', 'noble', 'noble'].seededrandom(),
          profession: 'slave',
          hasClass: false,
          isThrowaway: true
        })
        return 'rescue ' + setup.profile(npc) + ', a ' + npc.descriptor + ' who was captured and taken prisoner.'
      },
      'discover the fate of a previous adventuring party.': function (town, adventure) {
        var npc = setup.createNPC(town, {
          hasClass: true
        })
        return 'discover the fate of ' + setup.profile(npc) + ' and ' + npc.hisher + ' adventuring party.'
      },
      'find an npc who disappeared in the area.': function (town, adventure) {
        var npc = setup.createNPC(town, {
          hasClass: true
        })
        return 'find ' + setup.profile(npc) + ', who disappeared in the area.'
      },
      'slay a dragon or some other challenging monster.': function (town, adventure) {
        return 'slay a dragon or some other challenging monster.'
      },
      'discover the nature and origin of a strange location or phenomenon.': function (town, adventure) {
        return 'discover the nature and origin of a strange location or phenomenon.'
      },
      'pursue fleeing foes taking refuge in the dungeon.': function (town, adventure) {
        return 'pursue fleeing foes taking refuge in the dungeon.'
      },
      'escape from captivity in the dungeon.': function (town, adventure) {
        return 'escape from captivity in the dungeon.'
      },
      'clear a ruin so it can be rebuilt and reoccupied.': function (town, adventure) {
        return 'clear a ruin so it can be rebuilt and reoccupied.'
      },
      'discover why a villain is interested in the dungeon.': function (town, adventure) {
        return 'discover why a villain is interested in the dungeon.'
      },
      'win a bet or complete a rite of passage by surviving in the dungeon for a certain amount of time.': function (town, adventure) {
        return 'win a bet or complete a rite of passage by surviving in the dungeon for a certain amount of time.'
      },
      'parley with a villain in the dungeon.': function (town, adventure) {
        return 'parley with a villain in the dungeon.'
      },
      'hide from a threat outside the dungeon.': function (town, adventure) {
        return 'hide from a threat outside the dungeon.'
      }
    },
    'wilderness': {
      'assess the scope of a natural or unnatural disaster.': function (town, adventure) {
        return ''
      },
      'escort an npc to a destination.': function (town, adventure) {
        var npc = setup.createNPC(town, {
          hasClass: true
        })
        return 'escort ' + setup.profile(npc) + ' to a destination.'
      },
      "arrive at a destination without being seen by the villain's forces.": function (town, adventure) {
        return "arrive at a destination without being seen by the villain's forces."
      },
      'stop monsters from raiding caravans and farms.': function (town, adventure) {
        return 'stop monsters from raiding caravans and farms.'
      },
      'establish trade with a distant town.': function (town, adventure) {
        var otherTown = setup.createTownName()
        return 'establish trade with the distant town ' + otherTown + '.'
      },
      'protect a caravan traveling to a distant town.': function (town, adventure) {
        var caravan = setup.misc.caravan.create(town)
        var otherTown = setup.createTownName()
        return 'protect a ' + caravan.tippyWord + ' traveling to the distant town ' + otherTown
      },
      'map a new land.': function (town, adventure) {
        return ''
      },
      'find a place to establish a colony.': function (town, adventure) {
        return 'find a place to establish a colony.'
      },
      'find a natural resource.': function (town, adventure) {
        return 'find a natural resource.'
      },
      'hunt a specific monster.': function (town, adventure) {
        return 'hunt a specific monster.'
      },
      'return home from a distant place.': function (town, adventure) {
        return 'return home from a distant place.'
      },
      'obtain information from a reclusive hermit.': function (town, adventure) {
        var npc = setup.createNPC(town, {
          hasClass: false,
          background: 'hermit',
          profession: 'hermit',
          isThrowaway: true
        })
        return 'obtain information from a ' + setup.profile(npc, 'reclusive hermit.')
      },
      'find an object that was lost in the wilds.': function (town, adventure) {
        return 'find an object that was lost in the wilds.'
      },
      'discover the fate of a missing group of explorers.': function (town, adventure) {
        var npc = setup.createNPC(town, {
          hasClass: false,
          background: 'outlander',
          profession: 'explorer',
          isThrowaway: true
        })
        return 'discover the fate of ' + setup.profile(npc) + ' and ' + npc.hisher + ' missing group of explorers.'
      },
      'pursue fleeing foes.': function (town, adventure) {
        return 'pursue fleeing foes.'
      },
      'assess the size of an approaching army.': function (town, adventure) {
        return ''
      },
      'escape the reign of a tyrant.': function (town, adventure) {
        return ''
      },
      'protect a wilderness site from attackers.': function (town, adventure) {
        return ''
      }
    },
    'other': {
      'seize control of a fortified location such as a fortress, town, or ship.': function (town, adventure) {
        return 'seize control of a fortified location such as a fortress, town, or ship.'
      },
      'defend a location from attackers.': function (town, adventure) {
        return 'defend a location from attackers.'
      },
      'retrieve an object from inside a secure location in a settlement.': function (town, adventure) {
        var otherTown = setup.createTownName()
        return 'retrieve an object from inside a secure location in the settlement ' + otherTown + '.'
      },
      'retrieve an object from a caravan.': function (town, adventure) {
        var caravan = setup.misc.caravan.create(town)
        return 'retrieve an object from a ' + caravan.tippyWord + '. '
      },
      'salvage an object or goods from a lost vessel or caravan.': function (town, adventure) {
        return 'salvage an object or goods from a lost vessel or caravan.'
      },
      'break a prisoner out of a jail or prison camp.': function (town, adventure) {
        return 'break a prisoner out of a jail or prison camp.'
      },
      'escape from a jail or prison camp.': function (town, adventure) {
        return 'escape from a jail or prison camp.'
      },
      'successfully travel through an obstacle course to gain recognition or reward.': function (town, adventure) {
        return 'successfully travel through an obstacle course to gain recognition or reward.'
      },
      'infiltrate a fortified location.': function (town, adventure) {
        return 'infiltrate a fortified location.'
      },
      'find the source of strange occurrences in a haunted house or other location.': function (town, adventure) {
        return 'find the source of strange occurrences in a haunted house or other location.'
      },
      'interfere with the operation of a business.': function (town, adventure) {
        return 'interfere with the operation of a business.'
      },
      'rescue a character, monster, or object from a natural or unnatural disaster.': function (town, adventure) {
        return 'rescue a character, monster, or object from a natural or unnatural disaster.'
      }
    }
  },
  'introduction': [
    'While traveling in the wilderness, the characters fall into a sinkhole that opens beneath their feet, dropping them into the adventure location.',
    'While traveling in the wilderness, the characters notice the entrance to the adventure location.',
    'While traveling on a road, the characters are attacked by monsters that flee into the nearby adventure location.',
    'The adventurers find a map on a dead body. In addition to the map setting up the adventure, the $adventure.villain.name wants the map.',
    'A mysterious magic item (or $adventure.villain.name) teleports the characters to the adventure location.',
    'A stranger approaches the characters in a tavern and urges them toward the adventure location.',
    '$town.name needs volunteers to go to the adventure location.',
    'An NPC the characters care about needs them to go to the adventure location.',
    'An NPC the characters must obey orders them to go to the adventure location.',
    'An NPC the characters respect asks them to go to the adventure location.',
    'One night, the characters all dream about entering the adventure location.',
    'A ghost appears and terrorizes a village. Research reveals that it can be put to rest only by entering the adventure location.'
  ],
  'climax': [
    'The adventurers confront $adventure.villain.name and a group of minions in a bloody battle to the finish.',
    "The adventurers chase $adventure.villain.name while dodging obstacles designed to thwart them, leading to a final confrontation in or outside $adventure.villain.firstName's refuge",
    'The actions of the adventurers or $adventure.villain.name result in a cataclysmic even that the adventurers must escape',
    'The adventurers race to the site where $adventure.villain.name is bringing a master plan to its conclusion, arriving just as that plan is about to be completed',
    '$adventure.villain.name and two or three lieutenants perform seperate rites in a large room. The adventurers must disrupt all the rites at the same time. ',
    "An ally betrays the adventurers as they're about to achieve their goal (use this climax carefully, and don't overuse it).",
    'A portal opens to another plane of existence. Creatures on the other side spill out, forcing the adventurers to close the portal and deal with $adventure.villain.name at the same time.',
    'Traps, hazards, or animated objects turn against the adventurers while $adventure.villain.name attacks.',
    'The dungeon begins to collapse while the adventurers face $adventure.villain.name, who attempts to escape in the chaos. ',
    'A threat more powerful than the adventurers appears, destroys $adventure.villain.name, and then turns its attention on the characters. ',
    'The adventurers must choose whether to pursue the fleeing $adventure.villain.name or save an NPC they care about or a group of innocents. ',
    "The adventurers must discover $adventure.villain.firstName's secret weakness before they can hope to defeat $adventure.villain.himher"
  ],
  'otherGoal': [
    'Bring $adventure.villain.name to justice.',
    'Clear the name of an innocent NPC.',
    'Protect or hide an NPC.',
    'Protect an object.',
    "Discover the nature and origin of a strange phenomenon that might be $adventure.villain.firstName's doing.",
    'Find a wanted fugitive.',
    'Overthrow a tyrant.',
    'Uncover a conspiracy to overthrow a ruler.',
    'Negotiate peace between enemy nations or feuding families.',
    'Secure aid from a ruler or council.',
    'Help a villain find redemption.',
    'Parley with a villain.',
    'Smuggle weapons to rebel forces.',
    'Stop a band of smugglers.',
    'Gather intelligence on an enemy force.',
    'Win a tournament.',
    "Determine the villain's identity.",
    'Locate a stolen item.',
    'Make sure a wedding goes off without a hitch.'
  ],
  'backdrop': [
    "anniversary of a monarch's reign", 'anniversary of an important event', 'arena event', 'arrival of a caravan or ship', 'arrival of a circus', 'arrival of an important npc', 'arrival of marching modrons', 'artistic performance', 'athletic event', 'birth of a child', 'birthday of an important npc', 'civic festival', 'comet appearance', 'commemoration of a past tragedy', 'consecration of a new temple', 'coronation', 'council meeting', 'equinox or solstice', 'execution', 'fertility festival', 'full moon', 'funeral', 'graduation of cadets or wizards', 'harvest festival', 'holy day', 'investiture of a knight or other noble', 'lunar eclipse', 'midsummer festival', 'midwinter festival', 'migration of monsters', "monarch's ball", 'new moon', 'new year', 'pardoning of a prisoner', 'planar conjunction', 'planetary alignment', 'priestly investiture', 'procession of ghosts', 'remembrance for soldiers lost in war', 'royal address or proclamation', 'royal audience day', 'signing of a treaty', 'solar eclipse', 'tournament', 'trial', 'violent uprising', 'wedding or wedding anniversary'
  ],
  'quandary': [
    'Ally quandary', 'Friend quandary', 'Honor quandary', 'Rescue quandary', 'Respect quandary'
  ],
  'twist': [
    'The adventurers are racing against other creatures with the same or opposite goal.',
    'The adventurers become responsible for the safety of a noncombatant NPC.',
    'The adventurers are prohibited from killing $adventure.villain.name, but $adventure.villain.heshe has no compunctions about killing them.',
    'The adventurers have a time limit.',
    'The adventurers have received false or extraneous information.',
    'Completing an adventure goal fulfills a prophecy or prevents the fulfillment of a prophecy.',
    'The adventurers have two different goals, but they can complete only one.',
    'Completing the goal secretly helps $adventure.villain.name.',
    'The adventurers must cooperate with a known enemy to achieve the goal.',
    'The adventurers are under magical compulsion (such as a geas spell) to complete their goal'
  ],
  'villainActions': ['by doing one big event', 'by a crime spree', 'by growing corruption throughout the land', 'by serial crimes', 'step by step'],
  'sidequest': {
    'find a specific item rumored to be in the area.': function (town, adventure) {
      return 'find a specific item rumored to be in the area.'
    },
    "retrieve a stolen item in the villain's possession.": function (town, adventure) {
      if (adventure.villain.height) {
        return 'retrieve a stolen item in ' + setup.profile(adventure.villain) + "'s possession."
      } else {
        return "retrieve a stolen item in the villain's possession."
      }
    },
    'receive information from an npc in the area.': function (town, adventure) {
      var npc = setup.createNPC({
        isThrowaway: true
      })
      return 'receive information from ' + setup.profile(npc) + ' who is in the area.'
    },
    'rescue a captive.': function (town, adventure) {
      var npc = setup.createNPC({
        isThrowaway: true
      })
      return 'rescue the captive ' + setup.profile(npc) + '.'
    },
    'discover the fate of a missing npc.': function (town, adventure) {
      var npc = setup.createNPC({
        isThrowaway: true
      })
      return 'discover the fate of the missing ' + setup.profile(npc) + '.'
    },
    'slay a specific monster.': function (town, adventure) {
      return 'slay a specific monster.'
    },
    'discover the nature and origin of a strange phenomenon in the area.': function (town, adventure) {
      return 'discover the nature and origin of a strange phenomenon in the area.'
    },
    'secure the aid of a character or creature in the area.': function (town, adventure) {
      return 'secure the aid of a character or creature in the area.'
    }

  },
  'patron': {
    'retired adventurer': {
      isThrowaway: true,
      hasClass: true,
      ageStage: 'elderly'
    },
    'local ruler': {
      isThrowaway: true,
      background: 'noble',
      profession: 'king',
      hasClass: false
    },
    'military officer': {
      isThrowaway: true,
      background: 'soldier',
      profession: 'city watch',
      dndClass: 'fighter'
    },
    'temple official': {
      isThrowaway: true,
      hasClass: false,
      background: 'acolyte',
      profession: 'clergyman'
    },
    'sage': {
      isThrowaway: true,
      background: 'sage'
    },
    'respected elder': {
      isThrowaway: true,
      ageStage: 'elderly'
    },
    'deity or celestial': {
      isThrowaway: true,
      note: 'Is a deity or celestial.'
    },
    'mysterious fey': {
      isThrowaway: true,
      race: 'elf',
      note: 'Is a deity or celestial.'
    },
    'old friend': {
      isThrowaway: true,
      note: 'Is an old friend.'
    },
    'former teacher': {
      isThrowaway: true,
      note: 'Is a former teacher.'
    },
    'parent or other family member': {
      isThrowaway: true,
      note: 'Is parent or family member to a party member.'
    },
    'desperate commoner': {
      isThrowaway: true,
      hasClass: false,
      background: 'commoner'
    },
    'embattled merchant': {
      isThrowaway: true,
      hasClass: false,
      background: 'merchant',
      profession: 'merchant'
    },
    'villain posing as a patron': {
      isThrowaway: true,
      note: 'Is actually a villain.'
    }
  },
  'ally': {
    'skilled adventurer': {
      hasClass: true,
      ageStage: 'elderly',
      isThrowaway: true
    },
    'inexperienced adventurer': {
      isThrowaway: true,
      hasClass: true
    },
    'enthusiastic commoner': {
      isThrowaway: true,
      background: 'commoner',
      hasClass: false
    },
    'soldier': {
      isThrowaway: true,
      background: 'soldier',
      dndClass: 'fighter'
    },
    'priest': {
      isThrowaway: true,
      background: 'acolyte',
      dndClass: 'cleric'
    },
    'sage': {
      isThrowaway: true,
      background: 'sage',
      profession: 'sage'
    },
    'revenge seeker': {
      isThrowaway: true
    },
    'raving lunatic adventurer': {
      isThrowaway: true,
      hasClass: true,
      calmTrait: 'mildly crazy',
      stressTrait: 'totally insane'
    },
    'celestial ally': {
      isThrowaway: true,
      note: 'Is a celestial being.'
    },
    'fey ally': {
      isThrowaway: true,
      note: 'Is a fey.',
      race: 'elf'
    },
    'disguised monster': {
      isThrowaway: true,
      note: 'Is a disguised monster'
    },
    'villain posing as an ally': {
      isThrowaway: true
    }
  },
  'villain': {
    'beast or monstrosity with no particular agenda': function (town, adventure) {
      adventure.villain = {
        himher: 'it',
        gender: 'it',
        heshe: 'it',
        name: 'monster',
        firstName: 'monster'
      }
      return adventure.villain
    },
    'terrible aberration bent on corruption or domination': function (town, adventure) {
      adventure.villain = {
        himher: 'it',
        gender: 'it',
        heshe: 'it',
        name: 'monster',
        firstName: 'monster'
      }
      return adventure.villain
    },
    'fiend bent on corruption or destruction': function (town, adventure) {
      adventure.villain = {
        himher: 'it',
        gender: 'it',
        heshe: 'it',
        name: 'fiend',
        firstName: 'fiend'
      }
      return adventure.villain
    },
    'dragon bent on domination and plunder': function (town, adventure) {
      adventure.villain = {
        himher: 'it',
        gender: 'it',
        heshe: 'it',
        name: 'dragon',
        firstName: 'dragon'
      }
      return adventure.villain
    },
    'giant bent on plunder': function (town, adventure) {
      adventure.villain = {
        himher: 'it',
        gender: 'it',
        heshe: 'it',
        name: 'giant',
        firstName: 'giant'
      }
      return adventure.villain
    },
    'horrible undead with any agenda': function (town, adventure) {
      adventure.villain = {
        himher: 'it',
        gender: 'it',
        heshe: 'it',
        name: 'undead',
        firstName: 'undead'
      }
      return adventure.villain
    },
    'fey with a mysterious goal': function (town, adventure) {
      adventure.villain = {
        himher: 'it',
        gender: 'it',
        heshe: 'it',
        name: 'fey',
        firstName: 'fey'
      }
      return adventure.villain
    },
    '<<print setup.profile(adventure.villain, "cultist")>>': function (town, adventure) {
      adventure.villain = setup.createNPC({
        dndClass: ['cleric', 'sorcerer', 'wizard'].seededrandom(),
        isThrowaway: true
      })
      return adventure.villain
    },
    '<<print setup.profile(adventure.villain, "conqueror")>>': function (town, adventure) {
      adventure.villain = setup.createNPC({
        dndClass: ['barbarian', 'fighter', 'fighter'].seededrandom(),
        isThrowaway: true
      })
      return adventure.villain
    },
    '<<print "a " + setup.profile(adventure.villain, adventure.villain.race) + " seeking revenge">>': function (town, adventure) {
      adventure.villain = setup.createNPC({
        isThrowaway: true
      })
      return adventure.villain
    },
    '<<print "a " + setup.profile(adventure.villain, "schemer") + " seeking to rule">>': function (town, adventure) {
      adventure.villain = setup.createNPC({
        isThrowaway: true
      })
      return adventure.villain
    },
    '<<print "a " + setup.profile(adventure.villain, "criminal mastermind")>>': function (town, adventure) {
      adventure.villain = setup.createNPC({
        dndClass: ['rogue', 'rogue', 'fighter'].seededrandom(),
        isThrowaway: true
      })
      return adventure.villain
    },
    '<<print "a " + setup.profile(adventure.villain, "raider")>>': function (town, adventure) {
      adventure.villain = setup.createNPC({
        dndClass: ['fighter', 'rogue'].seededrandom(),
        race: ['half-orc', 'human', 'human'].seededrandom(),
        isThrowaway: true
      })
      return adventure.villain
    },
    '<<print "a " + setup.profile(adventure.villain, adventure.villain.race) + " under a curse">>': function (town, adventure) {
      adventure.villain = setup.createNPC({
        isThrowaway: true,
        note: 'Is under a curse.'
      })
      return adventure.villain
    },
    '<<print "a " + setup.profile(adventure.villain, "misguided zealot")>>': function (town, adventure) {
      adventure.villain = setup.createNPC({
        dndClass: ['cleric', 'cleric', 'druid'].seededrandom(),
        isThrowaway: true
      })
      return adventure.villain
    }
  }

}
