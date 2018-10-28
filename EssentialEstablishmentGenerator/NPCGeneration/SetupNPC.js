/* global setup State dice */
setup.createNPC = function (base) {
  // These are the very basic bits that need to be defined first- race, gender, and then names using those local variables.
  var data = setup.npcData
  var genderStart = ['man', 'woman'].random()
  var gender = genderStart /* to make the setters and getters work. Change in future.  */
  var raceName = data.race.random()
  var race = raceName
  var firstName = data.raceTraits[race].genderTraits[gender].firstName.random().toUpperFirst()
  var lastName = data.raceTraits[race].lastName.random().toUpperFirst()
  var ageStage = ['young adult', 'young adult', 'young adult', 'young adult', 'settled adult', 'settled adult', 'settled adult', 'elderly'].random()
  var dndClass = data.dndClass.random()

  // the local variables are then assigned to npc. We don't need to initialise npc to do the stuff that's race & gender dependent because we've got the local variables.
  var npc = Object.assign({
    genderStart: gender,
    raceName: race,
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
    ageYears: data.raceTraits[race].ageTraits[ageStage].baseAge + data.raceTraits[race].ageTraits[ageStage].ageModifier(),
    // get age () {
    //   if (typeof setup.npcData.raceTraits[this.race].ageTraits.ageDescriptors !== 'undefined') {
    //     console.log(setup.npcData.raceTraits[this.race].ageTraits.ageDescriptors)
    //     this.age = setup.npcData.raceTraits[this.race].ageTraits.ageDescriptors.find(function (descriptor) {
    //       return descriptor[0] <= this.ageYears
    //     })[1]
    //   } else {
    //     console.log('Called age descriptor without a valid array.')
    //   }
    // },
    // set aged (ageYears) {
    //   this.age = ageYears
    // },
    muscleMass: data.raceTraits[race].muscleMass + dice(5, 4) - 12,
    // demeanour: data.demeanour.random(),
    calmTrait: data.calmTrait.random(),
    stressTrait: data.stressTrait.random(),
    // value: data.value.random(),
    // drive: data.drive.random(),
    // belief: data.belief.random(),
    adventure: data.adventure.random(),
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
    eyes: data.raceTraits[race].eyes.random(),
    skinColours: data.skinColours.random(),
    dndClass: dndClass,
    // background: data.background.random(),
    // background: data.classTraits[dndClass].background.random() || 'commoner',
    profession: data.profession.random(),
    pockets: data.pockets.random(),
    wealth: dice(2, 50),
    trait: data.trait.random(),
    currentMood: data.currentMood,
    // id: State.variables.npcs[State.variables.npcs.length - 1],
    id: State.variables.npcs.length - 1,
    shallow: false,
    // id: State.variables.npcs.length,
    idle: data.idle,
    get gender () {
      return this.gender || this.genderStart
    },
    set gender (gender) {
      Object.assign(npc, data.gender[gender])
    },
    get race () {
      return this.raceName
    },
    set race (race) {
      this.racePlural = data.raceTraits[race].racePlural
      this.raceName = data.raceTraits[race].raceName
      this.raceAdjective = data.raceTraits[race].raceAdjective
      this.raceLanguage = data.raceTraits[race].raceLanguage
    },
    knownLanguages: data.raceTraits[race].knownLanguages,
    reading: data.reading.random(),
    pubRumour: setup.createPubRumour()
  }, base)
  console.groupCollapsed(npc.name)
  npc.gender = npc.gender || npc.genderStart
  npc.race = npc.race || npc.raceName

  // npc.availableLanguages = [data.standardLanguages.concat(data.exoticLanguages) - npc.knownLanguages]

  if (!npc.hasClass) {
    npc.dndClass = npc.profession
  }

  if (dice(2, 50) >= 75) {
    npc.vocalPattern = data.vocalPattern.random()
  }

  // setup.createName(npc)

  setup.createAge(npc)

  setup.createRace(npc)

  var physicalTraitRoll = Math.floor(Math.random() * 10) + 1
  if (physicalTraitRoll > 8) {
    npc.physicalTrait = data.scar.random()
  } else if (physicalTraitRoll > 6) {
    npc.physicalTrait = data.tattoo.random()
  } else if (physicalTraitRoll <= 6) {
    npc.physicalTrait = npc.hair
  }

  // setup.createHistory(npc)

  // setup.createLifeEvents(npc)

  setup.createClass(npc)

  setup.createBackground(npc)

  setup.createDescriptors(npc)

  // npc.id = State.variables.npcs[State.variables.npcs.length - 1]

  if (npc.partnerID) {
    console.log('assigning ' + npc.name + ' a partner...')
    // setup.setAsPartners(npc, State.variables.npcs[npc.partnerID])
    setup.setAsPartners(npc, npc.partnerID)
  }

  if (!npc.isThrowaway) {
    // temporarily pushing just the id
    State.variables.npcs.push(npc.id)
  }
  console.log(npc)
  console.groupEnd();
  return npc
}
