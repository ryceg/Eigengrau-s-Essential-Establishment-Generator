setup.createNPC = function (base) {
  // These are the very basic bits that need to be defined first- race, gender, and then names using those local variables.
  var index = State.variables.npcs.size
  var gender = ['man', 'woman'].random()
  var race = setup.npcData.race.random()
  var firstName = setup.npcData.raceTraits[race].genderTraits[gender].firstName.random().toUpperFirst()
  var lastName = setup.npcData.raceTraits[race].lastName.random().toUpperFirst()
  var ageStage = ['young adult', 'young adult', 'young adult', 'young adult', 'settled adult', 'settled adult', 'settled adult', 'elderly'].random()
  var dndClass = setup.npcData.dndClass.random()

  // the local variables are then assigned to npc. We don't need to initialise npc to do the stuff that's race & gender dependent because we've got the local variables.
  var npc = Object.assign({
    gender: gender,
    race: race,
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
    ageYears: setup.npcData.raceTraits[race].ageTraits[ageStage].baseAge + setup.npcData.raceTraits[race].ageTraits[ageStage].ageModifier(),
    muscleMass: setup.npcData.raceTraits[race].muscleMass + dice(5, 4) - 12,
    demeanour: setup.npcData.demeanour.random(),
    calmTrait: setup.npcData.calmTrait.random(),
    stressTrait: setup.npcData.stressTrait.random(),
    value: setup.npcData.value.random(),
    drive: setup.npcData.drive.random(),
    belief: setup.npcData.belief.random(),
    adventure: setup.npcData.adventure.random(),
    hairColour: setup.npcData.hairColour.random(),
    hairType: setup.npcData.hairType.random(),
    eyes: setup.npcData.raceTraits[race].eyes.random(),
    skinColours: setup.npcData.skinColours.random(),
    dndClass: dndClass,
    // background: setup.npcData.background.random(),
    // background: setup.npcData.classTraits[dndClass].background.random() || 'commoner',
    profession: setup.npcData.profession.random(),
    pockets: setup.npcData.pockets.random(),
    wealth: dice(2, 50),
    trait: setup.npcData.trait.random(),
    currentMood: setup.npcData.currentMood,
    idle: setup.npcData.idle,
    racePlural: setup.npcData.raceTraits[race].racePlural,
    raceName: setup.npcData.raceTraits[race].raceName,
    raceAdjective: setup.npcData.raceTraits[race].raceAdjective,
    raceLanguage: setup.npcData.raceTraits[race].raceLanguage,
    knownLanguages: setup.npcData.raceTraits[race].knownLanguages,
    reading: setup.npcData.reading.random(),
    pubRumour: setup.createPubRumour()
  }, base)
  npc.hair = npc.hairType + ' ' + npc.hairColour + ' hair'
  // npc.availableLanguages = [setup.npcData.standardLanguages.concat(setup.npcData.exoticLanguages) - npc.knownLanguages]
  Object.assign(npc, setup.npcData.gender[npc.gender])

  if (npc.hasClass === false) {
    npc.dndClass = npc.profession
  }

  if (dice(2, 50) >= 75) {
    npc.vocalPattern = setup.npcData.vocalPattern.random()
  }

  // setup.createName(npc)

  setup.createAge(npc)

  setup.createRace(npc)



  var physicalTraitRoll = Math.floor(Math.random() * 10) + 1
  if (physicalTraitRoll > 8) {
    npc.physicalTrait = setup.npcData.scar.random()
  } else if (physicalTraitRoll > 6) {
    npc.physicalTrait = setup.npcData.tattoo.random()
  } else if (physicalTraitRoll <= 6) {
    npc.physicalTrait = npc.hair
  }

  setup.createHistory(npc)

  setup.createLifeEvents(npc)

  setup.createClass(npc)
  // npc.background = 'sage'

  // setup.newLanguage = function (npc) {
  //   var allLanguages = setup.npcData.standardLanguages + setup.npcData.exoticLanguages
  //   console.log(allLanguages + ' is all the languages')
  //   var availableLanguages = allLanguages.delete(npc.knownLanguages)
  //   console.log(availableLanguages + ' are available languages for ' + npc.name)
  //   // console.log('Invoked new language for ' + npc.name + ' who knows ' + npc.knownLanguages)
  //   return availableLanguages.pluck()
  // }
  //
  // if (setup.npcData.backgroundTraits[npc.background].extraLanguage === true) {
  //   console.log(npc.name + ' knows ' + npc.knownLanguages)
  //   var langLength = npc.knownLanguages.length
  //   npc.knownLanguages.pushUnique(setup.newLanguage(npc))
  //   while (npc.langLength >= npc.knownLanguages.length) {
  //     console.log('Fetching a new language for ' + npc.name + '...')
  //     npc.knownLanguages.pushUnique(setup.newLanguage(npc))
  //   }
  //   console.log('New language for ' + npc.name + '! Now they know ' + npc.knownLanguages)
  //   console.log(npc)
  // }
  // var allLanguages = setup.npcData.standardLanguages + setup.npcData.exoticLanguages

  setup.createBackground(npc)

  npc.descriptor = [
    npc.age + ' ' + npc.raceName,
    npc.height + ' ' + npc.raceName,
    npc.weight + ' ' + npc.raceName,
    npc.height + ' ' + npc.gender + ' with ' + npc.physicalTrait
  ]

  if (typeof beard !== 'undefined') {
    npc.descriptor.push(npc.raceName + ' with a ' + npc.beard)
  }

  if (npc.hasClass === true) {
    npc.descriptor.push(npc.dndClass)
  }

  if (npc.isThrowaway === undefined) {
    State.variables.npcs.set(++index, npc)
  }

  npc.id = State.variables.npcs[State.variables.npcs.length - 1]
  // npc.id = State.variables.npcs[Math.floor(Math.random() * 0x10000).toString(16)]

  if (npc.partnerID) {
    setup.setAsPartners(npc, State.variables.npcs[npc.partnerID])
  }

  return npc
}
