// uses setup.townDemographics

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
      baseDemographics: {} as Record<RaceName, number>,
      get demographicPercentile () {
        return lib.getDemographicPercentile(this as unknown as Town)
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

  const locationData = lib.terrain[town.terrain].location[town.location]

  town.origin = town.origin || lib.random(locationData.origin)
  town.vegetation = town.vegetation || lib.weightRandom(locationData.vegetation)
  town.possibleMaterials = locationData.possibleMaterials
  town.materialProbability = lib.structureMaterialData.types

  assignSizeModifiers(town)
  assignEconomicModifiers(town)
  assignPoliticalModifiers(town)

  lib.clampRolls(town.roll)
  town.name = lib.createTownName(town)
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
