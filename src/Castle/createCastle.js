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
    defense: {
      reason: [
        data.location[town.location].defenseReason.random()
        // data.defense.reason.random()
      ].random(),
      innerWalls: data.defense.innerWalls.random(),
      outerWalls: data.defense.outerWalls.random()
    }
  })
  console.log('Created castle.')
  castle.name = castle.name || setup.createCastleName(town, castle)
  castle.dungeon = setup.createDungeon(town, { opts, parentKey: castle.key })
  castle.dungeon.passageName = 'CastleOutput'
  if (!castle.roll.landSize) castle.roll.landSize = lib.dice(2, 50)

  lib.defineRollDataGetter(castle, setup.castle.rollData, 'size', 'size', 1)
  lib.defineRollDataGetter(castle, setup.castle.rollData, 'sizeDescriptive', 'size', 2)
  lib.defineRollDataGetter(castle, setup.castle.rollData, 'landSize', 'landSize', 1)
  lib.defineRollDataGetter(castle, setup.castle.rollData, 'landSizeDescriptive', 'landSize', 2)

  castle.tippyDescription = `${lib.articles.output(castle.wordNoun).toUpperFirst()} built ${castle.age} that is known for ${castle.knownFor}.`
  setup.createBuildingRelationship(town, castle, castle.dungeon.associatedNPC, { relationship: 'jailer', reciprocalRelationship: 'place of employment' })
  console.groupEnd()
  console.log(castle)
  return castle
}

setup.createDungeon = (town, opts) => {
  const data = setup.castle.dungeon
  const dungeon = setup.createBuilding(town, 'dungeon', opts)
  Object.assign(dungeon, {
    associatedNPC: setup.createNPC(town, setup.castle.dungeon.jailer.base),
    knownFor: data.knownFor.random(),
    secret: data.secret.random(),
    location: data.location.random(),
    age: data.age.random(),
    format: data.format.random(),
    wordNoun: ['dungeon', 'oubliette', 'jail', 'prison'].random(),
    passageName: 'Dungeon',
    initPassage: 'Dungeon',
    buildingType: 'dungeon',
    objectType: 'room',
    cells: {
      prisoners: {
        treatment: data.cells.prisoners.treatment.random()
      },
      condition: data.cells.condition.random(),
      format: data.cells.format.random()
    }
  })
  dungeon.name = setup.createDungeonName(town, dungeon)
  dungeon.tippyDescription = `${lib.articles.output(dungeon.wordNoun).toUpperFirst()} that is ${dungeon.format}. It is known for ${dungeon.knownFor}.`
  dungeon.tooltip = `${lib.articles.output(dungeon.wordNoun).toUpperFirst()} that is ${dungeon.format}. It is known for ${dungeon.knownFor}.`
  setup.createBuildingRelationship(town, dungeon, dungeon.associatedNPC, { relationship: 'jailer', reciprocalRelationship: 'workplace' })
  return dungeon
}

setup.createDungeonName = (town, dungeon, namesake = {}) => {
  console.log('Creating dungeon name...')
  Object.assign(namesake, {
    race: lib.fetchRace(town, {})
  })
  namesake.socialClass = namesake.socialClass || 'nobility'
  namesake.firstName = namesake.firstName || setup.createName({ race: namesake.race })
  namesake.lastName = namesake.lastName || setup.createName({ race: namesake.race, firstOrLast: 'lastName' })
  console.log(namesake)
  const name = setup.castle.dungeon.name
  const choiceName = [
    `${namesake.firstName}'s ${dungeon.wordNoun}`,
    `${namesake.lastName}'s ${dungeon.wordNoun}`,
    `The ${dungeon.wordNoun} of ${namesake.lastName}`,
    `The ${name.nouns.random()} of ${name.adjectives.random()}`,
    `${name.nouns.random()}'s ${name.verbs.random()}`,
    `The ${name.adjectives.random()}'s ${name.nouns.random()}`,
    `${town.name} ${dungeon.wordNoun}`,
    `${name.unique.random()}`
  ].random()
  if (choiceName.includes(namesake.firstName) || choiceName.includes(namesake.lastName)) {
    dungeon.namesake = setup.createDeadNPC(town, namesake)
    setup.createBuildingRelationship(town, dungeon, dungeon.namesake, { relationship: 'namesake', reciprocalRelationship: `Dungeon named after ${dungeon.namesake.himher}` })
  }
  console.log(lib.toTitleCase(choiceName))
  return lib.toTitleCase(choiceName)
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
    setup.createBuildingRelationship(town, castle, castle.namesake, { relationship: 'namesake', reciprocalRelationship: `Castle named after ${castle.namesake.himher}` })
  }
  console.log(lib.toTitleCase(choiceName))
  return lib.toTitleCase(choiceName)
}
