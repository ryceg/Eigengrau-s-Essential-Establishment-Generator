
setup.adventure = {
  create (town) {
    const adventure = {
      // villain: setup.adventure.villain[villainType],
      villainType: lib.keys(setup.adventure.villain).random(),
      villain: {
        name: 'Test',
        firstName: 'Test',
        himher: 'its',
        gender: 'it',
        hisher: 'it'
      },
      allyType: lib.keys(setup.adventure.ally).random(),
      patronType: lib.keys(setup.adventure.patron).random(),
      sidequestType: lib.keys(setup.adventure.sidequest).random()
    }

    lib.assign(adventure, {
      ally: setup.createNPC(town, setup.adventure.ally[adventure.allyType]),
      patron: setup.createNPC(town, setup.adventure.patron[adventure.patronType])
    })

    lib.assign(adventure, {
      climax: setup.adventure.climax.random(),
      introduction: setup.adventure.introduction.random(),
      otherGoal: setup.adventure.otherGoal.random(),
      backdrop: setup.adventure.backdrop.random(),
      quandary: setup.adventure.quandary.random(),
      twist: setup.adventure.twist.random(),
      sidequest: setup.adventure.sidequest[adventure.sidequestType](town, adventure),
      villainActions: setup.adventure.villainActions.random()
    })

    lib.assign(adventure, {
      location: lib.keys(setup.adventure.location).random()
    })

    const adventureLocation = setup.adventure.location[adventure.location]
    const goalKey = lib.keys(adventureLocation).random()

    lib.assign(adventure, {
      goal: adventureLocation[goalKey](town, adventure)
    })

    lib.logger.info(adventure)
    return adventure
  },
  location: {
    dungeon: {
      "stop the dungeon's monstrous inhabitants from raiding the surface world." (town, adventure) {
        return "stop the dungeon's monstrous inhabitants from raiding the surface world."
      },
      "foil a villain's evil scheme." (town, adventure) {
        return "foil a villain's evil scheme."
      },
      'destroy a magical threat inside the dungeon.' (town, adventure) {
        return 'destroy a magical threat inside the dungeon.'
      },
      'acquire treasure.' (town, adventure) {
        return 'acquire treasure.'
      },
      'find a particular item for a specific purpose.' (town, adventure) {
        return 'find a particular item for a specific purpose.'
      },
      'retrieve a stolen item hidden in the dungeon.' (town, adventure) {
        return 'retrieve a stolen item hidden in the dungeon.'
      },
      'find information needed for a special purpose.' (town, adventure) {
        return 'find information needed for a special purpose.'
      },
      'rescue a captive.' (town, adventure) {
        const npc = setup.createNPC(town, {
          background: ['urchin', 'urchin', 'urchin', 'commoner', 'commoner', 'commoner', 'commoner', 'noble', 'noble'].random(),
          profession: 'slave',
          isThrowaway: true
        })
        return `rescue ${setup.profile(npc)}, a ${npc.descriptor} who was captured and taken prisoner.`
      },
      'discover the fate of a previous adventuring party.' (town, adventure) {
        const npc = setup.createNPC(town, {
          professionType: 'dndClass',
          hasClass: true
        })
        return `discover the fate of ${setup.profile(npc)} and ${npc.hisher} adventuring party.`
      },
      'find an npc who disappeared in the area.' (town, adventure) {
        const npc = setup.createNPC(town, {
          professionType: 'dndClass',
          hasClass: true
        })
        return `find ${setup.profile(npc)}, who disappeared in the area.`
      },
      'slay a dragon or some other challenging monster.' (town, adventure) {
        return 'slay a dragon or some other challenging monster.'
      },
      'discover the nature and origin of a strange location or phenomenon.' (town, adventure) {
        return 'discover the nature and origin of a strange location or phenomenon.'
      },
      'pursue fleeing foes taking refuge in the dungeon.' (town, adventure) {
        return 'pursue fleeing foes taking refuge in the dungeon.'
      },
      'escape from captivity in the dungeon.' (town, adventure) {
        return 'escape from captivity in the dungeon.'
      },
      'clear a ruin so it can be rebuilt and reoccupied.' (town) {
        return 'clear a ruin so it can be rebuilt and reoccupied.'
      },
      'discover why a villain is interested in the dungeon.' (town, adventure) {
        return 'discover why a villain is interested in the dungeon.'
      },
      'win a bet or complete a rite of passage by surviving in the dungeon for a certain amount of time.' (town, adventure) {
        return 'win a bet or complete a rite of passage by surviving in the dungeon for a certain amount of time.'
      },
      'parley with a villain in the dungeon.' (town, adventure) {
        return 'parley with a villain in the dungeon.'
      },
      'hide from a threat outside the dungeon.' (town, adventure) {
        return 'hide from a threat outside the dungeon.'
      }
    },
    wilderness: {
      'assess the scope of a natural or unnatural disaster.' (town, adventure) {
        return 'assess the scope of a natural or unnatural disaster.'
      },
      'escort an npc to a destination.' (town, adventure) {
        const npc = setup.createNPC(town, {
          professionType: 'dndClass',
          hasClass: true
        })
        return `escort ${setup.profile(npc)} to a destination.`
      },
      "arrive at a destination without being seen by the villain's forces." (town, adventure) {
        return "arrive at a destination without being seen by the villain's forces."
      },
      'stop monsters from raiding caravans and farms.' (town, adventure) {
        return 'stop monsters from raiding caravans and farms.'
      },
      'establish trade with a distant town.' (town, adventure) {
        const otherTown = lib.createTownName()
        return `establish trade with the distant town ${otherTown}.`
      },
      'protect a caravan traveling to a distant town.' (town, adventure) {
        const caravan = setup.misc.caravan.create(town)
        const otherTown = lib.createTownName()
        return `protect a ${caravan.tippyWord} traveling to the distant town ${otherTown}`
      },
      'map a new land.' (town, adventure) {
        return ''
      },
      'find a place to establish a colony.' (town, adventure) {
        return 'find a place to establish a colony.'
      },
      'find a natural resource.' (town, adventure) {
        return 'find a natural resource.'
      },
      'hunt a specific monster.' (town, adventure) {
        return 'hunt a specific monster.'
      },
      'return home from a distant place.' (town, adventure) {
        return 'return home from a distant place.'
      },
      'obtain information from a reclusive hermit.' (town, adventure) {
        const npc = setup.createNPC(town, {
          hasClass: false,
          background: 'hermit',
          profession: 'hermit',
          isThrowaway: true
        })
        return `obtain information from a ${setup.profile(npc, 'reclusive hermit.')}`
      },
      'find an object that was lost in the wilds.' (town, adventure) {
        return 'find an object that was lost in the wilds.'
      },
      'discover the fate of a missing group of explorers.' (town, adventure) {
        const npc = setup.createNPC(town, {
          hasClass: false,
          background: 'outlander',
          profession: 'explorer',
          isThrowaway: true
        })
        return `discover the fate of ${setup.profile(npc)} and ${npc.hisher} missing group of explorers.`
      },
      'pursue fleeing foes.' (town, adventure) {
        return 'pursue fleeing foes.'
      },
      'assess the size of an approaching army.' (town, adventure) {
        return ''
      },
      'escape the reign of a tyrant.' (town, adventure) {
        return ''
      },
      'protect a wilderness site from attackers.' (town, adventure) {
        return ''
      }
    },
    other: {
      'seize control of a fortified location such as a fortress, town, or ship.' (town, adventure) {
        return 'seize control of a fortified location such as a fortress, town, or ship.'
      },
      'defend a location from attackers.' (town, adventure) {
        return 'defend a location from attackers.'
      },
      'retrieve an object from inside a secure location in a settlement.' (town, adventure) {
        const otherTown = lib.createTownName()
        return `retrieve an object from inside a secure location in the settlement ${otherTown}.`
      },
      'retrieve an object from a caravan.' (town, adventure) {
        const caravan = setup.misc.caravan.create(town)
        return `retrieve an object from a ${caravan.tippyWord}. `
      },
      'salvage an object or goods from a lost vessel or caravan.' (town, adventure) {
        return 'salvage an object or goods from a lost vessel or caravan.'
      },
      'break a prisoner out of a jail or prison camp.' (town, adventure) {
        return 'break a prisoner out of a jail or prison camp.'
      },
      'escape from a jail or prison camp.' (town, adventure) {
        return 'escape from a jail or prison camp.'
      },
      'successfully travel through an obstacle course to gain recognition or reward.' (town, adventure) {
        return 'successfully travel through an obstacle course to gain recognition or reward.'
      },
      'infiltrate a fortified location.' (town, adventure) {
        return 'infiltrate a fortified location.'
      },
      'find the source of strange occurrences in a haunted house or other location.' (town, adventure) {
        return 'find the source of strange occurrences in a haunted house or other location.'
      },
      'interfere with the operation of a business.' (town, adventure) {
        return 'interfere with the operation of a business.'
      },
      'rescue a character, monster, or object from a natural or unnatural disaster.' (town, adventure) {
        return 'rescue a character, monster, or object from a natural or unnatural disaster.'
      }
    }
  },
  introduction: [
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
  climax: [
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
  otherGoal: [
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
  backdrop: [
    "anniversary of a monarch's reign", 'anniversary of an important event', 'arena event', 'arrival of a caravan or ship', 'arrival of a circus', 'arrival of an important npc', 'arrival of marching modrons', 'artistic performance', 'athletic event', 'birth of a child', 'birthday of an important npc', 'civic festival', 'comet appearance', 'commemoration of a past tragedy', 'consecration of a new temple', 'coronation', 'council meeting', 'equinox or solstice', 'execution', 'fertility festival', 'full moon', 'funeral', 'graduation of cadets or wizards', 'harvest festival', 'holy day', 'investiture of a knight or other noble', 'lunar eclipse', 'midsummer festival', 'midwinter festival', 'migration of monsters', "monarch's ball", 'new moon', 'new year', 'pardoning of a prisoner', 'planar conjunction', 'planetary alignment', 'priestly investiture', 'procession of ghosts', 'remembrance for soldiers lost in war', 'royal address or proclamation', 'royal audience day', 'signing of a treaty', 'solar eclipse', 'tournament', 'trial', 'violent uprising', 'wedding or wedding anniversary'
  ],
  quandary: [
    'Ally quandary', 'Friend quandary', 'Honor quandary', 'Rescue quandary', 'Respect quandary'
  ],
  twist: [
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
  villainActions: ['by doing one big event', 'by a crime spree', 'by growing corruption throughout the land', 'by serial crimes', 'step by step'],
  sidequest: {
    'find a specific item rumored to be in the area.' (town, adventure) {
      return 'find a specific item rumored to be in the area.'
    },
    "retrieve a stolen item in the villain's possession." (town, adventure) {
      if (adventure.villain.height) {
        return `retrieve a stolen item in ${setup.profile(adventure.villain)}'s possession.`
      } else {
        return "retrieve a stolen item in the villain's possession."
      }
    },
    'receive information from an npc in the area.' (town, adventure) {
      const npc = setup.createNPC(town, {
        isThrowaway: true
      })
      return `receive information from ${setup.profile(npc)} who is in the area.`
    },
    'rescue a captive.' (town, adventure) {
      const npc = setup.createNPC(town, {
        isThrowaway: true
      })
      return `rescue the captive ${setup.profile(npc)}.`
    },
    'discover the fate of a missing npc.' (town, adventure) {
      const npc = setup.createNPC(town, {
        isThrowaway: true
      })
      return `discover the fate of the missing ${setup.profile(npc)}.`
    },
    'slay a specific monster.' (town, adventure) {
      return 'slay a specific monster.'
    },
    'discover the nature and origin of a strange phenomenon in the area.' (town, adventure) {
      return 'discover the nature and origin of a strange phenomenon in the area.'
    },
    'secure the aid of a character or creature in the area.' (town, adventure) {
      return 'secure the aid of a character or creature in the area.'
    }

  },
  patron: {
    'retired adventurer': {
      // var npc = setup.createNPC({
      isThrowaway: true,
      professionType: 'dndClass',
      hasClass: true,
      ageStage: 'elderly'
      // })
      // return setup.profile(npc, 'retired adventurer')
    },
    'local ruler': {
      // var npc = setup.createNPC({
      isThrowaway: true,
      background: 'noble',
      profession: 'king',
      hasClass: false
      // })
      // return setup.profile(npc, 'local ruler')
    },
    'military officer': {
      // var npc = setup.createNPC({
      isThrowaway: true,
      background: 'soldier',
      profession: 'fighter'
      // })
      // return setup.profile(npc, 'military officer')
    },
    'temple official': {
      // var npc = setup.createNPC({
      isThrowaway: true,
      hasClass: false,
      background: 'acolyte',
      profession: 'clergyman'
      // })
      // return setup.profile(npc, 'temple official')
    },
    'sage': {
      // var npc = setup.createNPC({
      isThrowaway: true,
      background: 'sage'
      // })
      // return setup.profile(npc, 'sage')
    },
    'respected elder': {
      // var npc = setup.createNPC({
      isThrowaway: true,
      ageStage: 'elderly'
      // })
      // return setup.profile(npc, 'respected elder')
    },
    'deity or celestial': {
      // var npc = setup.createNPC({
      isThrowaway: true,
      note: 'Is a deity or celestial.'
      // })
      // return setup.profile(npc, 'deity or celestial')
    },
    'mysterious fey': {
      // var npc = setup.createNPC({
      isThrowaway: true,
      race: 'elf',
      note: 'Is a deity or celestial.'
      // })
      // return setup.profile(npc, 'mysterious fey')
    },
    'old friend': {
      // var npc = setup.createNPC({
      isThrowaway: true,
      note: 'Is an old friend.'
      // })
      // return setup.profile(npc, 'old friend')
    },
    'former teacher': {
      // var npc = setup.createNPC({
      isThrowaway: true,
      note: 'Is a former teacher.'
      // })
      // return setup.profile(npc, 'former teacher')
    },
    'parent or other family member': {
      // var npc = setup.createNPC({
      isThrowaway: true,
      note: 'Is parent or family member to a party member.'
      // })
      // return setup.profile(npc, 'parent or other family member')
    },
    'desperate commoner': {
      // var npc = setup.createNPC({
      isThrowaway: true,
      hasClass: false,
      background: 'commoner'
      // })
      // return setup.profile(npc, 'desperate commoner')
    },
    'embattled merchant': {
      // var npc = setup.createNPC({
      isThrowaway: true,
      hasClass: false,
      background: 'merchant',
      profession: 'merchant'
      // })
      // return setup.profile(npc, 'embattled merchant')
    },
    'villain posing as a patron': {
      // var npc = setup.createNPC({
      isThrowaway: true,
      note: 'Is actually a villain.'
      // })
      // return setup.profile(npc, 'villain posing as a patron')
    }
  },
  ally: {
    'skilled adventurer': {
      // var npc = setup.createNPC(town, {
      professionType: 'dndClass',
      hasClass: true,
      ageStage: 'elderly',
      isThrowaway: true
      // })
      // return setup.profile(npc, 'skilled adventurer')
    },
    'inexperienced adventurer': {
      // var npc = setup.createNPC(town, {
      isThrowaway: true,
      professionType: 'dndClass',
      hasClass: true
      // })
      // return setup.profile(npc, 'inexperienced adventurer')
    },
    'enthusiastic commoner': {
      // var npc = setup.createNPC(town, {
      isThrowaway: true,
      background: 'commoner',
      hasClass: false
      // })
      // return setup.profile(npc, 'enthusiastic commoner')
    },
    'soldier': {
      // var npc = setup.createNPC(town, {
      isThrowaway: true,
      background: 'soldier',
      profession: 'fighter'
      // })
      // return setup.profile(npc, 'soldier')
    },
    'priest': {
      // var npc = setup.createNPC(town, {
      isThrowaway: true,
      background: 'acolyte',
      profession: 'cleric'
      // })
      // return setup.profile(npc, 'priest')
    },
    'sage': {
      // var npc = setup.createNPC(town, {
      isThrowaway: true,
      background: 'sage',
      profession: 'sage'
      // })
      // return setup.profile(npc, 'sage')
    },
    'revenge seeker': {
      // var npc = setup.createNPC(town, {
      isThrowaway: true
      // })
      // return setup.profile(npc, 'revenge seeker')
    },
    'raving lunatic adventurer': {
      // var npc = setup.createNPC(town, {
      isThrowaway: true,
      professionType: 'dndClass',
      hasClass: true,
      calmTrait: 'mildly crazy',
      stressTrait: 'totally insane'
      // })
      // return setup.profile(npc, 'raving lunatic adventurer')
    },
    'celestial ally': {
      // var npc = setup.createNPC(town, {
      isThrowaway: true,
      note: 'Is a celestial being.'
      // })
      // return setup.profile(npc, 'celestial ally')
    },
    'fey ally': {
      // var npc = setup.createNPC(town, {
      isThrowaway: true,
      note: 'Is a fey.',
      race: 'elf'
      // })
      // return setup.profile(npc, 'fey ally')
    },
    'disguised monster': {
      // var npc = setup.createNPC(town, {
      isThrowaway: true,
      note: 'Is a disguised monster'
      // })
      // return setup.profile(npc, 'disguised monster')
    },
    'villain posing as an ally': {
      // var npc = setup.createNPC(town, {
      isThrowaway: true
      // })
      // return setup.profile(npc, 'villain') + ' posing as an ally'
    }
  },
  villain: {
    'beast or monstrosity with no particular agenda' (town, adventure) {
      adventure.villain = {
        himher: 'it',
        gender: 'it',
        heshe: 'it',
        name: 'monster',
        firstName: 'monster'
      }
      return adventure.villain
      // return 'beast or monstrosity with no particular agenda'
    },
    'terrible aberration bent on corruption or domination' (town, adventure) {
      adventure.villain = {
        himher: 'it',
        gender: 'it',
        heshe: 'it',
        name: 'monster',
        firstName: 'monster'
      }
      return adventure.villain
      // return 'terrible aberration bent on corruption or domination'
    },
    'fiend bent on corruption or destruction' (town, adventure) {
      adventure.villain = {
        himher: 'it',
        gender: 'it',
        heshe: 'it',
        name: 'fiend',
        firstName: 'fiend'
      }
      return adventure.villain
      // return 'fiend bent on corruption or destruction'
    },
    'dragon bent on domination and plunder' (town, adventure) {
      adventure.villain = {
        himher: 'it',
        gender: 'it',
        heshe: 'it',
        name: 'dragon',
        firstName: 'dragon'
      }
      return adventure.villain
      // return 'dragon bent on domination and plunder'
    },
    'giant bent on plunder' (town, adventure) {
      adventure.villain = {
        himher: 'it',
        gender: 'it',
        heshe: 'it',
        name: 'giant',
        firstName: 'giant'
      }
      return adventure.villain
      // return 'giant bent on plunder'
    },
    'horrible undead with any agenda' (town, adventure) {
      adventure.villain = {
        himher: 'it',
        gender: 'it',
        heshe: 'it',
        name: 'undead',
        firstName: 'undead'
      }
      return adventure.villain
      // return 'horrible undead with any agenda'
    },
    'fey with a mysterious goal' (town, adventure) {
      adventure.villain = {
        himher: 'it',
        gender: 'it',
        heshe: 'it',
        name: 'fey',
        firstName: 'fey'
      }
      return adventure.villain
      // return 'fey with a mysterious goal'
    },
    '<<print setup.profile(adventure.villain, "cultist")>>' (town, adventure) {
      adventure.villain = setup.createNPC(town, {
        profession: ['cleric', 'sorcerer', 'wizard'].random(),
        isThrowaway: true
      })
      return adventure.villain
      // return 'a ' + setup.profile(adventure.villain, 'cultist')
    },
    '<<print setup.profile(adventure.villain, "conqueror")>>' (town, adventure) {
      adventure.villain = setup.createNPC(town, {
        profession: ['barbarian', 'fighter', 'fighter'].random(),
        isThrowaway: true
      })
      return adventure.villain
      // return 'a ' + setup.profile(adventure.villain, 'conqueror')
    },
    '<<print "a " + setup.profile(adventure.villain, adventure.villain.race) + " seeking revenge">>' (town, adventure) {
      adventure.villain = setup.createNPC(town, {
        isThrowaway: true
      })
      return adventure.villain
      // return 'a ' + setup.profile(adventure.villain, adventure.villain.race) + ' seeking revenge'
    },
    '<<print "a " + setup.profile(adventure.villain, "schemer") + " seeking to rule">>' (town, adventure) {
      adventure.villain = setup.createNPC(town, {
        isThrowaway: true
      })
      return adventure.villain
      // return 'a ' + setup.profile(adventure.villain, 'schemer') + ' seeking to rule'
    },
    '<<print "a " + setup.profile(adventure.villain, "criminal mastermind")>>' (town, adventure) {
      adventure.villain = setup.createNPC(town, {
        profession: ['rogue', 'rogue', 'fighter'].random(),
        isThrowaway: true
      })
      return adventure.villain
      // return 'a ' + setup.profile(adventure.villain, 'criminal mastermind')
    },
    '<<print "a " + setup.profile(adventure.villain, "raider")>>' (town, adventure) {
      adventure.villain = setup.createNPC(town, {
        profession: ['fighter', 'rogue'].random(),
        race: ['half-orc', 'human', 'human'].random(),
        isThrowaway: true
      })
      return adventure.villain
      // return 'a ' + setup.profile(adventure.villain, 'raider')
    },
    '<<print "a " + setup.profile(adventure.villain, adventure.villain.race) + " under a curse">>' (town, adventure) {
      adventure.villain = setup.createNPC(town, {
        isThrowaway: true,
        note: 'Is under a curse.'
      })
      return adventure.villain
      // return 'a ' + setup.profile(adventure.villain, adventure.villain.race) + ' under a curse'
    },
    '<<print "a " + setup.profile(adventure.villain, "misguided zealot")>>' (town, adventure) {
      adventure.villain = setup.createNPC(town, {
        profession: ['cleric', 'cleric', 'druid'].random(),
        isThrowaway: true
      })
      return adventure.villain
      // return 'a ' + setup.profile(adventure.villain, 'zealot')
    }
  }

}
