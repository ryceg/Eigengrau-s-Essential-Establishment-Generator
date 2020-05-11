setup.death = {

  whileAdventuring (town, npc, text) {
    const whilst = [
      'returning from an adventure',
      `on ${npc.pronouns.hisher} way to an adventure`,
      'on the toilet',
      'casting a spell',
      'getting black-out drunk',
      'having a protracted argument'
    ]
    text = text + ' while ' + whilst.seededrandom()
    return text
  },
  cause: [
    // ______
    {
      exclusions (town, npc) { if (npc.profession === 'surgeon') return true },
      function (town, npc) {
        const text = `${npc.firstName} died from a disease caught from a patient while performing a surgery on them.`
        return text
      }
    },
    {
      exclusions (town, npc) { if (setup.findProfession(town, npc).sector === 'construction') return true },
      function (town, npc) {
        const text = `${npc.firstName} died in a workplace accident.`
        return text
      }
    },
    // {
    //   probability: 3,
    //   function (town, npc) {
    //     const text = `${npc.firstName} was killed by a wild animal.`
    //     return text
    //   }
    // },
    {
      exclusions (town, npc) { if (setup.findProfession(town, npc).sector === 'arts') return true },
      function (town, npc) {
        const text = `${npc.firstName} was killed in a freak accident at an art show.`
        return text
      }
    },
    {
      probability: 1,
      exclusions (town, npc) { if (setup.findProfession(town, npc).sector === 'arts') return true },
      function (town, npc) {
        const murderer = setup.createNPC(town, {
          socialClass: npc.socialClass,
          dndClass: npc.dndClass,
          profession: npc.profession,
          hasClass: npc.hasClass
        })
        const text = `${npc.firstName} was murdered by ${setup.profile(murderer, 'another competing ' + murderer.dndClass)}.`
        return text
      }
    },
    {
      probability: 2,
      exclusions (town, npc) { if (setup.findProfession(town, npc).sector === 'government and law') return true },
      function (town, npc) {
        const murderer = setup.createNPC(town, {
          socialClass: npc.socialClass
        })
        npc.death.murderer = murderer.key
        const text = `${npc.firstName} was murdered by ${setup.profile(murderer, 'someone with a grudge')}.`
        return text
      }
    },
    {
      probability: 50,
      exclusions (town, npc) { if (['settled adult', 'elderly', 'vulnerably elderly'].includes(npc.ageStage)) return true },
      function (town, npc) {
        const text = `${npc.firstName} died from ${['exposure', 'cancer', 'a plague', 'diptheria', 'cholera', 'dysentery', 'malaria', 'the flu', 'typhoid fever', 'smallpox', 'leprosy'].seededrandom()}.`
        return text
      }
    },
    {
      probability: 50,
      exclusions (town, npc) { if (npc.hasClass === true) return true },
      function (town, npc) {
        const text = `${npc.firstName} ${['died from', 'was killed by'].seededrandom()} ${['a monster', 'a trap in a dungeon', 'a rival adventuring party', 'some goblins', 'a kobold ambush', 'a powerful foe', 'a wild animal', 'a dragon', 'a particularly sneaky mimic'].seededrandom()}`
        setup.death.whileAdventuring(town, npc, text)
        return text
      }
    },
    {
      probability: 30,
      exclusions (town, npc) { if (['settled adult', 'elderly', 'vulnerably elderly'].includes(npc.ageStage)) return true },
      function (town, npc) {
        const text = `${npc.firstName} died in ${['a riot', 'a war', 'a religious crusade', 'a raid', 'a mugging'].seededrandom()}.`
        return text
      }
    },
    {
      probability: 30,
      exclusions (town, npc) { if (['young adult', 'settled adult', 'elderly', 'vulnerably elderly'].includes(npc.ageStage)) return true },
      function (town, npc) {
        const text = `${npc.firstName} died from an ${['infected arm', 'infected leg', 'infection', 'infection from a broken arm', 'infection from a broken leg'].seededrandom()}.`
        return text
      }
    },
    {
      probability: 50,
      exclusions (town, npc) { if (npc.gender === 'woman') return true },
      function (town, npc) {
        const text = `${npc.firstName} died during childbirth.`
        return text
      }
    },
    {
      probability: 90,
      exclusions (town, npc) { if (['child'].includes(npc.ageStage)) return true },
      function (town, npc) {
        const text = `${npc.firstName} died from ${['falling from a tree', 'being trampled underfoot by a horse', 'the flu', 'cholera'].seededrandom()}.`
        return text
      }
    }
  ],
  burialConditions (town, npc, base) {
    const burialConditions = [
      // [lifestyleModifier, lifestyleType, graveRoll, graveDescription]
      [70, 'aristocratic', 80, 'a beautiful ornate coffin on a private plot'],
      [50, 'wealthy', 60, 'a beautiful ornate coffin'],
      [20, 'comfortable', 50, 'a nice coffin'],
      [10, 'modest', 40, 'a coffin'],
      [0, 'poor', 20, 'a makeshift coffin'],
      [-15, 'squalid', 10, 'a mass grave'],
      [-25, 'wretched', 0, 'a mass grave as an afterthought']
    ]
    npc.roll.deathConditions = Math.fm(random(1, 100), ((town.roll.welfare - 50) / 2))
    console.log('deathConditions roll:')
    console.log(npc.roll.deathConditions)
    const lifestyle = npc.finances.lifestyleStandard(town, npc)[1]
    let townHelpDescription = ''
    for (let i = 0; i < burialConditions.length; i++) {
      if (lifestyle === burialConditions[i][1]) {
        Math.fm(npc.roll.deathConditions, burialConditions[i][0])
        if ((town.roll.welfare - burialConditions[i][2]) > 20) {
          townHelpDescription = ' with help from the government.'
        } else if ((town.roll.welfare - burialConditions[i][2]) < -20) {
          townHelpDescription = ', no thanks to the government.'
        } else {
          townHelpDescription = '.'
        }
        break
      }
    }

    for (let i = 0; i < burialConditions.length; i++) {
      if (npc.roll.deathConditions > burialConditions[i][2]) {
        npc.death.graveStandard = base.graveStandard || burialConditions[i][3]
        break
      }
    }
    npc.death.burialConditions = `${npc.pronouns.heshe.toUpperFirst()} was buried in ${npc.death.graveStandard}${townHelpDescription}`
    return npc
  },
  bodyCondition: [
    [0, 'The body is as fresh as they come, and rigor mortis has not set in yet.'],
    [1, 'The body is about a day old, and is stiff.'],
    [0, 'The body is as fresh as they come, and rigor mortis has not set in yet.']
  ]
}
setup.createDeadNPC = function (town, base) {
  const npc = setup.createNPC(town, base)
  setup.npcDeath(town, npc, base)
  return npc
}
setup.npcDeath = function (town, npc, base) {
  if (!base) base = {}
  npc.passageName = 'NPCDeadProfile'
  npc.death = {
    cause: base.cause || setup.weightedRandomFetcher(town, setup.death.cause, npc),
    // murderer: base.murderer || npc.death.murderer || false,
    timeSinceDeath: base.timeSinceDeath || dice(2, 60)
  }
  setup.death.burialConditions(town, npc, base)
  return npc
}
