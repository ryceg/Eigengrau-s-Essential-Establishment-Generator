// uses setup.createNPC, setup.createDungeonName
setup.createDungeon = (town, opts) => {
  lib.logger.openGroup('Creating a dungeon!')
  const data = lib.dungeon
  const dungeon = lib.createBuilding(town, 'dungeon', opts)
  Object.assign(dungeon, {
    knownFor: lib.dungeon.knownFor.random(),
    secret: lib.dungeon.secret.random(),
    age: lib.dungeon.age.random(),
    format: lib.dungeon.format.random(),
    wordNoun: ['dungeon', 'oubliette', 'jail', 'prison'].random(),
    needsWordNoun: false,
    passageName: 'Dungeon',
    initPassage: 'Dungeon',
    buildingType: 'dungeon',
    objectType: 'building',
    cells: {
      prisoners: {
        treatment: lib.random(lib.dungeon.cells.prisoners.treatment)
      },
      condition: lib.random(lib.dungeon.cells.condition),
      format: lib.random(lib.dungeon.cells.format)
    }
  })

  const jailerData = lib.random(lib.dungeonJailer.types)
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
    dungeon.objectType = 'room'
    dungeon.parentKey = opts.parentKey
  } else {
    dungeon.location = data.location.standalone.random()
    lib.createReciprocalRelationship(town, dungeon, dungeon.associatedNPC, { relationship: 'jailer', reciprocalRelationship: 'workplace' })
  }
  dungeon.name = lib.createDungeonName(town, dungeon)
  dungeon.tippyDescription = `${lib.articles.output(dungeon.wordNoun).toUpperFirst()} that is ${dungeon.format}. It is known for ${dungeon.knownFor}.`
  lib.logger.info(`Created the dungeon ${dungeon.name}`)
  lib.logger.closeGroup()
  return dungeon
}
