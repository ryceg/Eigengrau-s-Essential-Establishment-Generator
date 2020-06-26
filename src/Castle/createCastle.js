setup.createCastle = (town, opts = {}) => {
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
      reason: data.defense.reason.random(),
      innerWalls: data.defense.innerWalls.random(),
      outerWalls: data.defense.outerWalls.random()
    },
    dungeon: {
      knownFor: data.dungeon.knownFor.random(),
      secret: data.dungeon.secret.random(),
      location: data.dungeon.location.random(),
      age: data.dungeon.age.random(),
      format: data.dungeon.format.random(),
      cells: {
        prisoners: {
          treatment: data.dungeon.cells.prisoners.treatment.random()
        },
        condition: data.dungeon.cells.condition.random(),
        format: data.dungeon.cells.format.random()
      }
    }
  })
  console.log('Created castle.')
  castle.name = castle.name || setup.createCastleName(town, castle)
  castle.tippyDescription = `A ${castle.wordNoun} built ${castle.age} that is known for ${castle.knownFor}.`
  return castle
}

setup.createCastleName = (town, castle) => {
  const founder = {
    race: lib.fetchRace(town, {})
  }

  founder.firstName = setup.createName({ race: founder.race })
  // founder.lastName = setup.createName({ race: founder.race, firstOrLast: 'lastName' })
  console.log(founder)
  const name = setup.castle.name
  const choiceName = [
    `${founder.firstName}'s ${castle.wordNoun}`,
    // `${founder.lastName}'s ${castle.wordNoun}`,
    `The ${castle.wordNoun} of ${founder.lastName}`,
    `${name.nouns.random()}${name.morphemes.suffix.random()}`,
    `${name.morphemes.prefix.random()}${name.nouns.random()}${name.morphemes.suffix.random()}`,
    `${name.morphemes.prefix.random()}${name.nouns.random()}`,
    `${name.adjectives.random()}${name.morphemes.suffix.random()}`,
    `${town.name} ${castle.wordNoun}`
  ].random()
  return choiceName
}
