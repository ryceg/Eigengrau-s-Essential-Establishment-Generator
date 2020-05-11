setup.createBlacksmithProject = function (town, smithy, blacksmith) {
  if (!smithy) {
    smithy = {
      roll: {
        expertise: random(1, 100),
        wealth: random(1, 100)
      }
    }
  }
  if (!blacksmith) { blacksmith = smithy.blacksmith || setup.createNPC(town, { profession: 'blacksmith' }) }
  const weapon = ['dagger', 'long sword', 'short sword', 'morning star', 'mace', 'axe', 'greataxe', 'spear', 'falcheon', 'bastard sword', 'warhammer', 'iron crossbow', 'claymore', 'flail', 'broad sword', 'pike', 'scimitar', 'dart', 'rapier', 'trident', 'halberd', 'glaive', 'lance', 'war pick']
  const mundane = ['plows', 'rabbit traps', 'horseshoes', 'shovels', 'lamps', 'fire pokers', 'axes', 'hammers', 'pliers', 'steel couplings', 'trays', 'wheelbarrows', 'nails', 'pickaxes', 'hatchets', 'locks and keys', 'lockpicks']
  //   blacksmith.roll._wageVariation
  const potentialProjects = {
    market: {
      function (town) {
        const market = setup.objectArrayFetcher(town.buildings.market)
        return `a ${weapon.seededrandom()} to sell at ${setup.profile(market, 'the markets', 'town.buildings.market')} ${["in a couple day's time", 'soon', 'tomorrow', 'next Saturday', 'the day after tomorrow'].seededrandom()}.`
      }
    },
    whyNot: {
      function (town) {
        return `a ${weapon.seededrandom()}. Dunno why, just thought that it'd be fun to try and make one.`
      }
    },
    replace: {
      function (town) {
        return `a ${weapon.seededrandom()} to replace the one I sold the other day.`
      }
    },
    boring: {
      function (town) {
        return `a couple commissions that I need to fill; nothing too special, just some blades and such.`
      }
    },
    moreBoring: {
      function (town) {
        return `a ${weapon.seededrandom()} for one of my drinking buddies.`
      }
    },
    weddingGift: {
      function (town) {
        return `a ${weapon.seededrandom()} for a wedding gift.`
      }
    },
    mundaneMarkets: {
      function (town) {
        const market = setup.objectArrayFetcher(town.buildings.market)
        return `some ${mundane.seededrandom()} to sell at ${setup.profile(market, 'the markets', 'town.buildings.market')} ${["in a couple day's time", 'soon', 'tomorrow', 'next Saturday', 'the day after tomorrow'].seededrandom()}.`
      }
    },
    highValueBuyer: {
      exclusions (town, smithy) {
        if (smithy.roll.expertise > 60) {
          return true
        }
      },
      function (town, smithy) {
        const npc = setup.createNPC(town, {
          background: 'noble'
        })
        setup.createRelationship(town, npc, smithy.blacksmith, 'patron', 'customer')
        return `a ${weapon.seededrandom()} for some big hobnob noble called ${setup.profile(npc)}.`
      }
    },
    guard: {
      exclusions (town, smithy) {
        if (smithy.roll.expertise > 40 && town.roll.guardFunding > 50) {
          return true
        }
      },
      function (town, smithy) {
        const npc = setup.createNPC(town, {
          background: 'soldier',
          profession: 'guard',
          hasClass: false
        })
        setup.createRelationship(town, npc, smithy.blacksmith, 'patron', 'customer')
        return `a ${weapon.seededrandom()} for one of the ${setup.profile(npc, 'guards')}.`
      }
    },
    guardCaptain: {
      exclusions (town, smithy) {
        if (smithy.roll.expertise > 50 && town.roll.guardFunding > 60) {
          return true
        }
      },
      function (town, smithy) {
        const npc = town.guard.captain
        setup.createRelationship(town, npc, smithy.blacksmith, 'patron', 'customer')
        return `a ${weapon.seededrandom()} for the ${setup.profile(npc, 'captain of the guard')}.`
      }
    },
    guardRefresh: {
      exclusions (town, smithy) {
        if (smithy.roll.expertise > 60 && town.roll.guardFunding > 70) {
          return true
        }
      },
      function (town, smithy) {
        return `a whole new set of weapons for <<guard $town.guard>>. Should keep me busy for the next couple months!`
      }
    },
    badlyMadeGuard: {
      exclusions (town, smithy) {
        if (smithy.roll.expertise < 40 && town.roll.guardFunding > 70) {
          return true
        }
      },
      function (town, smithy) {
        return `a whole load of ${weapon.seededrandom()}s for <<guard $town.guard>>. To be honest? I'm freaking the fuck out.`
      }
    },
    priest: {
      exclusions (town, smithy) {
        if (smithy.roll.expertise > 40 || setup.objectArrayFetcher(town.buildings.temple).roll.wealth > 60) {
          return true
        }
      },
      function (town) {
        const building = setup.objectArrayFetcher(town.buildings.temple)
        return `an ornamental ${weapon.seededrandom()} for ${setup.profile(building.priest, 'the priest')} of ${setup.profile(building, '', 'town.buildings.temple')}.`
      }
    }
  }

  const actions = {
    veryUnsure: {
      exclusions (town, smithy) {
        if (smithy.roll.expertise < 20) return true
      },
      function (town, smithy) {
        return [
          `${smithy.blacksmith.firstName} pulls a red piece of iron out of the forge, but seems unsure what to do with it. ${blacksmith.smithy.pronouns.heshe.toUpperFirst()} puts it back in, ${blacksmith.smithy.pronouns.hisher} furtive glances betraying a lack of experience.`,
          `${smithy.blacksmith.firstName} tries to shape a bit of metal, but it's not even red with heat, and ${smithy.blacksmith.pronouns.heshe} unsurprisingly has little success.`,
          `${smithy.blacksmith.firstName} wipes ${smithy.blacksmith.pronouns.hisher} face with a gloved hand, and manages to get a black soot all over ${smithy.blacksmith.pronouns.hisher} face.`
        ].seededrandom()
      }
    },
    unsure: {
      exclusions (town, smithy) {
        if (smithy.roll.expertise < 40) return true
      },
      function (town, smithy) {
        return [
          `${smithy.blacksmith.firstName} quenches a glowing hot piece of iron, wincing at the sudden sound of the metal cooling.`,
          `${smithy.blacksmith.firstName} heaves a bag of coal onto the bench to stoke the fire with more fuel, but manages to spill most of it onto the floor.`,
          `${smithy.blacksmith.firstName} wipes ${smithy.blacksmith.pronouns.hisher} face with a gloved hand, smudging ${smithy.blacksmith.pronouns.hisher} face slightly with a black soot.`
        ].seededrandom()
      }
    },
    okay: {
      exclusions (town, smithy) {
        if (smithy.roll.expertise < 50) return true
      },
      function (town, smithy) {
        return [
          `${smithy.blacksmith.firstName} quenches a glowing hot piece of iron, wincing slightly at the sudden sound of the metal cooling.`,
          `${smithy.blacksmith.firstName} heaves a bag of coal onto the bench to stoke the fire with more fuel, but manages to spill some.`,
          `${smithy.blacksmith.firstName} wipes ${smithy.blacksmith.pronouns.hisher} face with a gloved hand, and removes the glove.`
        ].seededrandom()
      }
    },
    decentlyPracticed: {
      exclusions (town, smithy) {
        if (smithy.roll.expertise > 60) return true
      },
      function (town, smithy) {
        return [
          `${smithy.blacksmith.firstName} pulls a hot piece of metal out of the forge, but sees that it's not quite done, so ${smithy.blacksmith.pronouns.heshe} puts it back in.`,
          `${smithy.blacksmith.firstName} heaves a bag of coal onto the bench to stoke the fire with more fuel.`,
          `${smithy.blacksmith.firstName} wipes ${smithy.blacksmith.pronouns.hisher} face with a gloved hand, and removes the glove.`
        ].seededrandom()
      }
    },
    wellPracticed: {
      exclusions (town, smithy) {
        if (smithy.roll.expertise > 80) return true
      },
      function (town, smithy) {
        return [
          `${smithy.blacksmith.firstName} pulls a glowing hot piece of iron out of the forge with a familiarity only earnt by thousands of repetitions.`,
          `${smithy.blacksmith.firstName} heaves a bag of coal onto the bench to stoke the fire with more fuel.`,
          `${smithy.blacksmith.firstName} wipes ${smithy.blacksmith.pronouns.hisher} face with a gloved hand, and removes the glove.`
        ].seededrandom()
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
    ].seededrandom()
  }
  const action = setup.weightedRandomFetcher(town, actions, smithy)

  const project = setup.weightedRandomFetcher(town, potentialProjects, smithy)

  const working = [
    `I'm working on`,
    `Currently? I'm working on`,
    `Currently I'm just working on`,
    `At the moment, I'm working on`,
    `Right now, I'm making`,
    `Right now, I'm doing`
  ]

  return `${action} ${binder(town, blacksmith)} "${working.seededrandom()} ${project}"`
}
