setup.createBlacksmithProject = function (town, smithy, blacksmith) {
  if (!smithy) {
    smithy = {
      roll: {
        expertise: random(1, 100),
        wealth: random(1, 100)
      }
    }
  }
  if (!blacksmith) { blacksmith = smithy.associatedNPC || setup.createNPC(town, { profession: 'blacksmith' }) }
  const weapon = ['dagger', 'long sword', 'short sword', 'morning star', 'mace', 'axe', 'greataxe', 'spear', 'falcheon', 'bastard sword', 'warhammer', 'iron crossbow', 'claymore', 'flail', 'broad sword', 'pike', 'scimitar', 'dart', 'rapier', 'trident', 'halberd', 'glaive', 'lance', 'war pick']
  const mundane = ['plows', 'rabbit traps', 'horseshoes', 'shovels', 'lamps', 'fire pokers', 'axes', 'hammers', 'pliers', 'steel couplings', 'trays', 'wheelbarrows', 'nails', 'pickaxes', 'hatchets', 'locks and keys', 'lockpicks']
  const potentialProjects = {
    market: {
      function (town) {
        const market = lib.findInArray(town.buildings, 'buildingType', 'market') || setup.createNewBuilding(town, 'Market')
        return `${lib.articles.output(weapon.random())} to sell at ${setup.profile(market, 'the markets', 'town.buildings')} ${["in a couple day's time", 'soon', 'tomorrow', 'next Saturday', 'the day after tomorrow'].random()}.`
      }
    },
    whyNot: {
      function (town) {
        return `${lib.articles.output(weapon.random())}. Dunno why, just thought that it'd be fun to try and make one.`
      }
    },
    replace: {
      function (town) {
        return `${lib.articles.output(weapon.random())} to replace the one I sold the other day.`
      }
    },
    boring: {
      function (town) {
        return 'a couple commissions that I need to fill; nothing too special, just some blades and such.'
      }
    },
    moreBoring: {
      function (town) {
        return `${lib.articles.output(weapon.random())} for one of my drinking buddies.`
      }
    },
    weddingGift: {
      function (town) {
        return `${lib.articles.output(weapon.random())} for a wedding gift.`
      }
    },
    mundaneMarkets: {
      function (town) {
        const market = lib.findInArray(town.buildings, 'buildingType', 'market') || setup.createNewBuilding(town, 'Market')
        return `some ${mundane.random()} to sell at ${setup.profile(market, 'the markets', 'town.buildings')} ${["in a couple day's time", 'soon', 'tomorrow', 'next Saturday', 'the day after tomorrow'].random()}.`
      }
    },
    highValueBuyer: {
      exclusions (town, smithy) {
        return smithy.roll.expertise > 60
      },
      function (town, smithy) {
        const npc = setup.createNPC(town, {
          background: 'noble'
        })
        setup.createRelationship(town, npc, smithy.associatedNPC, 'patron', 'customer')
        return `${lib.articles.output(weapon.random())} for some big hobnob noble called ${setup.profile(npc)}.`
      }
    },
    guard: {
      exclusions (town, smithy) {
        return smithy.roll.expertise > 40 && town.roll.guardFunding > 50
      },
      function (town, smithy) {
        const npc = setup.createNPC(town, {
          background: 'soldier',
          profession: 'guard',
          hasClass: false
        })
        setup.createRelationship(town, npc, smithy.associatedNPC, 'patron', 'customer')
        return `${lib.articles.output(weapon.random())} for one of the ${setup.profile(npc, 'guards')}.`
      }
    },
    guardCaptain: {
      exclusions (town, smithy) {
        return smithy.roll.expertise > 50 && town.roll.guardFunding > 60
      },
      function (town, smithy) {
        const npc = town.guard.captain
        setup.createRelationship(town, npc, smithy.associatedNPC, 'patron', 'customer')
        return `${lib.articles.output(weapon.random())} for the ${setup.profile(npc, 'captain of the guard')}.`
      }
    },
    guardRefresh: {
      exclusions (town, smithy) {
        return smithy.roll.expertise > 60 && town.roll.guardFunding > 70
      },
      function (town, smithy) {
        return 'a whole new set of weapons for <<profile $town.guard>>. Should keep me busy for the next couple months!'
      }
    },
    badlyMadeGuard: {
      exclusions (town, smithy) {
        return smithy.roll.expertise < 40 && town.roll.guardFunding > 70
      },
      function (town, smithy) {
        return `a whole load of ${weapon.random()}s for <<profile $town.guard>>. To be honest? I'm freaking the fuck out.`
      }
    },
    priest: {
      exclusions (town, smithy) {
        return smithy.roll.expertise > 40 || lib.objectArrayFetcher(town.buildings.temple).roll.wealth > 60
      },
      function (town) {
        const building = lib.findInArray(town.buildings, 'buildingType', 'market') || setup.createNewBuilding(town, 'Market')
        return `an ornamental ${weapon.random()} for ${setup.profile(building.priest, 'the priest')} of ${setup.profile(building, null, 'town.buildings')}.`
      }
    }
  }

  const actions = {
    veryUnsure: {
      exclusions (town, smithy) {
        return smithy.roll.expertise < 20
      },
      function (town, smithy) {
        return [
          `${smithy.associatedNPC.firstName} pulls a red piece of iron out of the forge, but seems unsure what to do with it. ${blacksmith.smithy.pronouns.heshe.toUpperFirst()} puts it back in, ${blacksmith.smithy.pronouns.hisher} furtive glances betraying a lack of experience.`,
          `${smithy.associatedNPC.firstName} tries to shape a bit of metal, but it's not even red with heat, and ${smithy.associatedNPC.pronouns.heshe} unsurprisingly has little success.`,
          `${smithy.associatedNPC.firstName} wipes ${smithy.associatedNPC.pronouns.hisher} face with a gloved hand, and manages to get a black soot all over ${smithy.associatedNPC.pronouns.hisher} face.`
        ].random()
      }
    },
    unsure: {
      exclusions (town, smithy) {
        return smithy.roll.expertise < 40
      },
      function (town, smithy) {
        return [
          `${smithy.associatedNPC.firstName} quenches a glowing hot piece of iron, wincing at the sudden sound of the metal cooling.`,
          `${smithy.associatedNPC.firstName} heaves a bag of coal onto the bench to stoke the fire with more fuel, but manages to spill most of it onto the floor.`,
          `${smithy.associatedNPC.firstName} wipes ${smithy.associatedNPC.pronouns.hisher} face with a gloved hand, smudging ${smithy.associatedNPC.pronouns.hisher} face slightly with a black soot.`
        ].random()
      }
    },
    okay: {
      exclusions (town, smithy) {
        return smithy.roll.expertise < 50
      },
      function (town, smithy) {
        return [
          `${smithy.associatedNPC.firstName} quenches a glowing hot piece of iron, wincing slightly at the sudden sound of the metal cooling.`,
          `${smithy.associatedNPC.firstName} heaves a bag of coal onto the bench to stoke the fire with more fuel, but manages to spill some.`,
          `${smithy.associatedNPC.firstName} wipes ${smithy.associatedNPC.pronouns.hisher} face with a gloved hand, and removes the glove.`
        ].random()
      }
    },
    decentlyPracticed: {
      exclusions (town, smithy) {
        return smithy.roll.expertise > 60
      },
      function (town, smithy) {
        return [
          `${smithy.associatedNPC.firstName} pulls a hot piece of metal out of the forge, but sees that it's not quite done, so ${smithy.associatedNPC.pronouns.heshe} puts it back in.`,
          `${smithy.associatedNPC.firstName} heaves a bag of coal onto the bench to stoke the fire with more fuel.`,
          `${smithy.associatedNPC.firstName} wipes ${smithy.associatedNPC.pronouns.hisher} face with a gloved hand, and removes the glove.`
        ].random()
      }
    },
    wellPracticed: {
      exclusions (town, smithy) {
        return smithy.roll.expertise > 80
      },
      function (town, smithy) {
        return [
          `${smithy.associatedNPC.firstName} pulls a glowing hot piece of iron out of the forge with a familiarity only earnt by thousands of repetitions.`,
          `${smithy.associatedNPC.firstName} heaves a bag of coal onto the bench to stoke the fire with more fuel.`,
          `${smithy.associatedNPC.firstName} wipes ${smithy.associatedNPC.pronouns.hisher} face with a gloved hand, and removes the glove.`
        ].random()
      }
    }

  }
  const binder = function (town, blacksmith) {
    return [
      `${blacksmith.pronouns.heshe.toUpperFirst()} wipes ${blacksmith.pronouns.hisher} brow, and replies`,
      `${blacksmith.firstName} shifts a couple ingots, and says`,
      `${blacksmith.firstName} takes off ${blacksmith.pronouns.hisher} heavy apron, and says`,
      `${blacksmith.firstName} says`,
      `${blacksmith.firstName} gives a couple half-hearted attempts at sweeping the floor with a broom, and says`
    ].random()
  }
  const action = lib.weightedRandomFetcher(town, actions, smithy)

  const project = lib.weightedRandomFetcher(town, potentialProjects, smithy)

  const working = [
    'I\'m working on',
    'Currently? I\'m working on',
    'Currently I\'m just working on',
    'At the moment, I\'m working on',
    'Right now, I\'m making',
    'Right now, I\'m doing'
  ]

  return `${action} ${binder(town, blacksmith)} "${working.random()} ${project}"`
}
