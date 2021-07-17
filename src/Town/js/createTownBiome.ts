// uses setup.createTownName, setup.townDemographics

import { Biome, EconomicIdeology, PoliticalSource, RaceName, Seasons, Town, TownBasics, TownRolls, TownType } from '@lib'

export const createTownBiome = (base: Partial<Town> = {}): TownBasics => {
  const type = lib.weightRandom(lib.townData.defaults.type) as TownType
  const terrain = lib.weightRandom(lib.townData.defaults.terrain) as Biome
  const season = lib.weightRandom(lib.townData.defaults.season) as Seasons

  console.groupCollapsed(`The ${type} is loading...`)
  const economicIdeology = lib.politicsWeightedRoll(type, 'economicIdeology') as EconomicIdeology
  const politicalSource = lib.politicsWeightedRoll(type, 'politicalSource') as PoliticalSource
  const politicalIdeology = lib.random(lib.townData.politicalSource[politicalSource].politicalIdeology)
  const town = Object.assign(
    {
      // name: townName,
      terrain,
      key: lib.getUUID(),
      currentSeason: season,
      ignoreGender: false,
      generated: 'biome',
      factions: {},
      buildings: [],
      npcRelations: {},
      families: {},
      religion: {
        _customPantheon: State.metadata.get('pantheon')
      },
      population: lib.townData.type[type].population(),
      _type: type,
      type,
      _economicIdeology: economicIdeology,
      _politicalSource: politicalSource,
      _politicalIdeology: politicalIdeology,
      _demographicPercentile: {} as Record<RaceName, number>,
      _baseDemographics: {} as Record<RaceName, number>,
      // Clone the raw demographic data for the town type.
      // _baseDemographics: clone(lib.townData.type['hamlet'].demographics.random().output),
      get baseDemographics () {
        console.log('Getting base demographics.')
        return this._baseDemographics
      },
      set baseDemographics (newDemographics) {
        console.log('Setting base demographics.')
        Object.keys(newDemographics).forEach((byRace) => {
          const race = byRace as RaceName
          this._baseDemographics[race] = newDemographics[race]
        })
        console.log(this.demographicPercentile)
      },
      get demographicPercentile () {
        console.log('Getting demographic percent.')

        // Get an array of the demographic keys (race names).
        const races = Object.keys(this.baseDemographics) as RaceName[]

        // Calculate the sum of the raw demographic values.
        const sum = races
          .map((byRace) => this.baseDemographics[byRace])
          .reduce((acc, cur) => acc + cur, 0)

        // Calculate the demographic percentages.
        races.forEach((byRace) => {
          const race: RaceName = byRace
          this._demographicPercentile[race] =
            (this.baseDemographics[race] / sum) * 100
        })
        return this._demographicPercentile
      },
      location: lib.weightRandom(lib.terrain[terrain].start),
      primaryCrop: lib.random(lib.townData.misc.primaryCrop),
      primaryExport: lib.random(lib.townData.misc.primaryExport),
      landmark: lib.random(lib.townData.misc.landmark),
      currentEvent: lib.random(lib.townData.misc.currentEvent),
      guard: {},
      dominantGender: ['man', 'man', 'man', 'man', 'man', 'woman', 'woman'].random(),
      roll: {
        wealth: lib.dice(2, 50),
        reputation: lib.dice(2, 50),
        religiosity: lib.dice(2, 50),
        sin: lib.dice(2, 50),
        diversity: lib.dice(2, 50),
        magic: lib.dice(2, 50),
        size: lib.random(1, 100),
        economics: lib.dice(2, 50),
        welfare: lib.dice(3, 33) - 10,
        military: lib.dice(2, 50),
        law: lib.dice(2, 50),
        arcana: lib.dice(2, 50),
        equality: lib.dice(2, 50) - 20,
        /** @description Percentage of the dominant gender */
        genderMakeup: lib.random(49, 51)
      }
    },
    base
  ) as TownBasics
  lib.townDemographics(town)
  town.professions = lib.fetchProfessions(town)
  town.economicIdeology = town.economicIdeology || town._economicIdeology
  town.politicalIdeology = town.politicalIdeology || town._politicalIdeology
  town.politicalSource = town.politicalSource || town._politicalSource
  town.origin = town.origin || lib.random(lib.terrain[town.terrain].location[town.location].origin)
  town.vegetation = town.vegetation || lib.weightRandom(lib.terrain[town.terrain].location[town.location].vegetation)
  town.possibleMaterials = lib.terrain[town.terrain].location[town.location].possibleMaterials
  town.materialProbability = lib.structureData.material.types

  assignSizeModifiers(town)
  assignEconomicModifiers(town)
  assignPoliticalModifiers(town)

  lib.clampRolls(town.roll)
  town.name = setup.createTownName(town)
  console.groupEnd()
  console.log(`Base attributes for ${town.name} have loaded.`)
  console.log(town)
  return town
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
    // casting as TownRolls because for of implicitly types as `any`
    const newKey = key as TownRolls
    town.roll[newKey] = lib.fm(town.roll[newKey], modifier)
  }
}
