// uses setup.createNPC, setup.createCastleName, setup.createCastlePopulation, setup.createDungeon
setup.createCastle = (town, opts = {}) => {
  lib.logger.openGroup('Creating a castle...')
  const castle = lib.createBuilding(town, 'castle', opts)
  const data = setup.castle
  Object.assign(castle, {
    builtBy: lib.random(data.builtBy),
    knownFor: lib.random(data.knownFor),
    wordNoun: lib.random(lib.castleNames.wordNouns),
    needsWordNoun: false,
    passageName: 'CastleOutput',
    initPassage: 'CastleOutput',
    localImage: 'castle-illustration',
    buildingType: 'castle',
    objectType: 'building',
    defense: {
      reason: lib.random([
        lib.random(lib.castleLocation[town.location].defenseReason),
        lib.random(lib.castleDefense.reason)
      ]),
      innerWalls: lib.random(lib.castleDefense.innerWalls),
      outerWalls: lib.random(lib.castleDefense.outerWalls)
    }
  })
  castle.lookingFor = setup.castle.lookingFor(town, castle)

  castle.name = castle.name || lib.createCastleName(town, castle)
  lib.logger.info(`Created the castle ${castle.name}`)
  castle.dungeon = setup.createDungeon(town, { opts, parentKey: castle.key })
  lib.createReciprocalRelationship(town, castle, castle.dungeon.associatedNPC, { relationship: 'jailer', reciprocalRelationship: 'workplace' })
  castle.dungeon.passageName = 'CastleOutput'
  if (!castle.roll.landSize) castle.roll.landSize = lib.dice(2, 50)
  if (!castle.roll.condition) castle.roll.condition = lib.dice(2, 50)
  if (!castle.roll.age) castle.roll.age = lib.dice(2, 50)

  lib.defineRollDataGetter(castle, lib.castleRollData.age.rolls, 'age', 'age', 1)
  lib.defineRollDataGetter(castle, lib.castleRollData.condition.rolls, 'condition', 'condition', 1)
  lib.defineRollDataGetter(castle, lib.castleRollData.size.rolls, 'size', 'size', 1)
  lib.defineRollDataGetter(castle, lib.castleRollData.size.rolls, 'sizeDescriptive', 'size', 2)
  lib.defineRollDataGetter(castle, lib.castleRollData.landSize.rolls, 'landSize', 'landSize', 1)
  lib.defineRollDataGetter(castle, lib.castleRollData.landSize.rolls, 'landSizeDescriptive', 'landSize', 2)

  castle.tippyDescription = `${lib.articles.output(castle.wordNoun).toUpperFirst()} built ${castle.age} that is known for ${castle.knownFor}.`
  lib.createReciprocalRelationship(town, castle, castle.dungeon.associatedNPC, { relationship: 'jailer', reciprocalRelationship: 'place of employment' })

  setup.createCastlePopulation(town, castle, opts)
  lib.logger.info(castle)
  lib.logger.closeGroup()
  return castle
}
