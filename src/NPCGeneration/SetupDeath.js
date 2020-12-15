// uses setup.createNPC, setup.createRelationship, setup.profile
/**
 * @type {import("./setupDeath").DeathData}
 */
const death = {
  whileAdventuring (town, npc, text) {
    const whilst = [
      'returning from an adventure',
      `on ${npc.hisher} way to an adventure`,
      'on the toilet',
      'casting a spell',
      'getting black-out drunk',
      'having a protracted argument'
    ]
    return `${text} while ${whilst.random()}`
  },
  cause: [
    // ______
    {
      exclusions (town, npc) {
        return npc.profession === 'surgeon'
      },
      function (town, npc) {
        return `${npc.firstName} died from a disease caught from a patient while performing a surgery on them.`
      }
    },
    {
      exclusions (town, npc) {
        return lib.findProfession(town, npc).sector === 'construction'
      },
      function (town, npc) {
        return `${npc.firstName} died in a workplace accident.`
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
      exclusions (town, npc) {
        return lib.findProfession(town, npc).sector === 'arts'
      },
      function (town, npc) {
        return `${npc.firstName} was killed in a freak accident at an art show.`
      }
    },
    {
      probability: 1,
      exclusions (town, npc) {
        return lib.findProfession(town, npc).sector === 'arts'
      },
      function (town, npc) {
        console.log('Hello! Creating a murderer.')
        const murderer = setup.createNPC(town, {
          socialClass: npc.socialClass || 'commoner',
          profession: npc.profession,
          isShallow: true
        })
        setup.createRelationship(town, npc, murderer, 'murderer', `competing ${murderer.profession} who ${murderer.heshe} murdered.`)
        return `${npc.firstName} was murdered by ${setup.profile(murderer, `another competing ${murderer.profession}`)}.`
      }
    },
    {
      probability: 2,
      exclusions (town, npc) {
        return lib.findProfession(town, npc).sector === 'government and law'
      },
      function (town, npc) {
        const murderer = setup.createNPC(town, {
          socialClass: npc.socialClass
        })
        setup.createRelationship(town, npc, murderer, 'murderer', `someone who ${murderer.heshe} murdered.`)
        npc.death.murderer = murderer.key
        return `${npc.firstName} was murdered by ${setup.profile(murderer, 'someone with a grudge')}.`
      }
    },
    {
      probability: 50,
      exclusions (town, npc) {
        return ['settled adult', 'elderly', 'vulnerably elderly'].includes(npc.ageStage)
      },
      function (town, npc) {
        return `${npc.firstName} died from ${['exposure', 'cancer', 'a plague', 'diptheria', 'cholera', 'dysentery', 'malaria', 'the flu', 'typhoid fever', 'smallpox', 'leprosy'].random()}.`
      }
    },
    {
      probability: 50,
      exclusions (town, npc) {
        return npc.hasClass === true
      },
      function (town, npc) {
        const text = `${npc.firstName} ${['died from', 'was killed by'].random()} ${['a monster', 'a trap in a dungeon', 'a rival adventuring party', 'some goblins', 'a kobold ambush', 'a powerful foe', 'a wild animal', 'a dragon', 'a particularly sneaky mimic'].random()}`
        death.whileAdventuring(town, npc, text)
        return text
      }
    },
    {
      probability: 30,
      exclusions (town, npc) {
        return ['settled adult', 'elderly', 'vulnerably elderly'].includes(npc.ageStage)
      },
      function (town, npc) {
        return `${npc.firstName} died in ${['a riot', 'a war', 'a religious crusade', 'a raid', 'a mugging'].random()}.`
      }
    },
    {
      probability: 30,
      exclusions (town, npc) {
        return ['young adult', 'settled adult', 'elderly', 'vulnerably elderly'].includes(npc.ageStage)
      },
      function (town, npc) {
        return `${npc.firstName} died from an ${['infected arm', 'infected leg', 'infection', 'infection from a broken arm', 'infection from a broken leg'].random()}.`
      }
    },
    {
      probability: 50,
      exclusions (town, npc) {
        return npc.gender === 'woman'
      },
      function (town, npc) {
        return `${npc.firstName} died during childbirth.`
      }
    },
    {
      probability: 90,
      exclusions (town, npc) {
        return ['child'].includes(npc.ageStage)
      },
      function (town, npc) {
        return `${npc.firstName} died from ${['falling from a tree', 'being trampled underfoot by a horse', 'the flu', 'cholera'].random()}.`
      }
    }
  ],
  burialConditions (town, npc, base) {
    console.log('Burial conditions...')

    /** @type {[number, string, number, string][]} */
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

    npc.roll.deathConditions = lib.fm(random(1, 100), (town.roll.welfare - 50) / 2)
    console.log('deathConditions roll:', npc.roll.deathConditions)
    const lifestyle = lib.npcLifestyleStandard(town, npc).lifestyleStandard

    let townHelpDescription = ''

    for (const burialCondition of burialConditions) {
      if (lifestyle === burialCondition[1]) {
        lib.fm(npc.roll.deathConditions, burialCondition[0])
        if ((town.roll.welfare - burialCondition[2]) > 20) {
          townHelpDescription = ' with help from the government.'
        } if ((town.roll.welfare - burialCondition[2]) < -20) {
          townHelpDescription = ', no thanks to the government.'
        } else {
          townHelpDescription = '.'
        }
        break
      }
    }

    for (const burialCondition of burialConditions) {
      if (npc.roll.deathConditions > burialCondition[2]) {
        npc.death.graveStandard = base.graveStandard || burialCondition[3]
        break
      }
    }

    npc.death.burialConditions = `${npc.heshe.toUpperFirst()} was buried in ${npc.death.graveStandard}${townHelpDescription}`
    return npc
  },
  bodyCondition: [
    [0, 'The body is as fresh as they come, and rigor mortis has not set in yet.'],
    [1, 'The body is about a day old, and is stiff.'],
    [0, 'The body is as fresh as they come, and rigor mortis has not set in yet.']
  ]
}

setup.createDeadNPC = (town, base = {}) => {
  console.groupCollapsed('Creating a dead NPC!')
  const npc = setup.createNPC(town, base)
  console.log('RIP', npc.firstName)
  setup.npcDeath(town, npc, base)
  return npc
}

setup.npcDeath = (town, npc, base = {}) => {
  npc.passageName = 'NPCDeadProfile'
  npc.death = {}
  npc.death = {
    cause: lib.weightedRandomFetcher(town, death.cause, npc),
    murderer: null,
    timeSinceDeath: lib.dice(2, 60),
    ...base,
    ...npc.death
  }
  death.burialConditions(town, npc, base)
  return npc
}
