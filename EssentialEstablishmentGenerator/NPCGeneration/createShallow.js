/* global setup */
setup.createShallow = function (base) {
  var data = setup.npcData
  var genderStart = ['man', 'woman'].random()
  var gender = genderStart
  var raceStart = setup.npcData.race.random()
  var race = raceStart
  var firstName = setup.npcData.raceTraits[race].genderTraits[gender].firstName.random().toUpperFirst()
  var lastName = setup.npcData.raceTraits[race].lastName.random().toUpperFirst()
  console.groupCollapsed('creating a shallow called ' + firstName + '...')
  var ageStage = ['young adult', 'young adult', 'young adult', 'young adult', 'settled adult', 'settled adult', 'settled adult', 'elderly'].random()
  var dndClass = setup.npcData.dndClass.random()
  var npc = Object.assign({
    shallow: true,
    genderStart: gender,
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
    age: ageStage,
    dndClass: dndClass,
    muscleMass: 10,
    racePlural: setup.npcData.raceTraits[race].racePlural,
    raceName: setup.npcData.raceTraits[race].raceName,
    raceAdjective: setup.npcData.raceTraits[race].raceAdjective
  }, base)
  Object.assign(npc, setup.npcData.gender[npc.gender])
  npc.gender = npc.gender || npc.genderStart
  npc.race = npc.race || npc.raceStart

  var physicalTraitRoll = Math.floor(Math.random() * 10) + 1
  if (physicalTraitRoll > 8) {
    npc.physicalTrait = setup.npcData.scar.random()
  } else if (physicalTraitRoll > 6) {
    npc.physicalTrait = setup.npcData.tattoo.random()
  } else if (physicalTraitRoll <= 6) {
    npc.physicalTrait = setup.npcData.hairColour.random() + ' ' + setup.npcData.hairType.random() + ' hair'
  }

  if (!npc.hasClass) {
    npc.dndClass = npc.profession || setup.npcData.profession.random()
  }

  setup.createRace(npc)
  setup.createDescriptors(npc)
  console.groupEnd();
  return npc
}
