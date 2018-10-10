setup.createNPC = function (base) {
  // These are the very basic bits that need to be defined first- race, gender, and then names using those local variables.
  var index = State.variables.npcs.size
  var allLanguages = setup.npcData.standardLanguages + setup.npcData.exoticLanguages
  var gender = ['man', 'woman'].random()
  var race = setup.npcData.race.random()
  var firstName = setup.npcData.raceTraits[race].genderTraits[gender].firstName.random().toUpperFirst()
  var lastName = setup.npcData.raceTraits[race].lastName.random().toUpperFirst()

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
    dndClass: setup.npcData.dndClass.random(),
    background: setup.npcData.background.random(),
    pockets: setup.npcData.pockets.random(),
    profession: setup.npcData.profession.random(),
    trait: setup.npcData.trait.random(),
    currentMood: setup.npcData.currentMood,
    idle: setup.npcData.idle,
    eyes: setup.npcData.raceTraits[race].eyes.random(),
    racePlural: setup.npcData.raceTraits[race].racePlural,
    raceName: setup.npcData.raceTraits[race].raceName,
    raceAdjective: setup.npcData.raceTraits[race].raceAdjective,
    raceLanguage: setup.npcData.raceTraits[race].raceLanguage,
    knownLanguages: setup.npcData.raceTraits[race].knownLanguages,
    reading: setup.npcData.reading.random(),
    skinColours: setup.npcData.skinColours.random(),
    pubRumour: setup.createPubRumour()
  }, base)
  npc.hair = npc.hairType + ' ' + npc.hairColour + ' hair'

  if (npc.hasClass === false) {
    npc.dndClass = npc.profession
  }

  if (dice(2, 50) >= 75) {
    npc.vocalPattern = setup.npcData.vocalPattern.random()
  }

  // setup.createName(npc)

  setup.createAge(npc)

  setup.createRace(npc)

  npc = Object.assign(npc, setup.npcData.gender[npc.gender])
  // switch (npc.gender) {
  //   case 'man':
  //     Object.assign(npc, {
  //       heshe: 'he',
  //       himher: 'him',
  //       himherself: 'himself',
  //       hisher: 'his',
  //       hisherself: 'hisself',
  //       boygirl: 'boy',
  //       manwoman: 'man',
  //       menwomen: 'men',
  //       malefemale: 'male',
  //       guygirl: 'guy'
  //     })
  //     break
  //   case 'woman':
  //     Object.assign(npc, {
  //       heshe: 'she',
  //       himher: 'her',
  //       himherself: 'herself',
  //       hisher: 'her',
  //       hisherself: 'herself',
  //       boygirl: 'girl',
  //       manwoman: 'woman',
  //       menwomen: 'women',
  //       malefemale: 'female',
  //       guygirl: 'girl'
  //     })
  //     break
  //   default:
  //     Object.assign(npc, {
  //       heshe: 'they',
  //       himher: 'their',
  //       himherself: 'themself',
  //       hisher: 'their',
  //       hisherself: 'theirself',
  //       boygirl: 'child',
  //       manwoman: 'person',
  //       menwomen: 'people',
  //       malefemale: 'person',
  //       guygirl: 'child'
  //     })
  //     break
  // }

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

  npc.availableLanguages = [allLanguages - npc.knownLanguages]

  setup.createBackground(npc)
  npc.descriptor = [
    npc.age + ' ' + npc.raceName, npc.height + ' ' + npc.raceName,
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

  if (npc.partnerID) {
    setup.setAsPartners(npc, State.variables.npcs[npc.partnerID])
  }

  return npc
}
