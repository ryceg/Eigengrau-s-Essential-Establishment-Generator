// uses setup.createNPC, setup.createCastleName, setup.createCastlePopulation, setup.createDungeon
setup.createCastle = (town, opts = {}) => {
  console.groupCollapsed('Creating a castle...')
  const castle = lib.createBuilding(town, 'castle', opts)
  const data = setup.castle
  Object.assign(castle, {
    builtBy: data.builtBy.random(),
    knownFor: data.knownFor.random(),
    wordNoun: data.name.wordNouns.random(),
    needsWordNoun: false,
    passageName: 'CastleOutput',
    initPassage: 'CastleOutput',
    buildingType: 'castle',
    objectType: 'building',
    defense: {
      reason: [
        lib.castleLocation[town.location].defenseReason.random()
        // data.defense.reason.random()
      ].random(),
      innerWalls: data.defense.innerWalls.random(),
      outerWalls: data.defense.outerWalls.random()
    }
  })
  castle.lookingFor = setup.castle.lookingFor(town, castle)

  castle.name = castle.name || setup.createCastleName(town, castle)
  console.log(`Created the castle ${castle.name}`)
  castle.dungeon = setup.createDungeon(town, { opts, parentKey: castle.key })
  lib.createReciprocalRelationship(town, castle, castle.dungeon.associatedNPC, { relationship: 'jailer', reciprocalRelationship: 'workplace' })
  castle.dungeon.passageName = 'CastleOutput'
  if (!castle.roll.landSize) castle.roll.landSize = lib.dice(2, 50)
  if (!castle.roll.condition) castle.roll.condition = lib.dice(2, 50)
  if (!castle.roll.age) castle.roll.age = lib.dice(2, 50)

  lib.defineRollDataGetter(castle, setup.castle.rollData.age.rolls, 'age', 'age', 1)
  lib.defineRollDataGetter(castle, setup.castle.rollData.condition.rolls, 'condition', 'condition', 1)
  lib.defineRollDataGetter(castle, setup.castle.rollData.size.rolls, 'size', 'size', 1)
  lib.defineRollDataGetter(castle, setup.castle.rollData.size.rolls, 'sizeDescriptive', 'size', 2)
  lib.defineRollDataGetter(castle, setup.castle.rollData.landSize.rolls, 'landSize', 'landSize', 1)
  lib.defineRollDataGetter(castle, setup.castle.rollData.landSize.rolls, 'landSizeDescriptive', 'landSize', 2)

  castle.tippyDescription = `${lib.articles.output(castle.wordNoun).toUpperFirst()} built ${castle.age} that is known for ${castle.knownFor}.`
  lib.createReciprocalRelationship(town, castle, castle.dungeon.associatedNPC, { relationship: 'jailer', reciprocalRelationship: 'place of employment' })

  setup.createCastlePopulation(town, castle, opts)
  console.groupEnd()
  console.log(castle)
  return castle
}
