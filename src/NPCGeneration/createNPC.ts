/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { AgeName, GenderName, NPC, RaceName, Town } from '@lib'
import { createDebt } from './createDebt'
import { createSexuality } from './Relationships/createSexuality'

const defaultBase: Partial<NPC> = {
  isShallow: true
}

/**
 * Creates a standard NPC.
 */
export const createNPC = (town: Town, base = defaultBase): NPC => {
  if (typeof town === 'undefined') {
    lib.logger.error('Town is not defined! NPC cannot be created. Please report this bug.')
  }

  lib.filterNull(base)
  lib.logger.info('Base:', { base })

  // @ts-ignore
  const data = setup.npcData

  lib.assign(base, {
    roll: {
      traits: {},
      professionLuck: lib.dice(5, 10) - 27,
      physicalTrait: lib.random(1, 100),
      gregariousness: lib.dice(3, 6),
      conformity: lib.dice(2, 50),
      gender: lib.random(1, 100),
      religiosity: 0,
      socialClass: 0
    }
  })

  if (base.isShallow === true) {
    lib.logger.info('NPC flagged as shallow.')
    base.isThrowaway ??= true
    base.hasHistory ??= false
  }

  if (base.canBeCustom === true && lib.random(1, 100) > 99) {
    base = lib.getRandomValue(lib.patreonCharacters)
  }

  // Start NPC creation with properties of a humanoid that are more biological, like what race and age
  // then work down to how those (if NPC is not shallow) effect other properties, like profession and
  // religion
  // @TODO: Race should probably effect gender
  const race = base.race || lib.fetchRace(town)
  const gender = lib.getNpcGender(town, base)

  lib.initSexistProfession(town, base as NPC)

  const profession = base.profession || lib.fetchProfessionChance(town, base as NPC)

  const firstName = base.firstName || getFirstName(race, gender)
  let lastName = base.lastName || getLastName(race)
  if (lastName === '') {
    lastName = firstName
  }
  const ageStage = base.ageStage || getRandomAgeStage()
  let dndClass
  if (lib.findProfession(town, base as NPC, profession).type === 'dndClass') {
    base.hasClass = true
    dndClass = base.dndClass || profession
  }

  // The local variables are then assigned to npc.
  // We don't need to initialise npc to do the stuff that's race & gender dependent because we've got the local variables.
  const npc = {
    key: base.key || lib.getUUID(),
    objectType: 'npc' as const,
    passageName: 'NPCProfile',
    _race: race,
    gender,
    firstName,
    lastName,
    get name (): string {
      if (lastName === firstName) {
        return `${this.firstName}`
      }
      return `${this.firstName} ${this.lastName}`
    },
    set name (name) {
      const [firstName, lastName] = name.toString().split(' ')
      this.firstName = firstName || ''
      this.lastName = lastName || ''
    },
    ageStage,
    ageYears: lib.getAgeInYears(race, ageStage),
    muscleMass: lib.raceTraits[race].muscleMass + lib.dice(5, 4) - 12,
    lifeEvents: [],
    pronouns: lib.genderData[gender],
    religion: {},
    finances: {
      creditors: {},
      debtors: {}
    },
    hairColour: lib.random(data.hairColour),
    hairType: lib.random(data.hairType),
    get bmi (): number {
      return lib.getNPCBMI(this.weightPounds as number, this.heightInches as number, lib.raceTraits[this.race].bmiModifier)
    },
    _weight: '',
    get weight (): string {
      if (this._weight) return this._weight
      return lib.getNPCWeight(this.bmi as number, this.muscleMass)
    },
    _height: '',
    get height (): string {
      if (this._height) return this._height
      return lib.getNPCHeight(this.heightInches as number)
    },
    get hair () {
      return `${this.hairType} ${this.hairColour} hair`
    },
    set hair (hair) {
      const hairs = hair.toString().split(' ')
      this.hairType = hairs[0] || ''
      this.hairColour = hairs[1] || ''
    },
    get descriptor (): string {
      // @ts-ignore
      return lib.random(this.descriptors)
    },
    eyes: lib.random(lib.raceTraits[race].eyes),
    skinColour: lib.random(data.skinColour),
    dndClass,
    profession,
    pockets: lib.random(data.pockets),
    wealth: lib.dice(2, 50),
    hasHistory: base.hasHistory || false,
    idle: data.idle,
    get race (): RaceName {
      return this._race
    },
    set race (race) {
      this._race = race
      Object.assign(this, lib.raceTraits[race].raceWords)
    },
    get raceNote (): string {
      if (this._race === 'human') {
        return `${this.height} ${this.gender}`
      }
      return lib.raceTraits[this._race].raceWords.raceName
    },
    knownLanguages: lib.raceTraits[race].knownLanguages,
    ...base
  }

  // Add npc to npcRelations
  town.npcRelations[npc.key] = []

  // @TODO: remove this in favor of npc.pronouns.heshe et al. (future PR)
  lib.assign(npc, lib.genderData[npc.gender])
  lib.assign(npc, lib.raceTraits[npc.race].raceWords)

  if (typeof npc.hasClass === 'undefined') {
    // @ts-ignore
    if (lib.findProfession(town, npc).type !== 'dndClass') {
      npc.hasClass = false
    } else {
      npc.hasClass = true
      npc.adventure = lib.random(data.adventure) || 'looking for work'
      npc.profession = npc.dndClass || npc.profession
    }
  }

  // @ts-ignore
  lib.createPersonality(npc)

  // @ts-ignore
  lib.setAge(npc)

  // @ts-ignore
  lib.setRace(npc)

  // @ts-ignore
  npc.physicalTrait ??= getPhysicalTrait(npc)

  // @ts-ignore
  lib.createSocialClass(town, npc)

  // @ts-ignore
  lib.createClass(town, npc)

  // @ts-ignore
  lib.createBackground(npc)

  lib.assign(npc, {
    // @ts-ignore
    descriptors: lib.createDescriptors(npc),
    formalName: npc.formalName || `${npc.title} ${npc.lastName}`
  })

  // @ts-ignore
  createSexuality(npc)

  // @ts-ignore
  lib.createLifestyleStandards(town, npc)

  // @ts-ignore
  lib.createReligiosity(town, npc)

  // @ts-ignore
  if (lib.npcProfit(town, npc) < 0 && npc.isShallow !== true) {
    // @ts-ignore
    createDebt(town, npc)
  }

  if (npc.hasHistory !== false) {
    // @ts-ignore
    setup.expandNPC(town, npc)
  }

  if (!npc.keyIsAlreadyDefined) {
    // @ts-ignore
    State.variables.npcs[npc.key] = npc
  }

  State.temporary.newNPC = npc

  if (npc.callbackFunction) {
    // @ts-ignore
    npc.callbackFunction(town, npc)
  }

  lib.logger.info(npc)
  lib.logger.closeGroup()
  // @ts-ignore
  return npc
}

function getLastName (race: RaceName): string {
  return lib.toTitleCase(lib.random(lib.raceTraits[race].lastName))
}

function getFirstName (race: RaceName, gender: GenderName): string {
  return lib.toTitleCase(lib.random(lib.getGenderTrait({ race, gender }, 'firstName')))
}

function getRandomAgeStage (): AgeName {
  return lib.random(['young adult', 'young adult', 'young adult', 'young adult', 'settled adult', 'settled adult', 'settled adult', 'elderly'])
}

function getPhysicalTrait (npc: NPC): string | undefined {
  const roll = npc.roll.physicalTrait
  const { head, torso, arms, legs } = lib.bodyParts

  if (roll > 40) {
    return lib.random([
      lib.random(head.hair),
      lib.random(head.eyes),
      lib.random(head.nose),
      lib.random(head.mouth),
      lib.random(head.chin),
      lib.random(head.ears),
      lib.random(head.misc)
    ])
  }
  if (roll > 30) {
    return lib.random(torso.descriptions)
  }
  if (roll > 20) {
    return lib.random(arms.descriptions)
  }
  if (roll > 13) {
    return lib.random(legs.descriptions)
  }
  if (roll > 8) {
    // @ts-ignore
    return lib.random(setup.npcData.scar)
  }
  if (roll > 5) {
    return lib.random(head.hair)
  }
  if (roll <= 5) {
    // @ts-ignore
    return lib.random(setup.npcData.tattoo)
  }
}
