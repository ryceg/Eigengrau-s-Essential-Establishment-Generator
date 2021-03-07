import { BinaryGender, RollArray, Town, TownBasics, TownRollData, TownRolls, TownType } from '@lib'

export const createTown = (base: TownBasics) => {
  const type = base.type || lib.random(['hamlet', 'hamlet', 'village', 'village', 'village', 'town', 'town', 'town', 'city', 'city'])
  const terrain = base.terrain || lib.random(['temperate', 'temperate', 'temperate', 'tropical', 'polar', 'arid'])
  const season = base.currentSeason || lib.random(['summer', 'autumn', 'winter', 'spring'])
  const townName = base.name || setup.createTownName(base)
  console.groupCollapsed(`${townName} is loading...`)
  console.log(base)
  if (!base) base = setup.createTownBiome()
  const economicIdeology = base.economicIdeology || lib.politicsWeightedRoll(type, 'economicIdeology')
  const politicalSource = base.politicalSource || lib.politicsWeightedRoll(type, 'politicalSource')
  const politicalIdeology = base.politicalIdeology || lib.random(lib.townData.politicalSource[politicalSource].politicalIdeology)
  const town = Object.assign({
    passageName: 'TownOutput',
    name: townName,
    objectType: 'town',
    townMaterial: 'mainTownMaterial',
    ignoreGender: false,
    taxes: {
      base: 5,
      land: 5,
      tithe: 1
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    get type () {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return getTownType(this)
    },
    // type: type,
    terrain,
    currentSeason: season,
    factions: {
    },
    buildings: [],
    families: {
    },
    religion: {
    },
    bans: [],
    buildingRelations: [],
    npcRelations: {},
    population: lib.townData.type[type].population(),
    _economicIdeology: economicIdeology,
    _politicalSource: politicalSource,
    _politicalIdeology: politicalIdeology,
    get economicIdeology () {
      return this._economicIdeology
    },
    set economicIdeology (value) {
      this._economicIdeology = value
      Object.assign(this, lib.townData.economicIdeology[this._economicIdeology].descriptors)
    },
    get politicalSource () {
      return this._politicalSource
    },
    set politicalSource (value) {
      this._politicalSource = value
    },
    get politicalIdeology () {
      return this._politicalIdeology
    },
    set politicalIdeology (value) {
      this._politicalIdeology = value
      Object.assign(this, lib.townData.politicalIdeology[this._politicalIdeology].data)
    },
    get politicalSourceDescription () {
      if (this._politicalSource === 'absolute monarchy' || this._politicalSource === 'constitutional monarchy') {
        if (this.politicalIdeology === 'autocracy') {
          return lib.townData.politicalSource[this._politicalSource].autocracy.politicalSourceDescription
        } else {
          return lib.townData.politicalSource[this._politicalSource].default.politicalSourceDescription
        }
      } else {
        return lib.townData.politicalSource[this._politicalSource].politicalSourceDescription
      }
    },
    // get wealth () {
    //   const rollData = lib.townData.rollData.wealth as TownRollData
    //   if (rollData) {
    //     let wealth = rollData.rolls.find(descriptor => {
    //       return descriptor[0] <= this.roll.wealth
    //     })
    //     if (wealth === undefined) {
    //       console.log(`Could not find a wealth descriptor that was appropriate for a roll of ${this.roll.wealth} for ${this.name}`)
    //       wealth = lib.townData.rollData.wealth.rolls[lib.townData.rollData.wealth.rolls.length - 1]
    //     }
    //     this._wealth = wealth[1]
    //     return this._wealth
    //   }
    // },
    // set wealth (value) {
    //   this._wealth = value
    // },
    roads: {},
    dominantGender: lib.random(['man', 'man', 'man', 'man', 'man', 'woman', 'woman']) as BinaryGender,
    // for creating relationships (so there aren't a trillion npcs that all don't know one another)
    reuseNpcProbability: 0,
    roll: {
      wealth: lib.dice(2, 50),
      reputation: lib.dice(2, 50),
      religiosity: lib.dice(2, 50),
      sin: lib.dice(2, 50),
      diversity: lib.dice(2, 50),
      magic: lib.dice(2, 50),
      size: lib.dice(1, 100),
      economics: lib.dice(2, 50),
      welfare: lib.dice(3, 33) - 10,
      military: lib.dice(2, 50),
      law: lib.dice(2, 50),
      arcana: lib.dice(2, 50),
      equality: lib.dice(2, 50) - 20,
      /** @description Percentage of the dominant gender */
      genderMakeup: lib.random(49, 51)
    }
  }, base)
  lib.townDemographics(town)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  town.professions = professions

  town.economicIdeology = town.economicIdeology || town._economicIdeology
  town.politicalIdeology = town.politicalIdeology || town._politicalIdeology
  town.politicalSource = town.politicalSource || town._politicalSource
  town.materialProbability = lib.structureData.material.types

  console.log('Defining taxes')
  Object.defineProperty(town.taxes, 'welfare', {
    get () {
      console.log(this)
      // TODO fix the getter's workaround.
      return calculateTax(2, State.variables.town.roll.welfare)
    }
  })

  Object.defineProperty(town.taxes, 'military', {
    get () {
      console.log(this)
      // TODO fix the getter's workaround.
      return calculateTax(2, State.variables.town.roll.military)
    }
  })

  Object.defineProperty(town.taxes, 'economics', {
    get () {
      console.log(this)
      // TODO fix the getter's workaround.
      return calculateTax(3, State.variables.town.roll.economics)
    }
  })

  if (!town.pregen || !town.generated) {
    assignSizeModifiers(town)
    assignEconomicModifiers(town)
    assignPoliticalModifiers(town)
  }

  setup.createSocioPolitics(town as unknown as Town)

  lib.clampRolls(town.roll)

  if (settings.ignoreGender === true || town.ignoreGender === true) {
    town.roll.equality = 100
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const genderRollData = lib.townData.rollData.equality[town.dominantGender] as TownRollData
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  lib.defineRollDataGetter(town, genderRollData.rolls as RollArray, 'equality', 'equality', 1)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  lib.defineRollDataGetter(town, genderRollData.rolls as RollArray, 'equalityDescription', 'equality', 2)
  const possibleMaterials = lib.terrain[town.terrain].location[town.location].possibleMaterials
  town.townMaterial = lib.getTownMaterial(possibleMaterials, town.roll.wealth, town.roll.size)
  lib.setMaterialProbability(town as unknown as Town, possibleMaterials)
  setup.createStartBuildings(town)
  setup.createStartFactions(town)
  setup.findPoliceSource(town as unknown as Town)
  town.generated = 'full'
  lib.townRender(town as unknown as Town)

  console.groupEnd()
  console.log(`${town.name} has loaded.`)
  console.log(town)
  return town as unknown as Town
}

const getTownType = (town: TownBasics): TownType => {
  if (town.population > 6000) return 'city'
  if (town.population > 3000) return 'town'
  if (town.population > 1000) return 'village'
  if (town.population > 30) return 'hamlet'

  // TODO: Remove unexpected side effect are bad.
  if (town.population <= 30) {
    console.log('Population is less than 30. Setting to 30.')
    town.population = 30
    return 'hamlet'
  }
  return 'village'
}

function calculateTax (nominalTarget: number, economics: number) {
  return nominalTarget + (-1 / (economics + 0.1)) + (1 / (10 - economics))
}

function assignSizeModifiers (town: TownBasics) {
  console.log(`Assigning town size modifiers (btw ${town.name} is a ${town.type})`)
  assignRollModifiers(town, lib.townData.type[town.type].modifiers)
}

function assignEconomicModifiers (town: TownBasics) {
  console.log(`Assigning economic modifiers (btw ${town.name} is a ${town.economicIdeology})`)
  assignRollModifiers(town, lib.townData.economicIdeology[town.economicIdeology].modifiers)
}

function assignPoliticalModifiers (town: TownBasics) {
  console.log(`Assigning political ideology modifiers (btw ${town.name} is a ${town.politicalIdeology})`)
  assignRollModifiers(town, lib.townData.politicalIdeology[town.politicalIdeology].modifiers)
}

function assignRollModifiers (town: TownBasics, modifiers: Record<TownRolls, number>) {
  for (const [key, modifier] of Object.entries(modifiers)) {
    const roll = key as TownRolls
    town.roll[roll] = lib.fm(town.roll[roll], modifier)
  }
}
