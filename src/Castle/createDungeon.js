// uses setup.createNPC, setup.createDungeonName
setup.createDungeon = (town, opts) => {
  console.groupCollapsed('Creating a dungeon!')
  const data = setup.castle.dungeon
  const dungeon = lib.createBuilding(town, 'dungeon', opts)
  Object.assign(dungeon, {
    knownFor: data.knownFor.random(),
    secret: data.secret.random(),
    age: data.age.random(),
    format: data.format.random(),
    wordNoun: ['dungeon', 'oubliette', 'jail', 'prison'].random(),
    needsWordNoun: false,
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

  const jailerData = data.jailer.types.random()
  if (!Object.keys(jailerData.base).includes('profession')) {
    jailerData.base.profession = 'jailer'
  }
  dungeon.jailerType = jailerData.type

  dungeon.associatedNPC = setup.createNPC(town, jailerData.base)
  // TODO: fix associations. Essentially, the castle object needs to be returned before it's accessible from town.buildings[index]
  // however, I'm a smoothbrain, and can't think of a simple way to do that.
  // The end result should be that the jailer has a relationship both with the dungeon (which is their workplace), and the castle (which is their place of employment)

  if (opts.parentKey) {
    dungeon.location = data.location.castle.random()
  } else {
    dungeon.location = data.location.standalone.random()
    lib.createBuildingRelationship(town, dungeon, dungeon.associatedNPC, { relationship: 'jailer', reciprocalRelationship: 'workplace' })
  }
  dungeon.name = setup.createDungeonName(town, dungeon)
  dungeon.tippyDescription = `${lib.articles.output(dungeon.wordNoun).toUpperFirst()} that is ${dungeon.format}. It is known for ${dungeon.knownFor}.`
  console.groupEnd()
  return dungeon
}

setup.createDungeonName = (town, dungeon, namesake = {}) => {
  console.log('Creating dungeon name...')
  Object.assign(namesake, {
    race: lib.fetchRace(town)
  })
  namesake.socialClass = namesake.socialClass || 'nobility'
  namesake.firstName = namesake.firstName || lib.createName({ race: namesake.race })
  namesake.lastName = namesake.lastName || lib.createName({ race: namesake.race, firstOrLast: 'lastName' })
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
    lib.createBuildingRelationship(town, dungeon, dungeon.namesake, { relationship: 'namesake', reciprocalRelationship: `Dungeon named after ${dungeon.namesake.himher}` })
  }
  console.log(lib.toTitleCase(choiceName))
  return lib.toTitleCase(choiceName)
}
