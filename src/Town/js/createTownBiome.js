setup.createTownBiome = function (base) {
  const type = ['hamlet', 'hamlet', 'village', 'village', 'village', 'town', 'town', 'town', 'city', 'city'].random()
  const terrain = ['temperate', 'temperate', 'temperate', 'tropical', 'polar', 'arid'].random()
  const season = ['summer', 'autumn', 'winter', 'spring'].random()
  const townName = setup.createTownName()
  console.groupCollapsed(`${townName} is loading...`)

  const politicsWeightedRoll = function (size, type) {
    let totalWeight = 0
    const loc = setup.townData.type[size].ideologies[type]
    const pool = Object.keys(loc)
    pool.forEach(key => {
      totalWeight += setup.townData.type[size].ideologies[type][key]
    })
    let random = Math.floor(randomFloat(1) * totalWeight)
    let selected
    for (let i = 0; i < pool.length; i++) {
      random -= loc[pool[i]]
      if (random < 0) {
        // console.log('Less than zero! Found one.')
        // console.log(pool[i])
        selected = pool[i]
        break
      }
    }
    return selected
  }

  const economicIdeology = politicsWeightedRoll(type, 'economicIdeology')
  const politicalSource = politicsWeightedRoll(type, 'politicalSource')
  const politicalIdeology = setup.townData.politicalSource[politicalSource].politicalIdeology.random()
  const town = Object.assign({
    name: townName,
    terrain,
    currentSeason: season,
    season,
    pregen: true,
    factions: {
    },
    buildings: [],
    families: {
    },
    population: setup.townData.type[type].population(),
    _type: type,
    type,
    _economicIdeology: economicIdeology,
    _politicalSource: politicalSource,
    _politicalIdeology: politicalIdeology,
    _demographicPercentile: {},
    // Clone the raw demographic data for the town type.
    // _baseDemographics: clone(setup.townData.type['hamlet'].demographics.random().output),
    get baseDemographics () {
      console.log('Getting base demographics.')
      return this._baseDemographics
    },
    set baseDemographics (newDemographics) {
      console.log('Setting base demographics.')
      Object.keys(newDemographics).forEach(byRace => {
        this._baseDemographics[byRace] = newDemographics[byRace]
      })
      console.log(this.demographicPercentile)
    },
    get demographicPercentile () {
      console.log('Getting demographic percent.')

      // Get an array of the demographic keys (race names).
      const races = Object.keys(this.baseDemographics)

      // Calculate the sum of the raw demographic values.
      const sum = races
        .map(byRace => this.baseDemographics[byRace])
        .reduce((acc, cur) => acc + cur, 0)

      // Calculate the demographic percentages.
      races.forEach(byRace => {
        this._demographicPercentile[byRace] = this.baseDemographics[byRace] / sum * 100
      })
      return this._demographicPercentile
    },
    location: setup.townData.terrain[terrain].start.random(),
    primaryCrop: setup.townData.misc.primaryCrop.random(),
    primaryExport: setup.townData.misc.primaryExport.random(),
    landmark: setup.townData.misc.landmark.random(),
    currentEvent: setup.townData.misc.currentEvent.random(),
    microEvent: setup.townData.misc.microEvent,
    guard: {
      name: 'Test'
    },
    roll: {
      wealth: lib.dice(2, 50),
      reputation: lib.dice(2, 50),
      religiosity: lib.dice(2, 50),
      sin: lib.dice(2, 50),
      diversity: lib.dice(2, 50),
      magic: lib.dice(2, 50),
      size: random(1, 100),
      economics: lib.dice(2, 50),
      welfare: lib.dice(3, 33) - 10,
      military: lib.dice(2, 50),
      law: lib.dice(2, 50),
      arcana: lib.dice(2, 50),
      equality: lib.dice(2, 50) - 20
    }
  }, base)

  setup.townDemographics(town)

  town.economicIdeology = town.economicIdeology || town._economicIdeology
  town.politicalIdeology = town.politicalIdeology || town._politicalIdeology
  town.politicalSource = town.politicalSource || town._politicalSource
  town.origin = town.origin || setup.townData.terrain[town.terrain].location[town.location].origin.random()
  town.vegetation = town.vegetation || lib.weightRandom(setup.townData.terrain[town.terrain].location[town.location].vegetation)
  town.possibleMaterials = setup.townData.terrain[town.terrain].location[town.location].possibleMaterials
  town.materialProbability = setup.structure.material.types

  console.log(`Assigning town size modifiers (btw ${town.name} is a ${town.type})`)
  Object.keys(setup.townData.type[town.type].modifiers).forEach(modifier => {
    town.roll[modifier] = lib.fm(town.roll[modifier], setup.townData.type[town.type].modifiers[modifier])
  })

  console.log(`Assigning economic modifiers (btw ${town.name} is a ${town.economicIdeology})`)
  // economic ideology attribute modifiers
  Object.keys(setup.townData.economicIdeology[town.economicIdeology].modifiers).forEach(modifier => {
    console.log(setup.townData.economicIdeology[town.economicIdeology].modifiers[modifier])
    town.roll[modifier] = lib.fm(town.roll[modifier], setup.townData.economicIdeology[town.economicIdeology].modifiers[modifier])
  })

  // political ideology modifiers
  console.log(`Assigning political ideology modifiers (btw ${town.name} is a ${town.politicalIdeology})`)
  Object.keys(setup.townData.politicalIdeology[town.politicalIdeology].modifiers).forEach(modifier => {
    console.log(modifier)
    console.log(setup.townData.politicalIdeology[town.politicalIdeology].modifiers[modifier])
    town.roll[modifier] = lib.fm(town.roll[modifier], setup.townData.politicalIdeology[town.politicalIdeology].modifiers[modifier])
  })

  Object.keys(town.roll).forEach(roll => {
    town.roll[roll].clamp(1, 100)
  })

  console.groupEnd()
  console.log(`${town.name} has loaded.`)
  console.log(town)
  return town
}
