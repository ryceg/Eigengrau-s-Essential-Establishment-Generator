setup.createNPC = function (town, base) {
  if (!town) {
    console.error('Town is not defined! NPC cannot be created. Please report this bug.')
  }
  console.log('Base:')
  console.log({ base })
  // These are the very basic bits that need to be defined first- race, gender, and then names using those local variables.
  const data = setup.npcData
  if (!base) {
    base = {
      isShallow: true
    }
  }
  if (base.isShallow === true) {
    console.log('NPC flagged as shallow.')
    base.isThrowaway = base.isThrowaway || true
    // base.canBeCustom = base.canBeCustom || true
    base.hasHistory = base.hasHistory || false
  }

  if (base.canBeCustom === true && random(1, 100) > 99) {
    base = setup.objectArrayFetcher(setup.misc.patreonCharacters, town)
  }

  // if (!base.roll) base.roll = {}
  const gender = base.gender || ['man', 'woman'].random()
  const race = base.race || setup.fetchRace(town, base)

  console.log('Fetching profession.')
  const profession = base.profession || setup.fetchProfessionChance(town, base)

  const firstName = base.firstName || data.raceTraits[race].genderTraits[gender].firstName.random().toUpperFirst()
  const lastName = base.lastName || data.raceTraits[race].lastName.random().toUpperFirst()
  console.groupCollapsed(`${firstName} ${lastName}`)
  const ageStage = base.ageStage || ['young adult', 'young adult', 'young adult', 'young adult', 'settled adult', 'settled adult', 'settled adult', 'elderly'].random()
  // let dndClass

  if (setup.findProfession(town, base, profession).type === 'dndClass') {
    base.hasClass = true
    // eslint-disable-next-line no-unused-vars
    const dndClass = base.dndClass || profession
  }

  // the local variables are then assigned to npc. We don't need to initialise npc to do the stuff that's race & gender dependent because we've got the local variables.
  const npc = Object.assign({
    key: base.key || randomFloat(0, 1),
    passageName: 'NPCProfile',
    _gender: gender,
    _race: race,
    firstName,
    lastName,
    get name () {
      return `${this.firstName} ${this.lastName}`
    },
    set name (name) {
      const words = name.toString().split(' ')
      this.firstName = words[0] || ''
      this.lastName = words[1] || ''
    },
    ageStage,
    ageYears: data.raceTraits[race].ageTraits[ageStage].baseAge + data.raceTraits[race].ageTraits[ageStage].ageModifier(),
    muscleMass: data.raceTraits[race].muscleMass + dice(5, 4) - 12,
    // demeanour: data.demeanour.random(),
    calmTrait: data.calmTrait.random(),
    stressTrait: data.stressTrait.random(),
    pronouns: {

    },
    relationships: {

    },
    religion: {

    },
    roll: {
      _wageVariation: dice(5, 10) - 27,
      wageVariation (town) {
        // _wageVariation is static; it's the "luck" that the NPC has in their profession.
        // town.roll.wealth increases or decreases it by 10%, reflecting the strength of the economy.
        // expected range should be between -25 and 25.
        return setup.calcPercentage(npc.roll._wageVariation, (town.roll.wealth - 50) / 5)
      },
      physicalTrait: random(1, 100)
    },
    finances: {
      creditors: {

      },
      debtors: {

      },
      grossIncome (town, npc) {
        // TODO add hobbies
        console.log(`Returning ${npc.name}'s gross income...`)
        const profession = setup.findProfession(town, npc)
        return Math.round(setup.calcPercentage(profession.dailyWage, [npc.roll.wageVariation(town), (town.roll.wealth - 50) / 3]))
      },
      netIncome (town, npc) {
        console.log(`Returning ${npc.name}'s net income...`)
        return Math.round(setup.calcPercentage(npc.finances.grossIncome(town, npc), -setup.npcTaxRate(town, npc)))
      },
      lifestyleStandard (town, npc) {
        console.log(`Returning ${npc.name}'s lifestyle standard...`)
        const income = npc.finances.netIncome(town, npc)
        let lifestyleStandard
        for (let i = 0; i < setup.lifestyleStandards.length; i++) {
          if (income >= setup.lifestyleStandards[i][0]) {
            return setup.lifestyleStandards[i]
          }
        }
        // lifestyleStandard returns the unmodified array of [100, 'modest', 30]
        // various bits use all three, so it was easier to specify which than create three virtually identical functions.
        return lifestyleStandard
      },
      lifestyleExpenses (town, npc) {
        console.log(`Returning ${npc.name}'s lifestyle expenses...`)
        const income = npc.finances.grossIncome(town, npc)
        const living = npc.finances.lifestyleStandard(town, npc)
        const ratio = setup.lifestyleStandards.find(function (desc) {
          return desc[1] === living[1]
        })
        return Math.round(income * (ratio[2] / 100))
      },
      profit (town, npc) {
        console.log(`Returning ${npc.name}'s profit...`)
        return Math.round(npc.finances.netIncome(town, npc) - npc.finances.lifestyleStandard(town, npc)[0] - npc.finances.lifestyleExpenses(town, npc))
      }
    },
    // value: data.value.random(),
    // drive: data.drive.random(),
    // belief: data.belief.random(),
    hairColour: data.hairColour.random(),
    hairType: data.hairType.random(),
    get hair () {
      return `${this.hairType} ${this.hairColour} hair`
    },
    set hair (hair) {
      const hairs = hair.toString().split(' ')
      this.hairType = hairs[0] || ''
      this.hairColour = hairs[1] || ''
    },
    get descriptor () {
      return this.descriptors.random()
    },
    // eslint-disable-next-line accessor-pairs
    set descriptorsAdd (description) {
      if (typeof description === 'string') {
        // @ts-ignore
        console.log(this.descriptors)
        // @ts-ignore
        if (this.descriptors.includes(description)) {
          console.log('Throwing out duplicate description...')
        } else {
        // @ts-ignore
          this.descriptors.push(description)
        }
      } else {
        console.log(`Expected a string operand and received ${description}`)
      }
    },
    eyes: data.raceTraits[race].eyes.random(),
    skinColour: data.skinColour.random(),
    // dndClass,
    profession,
    pockets: data.pockets.random(),
    wealth: dice(2, 50),
    trait: data.trait.random(),
    currentMood: data.currentMood,
    hasHistory: base.hasHistory || false,
    // id: Math.floor(randomFloat(1) * 0x10000),
    idle: data.idle,
    get gender () {
      return this._gender
    },
    set gender (gender) {
      this._gender = gender
      Object.assign(this, data.gender[gender])
    },
    get race () {
      return this._race
    },
    set race (race) {
      this._race = race
      Object.assign(this, data.raceTraits[race].raceWords)
    },
    get raceNote () {
      if (this._race === 'human') {
        return `${this.height} ${this.gender}`
      } else {
        return data.raceTraits[this._race].raceWords.raceName
      }
    },
    knownLanguages: data.raceTraits[race].knownLanguages,
    reading: data.reading.random(),

    family: undefined
    // pubRumour: setup.createPubRumour()
  }, base)

  npc.gender = npc.gender || npc._gender
  npc.race = npc.race || npc._race
  // npc.key = randomFloat(0, 1)
  Object.assign(npc, data.gender[npc.gender])
  Object.assign(npc.pronouns, data.gender[npc.gender])

  Object.assign(npc, data.raceTraits[npc.race].raceWords)
  npc.availableLanguages = [data.standardLanguages.concat(data.exoticLanguages) - npc.knownLanguages]

  // if (npc.hasClass === undefined) {
  //   if (random(100) > 70) {
  //     npc.hasClass = false
  //     npc.dndClass = npc.profession
  //   } else {
  //     npc.adventure = data.adventure.random() || 'looking for work'
  //     npc.hasClass = true
  //   }
  // } else if (!npc.hasClass) {
  //   npc.dndClass = npc.profession
  // } else if (npc.hasClass) {
  //   npc.adventure = data.adventure.random() || 'looking for work'
  // }
  if (typeof npc.hasClass === 'undefined') {
    if (setup.findProfession(town, npc).type !== 'dndClass') {
      npc.hasClass = false
      // npc.dndClass = npc.profession
    } else {
      npc.hasClass = true
      npc.adventure = data.adventure.random() || 'looking for work'
      npc.dndClass = npc.dndClass || npc.profession
    }
  }

  if (!npc.vocalPattern) {
    if (dice(2, 50) >= 75) {
      npc.vocalPattern = data.vocalPattern.random()
    }
  }
  // setup.createName(npc)

  // console.log(npc)
  setup.createAge(npc)

  setup.createRace(npc)

  if (!npc.physicalTrait) {
    if (npc.roll.physicalTrait > 40) {
      const hair = setup.npcData.bodyParts.head.hair.random()
      const eyes = setup.npcData.bodyParts.head.eyes.random()
      const nose = setup.npcData.bodyParts.head.nose.random()
      const mouth = setup.npcData.bodyParts.head.mouth.random()
      const chin = setup.npcData.bodyParts.head.chin.random()
      const ears = setup.npcData.bodyParts.head.ears.random()
      const headMisc = setup.npcData.bodyParts.head.misc.random()
      npc.physicalTrait = [hair, eyes, nose, mouth, chin, ears, headMisc].random()
    } else if (npc.roll.physicalTrait > 30) {
      npc.physicalTrait = setup.npcData.bodyParts.torso.descriptions.random()
    } else if (npc.roll.physicalTrait > 20) {
      npc.physicalTrait = setup.npcData.bodyParts.arms.descriptions.random()
    } else if (npc.roll.physicalTrait > 13) {
      npc.physicalTrait = setup.npcData.bodyParts.legs.descriptions.random()
    } else if (npc.roll.physicalTrait > 8) {
      npc.physicalTrait = data.scar.random()
    } else if (npc.roll.physicalTrait > 5) {
      npc.physicalTrait = npc.hair
    } else if (npc.roll.physicalTrait <= 5) {
      npc.physicalTrait = data.tattoo.random()
    }
  }
  setup.createClass(town, npc)

  setup.createBackground(npc)

  setup.createDescriptors(npc)
  npc.formalName = npc.formalName || `${npc.title} ${npc.lastName}`
  // npc.key = npc.name
  if (!npc.keyIsAlreadyDefined) State.variables.npcs[npc.key] = npc

  npc.profile = function (npc, base) {
    base = npc.name || base
    return `<<profile \`$npcs[${JSON.stringify(npc.key)}] \`${JSON.stringify(base)}>>`
  }

  setup.createSexuality(npc)
  setup.createSocialClass(town, npc)
  setup.createLifestyleStandards(town, npc)
  setup.createReligiosity(town, npc)

  if (npc.finances.profit(town, npc) < 0 && npc.isShallow !== true) {
    setup.createDebt(town, npc)
  }
  if (npc.hasHistory !== false) setup.ExpandNPC(town, npc)

  /* if (npc.partnerID) {
    console.log('assigning ' + npc.name + ' ' + State.variables.npcs[npc.partnerID].name + ' as a partner...')
    setup.setAsPartners(npc, State.variables.npcs[npc.partnerID])
  } */
  State.temporary.newNPC = npc

  if (npc.callbackFunction) {
    npc.callbackFunction(town, npc, base)
  }

  // let tempProfession = setup.findProfession(town, npc, profession)
  // if (setup.townData.professions[tempProfession].function) {
  //   if (typeof setup.townData.professions[tempProfession].function === 'function') {
  //     console.log('There is an on-load function for the profession.')
  //     console.log({ tempProfession })
  //     console.log({ npc })
  //     setup.townData.professions[tempProfession].function(town, npc)
  //   }
  // }
  // npc.doesnt = setup.weightedRandomFetcher(town, setup.npcData.doesnt, npc)

  console.log(npc)
  console.groupEnd()
  return npc
}
