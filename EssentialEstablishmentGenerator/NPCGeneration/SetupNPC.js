/* global setup State dice random */
setup.createNPC = function (town, base) {
  if (!town) {
    console.error('Town is not defined! NPC cannot be created. Please report this bug.')
  }
  // These are the very basic bits that need to be defined first- race, gender, and then names using those local variables.
  var data = setup.npcData
  if (!base || base.isShallow === true) {
    base = {
      isThrowaway: true,
      canBeCustom: true,
      hasHistory: false
    }
  }

  if (base.canBeCustom === true && random(1, 100) > 99) {
    base = setup.objectArrayFetcher(setup.misc.patreonCharacters, town)
  }
  var gender = base.gender || ['man', 'woman'].random()
  var race = base.race || setup.fetchRace(town)
  console.log('Loading profession:')
  var profession = base.profession || setup.fetchProfessionChance(town)

  var firstName = data.raceTraits[race].genderTraits[gender].firstName.random().toUpperFirst()
  var lastName = data.raceTraits[race].lastName.random().toUpperFirst()
  console.groupCollapsed(firstName + ' ' + lastName)
  var ageStage = base.ageStage || ['young adult', 'young adult', 'young adult', 'young adult', 'settled adult', 'settled adult', 'settled adult', 'elderly'].random()
  var dndClass = base.dndClass || data.dndClass.random()
  if (base.dndClass) {
    base.hasClass = true
  }

  // the local variables are then assigned to npc. We don't need to initialise npc to do the stuff that's race & gender dependent because we've got the local variables.
  var npc = Object.assign({
    passageName: 'NPCProfile',
    _gender: gender,
    _race: race,
    firstName: firstName,
    lastName: lastName,
    get name () {
      return this.firstName + ' ' + this.lastName
    },
    set name (name) {
      var words = name.toString().split(' ')
      this.firstName = words[0] || ''
      this.lastName = words[1] || ''
    },
    ageStage: ageStage,
    ageYears: data.raceTraits[race].ageTraits[ageStage].baseAge + data.raceTraits[race].ageTraits[ageStage].ageModifier(),
    muscleMass: data.raceTraits[race].muscleMass + dice(5, 4) - 12,
    // demeanour: data.demeanour.random(),
    calmTrait: data.calmTrait.random(),
    stressTrait: data.stressTrait.random(),
    relationships: {

    },
    // value: data.value.random(),
    // drive: data.drive.random(),
    // belief: data.belief.random(),
    hairColour: data.hairColour.random(),
    hairType: data.hairType.random(),
    get hair () {
      return this.hairType + ' ' + this.hairColour + ' hair'
    },
    set hair (hair) {
      var hairs = hair.toString().split(' ')
      this.hairType = hairs[0] || ''
      this.hairColour = hairs[1] || ''
    },
    get descriptor () {
      return this.descriptors.random()
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
    eyes: data.raceTraits[race].eyes.random(),
    skinColour: data.skinColour.random(),
    dndClass: dndClass,
    profession: profession,
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
        return this.height + ' ' + this.gender
      } else {
        return data.raceTraits[this._race].raceWords.raceName
      }
    },
    knownLanguages: data.raceTraits[race].knownLanguages,
    reading: data.reading.random()
    // pubRumour: setup.createPubRumour()
  }, base)

  npc.gender = npc.gender || npc._gender
  npc.race = npc.race || npc._race
  npc.key = npc.firstName + ' ' + npc.lastName
  Object.assign(npc, data.gender[npc.gender])
  Object.assign(npc, data.raceTraits[npc.race].raceWords)
  npc.availableLanguages = [data.standardLanguages.concat(data.exoticLanguages) - npc.knownLanguages]

  if (npc.hasClass === undefined) {
    if (random(100) > 70) {
      npc.hasClass = false
      npc.dndClass = npc.profession
    } else {
      npc.adventure = data.adventure.random() || 'looking for work'
      npc.hasClass = true
    }
  } else if (!npc.hasClass) {
    npc.dndClass = npc.profession
  } else if (npc.hasClass) {
    npc.adventure = data.adventure.random() || 'looking for work'
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

  var physicalTraitRoll = random(1, 11)
  if (physicalTraitRoll > 8) {
    npc.physicalTrait = npc.physicalTrait || data.scar.random()
  } else if (physicalTraitRoll > 6) {
    npc.physicalTrait = npc.physicalTrait || data.tattoo.random()
  } else if (physicalTraitRoll <= 6) {
    npc.physicalTrait = npc.physicalTrait || npc.hair
  }

  setup.createClass(npc)

  setup.createBackground(npc)

  setup.createDescriptors(npc)

  // npc.key = npc.name
  State.variables.npcs[npc.key] = npc
  npc.profile = function (npc, base) {
    base = npc.name || base
    return '<<profile `$npcs[' + JSON.stringify(npc.key) + '] `' + JSON.stringify(base) + '>>'
  }

  if (npc.hasHistory !== false) {
    setup.createHistory(town, npc)
    setup.createLifeEvents(town, npc)
  }

  if (npc.partnerID) {
    console.log('assigning ' + npc.name + ' a partner...')
    setup.setAsPartners(npc, npc.partnerID)
  }
  State.temporary.newNPC = npc

  // npc.doesnt = setup.weightedRandomFetcher(town, setup.npcData.doesnt, npc)

  console.log(npc)
  console.groupEnd()
  return npc
}
