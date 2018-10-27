/* global setup State dice */
setup.createNPC = function (base) {
  // These are the very basic bits that need to be defined first- race, gender, and then names using those local variables.
  var genderStart = ['man', 'woman'].random()
  var gender = genderStart /* to make the setters and getters work. Change in future.  */
  var raceName = setup.npcData.race.random()
  var race = raceName
  var firstName = setup.npcData.raceTraits[race].genderTraits[gender].firstName.random().toUpperFirst()
  var lastName = setup.npcData.raceTraits[race].lastName.random().toUpperFirst()
  var ageStage = ['young adult', 'young adult', 'young adult', 'young adult', 'settled adult', 'settled adult', 'settled adult', 'elderly'].random()
  var dndClass = setup.npcData.dndClass.random()

  // the local variables are then assigned to npc. We don't need to initialise npc to do the stuff that's race & gender dependent because we've got the local variables.
  var npc = Object.assign({
    genderStart: genderStart,
    raceName: raceName,
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
    // get age () {
    //     if (typeof setup.npcData.raceTraits[this.race].ageTraits.ageDescriptors !== 'undefined') {
    //       var descriptors = setup.npcData.raceTraits[this.race].ageTraits.ageDescriptors
    //       descriptors.forEach(getAge)
    //     } else {
    //       console.log('Called age descriptor without a valid array.')
    //     }
    //   }
    // },
    // set age (ageYears) {
    //   if (typeof setup.npcData.raceTraits[this.race].ageTraits.ageDescriptors !== 'undefined') {
    //     var descriptors = setup.npcData.raceTraits[this.race].ageTraits.ageDescriptors
    //     descriptors.forEach(getAge)
    //   } else {
    //     console.log('Called age descriptor without a valid array.')
    //   }
    // },
    muscleMass: setup.npcData.raceTraits[race].muscleMass + dice(5, 4) - 12,
    // demeanour: setup.npcData.demeanour.random(),
    calmTrait: setup.npcData.calmTrait.random(),
    stressTrait: setup.npcData.stressTrait.random(),
    // value: setup.npcData.value.random(),
    // drive: setup.npcData.drive.random(),
    // belief: setup.npcData.belief.random(),
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
    // currentMood: setup.npcData.currentMood,
    id: State.variables.npcs[State.variables.npcs.length - 1],
    shallow: false,
    // id: State.variables.npcs.length,
    idle: setup.npcData.idle,
    get gender () {
      return this.genderStart
    },
    set gender (gender) {
      Object.assign(npc, setup.npcData.gender[gender])
    },
    get race () {
      return this.raceName
    },
    set race (race) {
      this.racePlural = setup.npcData.raceTraits[race].racePlural
      this.raceName = setup.npcData.raceTraits[race].raceName
      this.raceAdjective = setup.npcData.raceTraits[race].raceAdjective
      this.raceLanguage = setup.npcData.raceTraits[race].raceLanguage
    },
    // racePlural: setup.npcData.raceTraits[race].racePlural,
    // raceName: setup.npcData.raceTraits[race].raceName,
    // raceAdjective: setup.npcData.raceTraits[race].raceAdjective,
    // raceLanguage: setup.npcData.raceTraits[race].raceLanguage,
    knownLanguages: setup.npcData.raceTraits[race].knownLanguages,
    reading: setup.npcData.reading.random(),
    pubRumour: setup.createPubRumour()
  }, base)
  console.groupCollapsed(npc.name)

  npc.hair = npc.hairType + ' ' + npc.hairColour + ' hair'
  // npc.availableLanguages = [setup.npcData.standardLanguages.concat(setup.npcData.exoticLanguages) - npc.knownLanguages]

  if (!npc.hasClass) {
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

  setup.createBackground(npc)

  setup.createDescriptors(npc)

  // npc.id = State.variables.npcs[State.variables.npcs.length - 1]

  if (npc.partnerID) {
    console.log('assigning ' + npc.name + ' a partner...')
    // setup.setAsPartners(npc, State.variables.npcs[npc.partnerID])
    setup.setAsPartners(npc, npc.partnerID)
  }

  if (npc.isThrowaway === undefined) {
    // State.variables.npcs.set(++index, npc)
    State.variables.npcs.push(npc)
  }
  console.log(npc)
  console.groupEnd();
  return npc
}
