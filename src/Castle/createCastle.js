setup.createCastle = (town, opts = {}) => {
  console.groupCollapsed('Creating a castle...')
  const castle = setup.createBuilding(town, 'castle', opts)
  const data = setup.castle
  Object.assign(castle, {
    builtBy: data.builtBy.random(),
    knownFor: data.knownFor.random(),
    wordNoun: data.name.wordNouns.random(),
    passageName: 'CastleOutput',
    initPassage: 'CastleOutput',
    buildingType: 'castle',
    objectType: 'building',
    age: data.rollData.age.random(),
    condition: data.rollData.condition.random(),
    dungeon: setup.createDungeon(town, opts),
    defense: {
      reason: [
        data.location.forest.defenseReason.random()
        // data.defense.reason.random()
      ].random(),
      innerWalls: data.defense.innerWalls.random(),
      outerWalls: data.defense.outerWalls.random()
    }
  })
  console.log('Created castle.')
  castle.name = castle.name || setup.createCastleName(town, castle)
  if (!castle.roll.landSize) castle.roll.landSize = lib.dice(2, 50)

  lib.defineRollDataGetter(castle, setup.castle.rollData, 'size', 'size', 1)
  lib.defineRollDataGetter(castle, setup.castle.rollData, 'sizeDescriptive', 'size', 2)
  lib.defineRollDataGetter(castle, setup.castle.rollData, 'landSize', 'landSize', 1)
  lib.defineRollDataGetter(castle, setup.castle.rollData, 'landSizeDescriptive', 'landSize', 2)

  castle.tippyDescription = `A ${castle.wordNoun} built ${castle.age} that is known for ${castle.knownFor}.`
  console.groupEnd()
  console.log(castle)
  return castle
}

setup.createDungeon = (town, opts = {}) => {
  const data = setup.castle.dungeon
  const dungeon = {
    associatedNPC: setup.createNPC(town, {
      profession: 'jailer'
    }),
    knownFor: data.knownFor.random(),
    secret: data.secret.random(),
    location: data.location.random(),
    age: data.age.random(),
    format: data.format.random(),
    cells: {
      prisoners: {
        treatment: data.cells.prisoners.treatment.random()
      },
      condition: data.cells.condition.random(),
      format: data.cells.format.random()
    }
  }
  return dungeon
}

setup.createCastleName = (town, castle, namesake = {}) => {
  console.log('Creating castle name...')
  Object.assign(namesake, {
    race: lib.fetchRace(town, {})
  })
  namesake.socialClass = namesake.socialClass || 'nobility'
  namesake.firstName = namesake.firstName || setup.createName({ race: namesake.race })
  namesake.lastName = namesake.lastName || setup.createName({ race: namesake.race, firstOrLast: 'lastName' })
  console.log(namesake)
  const name = setup.castle.name
  const choiceName = [
    `${namesake.firstName}'s ${castle.wordNoun}`,
    `${namesake.lastName}'s ${castle.wordNoun}`,
    `The ${castle.wordNoun} of ${namesake.lastName}`,
    `${name.nouns.random()}${name.morphemes.suffix.random()}`,
    `${name.morphemes.prefix.random()}${name.nouns.random()}${name.morphemes.suffix.random()}`,
    `${name.morphemes.prefix.random()}${name.nouns.random()}`,
    `${name.adjectives.random()}${name.morphemes.suffix.random()}`,
    `${town.name} ${castle.wordNoun}`,
    `${name.unique.random()}`
  ].random()
  if (choiceName.includes(namesake.firstName) || choiceName.includes(namesake.lastName)) {
    castle.namesake = setup.createDeadNPC(town, namesake)
  }
  console.log(lib.toTitleCase(choiceName))
  return lib.toTitleCase(choiceName)
}
