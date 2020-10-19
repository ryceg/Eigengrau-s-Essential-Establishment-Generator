setup.createNPC = (town, base = {}) => {
  if (!town) {
    console.error('Town is not defined! NPC cannot be created. Please report this bug.')
  }
  lib.filterNull(base)
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

  if (base.canBeCustom === true && lib.random(1, 100) > 99) {
    base = lib.objectArrayFetcher(lib.patreonCharacters)
  }

  lib.initSexistProfession(town, base)

  const gender = base.gender || lib.random(['man', 'woman'])
  const race = base.race || lib.fetchRace(town, base)

  console.log('Fetching profession.')
  const profession = base.profession || lib.fetchProfessionChance(town, base)

  const firstName = base.firstName || getFirstName(race, gender)
  const lastName = base.lastName || getLastName(race)
  console.groupCollapsed(`${firstName} ${lastName}`)
  const ageStage = base.ageStage || getRandomAgeStage()
  let dndClass
  if (lib.findProfession(town, base, profession).type === 'dndClass') {
    base.hasClass = true
    dndClass = base.dndClass || profession
  }

  // the local variables are then assigned to npc. We don't need to initialise npc to do the stuff that's race & gender dependent because we've got the local variables.
  const npc = Object.assign({
    key: base.key || lib.getUUID(),
    objectType: 'npc',
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
    ageYears: lib.getAgeInYears(race, ageStage),
    muscleMass: lib.raceTraits[race].muscleMass + lib.dice(5, 4) - 12,
    pronouns: {

    },
    relationships: {

    },
    religion: {

    },
    roll: {
      _wageVariation: lib.dice(5, 10) - 27,
      wageVariation (town) {
        // _wageVariation is static; it's the "luck" that the NPC has in their profession.
        // town.roll.wealth increases or decreases it by 10%, reflecting the strength of the economy.
        // expected range should be between -25 and 25.
        return lib.calcPercentage(npc.roll._wageVariation, (town.roll.wealth - 50) / 5)
      },
      physicalTrait: lib.random(1, 100),
      gregariousness: lib.dice(3, 6),
      // conformity: 100 is a sheep, 50 is a regular person, 1 is "call the cops cuz i really don't care"
      // TODO: conformity would ideally be used in testing for breaking gender norms, but it is only initialised AFTER the test.
      // not really sure how to go about fixing it.
      conformity: lib.dice(2, 50)
    },
    finances: {
      creditors: {},
      debtors: {}
    },
    hairColour: lib.random(data.hairColour),
    hairType: lib.random(data.hairType),
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
    eyes: lib.random(lib.raceTraits[race].eyes),
    skinColour: lib.random(data.skinColour),
    dndClass,
    profession,
    pockets: lib.random(data.pockets),
    wealth: lib.dice(2, 50),
    currentMood: data.currentMood,
    hasHistory: base.hasHistory || false,
    idle: data.idle,
    get gender () {
      return this._gender
    },
    set gender (gender) {
      this._gender = gender
      Object.assign(this, lib.genderData[gender])
    },
    get race () {
      return this._race
    },
    set race (race) {
      this._race = race
      Object.assign(this, lib.raceTraits[race].raceWords)
    },
    get raceNote () {
      if (this._race === 'human') {
        return `${this.height} ${this.gender}`
      } else {
        return lib.raceTraits[this._race].raceWords.raceName
      }
    },
    knownLanguages: lib.raceTraits[race].knownLanguages,
    reading: lib.random(data.reading),

    family: undefined
  }, base)

  npc.gender = npc.gender || npc._gender
  npc.race = npc.race || npc._race
  Object.assign(npc, lib.genderData[npc.gender])
  Object.assign(npc.pronouns, lib.genderData[npc.gender])

  Object.assign(npc, lib.raceTraits[npc.race].raceWords)

  if (typeof npc.hasClass === 'undefined') {
    if (lib.findProfession(town, npc).type !== 'dndClass') {
      npc.hasClass = false
    } else {
      npc.hasClass = true
      npc.adventure = lib.random(data.adventure) || 'looking for work'
      npc.dndClass = npc.dndClass || npc.profession
    }
  }

  lib.createPersonality(npc)
  // lib.createName(npc)

  lib.setAge(npc)

  lib.setRace(npc)

  if (!npc.physicalTrait) {
    if (npc.roll.physicalTrait > 40) {
      const headParts = lib.bodyParts.head
      npc.physicalTrait = lib.random([
        lib.random(headParts.hair),
        lib.random(headParts.eyes),
        lib.random(headParts.nose),
        lib.random(headParts.mouth),
        lib.random(headParts.chin),
        lib.random(headParts.ears),
        lib.random(headParts.misc)
      ])
    } else if (npc.roll.physicalTrait > 30) {
      npc.physicalTrait = lib.random(lib.bodyParts.torso.descriptions)
    } else if (npc.roll.physicalTrait > 20) {
      npc.physicalTrait = lib.random(lib.bodyParts.arms.descriptions)
    } else if (npc.roll.physicalTrait > 13) {
      npc.physicalTrait = lib.random(lib.bodyParts.legs.descriptions)
    } else if (npc.roll.physicalTrait > 8) {
      npc.physicalTrait = lib.random(data.scar)
    } else if (npc.roll.physicalTrait > 5) {
      npc.physicalTrait = npc.hair
    } else if (npc.roll.physicalTrait <= 5) {
      npc.physicalTrait = lib.random(data.tattoo)
    }
  }
  setup.createClass(town, npc)

  lib.createBackground(npc)

  setup.createDescriptors(npc)
  npc.formalName = npc.formalName || `${npc.title} ${npc.lastName}`
  if (!npc.keyIsAlreadyDefined) State.variables.npcs[npc.key] = npc

  setup.createSexuality(npc)
  setup.createSocialClass(town, npc)
  setup.createLifestyleStandards(town, npc)
  setup.createReligiosity(town, npc)

  if (setup.npcProfit(town, npc) < 0 && npc.isShallow !== true) {
    setup.createDebt(town, npc)
  }
  if (npc.hasHistory !== false) setup.expandNPC(town, npc)

  State.temporary.newNPC = npc

  if (npc.callbackFunction) {
    npc.callbackFunction(town, npc, base)
  }

  console.log(npc)
  console.groupEnd()
  return npc
}

/**
 * @param {import("../../lib/index").RaceName} race
 */
function getLastName (race) {
  return lib.toTitleCase(lib.random(lib.raceTraits[race].lastName))
}

/**
 * @param {import("../../lib/index").RaceName} race
 * @param {import("../../lib/index").GenderName} gender
 */
function getFirstName (race, gender) {
  return lib.toTitleCase(lib.random(lib.raceTraits[race].genderTraits[gender].firstName))
}

/**
 * @returns {import("../../lib/index").AgeName}
 */
function getRandomAgeStage () {
  return lib.random(['young adult', 'young adult', 'young adult', 'young adult', 'settled adult', 'settled adult', 'settled adult', 'elderly'])
}
