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
  const gender = base.gender || ['man', 'woman'].seededrandom()
  const race = base.race || setup.fetchRace(town)
  console.log('Loading profession:')
  const profession = base.profession || setup.fetchProfessionChance(town, base)

  const firstName = base.firstName || data.raceTraits[race].genderTraits[gender].firstName.seededrandom().toUpperFirst()
  const lastName = base.lastName || data.raceTraits[race].lastName.seededrandom().toUpperFirst()
  console.groupCollapsed(firstName + ' ' + lastName)
  const ageStage = base.ageStage || ['young adult', 'young adult', 'young adult', 'young adult', 'settled adult', 'settled adult', 'settled adult', 'elderly'].seededrandom()
  const dndClass = base.dndClass || data.dndClass.seededrandom()
  if (base.dndClass) {
    base.hasClass = true
  }

  // the local variables are then assigned to npc. We don't need to initialise npc to do the stuff that's race & gender dependent because we've got the local variables.
  const npc = Object.assign({
    passageName: 'NPCProfile',
    _gender: gender,
    _race: race,
    firstName,
    lastName,
    get name () {
      return this.firstName + ' ' + this.lastName
    },
    set name (name) {
      const words = name.toString().split(' ')
      this.firstName = words[0] || ''
      this.lastName = words[1] || ''
    },
    ageStage,
    ageYears: data.raceTraits[race].ageTraits[ageStage].baseAge + data.raceTraits[race].ageTraits[ageStage].ageModifier(),
    muscleMass: data.raceTraits[race].muscleMass + dice(5, 4) - 12,
    // demeanour: data.demeanour.seededrandom(),
    calmTrait: data.calmTrait.seededrandom(),
    stressTrait: data.stressTrait.seededrandom(),
    pronouns: {

    },
    relationships: {

    },
    roll: {

    },
    finances: {
      dailyWage: ''
    },
    // value: data.value.seededrandom(),
    // drive: data.drive.seededrandom(),
    // belief: data.belief.seededrandom(),
    hairColour: data.hairColour.seededrandom(),
    hairType: data.hairType.seededrandom(),
    get hair () {
      return this.hairType + ' ' + this.hairColour + ' hair'
    },
    set hair (hair) {
      const hairs = hair.toString().split(' ')
      this.hairType = hairs[0] || ''
      this.hairColour = hairs[1] || ''
    },
    get descriptor () {
      return this.descriptors.seededrandom()
    },
    set descriptorsAdd (description) {
      if (typeof description === 'string') {
        console.log(this.descriptors)
        if (this.descriptors.includes(description)) {
          console.log('Throwing out duplicate description...')
        } else {
          this.descriptors.push(description)
        }
      } else {
        console.log('Expected a string operand and received ' + description)
      }
    },
    eyes: data.raceTraits[race].eyes.seededrandom(),
    skinColour: data.skinColour.seededrandom(),
    dndClass,
    profession,
    pockets: data.pockets.seededrandom(),
    wealth: dice(2, 50),
    trait: data.trait.seededrandom(),
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
        return this.height + ' ' + this.gender
      } else {
        return data.raceTraits[this._race].raceWords.raceName
      }
    },
    knownLanguages: data.raceTraits[race].knownLanguages,
    reading: data.reading.seededrandom(),

    family: undefined
    // pubRumour: setup.createPubRumour()
  }, base)

  npc.gender = npc.gender || npc._gender
  npc.race = npc.race || npc._race
  npc.key = npc.firstName + ' ' + npc.lastName
  Object.assign(npc, data.gender[npc.gender])
  Object.assign(npc.pronouns, data.gender[npc.gender])

  Object.assign(npc, data.raceTraits[npc.race].raceWords)
  npc.availableLanguages = [data.standardLanguages.concat(data.exoticLanguages) - npc.knownLanguages]

  if (npc.hasClass === undefined) {
    if (random(100) > 70) {
      npc.hasClass = false
      npc.dndClass = npc.profession
    } else {
      npc.adventure = data.adventure.seededrandom() || 'looking for work'
      npc.hasClass = true
    }
  } else if (!npc.hasClass) {
    npc.dndClass = npc.profession
  } else if (npc.hasClass) {
    npc.adventure = data.adventure.seededrandom() || 'looking for work'
  }

  if (!npc.vocalPattern) {
    if (dice(2, 50) >= 75) {
      npc.vocalPattern = data.vocalPattern.seededrandom()
    }
  }
  // setup.createName(npc)

  // console.log(npc)
  setup.createAge(npc)

  setup.createRace(npc)

  const physicalTraitRoll = random(1, 11)
  if (physicalTraitRoll > 8) {
    npc.physicalTrait = npc.physicalTrait || data.scar.seededrandom()
  } else if (physicalTraitRoll > 6) {
    npc.physicalTrait = npc.physicalTrait || data.tattoo.seededrandom()
  } else if (physicalTraitRoll <= 6) {
    npc.physicalTrait = npc.physicalTrait || npc.hair
  }

  setup.createClass(npc)

  setup.createBackground(npc)

  setup.createDescriptors(npc)
  npc.formalName = npc.formalName || npc.title + ' ' + npc.lastName
  // npc.key = npc.name
  State.variables.npcs[npc.key] = npc
  npc.profile = function (npc, base) {
    base = npc.name || base
    return '<<profile `$npcs[' + JSON.stringify(npc.key) + '] `' + JSON.stringify(base) + '>>'
  }

  setup.createSexuality(npc)
  setup.createSocialClass(town, npc)
  setup.createLivingStandards(town, npc)

  if (npc.hasHistory !== false) setup.ExpandNPC(town, npc)

  /* if (npc.partnerID) {
    console.log('assigning ' + npc.name + ' ' + State.variables.npcs[npc.partnerID].name + ' as a partner...')
    setup.setAsPartners(npc, State.variables.npcs[npc.partnerID])
  } */
  State.temporary.newNPC = npc

  if (npc.callbackFunction) {
    npc.callbackFunction(town, npc, base)
  }

  // npc.doesnt = setup.weightedRandomFetcher(town, setup.npcData.doesnt, npc)

  console.log(npc)
  console.groupEnd()
  return npc
}
